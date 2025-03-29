import AuthLayout from "@/Layouts/auth-layout"
import { useState } from "react"
import IssueComplaintModal from "@/Components/modal/issue-complaint-modal"
import CompaintList from "@/Components/list/complaint-list"
import Reload from "@/Components/other/reload"
import { change } from "@/Components/other/function"
import ViewComplaintModal from "@/Components/modal/view-complaint-modal"

const Complaint = (props) => {
    const [issueComplaint, openIssueComplaint] = useState(false),
          [viewComplaint, openViewComplaint] = useState(false),
          [complainant_id, setComplainantId] = useState(''),
          [data, setData] = useState({
                    complainant: props.user.user_id,
                    subject: '',
                    complaint_possible_offense: [],
                    complaint_description: '',
            }),
          [reload, setReload] = useState(false),
          [reloadType, setReloadType] = useState(""),
          [reloadLabel, setReloadLabel] = useState("")

    const isReload = () => {
        return reload ? "opacity-1 z-50" : "opacity-0 z-[-1]";
    };
    const handleChange = (e) => {
        change(e, setData)
    }
    const loadRegister = (r, t, l) => {
        setReload(r);
        setReloadType(t);
        setReloadLabel(l);
    };
    const setId = (id) => {
        setComplainantId(id)
        openViewComplaint(true)
    }
    return (
        <>
        <Reload
            transition={isReload()}
            type={reloadType}
            label={reloadLabel}
        />
        <ViewComplaintModal 
            close={viewComplaint} 
            closeModal={openViewComplaint} 
            pd={['px-10', 'py-7']}
            isEnableOuterClose={true} 
            complainant={complainant_id}
        />
        <IssueComplaintModal 
            close={issueComplaint} 
            closeModal={openIssueComplaint} 
            val={data}
            setter={setData}
            pd={['px-5', 'py-7']}
            isEnableOuterClose={true} 
            program={props.program}
            student_list={props.students}
            reload={loadRegister}
            change={handleChange}
        />
        <AuthLayout user={props.user}>
            <div className="w-full py-10">
                <div className="w-full grid gap-10 relative">
                    <div className="flex w-full justify-between items-center">
                        <h1 className="text-[1.7em]"><b>Complaint</b></h1>
                        <div>
                            <button 
                                type="button"
                                className="px-4 py-2 bg-blue-700 text-[0.9em] text-white rounded"
                                onClick={() => openIssueComplaint(true)}
                            >
                                Issue Complaint
                            </button>
                        </div>
                    </div>
                    <div>
                        <CompaintList 
                            type={props.user.user_type} 
                            style={true} 
                            list={props.complaint_list}
                            setId={setId}
                        />
                    </div>
                </div>
            </div>
        </AuthLayout>
        </>
    )
}
export default Complaint