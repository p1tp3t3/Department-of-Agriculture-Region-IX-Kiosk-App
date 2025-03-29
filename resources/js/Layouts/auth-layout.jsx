import ITRCSideBar from "@/Components/sidebar/itrc-side-bar";
import StudentSideBar from "@/Components/sidebar/student-side-bar";
import PrefectSideBar from "@/Components/sidebar/prefect-side-bar";
import FacultySideBar from "@/Components/sidebar/faculty-side-bar";
import NonTeachingStaffSideBar from "@/Components/sidebar/non-teaching-staff-side-bar";
import ParentSideBar from "@/Components/sidebar/parent-side-bar";
import AuthHeader from "@/Components/other/header";
import { AuthProvider } from "@/context-provider/auth-provider";


const AuthLayout = ({ children, user, authType }) => {

    const path = window.location.pathname


    return (
        <AuthProvider usr={user} >
            <div className="w-full flex bg-gray-100">
                <SideBar 
                    s={user.user_type} 
                    addPicRoute={(path.includes('register')) ? '../' : ''} 
                />
                <div className="w-full">
                    <AuthHeader 
                        user={user} 
                        addPicRoute={(path.includes('register')) ? '../' : ''} 
                    />
                    <div className="w-[95%]" style={{margin: '0 auto'}}>
                        {children}
                    </div>
                </div>
            </div>
        </AuthProvider>
    )   
}
const SideBar = ({ s, addPicRoute }) => {
    switch(s) {
        case 'itrc':
            return <ITRCSideBar addPicRoute={addPicRoute} />
        case 'prefect':
            return <PrefectSideBar addPicRoute={addPicRoute} />
        case 'student': 
            return <StudentSideBar addPicRoute={addPicRoute} />
        case 'faculty':
            return <FacultySideBar addPicRoute={addPicRoute} />
        case 'program_head':
            return <ProgramHeadSideBar addPicRoute={addPicRoute} />
        case 'staff':
            return <NonTeachingStaffSideBar addPicRoute={addPicRoute} />
        case 'parent':
            return <ParentSideBar addPicRoute={addPicRoute}  />
    }   
}
export default AuthLayout