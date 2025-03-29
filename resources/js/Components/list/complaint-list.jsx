import "./style.css";
import ProfilePic from "../other/profile-pic";
import { readableDate } from "../other/function";

const ComplaintList = (props) => {
    
    return (
        <div className={props.style && "w-full px-5 py-3 bg-white rounded-md shadow-black/20 shadow-sm"}>
            <table className="w-full border-collapse">
                <thead className="border-b-[1px] border-gray-400">
                    <th className="py-3 flex gap-4 items-center">
                        <div>Case No.</div>
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
                    {(props.type == 'prefect') &&
                    <th className="py-3">Complainant</th>
                    }
                    {(props.type == 'prefect') &&
                    <th className="py-3">Type</th>
                    }
                    {(props.type != 'prefect') &&
                    <th className="py-3">Status</th>
                    }
                    <th className="py-3 flex gap-4 items-center">
                        <div>Issued Since</div>
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
                    <th className="py-3">Action</th>
                </thead>
                <tbody>
                    {(props.list.length != 0)
                    ?
                    props.list.map((e, i) => 
                        <Row type={props.type} 
                             id={e.case_number}
                             usr={e.user} 
                             date={readableDate(e.created_at)}
                             setId={()=>props.setId(e.case_number)} 
                        />)
                    :
                    <tr>
                        <td colSpan={5} className="text-center py-10 text-[0.9em]">
                            No Complaints Yet
                        </td>
                    </tr>}
                </tbody>
            </table>
        </div>
    )
}
const Row = (props) => {
    return (
        <tr className="text-[0.9em]" key={props.id}>
            <td className="py-2">{props.id}</td>
            {(props.type == 'prefect') &&
            <td className="py-2">
                <div className="flex gap-5 items-center">
                    <ProfilePic
                        size={2.5}
                        src={`../user-assets/${props.usr.username}/profile-${props.usr.username}.jpg`}
                        showActive={false}
                        activeBorderColor="border-white border-[3px]"
                    />
                    <div>
                        <h1 className="text-[0.9em] font-[900]">{`${
                            props.usr.first_name
                        } ${
                            props.usr.last_name
                        }`}</h1>
                        <p className="text-[0.7em]">{`${props.usr.username}`}</p>
                    </div>
                </div>
            </td>}
            {(props.type == 'prefect') &&
            <td className="py-2">Prefect</td>
            }
            {(props.type != 'prefect') &&
            <td className="py-2">Pending</td>
            }
            <td className="py-2">{props.date}</td>
            <td className="py-2 flex gap-5">
                <button type="button" onClick={props.setId}>
                    <i className="fa-solid fa-eye"></i>
                </button>
                {(props.type == 'prefect') &&
                <button type="button">
                    <i className="fa-solid fa-circle-exclamation"></i>
                </button>}
            </td>
        </tr>
    )
}
export default ComplaintList