import UpModal from "./up-modal"
import ProfilePic from "../other/profile-pic"

const ScheduledUserModal = (props) => {

    const renderRow = s => {
        
    }

    return (
        <UpModal
            close={props.close} 
            closeModal={props.closeModal}
            isEnableOuterClose={props.isEnableOuterClose}
            pd={props.pd}
            bgColor='bg-white'
            w='w-[23rem]'>
            <div className="w-full">
                <div>
                    <div className="text-[1.1em] py-3 text-center">
                        <h1><b>Scheduled Users</b></h1>
                    </div>
                    <div className="w-full overflow-hidden overflow-y-auto h-[20rem]">
                        <Row />
                        <Row />
                        <Row />
                        <Row />
                        <Row />
                        <Row />
                        <Row />
                    </div>
                </div>
            </div>
        </UpModal>
    )
}
const Row = (props) => {
    return (
        <div className="w-full">
            <div className="w-full py-1 flex justify-between items-center">
                <div className="w-full px-2 py-1 flex gap-2 items-center">
                    <div>
                        <ProfilePic size={2.2} />
                    </div>
                    <div className="text-[0.9em]">
                        <p><b>User 1</b></p>
                    </div>
                </div>
                <div className="text-[0.7em]">
                    <span><b>10:00 am - 11:00 am</b></span>
                </div>
            </div>
        </div>
    )
}
export default ScheduledUserModal