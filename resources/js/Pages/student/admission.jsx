import AuthLayout from "@/Layouts/auth-layout"

const Admission = (props) => {
    return (
        <>
        <AuthLayout user={props.user}>
            student admission
        </AuthLayout>
        </>
    )
}
export default Admission