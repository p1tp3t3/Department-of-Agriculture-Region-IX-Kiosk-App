import FormTextfield from "@/Components/other/form-input"
import FormButton from "@/Components/other/button"
import { change, validateEmail } from "@/Components/other/function"
import { useState } from "react"

const ContactDetail = (props) => {

    const handleChange = (e) => {
        change(e, props.setData)
    }
    const [error, setError] = useState('')

    const contactType = (t) => {
        if(t == 'email') return <EmailVerify 
                                    data={props.data} 
                                    error={error}
                                    handleChange={handleChange} 
                                />
        else return <ContactNumberVerify 
                        data={props.data} 
                        error={error}
                        handleChange={handleChange} 
                    />
    }
    const sendContact = (e) => {
        e.preventDefault()
        setError('')
        if(props.data.contact_detail != null) {
            if(props.type == 'email') {
                if(validateEmail(props.data.contact_detail)) {
                    props.setData((prev) => ({ 
                        ...prev, contact_detail: props.data.contact_detail
                    }))
                    props.setNext(2)
                }else {
                    setError('Invalid Email. Try Again')
                }
            }else if(props.type == 'phone number') {
                if(props.data.contact_detail.length == 11) {
                    const sub = props.data.contact_detail.slice(-10)
                    props.setData((prev) => ({ 
                        ...prev, contact_detail: `+63${sub}`
                    }))
                }else {
                    setError('No. Of Digits Must Be At Least 11 Digits')
                }
            }
        }
    }
    return (
        <div className="w-[28rem] bg-white rounded-md">
            <div className="w-full px-10 py-5">
                <form className="flex flex-col gap-2" onSubmit={sendContact}>
                    <div className="">
                        <div className="text-[0.9em]">
                            Please enter your {props.type} that is associated with your account for verification
                        </div>
                    </div>
                    {contactType(props.type)}  
                    <div className="w-full flex justify-between items-center">
                        <p 
                            className="text-[0.9em] underline cursor-pointer"
                            onClick={() => props.setNext(0)}>Back</p>
                        <FormButton label='Next' type="submit"/>
                    </div>
                </form>
            </div>
        </div>
    )
}
const EmailVerify = (props) => {
    return (
        <>
        <div>
            <FormTextfield 
                label="Email Address" 
                type="email" 
                name="contact_detail" 
                id='contact'
                val={props.data.contact_detail}
                error={props.error}
                icon='fa-solid fa-envelope'
                change={props.handleChange}
                req={true}
                color={{ border: 'border-blue-700', bg: 'bg-gray-200' }} />
        </div>
        </>
    )
}
const ContactNumberVerify = (props) => {
    return (
        <>
        <div>
            <FormTextfield 
                label="Phone Number" 
                type="text" 
                name="contact_detail" 
                id='contact'
                val={props.data.contact_detail}
                error={props.error}
                icon='fa-solid fa-phone'
                change={props.handleChange}
                req={true}
                length={11}
                color={{ border: 'border-blue-700', bg: 'bg-gray-200' }} />
        </div>
        </>
    )
}
export default ContactDetail