import FormTextfield from "@/Components/other/form-input"
import { change, getData } from "@/Components/other/function"
import FormButton from "@/Components/other/button"
import { useEffect } from "react"

const UsernameVerify = (props) => {
    useEffect(() => {
        success()
    }, [props.contact])

    const handleChange = (e) => {
        change(e, props.setData)
    }
    const handleSubmit = e => {
        e.preventDefault()
        const d = { username: props.data.username }

        if(props.data.username != null) {
            getData('post', `/contact/${props.data.username}`, {},
                props.setContact, ()=>{}, ()=>alert('error')
            );
        }
    }
    const success = () => {
        if(props.contact != null) {
            if(props.contact.email != null && props.contact.contact_number != null) {
                props.setNext(1)
            }else {
                if(props.contact.email != null) {
                    props.showOtp('email');
                }if(props.contact.contact_number != null) {
                    props.showOtp('phone number');
                }
            }
        }
    }

    return (
        <div className="w-[28rem] bg-white rounded-md">
            <div className="w-full px-10 py-5">
                <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                    <div className="grid gap-5">
                        <h1 className="text-[1.5em]"><b>Forgot Your Password?</b></h1>
                        <div className="text-[0.9em]">
                            Please Enter Your Username To Find Your Account
                        </div>
                    </div>
                    <div>
                        <FormTextfield 
                            label="Username / ID Number" 
                            type="text" 
                            name="username" 
                            id='username'
                            val={props.data.username}
                            error={props.error}
                            icon='fa-solid fa-user'
                            change={handleChange}
                            req={true}
                            color={{ border: 'border-blue-700', bg: 'bg-gray-200' }} />
                    </div>
                    <div className="w-full flex justify-end items-center">
                        <FormButton label='Next' type="submit"/>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default UsernameVerify