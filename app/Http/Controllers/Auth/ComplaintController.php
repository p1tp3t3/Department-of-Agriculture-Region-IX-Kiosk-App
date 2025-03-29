<?php

namespace App\Http\Controllers\Auth;

use App\Events\SendComplaint;
use App\Http\Controllers\Controller;
use App\Models\Complaint;
use App\Models\ComplaintEvidenceFile;
use App\Models\Program;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;

class ComplaintController extends Controller
{
    public function index() {
        $prefect = (!self::isPrefect()) ? 'other' : 'prefect';
        $complaints = self::isPrefect() 
                    ? Complaint::with('user')
                               ->where('confirmed', '!=', 'NULL')
                               ->latest('created_at')
                               ->get() 
                    : Complaint::where('complainant_id', auth()->user()->user_id)
                               ->latest('created_at')
                               ->get();
        $props = [
            'user' => auth()->user(),
            'program' => Program::latest('id')
                                ->get(['id', 'name']),
            'students' => User::with(['student' => function($q) {
                                  $q->with('program')
                                    ->get();
                              }])
                              ->where('user_type', 'student')
                              ->get(),
            'complaint_list' => $complaints,
        ];
        if(self::isPrefect()) {
            $props = array_merge($props, [
                'reported_complaint_list' => Complaint::with('user')
                                             ->where('confirmed', NULL)
                                             ->latest('created_at')
                                             ->get()
            ]);
        }

        return Inertia::render("$prefect/complaint", $props);
    }
    public function get($id) {
        return Complaint::with(['user','subject','complaintEvidenceFile'])
                        ->where('case_number',$id)
                        ->first();
    }
    public function store(Request $request) {
        $isPrefect = self::isPrefect();
        $username = auth()->user()->username;

        $possibleOffense = $request->possible_offense;
        $evidence = $request->file('evidence');

        $lastIndex = Complaint::insertGetId([
            'complainant_id' => $request->complainant,
            'student_id' => $request->subject,
            'complaint_description' => $request->complaint_description,
            'complaint_status' => ($isPrefect) ? 'ongoing' : 'pending',
            'confirmed' => ($isPrefect) ? TRUE : NULL,
        ]);

        $complaintInfo = public_path("user-assets/$username/complaints/case-no-$lastIndex");
        File::makeDirectory($complaintInfo, 0755, true);
        File::put("$complaintInfo/case-no-$lastIndex.docx", '');

        if(isset($evidence)) {
            File::makeDirectory("$complaintInfo/evidence", 0755, true);
            $i = 1;
            foreach($evidence as $e) {
                $f = $e;
                $fN = $e->getClientOriginalName();
                $t = str_contains($e->getMimeType(), 'image') ? 'pic' : 'vid';

                self::insertEvidence(
                    "$complaintInfo/evidence", 
                    $lastIndex, 
                    $t, $f, 
                    "$i-$fN");
                $i++;
            }
        }
        $prefect = User::where('user_type', 'prefect')
                        ->where('activate', true)
                        ->first();
        broadcast(new SendComplaint(self::getSentComplaints(), $prefect->id));
    }
    public function confirmComplaint($id) {
        Complaint::where('case_number', $id)
                 ->update([
                        'confirmed' => TRUE,
                        'status' => 'ongoing'
                 ]);
        //broadcast(new SendComplaint())
    }
    public function cancelComplaint($caseNumber) {
        $complaint = self::get($caseNumber);
        self::deleteComplaintAssets(
            $complaint->user->username, 
            $caseNumber, 
            $complaint->complaint_evidence_file
        );
        Complaint::where('case_number', $caseNumber)
                 ->delete();
    }
    private function insertPossibleOffense($id, $p) {
        DB::table('complaint_possible_offense')
          ->insert([
            'complaint_id' => $id,
            'possible_offense' => $p
        ]);
    }
    public function deleteComplaintAssets($username, $caseNumber, $evidence) {
        $userComplaintFolder = public_path("user-assets/$username/complaints");
        $caseNumberTargetFolder = "case-no-$caseNumber";
        $caseNumberFolder = "$userComplaintFolder/$caseNumberTargetFolder";

        $docxFile = "$caseNumberFolder/$caseNumberTargetFolder.docx";
        $evidenceFolder = "$caseNumberFolder/$caseNumberTargetFolder/evidence";
        $evidenceFolderPathList = [];

        foreach($evidence as $e) {
            array_push($evidenceFolderPathList, "$evidenceFolder/{$e->evidence_file}");
        }

        File::delete($evidenceFolderPathList);
        File::delete($evidenceFolder);
        File::delete($docxFile);
        File::delete($caseNumberFolder);
    }
    private function insertEvidence($path, $complaintId, $type, $file, $fileName) {
        $file->move($path, $fileName);
        
        ComplaintEvidenceFile::create([
            'complaint_case_number' => $complaintId,
            'evidence_file' => $fileName,
            'file_type' => $type
        ]);
    }
    public function allComplaints() {
        $complaints = Complaint::all();
        return ['complaint_list' => $complaints];
    }
    public function isPrefect() {
        return (auth()->user()->user_type == 'prefect');
    }
    private function getSentComplaints() {
        return Complaint::with('user')
               ->where('confirmed', NULL)
               ->latest('created_at')
               ->get()
               ->toArray();
    }
}
