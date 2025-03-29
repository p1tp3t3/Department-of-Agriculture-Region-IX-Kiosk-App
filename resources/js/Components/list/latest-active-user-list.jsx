import ActiveUserCard from "../card/active-user-card"

const LatestActiveAccountList = (props) => {
    return (
        <div className="w-full rounded-md shadow-md shadow-black/20 bg-white">
            <div>
                <div className="p-5 py-2 w-full flex items-center gap-3 border-b-[1px] border-gray-300 text-[0.9em]">   
                    <div 
                        className={`
                            bg-green-600 
                            rounded-[100%] 
                        `}
                        style={{height: `0.8rem`, width: `0.8rem`}}
                    >
                    </div>
                    <div><b>{props.active.length} Active User{(props.active.length != 1) ? 's' : ''}</b></div>
                </div>
            </div>
            <div className="px-5 py-3 h-[20rem] w-full overflow-auto overflow-x-hidden z-2">
                {props.active.map((e, i) => 
                    <div key={i}>
                        <ActiveUserCard     
                            name={`${e[e.auth_type].first_name}`} 
                            type={e.auth_type} 
                            active={e.active}
                            usrnm={e.username}
                            id={e.pilar_id}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}
export default LatestActiveAccountList