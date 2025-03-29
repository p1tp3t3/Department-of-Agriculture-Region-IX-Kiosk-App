import UpModal from "./up-modal"
import RadioButton from "../other/radio"
import FormTextfield from "../other/form-input"
import FormButton from "../other/button"
import { change, sendData } from "../other/function"

const RequestGatePassModal = (props) => {

    const handleChange = e => {
        change(e, props.setData)
    }
    const handleSubmit = e => {
        e.preventDefault()
        if(props.data.reason != null || props.data.reason != null) {
            sendData('/gatepass/generate', props.data , successSubmit, errorSubmit)
        }
    }
    const successSubmit = () => {
        console.log('success')
    }
    const errorSubmit = () => {
        console.log('error')
    }
    const radioOption = [
        { val: 'lost_id_wt_afdvt_f_lst' , label: 'Lost ID (With Affidavit of Lost)'},
        { val: 'request_new_id' , label: 'Request For New ID'},
    ]
    return (
        <UpModal
            close={props.close} 
            isEnableOuterClose={props.isEnableOuterClose}
            closeModal={props.closeModal}
            pd={props.pd}
            bgColor='bg-white'
            w='w-[28rem]'>
            <div className="w-full">
                <div className="w-full">
                    <form method="post" onSubmit={handleSubmit}>
                        <div className="grid gap-2">
                            <div className="text-[1.2em] pb-3">
                                <h1><b>Request Gate Pass Slip</b></h1>
                            </div>
                            <div className="grid gap-3">
                                <div>
                                    <RadioButton 
                                        name='reason' 
                                        id='reason' 
                                        label='Reason to Request Gate Pass' 
                                        flex={false}
                                        list={radioOption}
                                        change={handleChange}
                                    />
                                </div>
                                <div>
                                    <FormTextfield
                                        type="textarea"
                                        label='Other Reason'
                                        name='other_reason'
                                        id='other_reason'
                                        error={props.error}
                                        change={handleChange} 
                                        color={{ border: 'border-blue-700', bg: 'bg-gray-200' }}
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <FormButton label='Send' type="submit" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </UpModal>
    )
}
export default RequestGatePassModal