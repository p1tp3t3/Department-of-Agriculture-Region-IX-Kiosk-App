import ProfilePic from "@/Components/other/profile-pic"

const NormalNotif = (props) => {
    return (
        <div className="w-full hover:bg-gray-300 cursor-pointer rounded-md">
            <div>
                <div className="flex p-2 gap-2">
                    <div className="flex-shrink-0">
                        <ProfilePic size={3.5} />
                    </div>
                    <div>
                        <div className="text-[0.8em] h-[3.9rem] overflow-hidden">
                            Lorem ipsum dolor, sit amet consectetur 
                            adipisicing elit. Corrupti et sapiente 
                            cum ex quae repudiandae, error voluptatibus 
                            ipsa. Ex earum maxime deserunt cumque 
                            recusandae dicta eos voluptates accusantium quis incidunt!
                        </div>
                        <div className="text-[0.7em]"><b>Just Now</b></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NormalNotif