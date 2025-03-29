import GatePassScannerLayout from "@/Layouts/gatepass-scanner-layout"
import QRCode from "@/Components/other/qrcode"
import { useEffect, useState } from "react"

const GatePassQRScanner = (props) => {
    const [toast, setToast] = useState([])

    const onSuccess = (s) => {
        console.log(s)
    }
    const onError = (e) => {
        console.log(e)
    }
    const showToast = () => {
        return toast.map((e, i) => <Toast key={i} message={e}/>
        )
    }
    const addToast = (message) => {
        setToast((prev) => [...prev, message])
    }
    const removeToast = (id) => {
        setToast((prev) => prev.filter((toast) => toast.id !== id))
    }

    return (
        <>
        <div className="fixed left-0">
            {showToast(3)}
        </div>
        <GatePassScannerLayout>
            <div className="text-center grid gap-5">
                <h1 className="text-[1.5em]" onClick={()=>addToast('this is a toast')}>Please Scan Your Gate Pass QRCode Here</h1>
                <div className="flex gap-5 justify-center">
                    <div className="w-[40rem] h-[40rem]">
                        <QRCode success={onSuccess} error={onError} />
                    </div>
                </div>
            </div>
        </GatePassScannerLayout>
        </>
    )
}
const Toast = ({ message }) => {
    return (
        <div className="bg-white border border-black/20 px-5 py-3 shadow-md rounded-md">
            {message}
        </div>
    )
}
export default GatePassQRScanner        