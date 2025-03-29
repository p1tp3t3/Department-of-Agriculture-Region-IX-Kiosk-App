const QuantityCard = (props) => {
    return (
        <div className={`w-full  ${props.color.bg} rounded-md shadow-md shadow-black/20`}>
            <div className="px-5 py-7 w-full h-full flex gap-3">
                <div className="h-full text-[1.8em] grid items-center rounded-lg bg-blue-300/20 text-blue-600">
                    <i className={`fa-solid ${props.icon} px-5`}></i>   
                </div>
                <div className="w-full">
                    <h1 className="text-[1.8em] font-[900]">{props.num}</h1>
                    <p className="text-[0.7em] font-[900] text-gray-500">{props.label}</p>       
                </div>  
            </div>
        </div>
    )
}
export default QuantityCard