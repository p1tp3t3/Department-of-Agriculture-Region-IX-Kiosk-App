import ProfilePic from "@/Components/other/profile-pic"
import UserProfileLayout from "@/Layouts/profile-layout"

const ProgramProfile = (props) => {
    return (
        <UserProfileLayout user={props.user} authType={props.authType}>
            <div>
                this is the program profile
            </div>
        </UserProfileLayout>
    )
}
export default ProgramProfile