import FormTextfield from "@/Components/other/form-input";
import { change, sendData } from "@/Components/other/function";
import { useForm } from "@inertiajs/react";
import DropdownField from "@/Components/other/dropdown";
import FormButton from "@/Components/other/button";
import RadioButton from "@/Components/other/radio";

const PrefectForm = (props) => {
    const { data, setData, post, processing, errors } = useForm({
        user_type: "prefect",
        user_id: "",
        first_name: "",
        middle_name: "",
        last_name: "",
        birth_date: "",
        sex: "",
        username: "",
        email: "",
        contact_number: "",
        password: "",
        re_enter: "",
    });
    const handleChange = (e) => {
        change(e, setData);
    };
    const registerPrefect = (e) => {
        e.preventDefault();
        props.reload(true, "text-wait", "Prefect Account is Creating");
        setTimeout(() => {
            sendData("/itrc/register", data, success, error);
        }, 5000);
    };
    const success = () => {
        props.reload(true, "success", "Prefect Registered Successfully");
        setTimeout(() => {
            props.reload(false);
        }, 3000);
    };
    const error = () => {
        props.reload(true, "error", "Error Registering Prefect");
        setTimeout(() => {
            props.reload(false);
        }, 3000);
    };

    const sx = [
        { val: "m", label: "Male" },
        { val: "f", label: "Female" },
    ];

    return (
        <form
            method="post"
            onSubmit={registerPrefect}
            className="grid shrink-0 gap-5"
        >
            <div className="grid gap-5">
                <div className="grid gap-5">
                    <div>
                        <div className="flex gap-5">
                            <FormTextfield
                                label="First Name"
                                name="first_name"
                                id="prefect_first_name"
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
                                id="prefect_middle_name"
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
                                id="prefect_last_name"
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
                            <div className="w-[15.5rem]">
                                <FormTextfield
                                    label="Date of Birth"
                                    name="birth_date"
                                    val={data.birth_date}
                                    id="prefect_birth_date"
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
                            <RadioButton
                                name="sex"
                                id="prefect_sex"
                                label="Sex"
                                change={handleChange}
                                value={data.sex}
                                flex={true}
                                list={sx}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex w-[50%]">
                            <FormTextfield
                                label="Prefect ID"
                                name="user_id"
                                id="prefect_id"
                                val={data.user_id}
                                error={errors.user_id}
                                change={handleChange}
                                req={true}
                                color={{
                                    border: "border-blue-700",
                                    bg: "bg-gray-200",
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-5">
                        <FormTextfield
                                label="Username"
                                name="username"
                                id="prefect_username"
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
                                id="prefect_email"
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
                                id="prefect_contact_num"
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
                                id="prefect_password"
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
                                id="prefect_re_enter"
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
                <FormButton type="button" label="Reset" />
                <FormButton type="submit" label="Create Prefect" />
            </div>
        </form>
    );
};
export default PrefectForm;
