import ProfilePic from "../other/profile-pic"
import { getData, readableDate } from "../other/function"

const ComplaintRequestList = (props) => {
    return (
        <div className="grid gap-2">
            <div>
                <h1 className="text-[1.1em]"><b>Reported Complaint</b></h1>
            </div>
            <div className="w-full flex flex-col gap-2 h-[21rem] overflow-y-auto overflow-hidden">
                {(props.list.length != 0)
                ?
                props.list.map((e, i) => 
                    <div key={i} className="w-full">
                        <Row 
                            created_at={e.created_at}
                            user={e.user}
                            confirmEvent={() => props.actionEvent('confirm', e.case_number)}
                            cancelEvent={() => props.actionEvent('cancel', e.case_number)}
                            setId={()=>props.setId(e.case_number)}
                        />
                    </div>)
                :
                <div className="py-5 text-[0.9em]">
                    <div>No Complaints Reported</div>
                </div>
                }
            </div>
        </div>
    )
}
const Row = (props) => {
    const btn = "px-3 py-1 text-[0.7em] text-white rounded-lg"
    const path = window.location.pathname.includes('prefect') ? '../' : '../../'

    return (
        <div className="w-full bg-gray-200 px-3 py-2">
            <div className="w-full">
                <div className="flex gap-2 w-full">
                    <div>
                        <ProfilePic 
                            src={`${path}user-assets/${props.user.username}/profile-${props.user.username}.jpg`}
                            size={2} 
                        />
                    </div>
                    <div className="w-full grid gap-2">
                        <div className="flex justify-between w-full">
                            <div>
                                <div className="text-[0.9em]"><b>{`${props.user.first_name} ${props.user.last_name}`}</b></div>
                                <div className="text-[0.7em]">{readableDate(props.created_at)}</div>
                            </div>
                            <div>
                                <button type="button" onClick={props.setId}>
                                    <i className="fa-solid fa-circle-info"></i>
                                </button>
                            </div>
                        </div>    
                        <div className="flex gap-1 items-center">
                            <button 
                                type="button" 
                                className={`${btn} bg-green-500`}
                                onClick={props.confirmEvent}
                            >
                                Confirm
                            </button>
                            <button 
                                type="button" 
                                className={`${btn} bg-red-500`}
                                onClick={props.cancelEvent}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ComplaintRequestList