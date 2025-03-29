import { useState, useEffect } from "react"
import FormTextfield from "./other/form-input"
import header from '../images/pilar.png'
import { Link } from "@inertiajs/react"
import FormButton from "./other/button"

const LogInForm = (props) => {
    return (
        <div className={`w-[26rem] p-[40px] pr-[50px] pl-[50px] bg-[#ffffff] rounded-[5px] frm`}>
            <form className="flex flex-col gap-10" onSubmit={props.submit} method="post">
                <div className="w-[100%] grid place-items-center">
                    <div className="grid place-items-center">
                        <div className="grid place-items-center">
                            <img className="object-cover" width={100} src={header} alt="header" />
                            <h1 className="text-[1.3em] text-center font-[900]">Prefect of Discipline of the Higher Education Department</h1>
                        </div>
                        <h1 className="text-[0.9em]">Log in your Account to Continue</h1>
                    </div>
                </div>
                <div className="flex flex-col gap-7">
                    <div className="flex flex-col gap-3">
                        <FormTextfield 
                            label="Username / ID No." 
                            name="username" 
                            id='username'
                            val={props.data.username}
                            error={props.err.username}
                            change={props.onchange} 
                            icon="fa-solid fa-user"
                            req={true}
                            color={{ border: 'border-blue-700', bg: 'bg-gray-200' }} />
                        <FormTextfield 
                            label="Password" 
                            type="password" 
                            name="password" 
                            id='password'
                            val={props.data.password}
                            error={props.err.password}
                            change={props.onchange} 
                            icon="fa-solid fa-lock" 
                            req={true}
                            color={{ border: 'border-blue-700', bg: 'bg-gray-200' }} />
                    </div>
                    <div className="w-full grid gap-3">
                        <FormButton label='Log in' type="submit" />
                        <div className="text-[13px] text-center hover:underline">
                            <Link href='/forgot-password'>Forgot Password?</Link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default LogInForm