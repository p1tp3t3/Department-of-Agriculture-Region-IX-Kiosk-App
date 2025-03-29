import UpModal from "./up-modal"

const RequestReferralModal = (props) => {
    return (
        <UpModal
            close={props.close} 
            isEnableOuterClose={props.isEnableOuterClose}
            closeModal={props.closeModal}
            pd={props.pd}
            bgColor='bg-white'
            w='w-[28rem]'>
            <div>
                request referral
            </div>
        </UpModal>
    )
}
export default RequestReferralModal