import AuthLayout from "@/Layouts/auth-layout"
import RequestGatePassModal from "@/Components/modal/request-gatepass-modal"
import { useState } from "react"
import GatePassRequestList from "@/Components/list/gatepass-request-list"
import DropdownField from "@/Components/other/dropdown"
import GatePassList from "@/Components/list/gate-pass-list"

const PrefectGatePass = (props) => {
    const [requestGatePass, openRequestGatePass] = useState(false),
          [lstOption, setLstOption] = useState('req-current')

    const [data, setData] = useState({
        reason: "",
        other_reason: "",
    });
    const handleOption = (e) => {
        setLstOption(e.target.value)
    }
    const option = [
        {val: 'req-current', label: 'Current Requests'},
        {val: 'req-history', label: 'Previous Requests'}
    ]

    return (
        <>
        <RequestGatePassModal
            close={requestGatePass}
            closeModal={openRequestGatePass}
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
                            <b>Gate Pass</b>
                        </h1>
                    </div>
                    <div className="w-full grid gap-3">
                        <div>
                            <div className="h-[3rem] w-[15rem]">
                                <DropdownField
                                    list={option}
                                    val={lstOption}
                                    onChange={handleOption}
                                />
                            </div>
                        </div>
                        {(lstOption == 'req-current')
                        ?
                        <GatePassRequestList />
                        :
                        <GatePassList type={props.user.user_type} style={true} />}
                    </div>
                </div>
            </div>
        </AuthLayout>
        </>
    )
}
export default PrefectGatePass