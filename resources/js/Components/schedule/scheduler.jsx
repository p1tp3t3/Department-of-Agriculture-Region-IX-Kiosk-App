import { useState } from "react"
import DateBox from "../card/date-box";

const Scheduler = (props) => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)

    const daysInMonth = []
    for (let day = 1; day <= lastDayOfMonth.getDate(); day++) {
        daysInMonth.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))
    }

    const emptySlots = new Array(firstDayOfMonth.getDay()).fill(null)

    function handleMonth(m) {
        let d = null
        switch(m) {
            case 'prev':
                d = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
                break
            case 'next':
                d = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
                break
            default:
                d = new Date()
                break
        }
        setCurrentDate(d)
    }
    const handleMonthChange = (event) => {
        const newDate = new Date(event.target.value + "-01")
        setCurrentDate(newDate)
      }

    return (    
        <div className="w-full">
            <div className="w-full flex gap-5 justify-end pb-4">
                <div className="flex gap-1">
                    <button 
                        type="button" 
                        className="py-1 px-4 border-blue-400 rounded-md border-[1px] hover:bg-gray-300 bg-gray-100" 
                        onClick={() => handleMonth('prev')}>
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <input  
                        className="border-blue-400 rounded-md bg-gray-100"
                        type="month"
                        value={`${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}`}
                        name="" 
                        id=""
                        onChange={handleMonthChange} />
                    <button 
                        type="button" 
                        className="py-1 px-4 border-blue-400 rounded-md border-[1px] hover:bg-gray-300 bg-gray-100" 
                        onClick={() => handleMonth('next')}>
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
            <div className="w-full">
                <div className="grid gap-3">
                    <div className="grid border-blue-400 rounded-md border-[1px] py-3 grid-cols-7 gap-1 text-center">
                        {daysOfWeek.map((day) => (
                        <div key={day} className="font-medium">
                            {day}
                        </div>
                        ))}
                    </div>
                    <div className="flex overflow-hidden border">
                        <div className="grid gap-1 grid-cols-7 text-center flex-shrink-0 w-full relative bg-gray-200">
                            {emptySlots.map((_, index) => (
                                <div key={index} className="flex-shrink-0"></div>
                            ))}
                            {daysInMonth.map((date) => (
                                <DateBox date={date} bg='bg-gray-100' event={() => alert(date)} />
                            ))}
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}


export default Scheduler
/**
<div className="w-full">
            <div className="w-full flex gap-5 justify-end pb-4">
                <div className="flex gap-1">
                    <button 
                        type="button" 
                        className="py-1 px-4 border-blue-400 rounded-md border-[1px] hover:bg-gray-300 bg-gray-100" 
                        onClick={() => handleMonth('prev')}>
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <input  
                        className="border-blue-400 rounded-md bg-gray-100"
                        type="month"
                        value={`${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}`}
                        name="" 
                        id=""
                        onChange={handleMonthChange} />
                    <button 
                        type="button" 
                        className="py-1 px-4 border-blue-400 rounded-md border-[1px] hover:bg-gray-300 bg-gray-100" 
                        onClick={() => handleMonth('next')}>
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
            <div className="w-full">
                <div className="grid gap-3">
                    <div className="grid border-blue-400 rounded-md border-[1px] py-3 grid-cols-7 gap-1 text-center">
                        {daysOfWeek.map((day) => (
                        <div key={day} className="font-medium">
                            {day}
                        </div>
                        ))}
                    </div>
                    <div className="flex overflow-hidden border">
                        <div className="grid gap-1 grid-cols-7 text-center flex-shrink-0 w-full relative">
                            {emptySlots.map((_, index) => (
                                <div key={index}></div>
                            ))}
                            {daysInMonth.map((date) => (
                            <div
                                key={date}
                                onClick={() => alert(date)}
                                className="p-3 border rounded hover:bg-blue-100 cursor-pointer relative"
                            >
                                {date.getDate()}
                                <div className="absolute w-[0.5rem] h-[0.5rem] right-2 bottom-2 bg-red-400 rounded-[100%]">
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>  
                </div>
            </div>
        </div>
 */