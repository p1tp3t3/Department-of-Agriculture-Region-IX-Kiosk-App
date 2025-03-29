import AuthHeader from "@/Components/other/header"

const UserProfileLayout = ({ children, user, authType }) => {
    return (
        <div className="w-full bg-gray-100">
            <AuthHeader profile={true} user={user} addPicRoute='../' />
            <div className="w-[60rem]" style={{margin: '0 auto'}}>
                {children}
            </div>
        </div>
    )
}
export default UserProfileLayout