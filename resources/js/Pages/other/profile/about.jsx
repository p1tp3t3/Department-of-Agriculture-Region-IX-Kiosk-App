import React from "react"

const About = (props) => {
    const breakLine = () => {
        return ((props.data.bio_description != null)
                ?
                props.data.bio_description.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                    {line}
                    <br />
                    </React.Fragment>
                ))
                :'')
    }
    return (
        <>
        <div className="flex w-full justify-between gap-5">
            <div className="w-[38rem] flex-shrink-0">
                <div className=" bg-white flex flex-col gap-5 px-5 py-5 shadow-black/20 shadow-md flex-shrink-0">
                    <div className="grid gap-2">
                        <h1 className="text-[1.2em]">
                            <b>Intro</b>
                        </h1>
                        <div className="text-[1em]">
                            {breakLine()}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white px-5 py-5 w-full shadow-md shadow-black/20">
                <div className="grid gap-5">
                    <div className="text-[1.2em]">
                        <h1>
                            <b>Basic Information</b>
                        </h1>
                    </div>
                    <div className="text-[1em] flex flex-col gap-2">
                        <div>
                            <i className="fa-solid fa-user"></i>{` ${props.data.user_id}`}
                        </div>
                        <div>
                            <i className={`fa-solid fa-${(props.data.sex).toLowerCase()}`}></i>{` ${props.data.sex}`}
                        </div>
                        <div>
                            <i className="fa-solid fa-clock"></i>{` ${props.data.age} `}Years Old
                        </div>
                        <div>
                            <i className="fa-solid fa-user"></i>{` ${props.data.user_type}`}
                        </div>
                        <div>
                            <i className="fa-solid fa-house"></i>{` ${props.data.current_address}`}
                        </div>
                        <div>
                            <i className="fa-solid fa-house"></i>{` ${props.data.permanent_address}`}
                        </div>
                        <div>
                            <i className="fa-solid fa-house"></i>{` ${props.data.email}`}
                        </div>
                        <div>
                            <i className="fa-solid fa-phone"></i>{` ${props.data.phone_number}`}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default About