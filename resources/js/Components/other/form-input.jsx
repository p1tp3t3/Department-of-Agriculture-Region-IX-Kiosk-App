import './style.css'
import { useState } from 'react'

const FormTextfield = ({ 
    label = null, 
    type = 'text', 
    name = null, 
    val = '', 
    id = '',
    error = null, 
    change = null, 
    icon = null, 
    color = null, 
    req = false,
    length = null
}) => {
    const [focus, setFocus] = useState(false)

    const isStretched = focus || val !== ''

    return (
        <div className='w-full flex flex-col'>
            <div className={`w-[100%] ${(type != 'textarea') ? 'h-[2.6rem]' : 'h-[10rem]'} frm-inpt-brdr border-b-[1px] ${color.border} ${color.bg} relative`}>
                <div className="flex items-center gap-2 pr-3 pl-3"> 
                    {icon && 
                    <div className='text-[13px]'>
                        <i className={`${icon} ${isStretched ? 'text-blue-700' : ''} transition-[0.3s]`}></i>
                    </div>}
                    <div className={`h-[100%] w-[100%] relative flex flex-col ${(type != 'textarea') ? 'justify-center' : ''}`}>
                        {(type != 'textarea')
                        ?
                        <input 
                            onBlur={() => setFocus(false)}
                            onFocus={() => setFocus(true)}
                            value={val}
                            placeholder='' 
                            className='text-[12px] h-full' 
                            type={type} 
                            name={name} 
                            id={id} 
                            onChange={change} 
                            maxLength={length}
                            required={req}
                        />
                        :
                        <textarea
                            onBlur={() => setFocus(false)}
                            onFocus={() => setFocus(true)}
                            placeholder='' 
                            className='text-[12px] resize-none h-[80%]'
                            name={name} 
                            id={id} 
                            onChange={change} 
                            required={req}
                            value={val}
                            >{val}</textarea>}
                        <label className="absolute z-[0] cursor-text" htmlFor={id}>{label}</label>
                    </div>
                </div>
                <div className={`${isStretched ? 'w-full' : 'w-0'} transition-all justify-self-center h-[1px] self-end bg-blue-500 absolute`}></div>
            </div>
            <div className="text-[#d12323] text-[12px] h-5 overflow-hidden">
                <div className={`${(error != null) ? 'mt-[0rem]' : 'mt-[-8rem]'} transition-[0.2s] font-[1000]`}>{error}</div>
            </div>   
        </div>
    )
} 
export default FormTextfield