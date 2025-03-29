import AuthLayout from "@/Layouts/auth-layout"
import RequestReferralModal from "@/Components/modal/request-referral-modal"
import { useState, useEffect } from "react"

const PrefectReferral = (props) => {
    const [requestReferral, openRequestReferral] = useState(false)

    const [data, setData] = useState({
        reason: "",
        other_reason: "",
    });
    return (
        <>
        <RequestReferralModal 
            close={requestReferral}
            closeModal={openRequestReferral}
            val={data}
            setter={setData}
            pd={["px-5", "py-7"]}
            isEnableOuterClose={true}
        />
        <AuthLayout user={props.user}>
            <div className="w-full py-10">
                <div className="w-full grid gap-10 relative">
                    <div className="flex items-center">
                        <h1 className="text-[1.7em]">
                            <b>Referral</b>
                        </h1>
                    </div>
                    <div className="w-full">

                    </div>
                </div>
            </div>
        </AuthLayout>
        </>
    )
}
export default PrefectReferral