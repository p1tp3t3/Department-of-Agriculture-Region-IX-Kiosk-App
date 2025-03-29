import ProfilePic from "../other/profile-pic"

const GatePassList = (props) => {
    const s = props.style && 'px-5 py-3 bg-white rounded-md shadow-black/20 shadow-sm'
    return (
        <div className={s}>
            <table className={`w-full border-collapse`}>
                <thead className="border-b-[1px] border-gray-400">
                    <th className="py-3">No.</th>
                    {(props.type != 'prefect')
                    ?
                    <th className="py-3">QRCode Picture</th>
                    :
                    <th className="py-3">User</th>}
                    <th className="py-3">
                        <div className="flex gap-4 items-center">
                            <div>Requested Since</div>
                            <div className="flex-shrink-0">
                                <button
                                    type="button"
                                    className="w-[1.5rem] h-[1.5rem] text-[0.8em] rounded-full hover:bg-gray-300"
                                    onClick={() => {}}
                                >
                                    <i className="fa-solid fa-arrow-up"></i>
                                </button>
                            </div>
                        </div>
                    </th>
                    <th className="py-3">
                        <div className="flex gap-4 items-center">
                            <div>Confirmed Since</div>
                            <div className="flex-shrink-0">
                                <button
                                    type="button"
                                    className="w-[1.5rem] h-[1.5rem] text-[0.8em] rounded-full hover:bg-gray-300"
                                    onClick={() => {}}
                                >
                                    <i className="fa-solid fa-arrow-up"></i>
                                </button>
                            </div>
                        </div>
                    </th>
                    <th className="py-3">Action</th>
                </thead>
                <tbody>
                    <Row type={props.type} />
                    <Row type={props.type} />
                    <Row type={props.type} />
                    <Row type={props.type} />
                    <Row type={props.type} />
                    <Row type={props.type} />
                </tbody>
            </table>
        </div>
    )
}
const Row = (props) => {
    return (
        <tr className="text-[0.9em]">
            <td className="py-2">1</td>
            {(props.type != 'prefect')
            ?
            <td className="py-3">QRCode Picture</td>
            :
            <td className="py-2">
                <div className="flex gap-5 items-center">
                    <ProfilePic
                        size={2.5}
                        src={`../user-assets/${'kris62'}/profile-${'kris62'}.jpg`}
                        showActive={false}
                        activeBorderColor="border-white border-[3px]"
                    />
                    <div>
                        <h1 className="text-[0.9em] font-[900]">{`${
                            'first name'
                        } ${
                            'last name'
                        }`}</h1>
                        <p className="text-[0.7em]">{`${'username'}`}</p>
                    </div>
                </div>
            </td>}
            <td className="py-2">yesterday</td>
            <td className="py-2">now</td>
            <td className="py-2">View</td>
        </tr>
    )
}
export default GatePassList