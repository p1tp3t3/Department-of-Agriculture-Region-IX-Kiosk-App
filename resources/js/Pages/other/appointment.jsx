import AuthLayout from "@/Layouts/auth-layout"
import Calendar from "@/Components/schedule/calendar"
import AppointmentModal from "@/Components/modal/set-appointment-modal"
import AppointmentScheduleList from "@/Components/list/upcoming-sched-list"
import AppointmentHistoryModal from "@/Components/modal/appointment-history-modal"
import ScheduledUserModal from "@/Components/modal/view-scheduled-user-modal"
import { useContext } from "react"

import { useState } from "react"

const Appointment = (props) => {
    const [appoint, openAppoint] = useState(false),
          [history, openHistory] = useState(false),
          [scheduledUser, openScheduledUser] = useState(false),
          

          [date, setDate] = useState('')

    const openAppointmentModal = (date) => {
        openAppoint(true)
        setDate(date)
    }
    return (
        <>
        <ScheduledUserModal 
            close={scheduledUser} 
            closeModal={openScheduledUser} 
            pd={['px-3', 'py-1']}
            isEnableOuterClose={true} 
        />
        <AppointmentHistoryModal 
            close={history} 
            closeModal={openHistory} 
            pd={['px-5', 'py-3']}
            isEnableOuterClose={true} 
        />
        <AppointmentModal 
            close={appoint} 
            closeModal={openAppoint} 
            pd={['px-5', 'py-7']}
            isEnableOuterClose={true} 
            date={date}
            id={props.user.id}
        />
        <AuthLayout user={props.user}>
            <div className="w-full py-10 grid gap-10 relative">
                <div className="flex w-full justify-between items-center">
                    <h1 className="text-[1.7em]"><b>Appointment</b></h1>
                    <div>
                        <button 
                            type="button"
                            className="px-4 py-2 bg-blue-700 text-[0.9em] text-white rounded"
                            onClick={() => openHistory(true)}>
                            Appointment History
                        </button>
                    </div>
                </div>
                <div className="flex gap-7 bg-white p-5 rounded-lg shadow-md shadow-black/20">
                    <div className="w-full">
                        <h1 className="text-[1.1em]"><b>Calendar</b></h1>
                        <Calendar event={[openScheduledUser, openAppointmentModal]} />
                    </div>
                    <div className="w-[18rem] flex-shrink-0">
                        <AppointmentScheduleList showAction={true} />
                    </div>
                </div>
            </div>
        </AuthLayout>
        </>
    )
}
export default Appointment
/**
 * 
const ConfirmRequestPanel = (props) => {
    return (
        <div className="w-[20rem] h-[22rem] sticky top-[4rem]">
            <div className="pb-2">
                <b>Confirmation Requests</b>
            </div>
            <div className="overflow-hidden overflow-y-auto h-[19rem] w-full grid gap-1">
                <ConfirmationRequest status='cancel' />
                <ConfirmationRequest status='reschedule' />
                <ConfirmationRequest status='schedule' />
                <ConfirmationRequest status='schedule' />
            </div>
        </div>
    )
}
const ConfirmationRequest = (props) => {        
    function showStatus(s) {
        if(s == 'schedule') return 'bg-blue-700'
        if(s == 'reschedule') return 'bg-yellow-600'
        if(s == 'cancel') return 'bg-red-700'
    }
    return (    
        <div className="flex py-2 w-full border-b-[1px] border-gray-300">
            <div className="flex-shrink-0 pr-2">
                <ProfilePic size={2.5} />
            </div> 
            <div className="pr-2 w-full">
                <div className="text-[0.8em] flex justify-between">
                    <div>
                        <h1 className="text-[1.1em]"><b>User111</b></h1>
                        <div className="text-[0.9em] overflow-hidden text-ellipsis text-nowrap w-[5.5rem]">Program Head</div>
                        <div className="text-[0.8em]">- Feb 14 2025 (10:20 pm)</div>
                    </div>
                    <div className="text-[1em] text-end">
                        <div>
                            <div className="text-[0.9em]">View Details</div>
                        </div> 
                    </div>
                </div>
                <div className="flex gap-1 justify-end py-2">
                    <button 
                        type="button"
                        onClick={props.cancelEvent}
                        className="h-[1.5rem] px-2 text-[0.7em] flex-shrink-0 rounded-md">
                        Cancel
                    </button>
                    <button 
                        type="button"
                        onClick={props.confirmEvent}
                        className={`h-[1.5rem] px-2 text-[0.7em] flex-shrink-0  ${showStatus(props.status)} text-white rounded-md`}>
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    )
}
 */