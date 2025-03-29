import ProfilePic from "../other/profile-pic"
import { Link } from "@inertiajs/react"

const AccountModal = (props) => {
    const popup = (props.click) ? 'z-[1] opacity-1 visible' : 'z-[-1] opacity-0 invisible'

    const listStyle = 'px-2 py-2 cursor-pointer text-black text-[0.8em] rounded-[5px] flex gap-2 items-center transition-[0.3s] hover:bg-gray-400/20'
    return (
        <div ref={props.refs} className={`absolute right-0 rounded w-[17rem] ${popup} border-[1px] shadow-md transition-[0.3s] px-4 flex-shrink-0 flex-grow-0 bg-white justify-self-end mt-[2.8rem]`}>
            <div className="w-full py-3">
                <div className="">
                    <div className="flex gap-1 items-center justify-center py-4">
                        <div className="grid place-items-center">
                            <ProfilePic src={`../${props.addPicRoute}user-assets/${props.user.username}/profile-${props.user.username}.jpg`} size={5} />
                            <div className="text-center">
                                <p className="text-[1.1em]"><b>{`${props.user.first_name} ${props.user.last_name}`}</b></p>
                                <p className="text-[0.8em]"><b>@{props.user.username}</b></p>
                            </div>
                        </div>
                    </div>
                    <div className="py-1"><div className="h-[1px] bg-gray-400 w-full"></div></div>
                    <div>
                        <ul className="p-0 list-none">
                            <Link href={`/${props.user.user_type}/profile/${props.user.username}`}>
                                <li className={listStyle}>
                                    <div className="h-[1.8rem] w-[1.8rem] bg-gray-500 text-[1.2em] text-white rounded-[100%] grid place-items-center">
                                        <i className="fa-solid fa-user"></i>
                                    </div>
                                    <div>See Profile</div>
                                </li>
                            </Link>
                            <Link href='/settings'>
                                <li className={listStyle}>
                                    <div className="h-[1.8rem] w-[1.8rem] bg-gray-500 text-[1.2em] text-white rounded-[100%] grid place-items-center">
                                        <i className="fa-solid fa-gear"></i>
                                    </div>
                                    <div>Settings</div>
                                </li>
                            </Link>
                            <Link href="/log-out">
                                <li className={listStyle}>
                                    <div className="h-[1.8rem] w-[1.8rem] bg-gray-500 text-[1.2em] text-white rounded-[100%] grid place-items-center">
                                        <i className="fa-solid fa-right-from-bracket"></i>
                                    </div>
                                    <div>Log Out</div>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>   
            </div>
        </div>
    )
}
export default AccountModal