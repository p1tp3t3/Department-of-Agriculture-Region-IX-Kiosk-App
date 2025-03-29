import pic from '../../images/pilar.png'

const Active = (props) => {
    return (
        <div 
            className={`
                absolute 
                ${(props.isActive) ? 'bg-green-600 ' : 'bg-orange-500'} 
                rounded-[100%] 
                justify-self-end 
                ${props.activeBorderColor} 
                self-end
            `}
            style={{height: `${props.activeSize}rem`, width: `${props.activeSize}rem`}}
            id='active'>
        </div>
    )
}   
const ProfilePic = ({
    size = 4,
    activeSize = 1,
    src = null,
    showActive = false,
    activeBorderColor = 'border-gray-800',
    isActive = false
}) => {
    
    return (
        <div 
            className={`grid relative object-cover z-1`} 
            style={{height: (`${size}rem`), width: (`${size}rem`)}}
            id='profile-picture'>
            <div className="object-cover rounded-[100%] overflow-hidden w-full h-full">
                <img src={(src != null) ? src : pic} alt=""/>
            </div>
            {(showActive)
            &&
            <Active 
                isActive={isActive} 
                activeSize={activeSize} 
                activeBorderColor={activeBorderColor}
            />}
        </div>
    )
}
export default ProfilePic