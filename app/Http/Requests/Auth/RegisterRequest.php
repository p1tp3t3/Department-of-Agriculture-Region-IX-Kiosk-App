<?php

namespace App\Http\Requests\Auth;

use App\Models\Program;
use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $program = Program::select('id')->toArray();
        $program = implode($program);

        $rule = [
            "pilar_id" => "required|unique:{$this->user_type},pilar_id",
            "first_name" => "required",
            "middle_name" => 'required',
            'last_name' => 'required',
            "birth_date" => 'required',
            "citizenship" => 'required',
            "civil_status" => 'required',
            'current_address' => 'required',
            'username' => 'required|unique:accounts,username|between:8,11|alpha_num',
            'email' => 'email',
            'contact_number' => 'numeric|max_digits:11',
            'password' => 'required|confirmed|alpha_num|between:8,15'
        ];
        if($this->user_type == 'student' || $this->user_type == 'faculty' || $this->user_type == 'program_head') {
            array_merge($rule, ['program_id' => "required|in:$program"]);
        }
        return $rule;
    }
}
