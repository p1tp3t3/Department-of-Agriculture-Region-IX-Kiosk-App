import AuthLayout from "@/Layouts/auth-layout"
import { useState, useEffect } from "react"
import RequestAdmissionModal from "@/Components/modal/request-admission"

const PrefectAdmission = (props) => {
    const [requestAdmission, openAdmission] = useState(false);
    const [data, setData] = useState({
        reason: "",
        other_reason: "",
    });

    return (
        <>
        <RequestAdmissionModal 
            close={requestAdmission}
            closeModal={openAdmission}
            val={data}
            setter={setData}
            pd={["px-5", "py-7"]}
            isEnableOuterClose={true}
        />
        <AuthLayout user={props.user}>
            <div className="w-full py-10">
                <div className="w-full grid gap-10 relative">
                    <div className="flex justify-between items-center">
                        <h1 className="text-[1.7em]">
                            <b>Student Admission</b>
                        </h1>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </AuthLayout>
        </>
    )
}
export default PrefectAdmission