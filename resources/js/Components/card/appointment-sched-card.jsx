const AppointmentScheduleCard = (props) => {
    return (
        <div className="border-gray-300 border-b-[1px]">
            <div className="flex flex-col gap-4 px-3 py-2">
                <div className="flex justify-between">
                    <h1 className="text-[0.8em]"><b>Appointment Title</b></h1>
                    <p className="cursor-pointer text-[0.8em]">
                        <i className="fa-solid fa-circle-info"></i>
                    </p>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex text-[0.7em] justify-between text-gray-800">
                        <div>
                            <i className="fa-solid fa-clock"></i> <span>Feb 14 2025</span>
                        </div>
                        <div>
                            10:00 am - 10:00pm
                        </div>
                    </div>
                    {props.showAction &&
                    <div className="text-[0.6em] flex w-full justify-end gap-3">
                        <button 
                            type="button"
                            className="py-1 px-2 bg-gray-600 text-white rounded-md">
                                Cancel
                        </button>
                        <button 
                            type="button"
                            className="py-1 px-2 bg-gray-600 text-white rounded-md">
                                Re-Schedule
                        </button>
                    </div>}
                </div>
            </div>
        </div>
    )
}
export default AppointmentScheduleCard