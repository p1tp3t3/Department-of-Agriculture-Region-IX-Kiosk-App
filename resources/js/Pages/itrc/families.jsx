import AuthLayout from "@/Layouts/auth-layout"
import RegisterFamilyModal from "@/Components/modal/register-family-modal"
import { useState } from "react"
import FamilyList from "@/Components/list/family-list"

const Families = (props) => {
    const [registerFamily, openRegisterFamily] = useState(false),
          [data, setData] = useState({
              family_id: '',
              family_name: ''
          })
    
    return (
        <>
        <RegisterFamilyModal 
            close={registerFamily} 
            closeModal={openRegisterFamily} 
            val={data}
            setter={setData}
            pd={['px-5', 'py-7']}
            isEnableOuterClose={true} 
            parent_list={props.parents}
            student_list={props.students}
        />
        <AuthLayout user={props.user}>
            <div className="w-full py-10">
                <div className="grid gap-10">
                    <div className="w-full flex justify-between">
                        <h1 className="text-[1.7em] font-[900]">Manage Families</h1>
                        <div>
                            <button 
                                type="button"
                                className="px-4 py-2 bg-blue-700 text-[0.9em] text-white rounded"
                                onClick={() => openRegisterFamily(true)}
                            >
                                <i className="fa-solid fa-plus"></i> New Family
                            </button>
                        </div>
                    </div>
                    <div>
                        <FamilyList />
                    </div>
                </div>
            </div>
        </AuthLayout>
        </>
    )
}
export default Families