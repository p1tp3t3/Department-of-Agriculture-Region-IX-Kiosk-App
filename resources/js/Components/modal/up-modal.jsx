const UpModal = ({
    children,
    close = false,
    cntr = false,
    w = "w-auto",
    pd = ["px-3", "py-2"],
    bgColor = "bg-white",
    textColor = "text-black",
    isEnableOuterClose = false,
    closeModal = () => {},
}) => {
    const openBg = close ? "visible bg-black/40" : "invisible",
        openMd = close ? "mt-0 opacity-100" : "mt-32 opacity-0",
        center = cntr ? "grid place-items-center" : "grid justify-center";

    const enableOuterClose = () => {
        if (isEnableOuterClose) {
            closeModal(!close);
        } else {
            return;
        }
    };

    return (
        <div
            className={`fixed z-40 inset-0 ${center} transition-colors ${openBg} overflow-hidden overflow-y-auto`}
            onClick={() => enableOuterClose()}
        >
            <div className="px-3 py-5">
                <div
                    className={`${w} shadow ${pd[0]} ${pd[1]} ${bgColor} ${textColor} rounded-[5px] ${openMd} transition-all `}
                    onClick={(e) => e.stopPropagation()}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};
export default UpModal;
