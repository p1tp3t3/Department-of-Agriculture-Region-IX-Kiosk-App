import { Link } from "@inertiajs/react"
const ErrorHandler = (props) => {
    return (
        <div className="w-full h-screen">
            {JSON.stringify(props.auth)}
            <Error e={props.e} />
        </div>
    )
}
const Error = ({ e }) => {
    switch(e) {
        case 'not-found':
            return <NotFoundError />
        case 'activation':
            return <ActivationError />
        case 'authrization':
            return <AuthorizationError />
    }
}



const NotFoundError = () => {
    return (
        <div>
            <p>this page was not found</p>
            <Link href='/'>Back to home</Link>
        </div>
    )
}
const ActivationError = () => {
    return (
        <div>
            <p>your account has been deactivated</p>
            <Link href='/'>Back to home</Link>
        </div>
    )
}
const AuthorizationError = () => {
    return (
        <div>
            <p>you are not authorized to access this page</p>
            <Link href='/'>Back to home</Link>
        </div>
    )
}
export default ErrorHandler