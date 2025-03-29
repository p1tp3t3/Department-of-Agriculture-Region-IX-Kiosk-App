import UpModal from "./up-modal"
import { change } from "../other/function"
import FormTextfield from "../other/form-input"
import RadioButton from "../other/radio"
import SearchBar from "../other/search-bar"

const RequestAdmissionModal = (props) => {
    return (
        <UpModal
            close={props.close} 
            isEnableOuterClose={props.isEnableOuterClose}
            closeModal={props.closeModal}
            pd={props.pd}
            bgColor='bg-white'
            w='w-[35rem]'>
            <div>
                request admission
            </div>
        </UpModal>
    )
}
export default RequestAdmissionModal