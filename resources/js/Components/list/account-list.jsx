import SearchBar from "../other/search-bar";
import { useEffect, useState } from "react";
import ProfilePic from "../other/profile-pic";
import DropdownField from "../other/dropdown";
import "./style.css";
import { sendData, toTitleCase } from "../other/function";

const AccountList = (props) => {
    const [isSearchFocus, focusSearch] = useState(false),
        [search, setSearch] = useState(""),
        [accountList, setAccountList] = useState(props.row.data);

    const handleSearch = (e) => {
        const val = e.target.value;
        setSearch(val);
    };
    const handleSelectType = (e) => {
        const val = e.target.value;
        const filter = props.row.data.filter((item) => item.user_type == val);
        const checkFilter = val != "all" ? filter : props.row.data;
        setAccountList(checkFilter);
    };
    const searchAccount = () => {
        const results = props.row.filter((item) =>
            item.username.toLowerCase().includes(search.toLowerCase())
        );
        setAccountList(search == "" ? props.row : results);
    };
    const handleSort = (type, order) => {
        switch (order) {
            case "asc":
                break;
            case "desc":
                break;
        }
    };

    const userType = [
        { val: "itrc", label: "ITRC" },
        { val: "student", label: "Student" },
        { val: "prefect", label: "Prefect" },
        { val: "faculty", label: "Faculty" },
        { val: "program_head", label: "Program Head" },
        { val: "staff", label: "Staff" },
        { val: "parent", label: "Parent" },
    ];
    return (
        <div className="w-full account-list">
            <div className="w-full">
                <div className="w-full flex justify-between py-5">
                    <div className="flex gap-2 items-center">
                        <div className="w-[20rem] flex-shrink-0">
                            <SearchBar
                                setSearch={setSearch}
                                name="search"
                                search={search}
                                isFocus={isSearchFocus}
                                plc="Search ID Number"
                                focus={focusSearch}
                                handleSearch={handleSearch}
                                searchVal={searchAccount}
                                w="w-full"
                                h="h-[1.8rem]"
                            />
                        </div>
                        <div className="flex-shrink-0">
                            <DropdownField
                                default={{ val: "all", label: "All Types" }}
                                list={userType}
                                onChange={handleSelectType}
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full px-5 py-3 bg-white rounded-md shadow-black/20 shadow-sm">
                    <table className="w-full border-collapse">
                        <thead className="border-b-[1px] border-gray-400">
                            <th className="py-3 flex gap-4 items-center">
                                <div>ID No.</div>
                                <div className="flex-shrink-0">
                                    <button
                                        type="button"
                                        className="w-[1.5rem] h-[1.5rem] text-[0.8em] rounded-full hover:bg-gray-300"
                                        onClick={() => {}}
                                    >
                                        <i className="fa-solid fa-arrow-up"></i>
                                    </button>
                                </div>
                            </th>
                            <th className="py-3">User</th>
                            <th className="py-3">Type</th>
                            <th className="py-3 flex gap-4 items-center">
                                <div>Registered Since</div>
                                <div className="flex-shrink-0">
                                    <button
                                        type="button"
                                        className="w-[1.5rem] h-[1.5rem] text-[0.8em] rounded-full hover:bg-gray-300"
                                        onClick={() => {}}
                                    >
                                        <i className="fa-solid fa-arrow-up"></i>
                                    </button>
                                </div>
                            </th>
                            <th className="py-3">Activation Status</th>
                        </thead>
                        <tbody>
                            {accountList &&
                                accountList
                                    .filter((item) => {
                                        return search.toLowerCase() === ""
                                            ? item
                                            : item.user_id
                                                  .toLowerCase()
                                                  .includes(
                                                      search.toLowerCase()
                                                  );
                                    })
                                    .map((v, i) => {
                                        const date = new Date(v.created_at);
                                        const formattedDate =
                                            date.toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "short",
                                                day: "numeric",
                                            });
                                        return (
                                            <Row
                                                user={v}
                                                i={i}
                                                formattedDate={formattedDate}
                                            />
                                        );
                                    })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

const Row = (props) => {
    const [activate, activateAccount] = useState(props.user.activate);

    const handleToggle = (e) => {
        sendData(
            `/itrc/accounts/activation/${props.user.username}`,
            { status: !activate },
            () => {
                console.log("success");
            },
            () => {
                console.log("error");
            }
        );
        activateAccount(e.target.checked);
    };
    return (
        <tr key={props.i}>
            <td className="py-2 text-[0.9em]">
                {props.user.user_id}
            </td>
            <td className="py-2">
                <div className="flex gap-5 items-center">
                    <ProfilePic
                        size={2.5}
                        src={`../user-assets/${props.user.username}/profile-${props.user.username}.jpg`}
                        showActive={false}
                        activeBorderColor="border-white border-[3px]"
                    />
                    <div>
                        <h1 className="text-[0.9em] font-[900]">{`${
                            props.user.first_name
                        } ${
                            props.user.last_name
                        }`}</h1>
                        <p className="text-[0.7em]">{`${props.user.username}`}</p>
                    </div>
                </div>
            </td>
            <td className="py-2 text-[0.9em]">
                {`${toTitleCase(props.user.user_type).replace("_", " ")}`}
            </td>
            <td className="py-2 text-[0.9em]">{props.formattedDate}</td>
            <td className="py-2 flex gap-3">
                <div className="w-[3.7rem] flex items-center">
                    <input
                        className="toggle"
                        type="checkbox"
                        id={`switch${props.user.id}`}
                        onClick={handleToggle}
                        checked={activate}
                    />
                    <label for={`switch${props.user.id}`}>Toggle</label>
                </div>
            </td>
        </tr>
    );
};
/**
 * 
    <Link href={`/itrc/profile/${props.user.username}`}>
        <button className="h-full w-[1.5rem] text-[0.8em] transition-[0.3s] rounded-[100%] hover:bg-green-600 hover:text-white">
            <i className="fa-solid fa-eye"></i>
        </button>
    </Link>
     
    <div>
        <button 
            type="button"
            className="px-4 py-2 bg-blue-700 text-white text-[0.8em] rounded-md"
            onClick={() => props.openFilter(true)}>
            <i className="fa-solid fa-filter"></i> Filter
        </button>
    </div>
 */
export default AccountList;
