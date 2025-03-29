import { useState, useEffect, useRef } from "react"
import DateBox from "../card/date-box"


const Calendar = (props) => {

    const [currentDate, setCurrentDate] = useState(new Date()),
          [option, setOpenPanelId] = useState(null),

          pane = useRef({}),
          container = useRef(null)


    useEffect(() => {
        const handlePopUpRemove = (e) => {
            if (!Object.values(pane.current).some((ref) => ref?.contains(e.target))) {
                setOpenPanelId(null)
            }
        }
        document.addEventListener("click", handlePopUpRemove)
        return () => {
            document.removeEventListener("click", handlePopUpRemove)
        }
    }, [])


    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)

    const daysInMonth = []
    for (let day = 1; day <= lastDayOfMonth.getDate(); day++) {
        daysInMonth.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))
    }

    const emptySlots = new Array(firstDayOfMonth.getDay()).fill(null)

    const handleTogglePanel = (panelId) => {
        setOpenPanelId((prevId) => (prevId === panelId ? null : panelId))
    }

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
                <div className="flex h-[2rem] bg-gray-200">
                    <button 
                        type="button" 
                        className="py-1 px-4" 
                        onClick={() => handleMonth('prev')}>
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <input  
                        className="border-none w-[10rem] bg-gray-200 text-[0.9em]"
                        type="month"
                        value={`${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}`}
                        name="" 
                        id=""
                        onChange={handleMonthChange} />
                    <button 
                        type="button" 
                        className="py-1 px-4" 
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
                    <div className="flex border" ref={container}>
                        <div className="grid gap-1 grid-cols-7 text-center flex-shrink-0 w-full relative">
                            {emptySlots.map((_, index) => (
                                <div key={index}></div>
                            ))}
                            {daysInMonth.map((date, i) => {
                                const current = (date.toDateString() == new Date().toDateString()) ? 'bg-blue-500 text-white' : ''
                                
                                function popup(i, e) {
                                    e.stopPropagation()
                                    handleTogglePanel(i + 1)
                                }

                                return <DateBox 
                                            i={i}
                                            date={date} 
                                            popup={popup} 
                                            option={option} 
                                            pane={pane} 
                                            handleTogglePanel={handleTogglePanel}
                                            current={current}
                                            event={(props.event != null) ? props.event : null}
                                            container={container}
                                        />
                            })}
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}
/**
 * <div
                                        key={date}
                                        onClick={(e) => {
                                            if(0 != 0) popup(i, e);
                                            else {
                                                handleTogglePanel(i + 1)
                                                props.event(date.toDateString())
                                            }
                                        }}
                                        className={`p-3 border h-[5rem] flex rounded cursor-pointer relative ${current}`}
                                    >
                                        {date.getDate()}
                                        <OptionPanel 
                                            click={option === (i + 1)} 
                                            ref={(el) => (pane.current[i + 1] = el)} 
                                            event={[()=>{}, ()=>props.event(date.toDateString())]}
                                        />
                                    </div>
 */
export default Calendar