import AuthLayout from "@/Layouts/auth-layout"
import IssueComplaintModal from "@/Components/modal/issue-complaint-modal"
import ComplaintList from "@/Components/list/complaint-list"
import { useEffect, useState } from "react"
import ComplaintRequestList from "@/Components/list/complaint-request-list"
import SearchBar from "@/Components/other/search-bar"
import DropdownField from "@/Components/other/dropdown"
import FormTextfield from "@/Components/other/form-input"
import { change } from "@/Components/other/function"
import Reload from "@/Components/other/reload"
import ViewComplaintModal from "@/Components/modal/view-complaint-modal"
import { getData, configBroadcast, notify } from "@/Components/other/function"

const PrefectComplaint = (props) => {

    const [isSearchFocus, focusSearch] = useState(false),
          [search, setSearch] = useState(""),
          [listOpt, setListOption] = useState('complaint_requests')

    const [issueComplaint, openIssueComplaint] = useState(false),
          [viewComplaint, openViewComplaint] = useState(false),
          [complainant_id, setComplainantId] = useState(''),
          [data, setData] = useState({
                complainant: props.user.user_id,
                subject: '',
                complaint_possible_offense: [],
                complaint_description: '',
          }),
          [reload, setReload] = useState(false),
          [reloadType, setReloadType] = useState(""),
          [reloadLabel, setReloadLabel] = useState(""),
          
          [requestList, setRequestList] = useState(props.reported_complaint_list)

    useEffect(() => {
        configBroadcast(
            'private', 
            `complaint.${props.user.id}.send`, 
            'send complaint',
            'SendComplaint', 
            (event) => {
                const complainant = event.response[0].user,
                      icon = `../../user-assets/${complainant.username}/profile-${complainant.username}.jpg`

                setRequestList((event != null) ? event.response : requestList)
                notify(`${complainant.first_name} ${complainant.last_name} Reports A Complaint`, icon)
            }
        )
    }, [])
    const handleSearch = (e) => {
        const val = e.target.value;
        setSearch(val);
    }
    const handleChange = (e) => {
        change(e, setData)
    }
    const handleOptionChange = (e) => {
        setListOption(e.target.value)
    }
    const isReload = () => {
        return reload ? "opacity-1 z-50" : "opacity-0 z-[-1]";
    };
    const loadRegister = (r, t, l) => {
        setReload(r);
        setReloadType(t);
        setReloadLabel(l);
    };
    const setId = (id) => {
        setComplainantId(id)
        openViewComplaint(true)
    }
    const setRequestActionEvent = (type, id) => {
        let route = ''
        switch(type) {
            case 'confirm':
                alert('confirm ' + id)
                route = `/complaint/verify/${id}/confirm`
                break
            case 'cancel':
                route = `/complaint/verify/${id}/cancel`
                break
        }
        getData(
            route, 
            'post',
            {},
            (param)=>console.log('success'),
            ()=>console.log('error')
        )
    }
    const userType = [
        { val: "itrc", label: "ITRC" },
        { val: "student", label: "Student" },
        { val: "prefect", label: "Prefect" },
        { val: "faculty", label: "Faculty" },
        { val: "program_head", label: "Program Head" },
        { val: "staff", label: "Staff" },
        { val: "parent", label: "Parent" },
    ];
    const option = [
        { val: "complaint_request", label: "Complaint Requests" },
        { val: "complaint", label: "Complaints" },
    ];

    console.log(props.l)
    return (
        <>
        <Reload
            transition={isReload()}
            type={reloadType}
            label={reloadLabel}
        />
        <ViewComplaintModal 
            close={viewComplaint} 
            closeModal={openViewComplaint} 
            pd={['px-10', 'py-7']}
            isEnableOuterClose={true} 
            complainant={complainant_id}
        />
        <IssueComplaintModal 
            close={issueComplaint} 
            closeModal={openIssueComplaint} 
            val={data}
            setter={setData}
            pd={['px-5', 'py-7']}
            isEnableOuterClose={true} 
            program={props.program}
            student_list={props.students}
            reload={loadRegister}
            change={handleChange}
        />
        <AuthLayout user={props.user}>
            <div className="w-full py-10">
                <div className="w-full grid gap-10 relative">
                    <div className="flex w-full justify-between items-center">
                        <h1 className="text-[1.7em]"><b>Complaint</b></h1>
                        <div className="flex gap-2">
                            <button 
                                type="button"
                                className="px-4 py-2 bg-blue-700 text-[0.9em] text-white rounded"
                                onClick={() => openIssueComplaint(true)}
                            >
                                Direct Complaint
                            </button>
                            <button 
                                type="button"
                                className="px-4 py-2 bg-blue-700 text-[0.9em] text-white rounded"
                                onClick={() => openViewComplaint(true)}
                            >
                                <i className="fa-solid fa-box-open"></i> Archive
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-6">
                            <div className="w-[20rem] flex-shrink-0">
                                <SearchBar
                                    setSearch={setSearch}
                                    name="search"
                                    search={search}
                                    isFocus={isSearchFocus}
                                    plc="Search Case No."
                                    focus={focusSearch}
                                    handleSearch={handleSearch}
                                    w="w-full"
                                />
                            </div>
                            <div className="flex gap-3 flex-shrink-0">
                                <div className="flex-shrink-0">
                                    <DropdownField
                                        default={{ val: "all", label: "All User Types" }}
                                        list={userType}
                                    />
                                </div>
                                <div className="flex-shrink-0">
                                    <FormTextfield 
                                        label="Filter Date Issued" 
                                        name="time_start" 
                                        type="date"
                                        req={true}
                                        color={{ border: 'border-blue-700', bg: 'bg-gray-200' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-10 w-full px-5 py-3 bg-white rounded-md shadow-black/20 shadow-sm">
                        <div className="flex-shrink-0">
                            <ComplaintRequestList
                                list={requestList}
                                setId={setId}
                                actionEvent={setRequestActionEvent}
                            />
                        </div>
                        <div className="w-full">
                            <ComplaintList 
                                type='prefect' 
                                user={props.user} 
                                setId={setId}
                                list={props.complaint_list}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayout>
        </>
    )
}
export default PrefectComplaint

/**
 * <div className="flex-shrink-0 w-[16rem]">
                            <ComplaintRequestList />
                        </div>
                        <div className="w-[15rem]">
                            <DropdownField
                                list={option}
                                change={handleOptionChange}
                            />
                        </div>
 */