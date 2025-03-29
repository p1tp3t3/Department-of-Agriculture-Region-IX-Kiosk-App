import FormTextfield from "@/Components/other/form-input";
import { change, sendData } from "@/Components/other/function";
import { useForm } from "@inertiajs/react";
import DropdownField from "@/Components/other/dropdown";
import FormButton from "@/Components/other/button";
import RadioButton from "@/Components/other/radio";

const StudentForm = (props) => {
    const fields = {
        user_type: "student",
        pilar_id: "",
        first_name: "",
        middle_name: "",
        last_name: "",
        sex: "",
        birth_date: "",
        program: "",
        year_level: "",
        username: "",
        email: "",
        contact_number: "",
        password: "",
        re_enter: "",
    };
    const { data, setData, post, processing, errors } = useForm(fields);
    const handleChange = (e) => {
        change(e, setData);
    };
    const clearField = () => {
        setData((prev) => ({
            ...prev,
            user_id: "",
            first_name: "",
            middle_name: "",
            last_name: "",
            sex: "",
            birth_date: "",
            program: "",
            year_level: "",
            username: "",
            email: "",
            contact_number: "",
            password: "",
            re_enter: "",
        }));
    };
    const registerStudent = (e) => {
        e.preventDefault();
        props.reload(true, "text-wait", "Student Account is Creating");
        setTimeout(() => {
            success()
            sendData("/itrc/register", data, success, error);
        }, 5000);
    };
    const success = () => {
        props.reload(
            true,
            "success",
            "Student Account Registered Successfully"
        );
        setTimeout(() => {
            props.reload(false);
        }, 3000);
    };
    const error = () => {
        props.reload(true, "error", "Error Registering Student");
        setTimeout(() => {
            props.reload(false);
        }, 3000);
    };
    const lvl = [
            { val: 1, label: "1st Year" },
            { val: 2, label: "2nd Year" },
            { val: 3, label: "3rd Year" },
            { val: 4, label: "4th Year" },
        ],
        sx = [
            { val: "m", label: "Male" },
            { val: "f", label: "Female" },
        ];
    return (
        <form
            method="post"
            onSubmit={registerStudent}
            className="grid shrink-0 gap-5"
        >
            <div className="grid gap-5">
                <div className="grid gap-5">
                    <div>
                        <div className="flex gap-5">
                            <FormTextfield
                                label="First Name"
                                name="first_name"
                                id="student_first_name"
                                val={data.first_name}
                                error={errors.first_name}
                                change={handleChange}
                                req={true}
                                color={{
                                    border: "border-blue-700",
                                    bg: "bg-gray-200",
                                }}
                            />
                            <FormTextfield
                                label="Middle Name"
                                name="middle_name"
                                id="student_first_name"
                                val={data.middle_name}
                                error={errors.middle_name}
                                change={handleChange}
                                req={true}
                                color={{
                                    border: "border-blue-700",
                                    bg: "bg-gray-200",
                                }}
                            />
                            <FormTextfield
                                label="Last Name"
                                name="last_name"
                                id="student_last_name"
                                val={data.last_name}
                                error={errors.last_name}
                                change={handleChange}
                                req={true}
                                color={{
                                    border: "border-blue-700",
                                    bg: "bg-gray-200",
                                }}
                            />
                        </div>
                        <div className="flex gap-5">
                            <div>
                                <FormTextfield
                                    label="Date of Birth"
                                    name="birth_date"
                                    val={data.birth_date}
                                    id="student_birth_date"
                                    error={errors.age}
                                    type="date"
                                    change={handleChange}
                                    req={true}
                                    color={{
                                        border: "border-blue-700",
                                        bg: "bg-gray-200",
                                    }}
                                />
                            </div>
                            <div className="w-full">
                                <RadioButton
                                    change={handleChange}
                                    value={data.sex}
                                    name="sex"
                                    id="student"
                                    label="Sex"
                                    flex={true}
                                    list={sx}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-5">
                            <FormTextfield
                                label="Student ID"
                                name="user_id"
                                id="student_id"
                                val={data.user_id}
                                error={errors.userid}
                                change={handleChange}
                                req={true}
                                color={{
                                    border: "border-blue-700",
                                    bg: "bg-gray-200",
                                }}
                            />
                            <DropdownField
                                default={{ value: "", label: "Select Program" }}
                                name="program"
                                val={data.program}
                                onChange={handleChange}
                                list={props.program}
                            />
                            <DropdownField
                                default={{
                                    value: "",
                                    label: "Select Year Level",
                                }}
                                name="year_level"
                                val={data.year_level}
                                onChange={handleChange}
                                list={lvl}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-5">
                            <FormTextfield
                                label="Username"
                                name="username"
                                id="student_username"
                                val={data.username}
                                error={errors.username}
                                change={handleChange}
                                color={{
                                    border: "border-blue-700",
                                    bg: "bg-gray-200",
                                }}
                            />
                            <FormTextfield
                                label="Email"
                                name="email"
                                id="student_email"
                                val={data.email}
                                error={errors.email}
                                change={handleChange}
                                color={{
                                    border: "border-blue-700",
                                    bg: "bg-gray-200",
                                }}
                            />
                            <FormTextfield
                                label="Contact Number"
                                name="contact_number"
                                id="student_contact_num"
                                val={data.contact_number}
                                error={errors.contact_number}
                                change={handleChange}
                                color={{
                                    border: "border-blue-700",
                                    bg: "bg-gray-200",
                                }}
                            />
                        </div>
                        <div className="flex gap-5">
                            <FormTextfield
                                label="Password"
                                name="password"
                                id="student_password"
                                val={data.password}
                                error={errors.password}
                                type="password"
                                change={handleChange}
                                req={true}
                                color={{
                                    border: "border-blue-700",
                                    bg: "bg-gray-200",
                                }}
                            />
                            <FormTextfield
                                label="Re-Enter Password"
                                name="re_enter"
                                id="student_re_enter"
                                val={data.re_enter}
                                error={errors.re_enter}
                                type="password"
                                change={handleChange}
                                req={true}
                                color={{
                                    border: "border-blue-700",
                                    bg: "bg-gray-200",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="justify-self-end flex gap-3">
                <FormButton
                    type="button"
                    label="Reset"
                    click={() => clearField()}
                />
                <FormButton type="submit" label="Create Student" />
            </div>
        </form>
    );
};
export default StudentForm;
