import AlertModal from "./alert-modal"

/**
 * [
 *     {label: 'Confirm', onClick: () => confirmEvent(data)},
 *     {label: 'Cancel', onClick: () => cancelEvent()},
 * ]
 */
const DescisionModal = (props) => {
    return (
        <AlertModal
            close={props.close} 
            closeModal={props.closeModal}
            isEnableOuterClose={props.isEnableOuterClose}
            pd={props.pd}
            bgColor={props.bgColor}
            w={props.w}>
            <div className="w-full">
                <div className="w-full text-center text-[1.1em]">
                    <h1>{props.title}</h1>
                </div>
                <div className="w-full flex justify-end text-[0.9em]">
                    {props.button.map((e, i) =>
                    <button 
                        type="button" 
                        className={`px-2 py-1 ${e.bgColor} ${e.textColor} cursor-pointer`}
                        key={i}
                        onClick={e.onClick}>
                        {e.label}
                    </button>)}
                </div>
            </div>
        </AlertModal>
    )
}
export default DescisionModal