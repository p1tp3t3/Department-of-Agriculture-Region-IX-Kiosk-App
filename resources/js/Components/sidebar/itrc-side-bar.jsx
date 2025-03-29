import { useEffect, useState } from "react";
import ProfilePic from "../other/profile-pic";
import { Link } from "@inertiajs/react";
import "./style.css";
import { useContext } from "react";
import AuthProvider from "@/context-provider/auth-provider";

const ITRCSideBar = (props) => {
    const listStyle =
            "px-5 w-full cursor-pointer flex gap-3 items-center py-2 text-white text-[0.9em] hover:bg-white hover:text-black transition-[0.3s]",
        listStyle2 =
            "flex gap-3 items-center cursor-pointer items-center px-5 pl-12 w-full py-2 text-white text-[1em] hover:bg-white hover:text-black transition-[0.3s]";
    const [option, setOption] = useState(false);

    const { usr } = useContext(AuthProvider)

    return (
        <aside className="flex-shrink-0 flex-grow-0 w-[17rem] h-screen bg-gray-950 sticky top-0">
            <div className="w-full">
                <div className="flex text-white items-center gap-3 px-5 py-3 bg-blue-800 ">
                    <ProfilePic size={2.5} />
                    <h1 className="text-[1em] font-[900]">PilarPODMS Admin</h1>
                </div>
                <div className="flex text-white items-center gap-3 px-5 py-5">
                    <ProfilePic
                        src={`../${props.addPicRoute}user-assets/${usr.username}/profile-${usr.username}.jpg`}
                        size={3.3}
                    />
                    <div>
                        <h1 className="text-[1.3em] font-[900]">
                            {usr.first_name}
                        </h1>
                        <h1 className="text-[0.9em]">ITRC</h1>
                    </div>
                </div>
                <div className="h-[26rem] overflow-auto overflow-x-hidden dropdown">
                    <ul className="p-0 list-none">
                        <Link href="/itrc/dashboard">
                            <li className={listStyle}>
                                <i className="fa-solid fa-chart-line"></i>
                                <div>Dashboard</div>
                            </li>
                        </Link>
                        <li
                            className={`${listStyle} justify-between`}
                            onClick={() => setOption(!option)}
                        >
                            <div className="flex gap-3 items-center">
                                <i className="fa-solid fa-table"></i> User Management
                            </div>
                            <i className={`transition-all fa-solid fa-arrow-right ${option ? 'rotate-90' : 'rotate-0'}`}></i>
                        </li>
                        <li
                            className={`text-[0.8em] overflow-hidden transition-[0.5s] ${
                                option ? "h-[4.6rem]" : "h-0"
                            }`}
                        >
                            <ul className="p-0">
                                <Link href="/itrc/accounts/register">
                                    <li className={listStyle2}>
                                        <i className="fa-solid fa-user-plus"></i>
                                        <div>New User</div>
                                    </li>
                                </Link>
                                <Link href="/itrc/accounts">
                                    <li className={listStyle2}>
                                        <i className="fa-solid fa-list"></i>
                                        User List
                                    </li>
                                </Link>
                            </ul>
                        </li>
                        <Link href="/complaint">
                            <li className={listStyle}>
                                <i className="fa-solid fa-file"></i>
                                <div>Complaint</div>
                            </li>
                        </Link>
                        <Link href="/gatepass">
                            <li className={listStyle}>
                                <i className="fa-solid fa-file"></i>
                                <div>Gate-Pass</div>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </aside>
    );
};
export default ITRCSideBar;
