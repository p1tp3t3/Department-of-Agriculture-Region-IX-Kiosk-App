import AppointmentScheduleCard from "../card/appointment-sched-card"

const AppointmentScheduleList = (props) => {
    return (
        <div className="w-full h-[22rem]">
            <div className={`${(props.showAction) ? 'pb-3' : 'py-[6px] text-[0.9em]'} px-5 ${(props.showAction) ? '' : 'border-b-[1px] border-gray-300'}`}>
                <b>Upcoming Appointments</b>
            </div>
            <div className="overflow-hidden overflow-y-auto h-[19rem] w-full flex flex-col px-5">
                <AppointmentScheduleCard event={false} info={null} showAction={props.showAction} />
                <AppointmentScheduleCard event={false} info={null} showAction={props.showAction} />
                <AppointmentScheduleCard event={false} info={null} showAction={props.showAction} />
                <AppointmentScheduleCard event={false} info={null} showAction={props.showAction} />
                <AppointmentScheduleCard event={false} info={null} showAction={props.showAction} />
                <AppointmentScheduleCard event={false} info={null} showAction={props.showAction} />
                <AppointmentScheduleCard event={false} info={null} showAction={props.showAction} />
            </div>
        </div>
    )
}
export default AppointmentScheduleList
