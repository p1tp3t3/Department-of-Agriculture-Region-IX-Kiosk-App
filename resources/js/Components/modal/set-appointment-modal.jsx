import UpModal from "./up-modal"
import FormTextfield from "../other/form-input"
import FormButton from "../other/button"
import { useState } from "react"
import { change, getData, sendData } from "../other/function"
import { router } from "@inertiajs/react";



const AppointmentModal = (props) => {
    
    const [appoint, setAppointment] = useState({
        user_id: props.id,
        type: 'schedule',
        appointment_title: '',
        date_appoint: props.date,
        time_start: '',
        reason: ''
    })
    const handleChange = (e) => {
        change(e, setAppointment)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        sendData('/appointment/request', appoint, ()=>{}, (err)=>{console.error(err)})
    }
    return (
        <UpModal 
            close={props.close} 
            closeModal={props.closeModal}
            isEnableOuterClose={props.isEnableOuterClose}
            pd={props.pd}
            bgColor='bg-white'
            w='w-[30rem]'> 
            <div className="w-full">
                <form method="post" onSubmit={handleSubmit}>
                    <div className="text-[1.2em] pb-5">
                        <h1><b>Appointment for {props.date}</b></h1>
                    </div>
                    <div>
                        <div className="w-full">
                            <FormTextfield 
                                label="Time to Appoint" 
                                name="time_start" 
                                type="time"
                                val={appoint.time_start}
                                change={handleChange} 
                                req={true}
                                color={{ border: 'border-blue-700', bg: 'bg-gray-200' }} />
                        </div>
                        <FormTextfield 
                            label="Reason to Appoint" 
                            name="reason" 
                            type="textarea"
                            val={appoint.reason}
                            change={handleChange}   
                            req={true}
                            color={{ border: 'border-blue-700', bg: 'bg-gray-200' }} />
                    </div>
                    <div className="flex justify-end w-full">
                        <FormButton type='submit' label='Appoint' />
                    </div>
                </form>
            </div>
        </UpModal>
    )
}
export default AppointmentModal