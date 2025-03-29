import AuthLayout from "@/Layouts/auth-layout"

const PrefectAnalytics = (props) => {
    return (
        <>
        <AuthLayout user={props.user}>
            <div>
                analytics
            </div>
        </AuthLayout>
        </>
    )
}
export default PrefectAnalytics