import logo from "../../images/pilar.png";
const Reload = ({ transition, type, label = "Successfully" }) => {
    return (
        <div
            className={`${transition} reload w-[100%] transition-[0.3s] h-[100%] fixed bg-[#000000e5] flex justify-center items-center`}
        >
            <Type t={type} l={label} />
        </div>
    );
};
const Type = ({ t, l }) => {
    switch (t) {
        case "text-wait":
            return (
                <div className="pls-wt">
                    <b>{l}...</b>
                </div>
            );
        case "logo":
            return (
                <>
                    <div className="loader"></div>
                    <div className="absolute w-[10.3rem] h-[10.3rem]">
                        <img src={logo} className="w-full h-full" alt="" />
                    </div>
                </>
            );
        case "success":
            return (
                <div className="text-[1.2em] text-white grid place-items-center gap-10">
                    <div class="success-checkmark">
                        <div class="check-icon">
                            <span class="icon-line line-tip"></span>
                            <span class="icon-line line-long"></span>
                            <div class="icon-circle"></div>
                            <div class="icon-fix"></div>
                        </div>
                    </div>
                    <div className="text-center">
                        <b>{l}</b>
                    </div>
                </div>
            );
        case "error":
            return (
                <div className="text-[1.2em] text-white grid place-items-center">
                    <div className="text-[5em] text-red-500">
                        <i className="fa-solid fa-xmark err"></i>
                    </div>
                    <div className="text-center">
                        <b>{l}</b>
                    </div>
                </div>
            );
        case "warning":
            return "warning";
    }
};
export default Reload;
