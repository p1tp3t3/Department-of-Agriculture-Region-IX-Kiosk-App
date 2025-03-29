import FormTextfield from "@/Components/other/form-input"
import { change } from "@/Components/other/function"
import { useForm } from "@inertiajs/react"
import FormButton from "@/Components/other/button"


const RecoverPassword = (props) => {
    const { data, setData , post, processing, errors } = useForm({
        username: props.data.username,
        password: '',
        re_enter: '',
    })
    
    const handleSubmit = e => {
        e.preventDefault()
        if(data.password == data.re_enter) {
            post('/forgot-password/recover', () => ({
                onError: () => {

                }
            }))   
        }else {

        }
    }
    const handleChange = e => {
        change(e, setData)
    }
    return (
        <div className="bg-white w-[28rem] rounded-md">
            <div className="px-10 py-5 grid gap-10 w-full">
                <form method="post" onSubmit={handleSubmit}>
                    {props.data.username}
                    <div className="grid gap-3">
                        <div>
                            <h1 className="text-[1.5em]"><b>Recover Your Password</b></h1>
                            <p className="text-[0.9em]">Your're Almost Their. Please Type Your New Password To Recover Your Account</p>
                        </div>
                        <div>
                            <div>
                                <FormTextfield 
                                    label="New Password" 
                                    type="password" 
                                    name="password" 
                                    id='password'
                                    val={data.password}
                                    error={errors.password}
                                    icon='fa-solid fa-lock'
                                    change={handleChange}
                                    req={true}
                                    color={{ border: 'border-blue-700', bg: 'bg-gray-200' }} />
                            </div>
                            <div>
                                <FormTextfield 
                                    label="Re-Enter New Password" 
                                    type="password" 
                                    name="re_enter" 
                                    id='re_enter'
                                    val={data.re_enter}
                                    error={errors.password_confirmation}
                                    icon='fa-solid fa-lock'
                                    change={handleChange}
                                    req={true}
                                    color={{ border: 'border-blue-700', bg: 'bg-gray-200' }} />
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <FormButton label='Save Changes' type="submit" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default RecoverPassword