import LogInForm from "@/Components/log-in-form"
import { Head, useForm } from "@inertiajs/react"
import { useRoute } from "../../../vendor/tightenco/ziggy/src/js"
import Reload from "@/Components/other/reload"
import './style.css'
import { useState } from "react"
import { change } from "@/Components/other/function"
import GuestLayout from "@/Layouts/guest-layout"

const LogIn = (props) => {
    const route = useRoute()

    const { data, setData , post, processing, errors } = useForm({
        username: '',
        password: ''
    })
    const [reload, setReload] = useState(false)

    const handleChange = (e) => {
        change(e, setData)
    }
    const authenticate = (e) => {
        e.preventDefault()
        setReload(true)
        setTimeout(() => {
            post(route('log-in'), {
                onError: () => setReload(false)            
            })
        }, 3000)
    }
    const isReload = () => {
        return (reload) ? 'opacity-1 z-20' : 'opacity-0'
    }
    return (
        <>
        <Reload transition={isReload()} type='logo' />
        <GuestLayout>
            <LogInForm  
                submit={authenticate} 
                data={data} 
                onchange={handleChange} 
                err={errors} 
            />
        </GuestLayout>
        </>
    )
}
export default LogIn