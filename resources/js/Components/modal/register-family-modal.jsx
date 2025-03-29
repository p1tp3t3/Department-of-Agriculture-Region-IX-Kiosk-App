import UpModal from "./up-modal"
import SearchBar from "../other/search-bar"
import UserProfileList from "../list/search-user-list"
import { useState } from "react"
import FormTextfield from "../other/form-input"
import ProfilePic from "../other/profile-pic"
import FormButton from "../other/button"
import { getData } from "../other/function"

const RegisterFamilyModal = (props) => {
    const [searchS, setSearchS] = useState(""),
          [searchP, setSearchP] = useState(""),

          [isSearchSFocus, focusSearchS] = useState(false),
          [isSearchPFocus, focusSearchP] = useState(false),

          [searchedStudent, setSearchedStudent] = useState([]),
          [searchedParent, setSearchedParent] = useState([])


    const handleChange = (e) => {

    }
    const handleSearchP = (e) => {
        const val = e.target.value;
        setSearchP(val);
    }
    const handleSearchS = (e) => {
        const val = e.target.value;
        setSearchS(val);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const getSelectedStudent = (i) => {

    }
    const getSelectedParent  = (i) => {

    }
    const removeStudent = (i) => {

    }
    const removeParent = (i) => {

    }
    return (
        <UpModal
            close={props.close} 
            closeModal={props.closeModal}
            isEnableOuterClose={props.isEnableOuterClose}
            pd={props.pd}
            bgColor='bg-white'
            w='w-[30rem]'>
            <div className="w-full grid gap-4">
                <div className="pt-3 text-[1.2em]">
                    <h1><b>Register New Family</b></h1>
                </div>
                <div className="py-3 w-full">
                    <form onSubmit={handleSubmit} method="post">
                        <div className="grid gap-5">
                            <div>
                                <div>
                                    <FormTextfield
                                        label="Family ID"
                                        name="family_id"
                                        id="family_id"
                                        change={handleChange}
                                        val={props.val.family_id}
                                        color={{
                                            border: "border-blue-700",
                                            bg: "bg-gray-200",
                                        }}
                                    />
                                </div>
                                <div>
                                    <FormTextfield
                                        label="Family Name"
                                        name="family_name"
                                        id="family_name"
                                        change={handleChange}
                                        val={props.val.family_name}
                                        color={{
                                            border: "border-blue-700",
                                            bg: "bg-gray-200",
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="grid gap-4">
                                <SearchUserSection 
                                    label="Add Parent"
                                    setSearch={setSearchP}
                                    name="parent_search"
                                    search={searchP}
                                    isSearchFocus={isSearchPFocus}
                                    plc="Search Parent"
                                    focus={focusSearchP}
                                    handleSearch={handleSearchP}
                                    list={props.parent_list}
                                    def="Parent Not Found"
                                    getSelect={getSelectedParent}                                    
                                />
                                <SearchUserSection 
                                    label="Add Student"
                                    setSearch={setSearchS}
                                    name="student_search"
                                    search={searchS}
                                    isSearchFocus={isSearchSFocus}
                                    plc="Search Student"
                                    focus={focusSearchS}
                                    handleSearch={handleSearchS}
                                    list={props.student_list}
                                    def="Student Not Found"
                                    getSelect={getSelectedStudent}                                    
                                />
                            </div>
                            <div className="w-full grid">
                                <FormButton type="submit" label="Create" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </UpModal>
    )
}
const SelectedUser = (props) => {
    return (
        <div className="flex-shrink-0 grid relative w-[5rem]">
            <div className="justify-self-center grid">
                <div>
                    <div className="grid w-[2.5rem] justify-self-center">
                        <div className="absolute">
                            <button 
                                type="button" 
                                className="bg-gray-300 relative top-[-0.3rem] z-[5] w-[1.2rem] h-[1.2rem] rounded-full text-[0.8em]"
                                onClick={() => props.unselect(null)}
                            >
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                        <div className="justify-self-center">
                            <ProfilePic 
                                activeBorderColor='border-white border-[3px]'  
                                src={props.src} 
                                size={2.5} 
                            />
                        </div>
                    </div>
                    <div className="text-[0.8em] text-center">
                        <h1><b>{`${props.name[0]} ${props.name[1]}`}</b></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
const SearchUserSection = ({ 
    label, 
    setSearch, 
    isSearchFocus, 
    name, 
    plc, 
    focusSearch, 
    handleSearch, 
    search, 
    list, 
    def, 
    getSelect 
}) => {
    return (
        <div className="grid gap-2">
            <div className="text-[0.9em]">{label}</div>
            <div className="relative">
                <SearchBar
                    setSearch={setSearch}
                    name={name}
                    search={search}
                    isFocus={isSearchFocus}
                    plc={plc}
                    focus={focusSearch}
                    handleSearch={handleSearch}
                    w="w-full"
                />
                {search.length != 0 && (
                    <div className="mt-2 absolute w-full z-10">
                        <UserProfileList
                            list={list}
                            lim={4}
                            search={search}
                            withLink={false}
                            default={def}
                            event={getSelect}
                        />
                    </div>
                )}
            </div>
            <div className="flex overflow-y-hidden overflow-x-auto w-full">
                <SelectedUser username='' name={['boy', 'bawang red']} />
                <SelectedUser username='' name={['boy', 'bawang red']} />
                <SelectedUser username='' name={['boy', 'bawang red']} />
                <SelectedUser username='' name={['boy', 'bawang red']} />
                <SelectedUser username='' name={['boy', 'bawang red']} />
                <SelectedUser username='' name={['boy', 'bawang red']} />
                <SelectedUser username='' name={['boy', 'bawang red']} />
                <SelectedUser username='' name={['boy', 'bawang red']} />
                <SelectedUser username='' name={['boy', 'bawang red']} />
            </div>
        </div>
    )
}
export default RegisterFamilyModal