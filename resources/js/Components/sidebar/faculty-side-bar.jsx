import ProfilePic from "../other/profile-pic"
import { Link } from "@inertiajs/react";
import { useContext } from "react";
import AuthProvider from "@/context-provider/auth-provider";

const FacultySideBar = (props) => {
    const listStyle = 'px-5 w-full cursor-pointer flex gap-3 items-center py-2 text-white text-[0.9em] hover:bg-white hover:text-black transition-[0.3s]';

    const { usr , athTyp } = useContext(AuthProvider)

    return (
        <aside className="flex-shrink-0 flex-grow-0 w-[17rem] h-screen bg-gray-950 sticky top-0">
            <div className="w-full">
                <div className="flex text-white items-center gap-3 px-5 py-3 bg-blue-800 ">  
                    <ProfilePic size={2.5} />
                    <h1 className="text-[1em] font-[900]">PilarPODMS</h1>
                </div> 
                <div className="flex text-white items-center gap-3 px-5 py-5">
                    <ProfilePic src={`../${props.addPicRoute}user-assets/${usr.username}/profile-${usr.username}.jpg`} size={3.3} />       
                    <div>
                        <h1 className="text-[1.3em] font-[900]">{athTyp.first_name}</h1>
                        <h1 className="text-[0.9em]">Faculty</h1>
                    </div> 
                </div> 
                <div className="h-[26rem] overflow-auto overflow-x-hidden">
                    <ul className="p-0 list-none">
                        <Link href="/faculty/dashboard">
                            <li className={listStyle}>
                                <i className="fa-solid fa-chart-line"></i><div>Dashboard</div>
                            </li>
                        </Link>
                        <Link href="/faculty/program">
                            <li className={listStyle}>
                                <i className="fa-solid fa-user"></i><div>Program</div>
                            </li>
                        </Link>
                        <Link href="/complaint">
                            <li className={listStyle}>
                                <i className="fa-solid fa-user"></i><div>Complaint</div>
                            </li>
                        </Link>
                        <Link href="/faculty/referral">
                            <li className={listStyle}>
                                <i className="fa-solid fa-user"></i><div>Referral</div>
                            </li>
                        </Link>
                        <Link href="/appointment">
                            <li className={listStyle}>
                                <i className="fa-solid fa-user"></i><div>Appointment</div>
                            </li>
                        </Link>
                        <Link href="/gatepass">
                            <li className={listStyle}>
                                <i className="fa-solid fa-box-open"></i><div>Gate-Pass</div>
                            </li>
                        </Link>
                        <Link href="/lost-items">
                            <li className={listStyle}>
                                <i className="fa-solid fa-file"></i><div>Lost Items</div>
                            </li>
                        </Link>
                    </ul>
                </div> 
            </div>
        </aside>
    )
}
export default FacultySideBar