import { sendData, getData, toTitleCase } from "@/Components/other/function"
import { useState, useEffect } from "react"
import './style.css'
import shield from '../../../images/shield.png'

const OTP = (props) => {

    const [pin, setPin] = useState(['', '', '', '', '', '']),
          [time, setTime] = useState(60),
          [otpPin, setOtpPin] = useState(0),
          [invalid, setInvalid] = useState(false),
          [error, setError] = useState('')
          
    useEffect(() => {
        startTime()
        resendOtp()
    }, [])
    useEffect(() => {
        setOtpPin(pin.join(''))
        if(otpPin.length == pin.length) {
            setError('')
            if(props.generatedPin == otpPin && !invalid) {
                props.setNext(3)
            }else {
                setError((invalid) ? 'P.I.N Is Already Invalid' : 'P.I.N Is Not Matched')
            }
            refresh()
        }
    }, [pin, otpPin, invalid, error])
    
    const inpt = document.querySelectorAll('.otp-num')

    const enableChange = i => {
        inpt.forEach((element, index) => {
            if(i == index) {
                element.readOnly = false
            }else {
                element.readOnly = true
            }
        })
    }
    const handleChange = (e, i) => {
        const value = e.target.value
        if (!/^\d?$/.test(value)) return

        const newPin = [...pin]
        newPin[i] = value

        setPin(newPin)

        if (value && i < pin.length - 1) {
            inpt[i + 1].focus()
            enableChange(i + 1)
        }
    }
    const handleKeyDown = (e, i) => {        
        if (e.key === "Backspace" && !pin[i] && i > 0) {
            inpt[i - 1].focus()
            enableChange(i - 1)
        }
    }
    const startTime = () => {
        let t = 60
        const interval = setInterval(() => {
            setTime((prev) => {
                if (prev > 0) {
                    return prev - 1
                } else {
                    clearInterval(interval)
                    return 0
                }
            }) 
            t = (t <= 0) ? 0 : t - 1
            if(t == 0) {
                setInvalid(true)
            }   
        }, 1000)
    }
    const refresh = () => {
        setPin(['', '', '', '', '', ''])
        setOtpPin(0)
        inpt[0].focus()
        enableChange(0)
    }
    const resendOtp = () => {
        console.log(props.generatedPin)
        console.log('sending')
        sendData('/forgot-password/otp', { pin: props.generatedPin, contact: props.contact },
            ()=>console.log('success'), ()=>console.log('error')
        )
    }
    const getContact = () => {
        return props.contact['email'] != null ? props.contact['email'] : props.contact['phone_number']
    }
    return (
        <div className="bg-white w-[28rem] rounded-md" id="otp">
            <div className="px-10 py-5 grid gap-5 w-full">
                <div className="text-center grid">
                    <div className="w-[7rem] h-[7rem] object-cover justify-self-center">
                        <img src={shield} alt="" />
                    </div>
                    <h1 className="text-[1.5em]"><b>OTP Verification</b></h1>
                    <div className="text-[1em]">
                        <p>Please Type Your P.I.N That Was Sent To Your {toTitleCase(props.type)}</p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="flex h-[4rem] gap-2">
                        {pin.map((v, i) => 
                            <div key={i}>
                                <InputBox 
                                    change={(e) => handleChange(e, i)} 
                                    val={v} 
                                    keyDown={(e) => handleKeyDown(e, i)}
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div>
                    <div className="text-[0.9em] text-center text-red-600"><b>{error}</b></div>
                    <div className="text-center text-[0.9em] grid gap-4">
                        <div>We Send to {atob(getContact())} Where It Is Associated To Your Account.</div>
                        <div>The P.I.N Will Be Valid Within <b>{time}</b>s.</div>
                    </div>
                    <div className="text-center">
                        <span 
                            type="button" 
                            className="underline text-[0.9em] cursor-pointer"
                            onClick={resendOtp}>Resend Code</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
const InputBox = (props) => {
    return (
        <div className="w-[3.3rem] h-full flex-shrink-0 px-1 py-3 border-2 border-gray-400 rounded-md">
            <input 
                type="password" 
                placeholder="*"
                maxLength={1}
                onChange={props.change}
                value={props.val}
                onKeyDown={props.keyDown}
                className="w-full h-full text-center text-[1.4em] border-none otp-num" 
            />
        </div>
    )
}
export default OTP