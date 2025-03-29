const Carousel = ({ list, event }) => {
    return (
        <div>
            <div className="flex justify-between">
                <Arrow dir='l' />
                <div className="flex">

                </div>
                <Arrow dir='r' />
            </div>
        </div>
    )
}
const Arrow = ({ dir, event }) => {
    const a = (dir == 'l') ? 'fa-arrow-left' : 'fa-arrow-right'
    return (
        <div className="flex-shrink-0">
            <button type="button" onClick={event}>
                <i className={`fa-solid ${a}`}></i>
            </button>
        </div>
    )
}
export default Carousel
