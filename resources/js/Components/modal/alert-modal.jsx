const AlertModal = (props) => {

    const openBg = (props.close) ? "visible bg-black/40" : "invisible",
          openMd = (props.close) ? "scale-100 opacity-100" : "scale-105 opacity-0"

    const isEnableOuterClose = () => {
        if(props.isEnableOuterClose) {
            props.closeModal(!props.close)
        }else {
            return
        }
    }
    return (
        <div className={`fixed z-50 inset-0 grid place-items-center transition-colors ${openBg}`} onClick={() => isEnableOuterClose()}>
            <div className={`${props.w} shadow ${props.pd[0]} ${props.pd[1]} ${props.bgColor} ${props.textColor} rounded-[5px] ${openMd} transition-all `} onClick={(e) => e.stopPropagation()}>
                {props.children}
            </div>
        </div>
    )
}
AlertModal.defaultProps = {
    w: 'w-[25rem]'
}
export default AlertModal