import NormalNotif from "../card/notif/normal-notif"

const NotificationModal = (props) => {
    const popup = (props.click) ? 'z-[1] opacity-1 visible' : 'z-[-1] opacity-0 invisible'

    return (
        <div 
            onClick={(e) => e.stopPropagation()} 
            ref={props.ref} 
            className={`absolute right-0 py-4 rounded w-[22rem] ${popup} border-[1px] shadow-md transition-[0.3s] px-3 flex-shrink-0 flex-grow-0 bg-white justify-self-end mt-[2.8rem]`}>
            <div className="w-full">
                <div className="w-full flex justify-between pb-1 items-center">
                    <h1 className="text-[1.2em]"><b>Notification</b></h1>
                    <div className="text-[0.9em]">
                        <button type="button" className="hover:underline">
                            <i className="fa-solid fa-check"></i> Mark All as Read
                        </button>
                    </div>
                </div>
                <div className="text-[0.8em] flex gap-1 py-2">
                    <button 
                        type="button" 
                        className="py-1 px-4 bg-blue-500 text-white rounded-[7rem]">
                        All
                    </button>
                    <button 
                        type="button" 
                        className="py-1 px-4 bg-blue-500 text-white rounded-[7rem]">
                        Unread
                    </button>
                </div>
                <div className="w-full h-[23rem] flex flex-col overflow-hidden overflow-y-auto">
                    {/*props.notif_list.map((e, i) => 
                         <Notif 
                             type={e.notif_type} 
                             obj={e}
                         />)*/
                    }
                    <Notif type='' />
                    <Notif type='' />
                    <Notif type='' />
                    <Notif type='' />
                    <Notif type='' />
                    <Notif type='' />
                    <Notif type='' />
                    <Notif type='' />
                    <Notif type='' />
                    <Notif type='' />
                    <Notif type='' />
                    <div className="py-4 w-full">
                        <button 
                            type="button"
                            className="w-full py-2 bg-gray-500 text-[0.8em] text-white rounded-md">
                            See Previous Notifications
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
const Notif = ({ type = null, obj = null }) => {
    switch(type) {
        case 'complaint':
            return null
        case 'referral':
            return null
        case 'admission':
            return null
        case 'appointment':
            return null
        case 'gatepass':
            return null
        case 'call_in':
            return null
        default:
            return <NormalNotif />
    }
}
export default NotificationModal

