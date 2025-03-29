const RadioButton = (props) => {
    const objConvert = () => {
        return props.list.map(e => {
            const [value = null, label = null] = Object.values(e) || []
            return { value, label }
        })
    }
    return (
        <div className="text-[0.9em]">
            <div>
                <label htmlFor="">{props.label}</label>
            </div>
            <div className={`${(props.flex) ? 'flex gap-2 items-center' : ''}`}>
                {objConvert().map((e, i) =>     
                <div className={`flex gap-2 items-center`}>
                    <input type="radio" onChange={props.change} value={e.value} name={props.name} id={`${props.id}${i}`} />
                    <label htmlFor={`${props.id}${i}`}>{e.label}</label>
                </div>)}
            </div>
        </div>
    )
}
export default RadioButton