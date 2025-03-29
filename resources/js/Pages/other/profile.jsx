import UserProfileLayout from "@/Layouts/profile-layout";
import ProfilePic from "@/Components/other/profile-pic";
import React, { useEffect, useState } from "react";
import { useForm } from "@inertiajs/react";
import { splitStr, change } from "@/Components/other/function";
import EditProfileModal from "@/Components/modal/edit-profile-modal";
import Reload from "@/Components/other/reload";
import About from "./profile/about";

const Profile = (props) => {
    const address = (add, t) => {
        if (add != null) {
            switch (t) {
                case "place":
                    return add[0];
                case "city":
                    return add[1];
                case "province":
                    return add[2];
                case "zipcode":
                    return add[3];
                default:
                    return add;
            }
        }
        return null;
    };
    const currentAddrss = splitStr(
                        props.otherUserProfile.current_address
              );

    const permanentAddrss = splitStr(
                        props.otherUserProfile.permanent_address
              );
    
    const profileData = {
        user_id: props.otherUserProfile.user_id,
        user_type: props.otherUserProfile.user_type,
        sex: (props.otherUserProfile.sex != 'm') ? 'Female' : 'Male',
        age: props.otherUserProfile.age,
        profile_picture: null,
        bio_description: props.otherUserProfile.bio_description,

        current_address: props.otherUserProfile.current_address,
        current_place: address(currentAddrss, "place"),
        current_city: address(currentAddrss, "city"),
        current_province: address(currentAddrss, "province"),
        current_zipcode: address(currentAddrss, "zipcode"),

        permanent_address: props.otherUserProfile.permanent_address,
        permanent_place: address(permanentAddrss, "place"),
        permanent_city: address(permanentAddrss, "city"),
        permanent_province: address(permanentAddrss, "province"),
        permanent_zipcode: address(permanentAddrss, "zipcode"),

        email: props.otherUserProfile.email,
        phone_number: props.otherUserProfile.contact_number,
    }
    
    const { data, setData, post, processing, errors } = useForm(profileData);

    const [close, closeEditProfile] = useState(false),
        [reload, setReload] = useState(false),
        [reloadType, setReloadType] = useState(""),
        [reloadLabel, setReloadLabel] = useState("");


    const acc = props.user,
        user = props.otherUserProfile,
        profilePic = `../../user-assets/${user.username}/profile-${user.username}.jpg`;

    const isReload = () => {
        return reload ? "opacity-1 z-50" : "opacity-0 z-[-1]";
    };
    const loadRegister = (r, t, l) => {
        setReload(r);
        setReloadType(t);
        setReloadLabel(l);
    };
    const handleChange = (e) => {
        change(e, setData);
    };
    const handleProfileChange = (e) => {
        setData((prev) => ({
            ...prev, profile_picture: e
        }))
    }
    const listStyle = "transition-all cursor-pointer rounded-md py-3 px-5 hover:bg-black/20"
    return (
        <>
            <Reload
                transition={isReload()}
                type={reloadType}
                label={reloadLabel}
            />
            <EditProfileModal
                profilePic={profilePic}
                close={close}
                closeModal={closeEditProfile}
                data={data}
                reload={loadRegister}
                change={handleChange}
                profileChange={handleProfileChange}
                username={user.username}
            />
            <UserProfileLayout user={props.user}>
                <div className="w-full grid gap-5">
                    <div className="mt-5">
                        <div className="px-10 py-3 bg-white shadow-md shadow-black/20">
                            <div className="py-10 flex w-full justify-between gap-5">
                                <div className="flex gap-10 h-full items-center">
                                    <div className="flex-shrink-0">
                                        <ProfilePic
                                            size={11}
                                            activeSize={3.1}
                                            activeBorderColor="border-white border-[0.5rem]"
                                            src={profilePic}
                                        />
                                    </div>
                                    <div className=" h-full flex flex-col gap-5">
                                        <h1 className="text-[2em] font-[900]">
                                            {`${user.first_name} ${user.middle_name} ${user.last_name}`}
                                            <span className="font-[900]">
                                                {user.user_type == "itrc"
                                                    ? " (Admin)"
                                                    : ""}
                                            </span>
                                        </h1>
                                        <p className="text-[1.3em]">
                                            @{user.username}
                                        </p>
                                    </div>
                                </div>
                                {user.id == acc.id ? (
                                    <div className="self-end flex-shrink-0">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                closeEditProfile(!close)
                                            }
                                            className="px-5 py-3 text-[1.2] bg-green-800 text-white rounded-[10rem]"
                                        >
                                            <i className="fa-solid fa-user-edit"></i>{" "}
                                            Edit Profile
                                        </button>
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                        {/*props.user.id == acc.id && (
                            <div className="w-full">
                                <div className="bg-white shadow-black/20 shadow-md border-t-[1px] border-gray-300 py-2 px-10">
                                    <ul className="flex text-[0.9em]">
                                        <li className={listStyle}><b>About</b></li>
                                        <li className={listStyle}><b>Incidents</b></li>
                                        <li className={listStyle}><b>Violation</b></li>
                                    </ul>
                                </div>
                            </div>
                        )*/}
                    </div>
                    <div className="w-full">
                        <About data={profileData} />
                    </div>
                </div>
            </UserProfileLayout>
        </>
    );
};
export default Profile;
