import FormTextfield from "@/Components/other/form-input"
import { change } from "@/Components/other/function"
import { useForm } from "@inertiajs/react"
import DropdownField from "@/Components/other/dropdown"
import FormButton from "@/Components/other/button"
import RadioButton from "@/Components/other/radio"

const ProgramHeadForm = (props) => {
    const { data, setData , post, processing, errors } = useForm({
        type: 'program_head',
        pilar_id: '',
        first_name: '',
        middle_name: '',
        last_name: '',
        age: '',
        sex: '',
        program: '',
        email: '',
        contact_number: '',
        password: '',
        re_enter: ''
    })
    const handleChange = (e) => {
        change(e, setData)
    }
    const registerFaculty = (e) => {
        e.preventDefault()
    }
    const sx = [{val: 'm', label: 'Male'}, {val: 'f', label: 'Female'}]

    return (
        <form method='post' onSubmit={registerFaculty} className="grid shrink-0 gap-5">
            <div className="grid gap-5">
                <div className="grid gap-5">
                    <div>
                        <div className="flex gap-5">
                            <FormTextfield 
                                label='First Name'
                                name='first_name'
                                id='head_first_name'
                                val={data.first_name}
                                error={errors.first_name}
                                change={handleChange} 
                                req={true}
                                color={{ border: 'border-blue-700', bg: 'bg-gray-200' }} 
                            />
                            <FormTextfield 
                                label='Middle Name'
                                name='middle_name'
                                id='head_middle_name'
                                val={data.middle_name}
                                error={errors.middle_name}
                                change={handleChange} 
                                req={true}
                                color={{ border: 'border-blue-700', bg: 'bg-gray-200' }} 
                            />
                            <FormTextfield 
                                label='Last Name'
                                name='last_name'
                                id='head_last_name'
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
                                    id='head_age'
                                    val={data.age}
                                    error={errors.age}
                                    type="number"
                                    change={handleChange} 
                                    req={true}
                                    color={{ border: 'border-blue-700', bg: 'bg-gray-200' }} 
                                />
                            </div>
                            <RadioButton name='sex' id='program_head' label='Sex' flex={true} list={sx} />
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-5">
                            <FormTextfield
                                label='Program Head ID'
                                name='pilar_id'
                                id='head_id'
                                val={data.pilar_id}
                                error={errors.pilar_id}
                                change={handleChange} 
                                req={true}
                                color={{ border: 'border-blue-700', bg: 'bg-gray-200' }}
                            />
                            <DropdownField 
                                default={{value: '', label: 'Select Program'}} 
                                name='program'
                                val={data.program}
                                onChange={handleChange}
                                list={props.program}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-5">
                            <FormTextfield
                                label='Email'
                                name='email'
                                id='head_email'
                                val={data.email}
                                error={errors.email}
                                change={handleChange} 
                                color={{ border: 'border-blue-700', bg: 'bg-gray-200' }}
                            />
                            <FormTextfield
                                label='Contact Number'
                                name='contact_number'
                                id='head_contact_num'
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
                                id='head_password'
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
                                id='head_re_enter'
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
                <FormButton type="button" label='Create Program Head' />
            </div>
        </form>
    )
}
export default ProgramHeadForm