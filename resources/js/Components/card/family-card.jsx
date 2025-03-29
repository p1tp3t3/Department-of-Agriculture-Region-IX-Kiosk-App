import { Link } from "@inertiajs/react"
import ProfilePic from "../other/profile-pic"


const FamilyCard = (props) => {
    const renderProfile = (s) => {
        const l = []
        let x = 0

        for(let a = 0; a < s; a++) {
            l.push(
                <div className="relative">
                    <div 
                        className={`flex-shrink-0 rounded-[100%] relative `} style={{left: `-${x}px`}}>
                        <div className="p-[1px] bg-white rounded-[100%]">
                            <ProfilePic size={1.2} />
                        </div>
                    </div>
                </div>
            )
            x+=6
        }
        return l.map((e, i) => <div key={i}>{e}</div>)
    }
    return (
        <div>
            <div className="group cursor-pointer hover:border-blue-500 border-[1px] relative flex gap-4 rounded-md bg-white shadow-sm shadow-black/20 px-4 py-2">
                <div className="absolute invisible right-2 group-hover:visible flex gap-2" onClick={(e) => e.preventDefault()}>
                    <button type="button" className="w-[2rem] h-[2rem] bg-gray-100 hover:bg-gray-300 rounded-full">
                        <i className="fa-solid fa-edit"></i>
                    </button>
                    <button type="button" className="w-[2rem] h-[2rem] bg-gray-100 hover:bg-gray-300 rounded-full">
                        <i className="fa-solid fa-trash"></i>
                    </button>
                </div>
                <div>
                    <div className="grid gap-5">
                        <div className="text-[1em]">
                            <h1><b>Bolots Family</b> (Family ID)</h1>
                            <p className="text-[0.8em]">Joined Since: Yesterday</p>
                        </div>
                        <div className="text-[0.8em]">
                            <div>
                                <div>5 Members</div>
                                <div className="flex">
                                    {renderProfile(5)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FamilyCard