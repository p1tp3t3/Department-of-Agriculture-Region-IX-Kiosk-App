import FormTextfield from "@/Components/other/form-input"
import { change } from "@/Components/other/function"
import { useForm } from "@inertiajs/react"
import DropdownField from "@/Components/other/dropdown"
import FormButton from "@/Components/other/button"
import RadioButton from "@/Components/other/radio"


const NonTeachingStaffForm = (props) => {
    const { data, setData , post, processing, errors } = useForm({
        type: 'non_teaching_staff',
        pilar_id: '',
        first_name: '',
        middle_name: '',
        last_name: '',
        age: '',
        sex: '',
        email: '',
        contact_number: '',
        password: '',
        re_enter: ''
    })
    const handleChange = (e) => {
        change(e, setData)
    }
    const registerNonTeachingStaff = (e) => {
        e.preventDefault()
    }

    const sx = [{val: 'm', label: 'Male'}, {val: 'f', label: 'Female'}]
    return (
        <form method='post' onSubmit={registerNonTeachingStaff} className="grid shrink-0 gap-5">
            <div className="grid gap-5">
                <div className="grid gap-5">
                    <div>
                        <div className="flex gap-5">
                            <FormTextfield 
                                label='First Name'
                                name='first_name'
                                id='staff_first_name'
                                val={data.first_name}
                                error={errors.first_name}
                                change={handleChange} 
                                req={true}
                                color={{ border: 'border-blue-700', bg: 'bg-gray-200' }} 
                            />
                            <FormTextfield 
                                label='Middle Name'
                                name='middle_name'
                                id='staff_middle_name'
                                val={data.middle_name}
                                error={errors.middle_name}
                                change={handleChange} 
                                req={true}
                                color={{ border: 'border-blue-700', bg: 'bg-gray-200' }} 
                            />
                            <FormTextfield 
                                label='Last Name'
                                name='last_name'
                                id='staff_last_name'
                                val={data.last_name}
                                error={errors.last_name}
                                change={handleChange} 
                                req={true}
                                color={{ border: 'border-blue-700', bg: 'bg-gray-200' }} 
                            />
                        </div>
                        <div className="flex gap-5">
                            <div className="w-[15.5rem]">
                                <FormTextfield 
                                    label='Age'
                                    name='age'
                                    id='staff_age'
                                    val={data.age}
                                    error={errors.age}
                                    type="number"
                                    change={handleChange} 
                                    req={true}
                                    color={{ border: 'border-blue-700', bg: 'bg-gray-200' }} 
                                />
                            </div>
                            <RadioButton name='non_teaching_staff_sex' id='non_teaching_staff' label='Sex' flex={true} list={sx} />
                        </div>
                    </div>
                    <div>
                        <div className="w-[50%]">
                            <FormTextfield
                                label='Non-Teaching Staff ID'
                                name='pilar_id'
                                id='staff_id'
                                val={data.pilar_id}
                                error={errors.pilar_id}
                                change={handleChange} 
                                req={true}
                                color={{ border: 'border-blue-700', bg: 'bg-gray-200' }}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-5">
                            <FormTextfield
                                label='Email'
                                name='email'
                                id='staff_email'
                                val={data.email}
                                error={errors.email}
                                change={handleChange} 
                                color={{ border: 'border-blue-700', bg: 'bg-gray-200' }}
                            />
                            <FormTextfield
                                label='Contact Number'
                                name='contact_number'
                                id='staff_contact_num'
                                val={data.contact_number}
                                error={errors.contact_number}
                                change={handleChange} 
                                color={{ border: 'border-blue-700', bg: 'bg-gray-200' }}
                            />
                        </div>
                        <div className="flex gap-5">
                            <FormTextfield
                                label='Password'
                                name='password'
                                id='staff_password'
                                val={data.password}
                                error={errors.password}
                                type='password'
                                change={handleChange} 
                                req={true}
                                color={{ border: 'border-blue-700', bg: 'bg-gray-200' }}
                            />
                            <FormTextfield
                                label='Re-Enter Password'
                                name='re_enter'
                                id='staff_re_enter'
                                val={data.re_enter}
                                error={errors.re_enter}
                                type='password'
                                change={handleChange} 
                                req={true}
                                color={{ border: 'border-blue-700', bg: 'bg-gray-200' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="justify-self-end flex gap-3">
                <FormButton type="button" label='Reset' />
                <FormButton type="button" label='Create Non-Teaching Staff' />
            </div>
        </form>
    )
}
export default NonTeachingStaffForm