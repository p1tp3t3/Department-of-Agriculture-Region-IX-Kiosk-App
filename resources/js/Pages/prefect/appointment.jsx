import AuthLayout from "@/Layouts/auth-layout"
import Calendar from "@/Components/schedule/calendar"
import { useState } from "react"
import AppointmentModal from "@/Components/modal/set-appointment-modal"
import AppointmentHistoryModal from "@/Components/modal/appointment-history-modal"
import ScheduledUserModal from "@/Components/modal/view-scheduled-user-modal"

const PrefectAppointment = (props) => {
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
                    <div className="flex gap-2">
                        <button 
                            type="button"
                            className="px-4 py-2 bg-blue-700 text-[0.9em] text-white rounded"
                            onClick={() => openHistory(true)}>
                            View Requests
                        </button>
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
                </div>
            </div>
        </AuthLayout>
        </>
    )
}
export default PrefectAppointment