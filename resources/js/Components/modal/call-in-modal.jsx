import UpModal from "./up-modal"
import { useState } from "react"
import FormButton from "../other/button"
import SearchBar from "../other/search-bar"
import ProfilePic from "../other/profile-pic"
import FormTextfield from "../other/form-input"
import UserProfileList from "../list/search-user-list"
import { sendData } from "../other/function"

const CallInModal = (props) => {
    const [search, setSearch] = useState(""),
          [isSearchFocus, focusSearch] = useState(false)

    const handleSearch = (e) => {
        const val = e.target.value;
        setSearch(val);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <UpModal
            close={props.close}
            pd={["px-10", "py-4"]}
            isEnableOuterClose={props.close}
            closeModal={props.closeModal}
            bgColor="bg-white"
            w="w-[40rem]"
        >
            <div className="w-full">
                <div className="pt-3 text-[1.2em]">
                    <h1><b>Who do you want to Call In?</b></h1>
                </div>
                <div className="py-3 w-full">
                    <form action="" method="post" onSubmit={handleSubmit}>
                        <div className="grid gap-3">
                            <div className="w-full">
                                <SearchBar
                                    setSearch={setSearch}
                                    name="search_call_in_student"
                                    search={search}
                                    isFocus={isSearchFocus}
                                    plc="Search Student Username, ID Number or Full Name"
                                    focus={focusSearch}
                                    handleSearch={handleSearch}
                                    w="w-full"
                                />
                            </div>
                            <div>
                                <SelectedCallInStudent />
                            </div>
                            <div>
                                <FormTextfield 
                                    label="Call in Description" 
                                    name="call_in_reason" 
                                    id="call_in_reason"
                                    type="textarea"
                                    change={props.change} 
                                    req={true}
                                    color={{ border: 'border-blue-700', bg: 'bg-gray-200' }} 
                                />
                            </div>
                        </div>
                        <div className="w-full flex justify-end">
                            <FormButton label='Call In' type="button" />
                        </div>
                    </form>
                </div>
            </div>
        </UpModal>
    )
}
const SelectedCallInStudent = (props) => {
    return (
        <>
        <div className="text-[0.8em]">Call In:</div>
        <div className="flex items-center gap-2">
            <div>
                <ProfilePic 
                    activeBorderColor='border-white border-[3px]'  
                    src={props.src} 
                    size={2.5} 
                />
            </div>
            <div className="text-[0.8em]">
                <h1 className="text-[1.2em]"><b>User's Name</b></h1>
                <h1 className="text-[0.9em]">BSML 2</h1>
            </div>
        </div>
        </>
    )
}
export default CallInModal