import ProfilePic from "./profile-pic";
import { useState, useEffect, useRef } from "react";
import { Link } from "@inertiajs/react";
import NotificationModal from "../modal/notification-modal";
import AccountModal from "../modal/account-modal";
import SearchBar from "./search-bar";
import UserProfileList from "../list/search-user-list";
import { getData,  configBroadcast } from "./function";
import CallInModal from "../modal/call-in-modal";
import { notify } from "./function";

const AuthHeader = (props) => {
    const [pane, setOpenPanelId] = useState(null),
        panel = useRef({ notif: null, profile: null }),
        [isSearchFocus, focusSearch] = useState(false),
        [search, setSearch] = useState(""),
        [userList, setUserList] = useState([]),
        [notifList, setNotifList] = useState(props.notif_list),
        [countNotif, setCountNotif] = useState(12),
        [callIn, openCallIn] = useState(false)

    useEffect(() => {
        const handlePopUpRemove = (e) => {
            if (
                !Object.values(panel.current).some((ref) =>
                    ref?.contains(e.target)
                )
            ) {
                setOpenPanelId(null);
            }
        };
        document.addEventListener("click", handlePopUpRemove);

        getData(
            "get",
            "/all-users",
            {},
            setUserList,
            () => console.log("success"),
            () => console.log("error")
        );
        return () => {
            document.removeEventListener("click", handlePopUpRemove);
        };
    }, []);

    
    useEffect(() => {
        configBroadcast(
            'private', 
            `appointment.${props.user.id}.request`, 
            'request appointment',
            'AppointmentRequest', 
            (event) => {
                console.log(event)
            }
        )
        configBroadcast(
            'private', 
            `complaint.${props.user.id}.send`, 
            'notify send complaint',
            'SendComplaint', 
            (event) => {
                console.log(event)
                //checkNotifList(event.notification_list)
            }
        )
    }, [])


    const handleSearch = (e) => {
        const val = e.target.value;
        setSearch(val);
    };
    const handleTogglePanel = (panelId) => {
        setOpenPanelId((prevId) => (prevId === panelId ? null : panelId));
    };    
    const checkNotifList = (l) => {
        setNotifList((l != null) ? l : notifList)
    }
    return (
        <>
        {(props.user.user_type == 'prefect') &&
        <CallInModal 
            close={callIn} 
            closeModal={openCallIn} 
            pd={['px-5', 'py-7']}
            isEnableOuterClose={true} 
        />}
        <header
            className={`w-full ${
                props.profile ? "px-0" : "px-5"
            } py-3 bg-white grid sticky top-0 z-20 shadow-md`}
        >
            <div
                className={`${
                    props.profile ? "w-[60rem] justify-self-center" : "w-full"
                } flex ${
                    props.profile ? "justify-between" : "justify-between"
                } relative`}
            >
                <div className="flex gap-2">
                    {props.profile && (
                        <Link href={`/${props.user.user_type}/dashboard`}>
                            <button className="h-full w-[2.5rem] rounded-[100%] text-[1.2em] text-black bg-black/10">
                                <i className="fa-solid fa-home"></i>
                            </button>
                        </Link>
                    )}
                    <div className="relative w-[18rem]">
                        <SearchBar
                            setSearch={setSearch}
                            name="search_user"
                            search={search}
                            isFocus={isSearchFocus}
                            plc="Search Users"
                            focus={focusSearch}
                            handleSearch={handleSearch}
                            w="w-full"
                        />
                        {search.length != 0 && (
                            <div className="mt-2 absolute w-full">
                                <UserProfileList
                                    list={userList.account_list}
                                    lim={7}
                                    search={search}
                                    authType={props.user.user_type}
                                    withLink={true}
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div className="grid relative">
                    <div className="flex gap-2">
                        {(props.user.user_type == 'prefect') &&
                        <div>
                            <button 
                                type="button"
                                className="h-full w-[2.5rem] relative grid place-items-center rounded-[100%] text-[1.2em] text-black bg-black/10"
                                onClick={() => openCallIn(true)}
                            >
                                <i className="fa-solid fa-phone"></i>
                            </button>
                        </div>}
                        <div className="h-full grid">
                            <button
                                type="button"
                                className="h-full w-[2.5rem] relative grid place-items-center rounded-[100%] text-[1.2em] text-black bg-black/10"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleTogglePanel("notif");
                                    document.getElementById(
                                        "notif-num"
                                    ).style.display = "none";
                                }}
                            >
                                <i className="fa-solid fa-bell"></i>
                                <div
                                    id="notif-num"
                                    className="absolute w-[1.2rem] self-end justify-self-end top-6 h-[1.2rem] text-[0.5em] grid place-items-center bg-red-600 text-white rounded-[100%]"
                                >
                                    {countNotif < 10 ? countNotif : "+9"}
                                </div>
                            </button>
                        </div>
                        <div
                            onClick={(e) => {
                                e.stopPropagation();
                                handleTogglePanel("profile");
                            }}
                            className="cursor-pointer"
                        >
                            <ProfilePic
                                src={`../${props.addPicRoute}user-assets/${props.user.username}/profile-${props.user.username}.jpg`}
                                size={2.5}
                            />
                        </div>
                    </div>
                </div>
                <AccountModal
                    addPicRoute={props.addPicRoute}
                    user={props.user}
                    authType={props.user}
                    click={pane == "profile"}
                    refs={(el) => (panel.current.profile = el)}
                />
                <NotificationModal
                    click={pane == "notif"}
                    refs={(el) => (panel.current.notif = el)}
                    list={notifList}
                />
            </div>
        </header>
        </>
    );
};
export default AuthHeader;
