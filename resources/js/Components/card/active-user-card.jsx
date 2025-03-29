import ProfilePic from "../other/profile-pic"
import { Link } from "@inertiajs/react"

const ActiveUserCard = (props) => {
    return (
        <Link className="w-full" href={`${props.id}`}>
            <div className="py-1 flex justify-between">
                <div className="flex gap-3 items-center">
                    <div>
                        <ProfilePic 
                            size={2.5} 
                            src={`../user-assets/${props.usrnm}/profile-${props.usrnm}.jpg`}
                            showActive={true} 
                            isActive={props.active} 
                            activeBorderColor='border-white border-[3px]' 
                        />
                    </div>
                    <div>
                        <h1 className="font-[900] text-[0.9em] overflow-hidden w-20 text-ellipsis text-nowrap">{props.name}</h1>
                        <h1 className="text-[0.7em]">{props.type}</h1>
                    </div>
                </div>
                <div className="text-[0.7em] flex mt-1">
                    <div>Now</div>
                </div>
            </div>
        </Link>
    )
}
export default ActiveUserCard