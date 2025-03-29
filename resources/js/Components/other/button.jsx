import './style.css'
const FormButton = ({ label, type = 'button', click = ()=>{}}) => {
    return <button 
                className={`btn-71 shrink-0 grow-0`} 
                onClick={click} 
                type={type}>
                {label}
           </button>
}
export default FormButton