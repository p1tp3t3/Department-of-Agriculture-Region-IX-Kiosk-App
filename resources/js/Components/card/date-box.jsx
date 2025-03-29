import ProfilePic from "../other/profile-pic"
import { useRef, useState, useEffect } from "react"

const DateBox = (props) => {

    const renderProfile = (s) => {
        const l = []
        let x = 0

        for(let a = 0; a < s; a++) {
            l.push(
                <div className="relative">
                    <div 
                        className={`flex-shrink-0 rounded-[100%] relative `} style={{left: `-${x}px`}}>
                        <div className="p-[1px] bg-white rounded-[100%]">
                            <ProfilePic size={1.6} />
                        </div>
                    </div>
                </div>
            )
            x+=10
        }
        return l.map((e, i) => <div key={i}>{e}</div>)
    }
    return (
        <div
            key={props.date}
            popoverTarget="option-cal"
            onClick={(e) => {
                if(props.event != null) {
                    if(3 != 0) props.popup(props.i, e);
                    else {
                        props.handleTogglePanel(props.i + 1)
                        props.event(props.date.toDateString())
                    }
                }
            }}
            className={`p-2 border h-[5rem] rounded ${(props.event != null) ? 'cursor-pointer' : ''} relative ${props.current}`}
        >
            <div className="w-full h-full relative grid">
                <div className="justify-self-end">{props.date.getDate()}</div>
                <div className={`flex w-full relative ${(props.event != null) ? 'mt-3' : 'justify-center'}`}>
                    {(props.event != null)
                    ? renderProfile(3)
                    :
                    <div className="text-[0.7em] text-center px-3 py-[1px] bg-green-500 text-white rounded-lg">
                        <h1 className="text-[1em]"><b>Appoint</b></h1>
                        <p>8:30 am</p>
                    </div>}
                </div>
                {props.event &&
                <OptionPanel 
                    click={props.option === (props.i + 1)} 
                    ref={(el) => (props.pane.current[props.i + 1] = el)} 
                    event={[()=>props.event[0](true), ()=>props.event[1](props.date.toDateString())]}
                />}
            </div>
        </div>
    )
}

const OptionPanel = (props) => {
    const popup = (props.click) ? 'z-[1] opacity-1 visible' : 'z-[-1] opacity-0 invisible',
          l = 'py-2 px-3 text-start hover:bg-gray-200 cursor-pointer text-[0.8em]'

    return (
        <div 
            onClick={(e) => e.stopPropagation()} 
            className={`absolute cursor-default transition-[0.3s] text-black rounded-md w-[15rem] top-[3rem] left-0 bg-white shadow-black/20 shadow-md ${popup} self-end justify-self-end`} 
            ref={props.ref}
        >
            <div className="w-full">
                <ul className="p-0">
                    <li className={l} onClick={props.event[0]}><i className="fa-solid fa-eye"></i> View Scheduled Users</li>
                    <li className={l} onClick={props.event[1]}><i className="fa-solid fa-calendar-plus"></i> Schedule an Appointment</li>
                </ul>
            </div>
        </div>
    )
}
export default DateBox
/**
 * <div className="flex-shrink-0 border-2 border-blue-700 rounded-[100%]">
        <ProfilePic size={1.5} />
    </div>
 */