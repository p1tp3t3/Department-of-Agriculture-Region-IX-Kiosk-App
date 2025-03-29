import GuestLayout from "@/Layouts/guest-layout"
import UsernameVerify from "./password-recovery/username"
import OTP from "./password-recovery/otp"
import RecoverPassword from "./password-recovery/recover-password"
import { useState, createContext, useEffect } from "react"
import { sendData } from "@/Components/other/function"


const PasswordRecovery = () => {
    const [type, setType] = useState(''),
          [next, setNext] = useState(0)

    const [data, setData] = useState({ username: '' }),
          [contact, setContact] = useState(null),
          [generatedPin, setGeneratedPin] = useState(0)

    const showOtp = t => {
        const pin =  Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000
        setType(t)
        setGeneratedPin(pin)
        setNext(2)
    };
    
    const nextPage = n => {
        const page = [
            <UsernameVerify 
                setData={setData} 
                data={data} 
                contact={contact}
                setNext={setNext} 
                setContact={setContact}
                showOtp={showOtp}
            />,
            <OptionPanel 
                contact={contact}
                setGeneratedPin={setGeneratedPin} 
                setNext={setNext} 
                setType={setType} 
            />,
            <OTP 
                contact={contact}
                type={type} 
                setNext={setNext} 
                setGeneratedPin={setGeneratedPin} 
                generatedPin={generatedPin} 
            />, 
            <RecoverPassword data={data} />
        ]
        return page[n]
    }

    return (
        <GuestLayout>
            {nextPage(next)}
        </GuestLayout>
    )
}
const OptionPanel = (props) => {
    const pin = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000
    const notify = t => {
        sendData(
            '/forgot-password/otp', 
            { pin: pin, type: t }, 
            showOtp(t), 
            ()=>{}
        );
    };
    const showOtp = t => {
        props.setType(t)
        props.setGeneratedPin(pin)
        props.setNext(2)
    };

    
    return (
        <div className="bg-white w-[28rem] rounded-md">
            <div className="px-5 py-10 grid gap-10 w-full">
                <div className="text-center">
                    <h1 className="text-[1.5em]"><b>Where Do You Want To Be Notified?</b></h1>
                </div>
                <div className="grid gap-2">
                    <div className="w-full border border-gray-400 rounded-md text-[0.9em]">
                        <button 
                            type="button" 
                            className="px-2 py-3 w-full"
                            onClick={() => notify('email')}>
                            <i className="fa-solid fa-envelope"></i> Email Address
                        </button>
                    </div>
                    <div className="text-center text-[0.8em]">
                        <p>Or</p>
                    </div>
                    <div className="w-full border border-gray-400 rounded-md text-[0.9em]">
                        <button 
                            type="button" 
                            className="px-2 py-3 w-full"
                            onClick={() => notify('phone number')}>
                            <i className="fa-solid fa-phone"></i> Phone Number
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PasswordRecovery