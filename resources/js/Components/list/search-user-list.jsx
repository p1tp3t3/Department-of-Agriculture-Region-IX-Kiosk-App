import ProfilePic from "../other/profile-pic"
import { Link } from "@inertiajs/react"

const UserProfileList = (props) => { 
    const filter = props.list.filter((item) => {
        return props.search.toLowerCase() === '' 
                ? item 
                : `${item.first_name} ${item.last_name}`
                .toLowerCase()
                .includes(props.search.toLowerCase())
    })
    return (
        <div className="absolute w-full bg-white shadow-md shadow-black/20 px-3 py-3">
            <div className="w-full">
                {((props.list.length != 0)
                 ?
                 ((filter.length != 0)
                  ?
                  filter.map((e, i) => {
                    if((i + 1) <= props.lim) {
                        return (
                            <div className="w-full" key={i}>
                                <Row
                                    src={`/user-assets/${e.username}/profile-${e.username}.jpg`} 
                                    name={`${e.first_name} ${e.last_name}`} 
                                    username={e.username} 
                                    authType={props.authType}
                                    withLink={props.withLink}
                                    event={() => props.event(e.id)}
                                />
                            </div>
                        )
                    }else return
                  })
                  :<div className="w-full text-[0.9em] text-center py-3 text-gray-600">
                       <b><i className="fa-solid fa-search"></i> {(props.default) ? props.default : "User Not Found"}</b>
                   </div>)
                 :
                 '')}
            </div>
        </div>
    )
}
const Row = (props) => {
    return (
        <>
        {(props.withLink)
        ?
        <Link href={`/${props.authType}/profile/${props.username}`}>
            <div className="flex px-2 py-1 items-center gap-2 hover:bg-gray-200 rounded-lg">
                <div>
                    <ProfilePic 
                        activeBorderColor='border-white border-[3px]'  
                        src={props.src} 
                        size={2.5} 
                    />
                </div>
                <div className="text-[0.8em]">
                    <h1 className="text-[1.2em]"><b>{props.name}</b></h1>
                </div>
            </div>
        </Link>
        :
        <div 
            className="flex px-2 py-1 items-center gap-2 hover:bg-gray-200 rounded-lg"
            onClick={props.event}
        >
            <div>
                <ProfilePic 
                    activeBorderColor='border-white border-[3px]'  
                    src={props.src} 
                    size={2.5} 
                />
            </div>
            <div className="text-[0.8em]">
                <h1 className="text-[1.2em]"><b>{props.name}</b></h1>
            </div>
        </div>}
        </>
    )
}
export default UserProfileList