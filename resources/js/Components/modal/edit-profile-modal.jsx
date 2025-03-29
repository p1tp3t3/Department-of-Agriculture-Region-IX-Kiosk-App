import ProfilePic from "../other/profile-pic";
import UpModal from "./up-modal";
import FormTextfield from "../other/form-input";
import DropdownField from "../other/dropdown";
import FormButton from "../other/button";
import { useState } from "react";
import { sendData, fileChange } from "../other/function";

const EditProfileModal = (props) => {
    const [preview, setPreview] = useState(null);

    const handleFileChange = (event) => {
        fileChange(event, setPreview, props.profileChange);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        props.reload(true, "text-wait", "Your Profile Is Updating");
        sendData(
            `/profile/${props.username}/edit`,
            props.data,
            success,
            error
        );
    };
    const success = () => {
        props.reload(true, "success", "Your Profile Update Successfully");
        setTimeout(() => {
            props.reload(false);
        }, 3000);
    };
    const error = () => {
        props.reload(true, "error", "There Was An Error Updating Your Profile");
        setTimeout(() => {
            props.reload(false);
        }, 3000);
    };
    return (
        <UpModal
            close={props.close}
            pd={["px-10", "py-4"]}
            isEnableOuterClose={props.close}
            closeModal={props.closeModal}
            bgColor="bg-white"
            w="w-[40rem]"
        >
            <div className="w-full">
                <form
                    onSubmit={handleSubmit}
                    method="post"
                    className="w-full grid gap-4"
                >
                    <div>
                        <h1 className="text-[1.3em] text-center">
                            <b>Edit your Profile Information</b>
                        </h1>
                    </div>
                    <div className="grid gap-8">
                        <div className="grid place-items-center">
                            <div className="relative w-[10rem] h-[10rem]">
                                <ProfilePic
                                    src={preview ? preview : props.profilePic}
                                    size={10}
                                />
                                <input
                                    type="file"
                                    name="profile_picture"
                                    id="edit-pic"
                                    className="hidden"
                                    accept="images/*"
                                    onChange={handleFileChange}
                                />
                                <label
                                    htmlFor="edit-pic"
                                    type="button"
                                    className="cursor-pointer w-[2.2rem] grid place-items-center bottom-0 right-1 h-[2.2rem] rounded-full absolute bg-blue-600 text-white"
                                >
                                    <i className="fa-solid fa-edit"></i>
                                </label>
                            </div>
                        </div>
                        <div className="grid gap-5">
                            <div>
                                <FormTextfield
                                    label="Bio Description"
                                    name="bio_description"
                                    type="textarea"
                                    id="description"
                                    change={props.change}
                                    val={props.data.bio_description}
                                    color={{
                                        border: "border-blue-700",
                                        bg: "bg-gray-200",
                                    }}
                                />
                            </div>
                            <div className="grid gap-4">
                                <div className="grid grid-cols-2 gap-2">
                                    <FormTextfield
                                        label="Email"
                                        name="email"
                                        type="email"
                                        id="email"
                                        change={props.change}
                                        req={true}
                                        val={props.data.email}
                                        color={{
                                            border: "border-blue-700",
                                            bg: "bg-gray-200",
                                        }}
                                    />
                                    <FormTextfield
                                        label="Phone Number"
                                        name="phone_number"
                                        id="number"
                                        change={props.change}
                                        length={11}
                                        req={true}
                                        val={props.data.phone_number}
                                        color={{
                                            border: "border-blue-700",
                                            bg: "bg-gray-200",
                                        }}
                                    />
                                </div>
                                <div className="px-3 py-2 border-gray-300 border-2 grid gap-2 rounded-md">
                                    <div className="text-[0.9em]">Current Address</div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <FormTextfield
                                            label="Place"
                                            name="current_place"
                                            id="place"
                                            change={props.change}
                                            req={true}
                                            val={props.data.current_place}
                                            color={{
                                                border: "border-blue-700",
                                                bg: "bg-gray-200",
                                            }}
                                        />
                                        <FormTextfield
                                            label="City"
                                            name="current_city"
                                            id="city"
                                            change={props.change}
                                            req={true}
                                            val={props.data.current_city}
                                            color={{
                                                border: "border-blue-700",
                                                bg: "bg-gray-200",
                                            }}
                                        />
                                        <FormTextfield
                                            label="Province"
                                            name="current_province"
                                            id="province"
                                            change={props.change}
                                            req={true}
                                            val={props.data.current_province}
                                            color={{
                                                border: "border-blue-700",
                                                bg: "bg-gray-200",
                                            }}
                                        />
                                        <FormTextfield
                                            label="Zipcode"
                                            name="current_zipcode"
                                            id="zipcode"
                                            change={props.change}
                                            req={true}
                                            val={props.data.current_zipcode}
                                            color={{
                                                border: "border-blue-700",
                                                bg: "bg-gray-200",
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="px-3 py-2 border-gray-300 border-2 grid gap-2 rounded-md">
                                    <div className="grid gap-2">
                                        <div className="text-[0.9em]">Permanent Address</div>
                                        <div className="text-[0.8em] flex gap-3 items-center">
                                            <input type="checkbox" name="" id="auto-fill" />
                                            <label htmlFor="auto-fill">Same as Current Address</label>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <FormTextfield
                                            label="Place"
                                            name="permanent_place"
                                            id="p_place"
                                            change={props.change}
                                            req={true}
                                            val={props.data.permanent_place}
                                            color={{
                                                border: "border-blue-700",
                                                bg: "bg-gray-200",
                                            }}
                                        />
                                        <FormTextfield
                                            label="City"
                                            name="permanent_city"
                                            id="p_city"
                                            change={props.change}
                                            req={true}
                                            val={props.data.permanent_city}
                                            color={{
                                                border: "border-blue-700",
                                                bg: "bg-gray-200",
                                            }}
                                        />
                                        <FormTextfield
                                            label="Province"
                                            name="permanent_province"
                                            id="p_province"
                                            change={props.change}
                                            req={true}
                                            val={props.data.permanent_province}
                                            color={{
                                                border: "border-blue-700",
                                                bg: "bg-gray-200",
                                            }}
                                        />
                                        <FormTextfield
                                            label="Zipcode"
                                            name="permanent_zipcode"
                                            id="p_zipcode"
                                            change={props.change}
                                            req={true}
                                            val={props.data.permanent_zipcode}
                                            color={{
                                                border: "border-blue-700",
                                                bg: "bg-gray-200",
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <FormButton label="Save Changes" type="submit" />
                    </div>
                </form>
            </div>
        </UpModal>
    );
};
export default EditProfileModal;
