import FormTextfield from "@/Components/other/form-input"
import { change } from "@/Components/other/function"
import { useState } from "react"
import FormButton from "@/Components/other/button"

const PasswordResetToken = (props) => {
    const [password_reset_token, setToken] = useState('')
    
    const handleSubmit = e => {
        e.preventDefault()
    }
    const handleChange = e => {
        change(e, setToken)
    }
    return (
        <div className="bg-white w-[28rem] rounded-md">
            <div className="px-10 py-5 grid gap-10 w-full">
                <form method="post" onSubmit={handleSubmit}>
                    <div className="grid gap-3">
                        <div>
                            <h1 className="text-[1.5em]"><b>Enter your Password Reset Token</b></h1>
                            <p className="text-[0.9em]">Your're Almost Their. Please Check Your Email Where We Sent To You Your Password Reset Token</p>
                        </div>
                        <div>
                            <div>
                                <FormTextfield 
                                    label="Password Rest Token" 
                                    type="password" 
                                    name="password_reset_token" 
                                    id='token'
                                    val={password_reset_token}
                                    error=''
                                    icon='fa-solid fa-lock'
                                    change={handleChange}
                                    req={true}
                                    color={{ border: 'border-blue-700', bg: 'bg-gray-200' }} />
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <FormButton label='Recover' type="submit" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default PasswordResetToken