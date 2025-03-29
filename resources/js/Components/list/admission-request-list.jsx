import ProfilePic from "../other/profile-pic"

const AdmissionRequestList = (props) => {
    return (
        <table>
            <thead>
                <th>User</th>
                <th>Request Since</th>
                <th>Action</th>
            </thead>
            <tbody>
                <Row />
                <Row />
                <Row />
                <Row />
            </tbody>
        </table>
    )
}
const Row = (props) => {
    return (
        <tr>
            <td>
                <div className="flex gap-2 w-full">
                    <div>
                        <ProfilePic size={2} />
                    </div>
                    <div className="w-full grid gap-2">
                        <div>
                            <div className="text-[0.9em]"><b>User's name</b></div>
                            <div className="text-[0.8em]">Username</div>
                        </div>
                    </div>
                </div>
            </td>
            <td>
                yesterday
            </td>
            <td>
                Confirm
            </td>
        </tr>
    )
}

export default AdmissionRequestList