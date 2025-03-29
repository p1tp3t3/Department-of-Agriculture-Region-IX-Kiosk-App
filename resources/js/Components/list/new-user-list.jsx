import ActiveUserCard from "../card/active-user-card"

const NewUserList = (props) => {
    return (
        <div className="w-full bg-white rounded-md shadow-md shadow-black/20">
            <div>
                <div className="p-5 py-2 w-full flex items-center gap-3 border-b-[1px] border-gray-300 text-[0.9em]">                       
                    <div><b>{props.active.length} New User{(props.active.length != 1) ? 's' : ''}</b></div>
                </div>
            </div>
            <div className="px-5 py-3 h-[9rem] w-full overflow-auto overflow-x-hidden z-2">
                {props.active.map((e, i) => 
                    <div key={i}>
                        <ActiveUserCard 
                            name={`${e.first_name}`} 
                            type={e.user_type} 
                            usrnm={e.username}
                            id={e.user_id}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}
export default NewUserList