const GatePassScannerLayout = (props) => {
    return (
        <div className="w-full">
            <header className="bg-blue-700 w-full">
                <div className="px-5 py-5 flex justify-between items-center w-full">
                    <h1 className="text-[1.5em] text-white">
                        <b>
                            <div className="flex gap-5 items-center">
                                <i className="fa-solid fa-qrcode"></i><span>Gate Pass QRCode Verification Scanner</span>
                            </div>
                        </b>
                    </h1>
                    <div>
                        <button 
                            type="button"
                            className="text-white text-[1em] flex gap-2 items-center">
                            <i className="fa-solid fa-right-from-bracket"></i><span>Log Out</span>
                        </button>
                    </div>
                </div>
            </header>
            <div className="py-10 px-5">
                {props.children}
            </div>
        </div>
    )
}
export default GatePassScannerLayout