const DropdownField = (props) => {
    const objConvert = () => {
        return props.list.map(e => {
            const [value = null, label = null] = Object.values(e) || []
            return { value, label }
        })
    }
    return (
        <div className="w-full">
            <select className="text-[0.8em] w-full" name={props.name} onChange={props.onChange} value={props.val}>
                {props.default && <option value={props.default.val}>{props.default.label}</option>}
                {objConvert().map((e, i) => 
                    <option key={i} value={e.value}>{e.label}</option>
                )}
            </select>
        </div>
    )
}
export default DropdownField