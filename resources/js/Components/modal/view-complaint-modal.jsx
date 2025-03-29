import UpModal from "./up-modal"
import { useState, useEffect, useRef } from "react"
import { getData } from "../other/function"
import ProfilePic from "../other/profile-pic"


const ViewComplaintModal = (props) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        if(props.close) {
            getComplaintInfo()
        }else {
            setData(null)
        }
    }, [props.close])


    const getComplaintInfo = () => {
        const id = props.complainant
        getData('post', `/complainant/get/${id}`, {}, setData, ()=>{}, ()=>{})
    }
    const path = window.location.pathname.includes('prefect') ? '../' : '../../'
    
    return (
        <UpModal 
            close={props.close} 
            closeModal={props.closeModal}
            isEnableOuterClose={props.isEnableOuterClose}
            pd={props.pd}
            bgColor='bg-white'
            w='w-[40rem]'> 
            <div className="w-full">
                <div className="grid gap-3">
                    {(data != null) &&
                    <>
                    <div className="text-[1.4em] text-center">
                        <h1><b>{data.user.first_name}'s Complaint</b></h1>
                    </div>
                    <div className="grid gap-5">
                        <div className="grid gap-2">
                            <ProfileSection
                                title='Complainant'
                                name={`${data.user.first_name} ${data.user.last_name}`}
                                src={`${path}user-assets/${data.user.username}/profile-${data.user.username}.jpg`}
                                type={data.user.user_type} />
                            <ProfileSection 
                                title='Subject'
                                src={`${path}user-assets/${data.subject.username}/profile-${data.subject.username}.jpg`}
                                name={`${data.subject.first_name} ${data.subject.last_name}`}
                                type={data.subject.user_type} />
                        </div>
                        <div>
                            <OffensetList />
                        </div>
                        <div>
                            <div className="text-[1em]">
                                <p><b>Reason about the Complaint</b></p>
                            </div>
                            <div className="text-[0.9em]">
                                <p>{data.complaint_description}</p>
                            </div>
                        </div>
                        <div className="grid gap-5">
                            <div className="text-[1em]">
                                <p><b>Additional Evidences</b></p>
                            </div>
                            <div>
                                <FileListSection 
                                    type='pic' 
                                    username={data.user.username}
                                    list={data.complaint_evidence_file} 
                                />
                                <FileListSection 
                                    type='vid' 
                                    username={data.user.username}
                                    list={data.complaint_evidence_file} 
                                />
                            </div>
                        </div>
                    </div>
                    </>}
                </div>
            </div>
        </UpModal>
    )
}
const ProfileSection = ({ title, src, name, type }) => {
    return (
        <div>
            <div className="text-[1em]"><b>{title}</b></div>
            <div className="flex gap-2">
                <div><ProfilePic src={src} size={2.5}/></div>
                <div className="grid content-between">
                    <div className="text-[0.9em]"><h1>{name}</h1></div>
                    <div className="text-[0.8em]"><p>{type}</p></div>
                </div>
            </div>
        </div>
    )
}
const OffensetList = ({ list }) => {
    const l = "px-2 py-1 bg-gray-300 rounded-md"
    return (
        <div>
            <div className="text-[1em]">
                <p><b>Possible Offenses</b></p>
            </div>
            <div className="flex flex-wrap text-[0.8em] gap-2">
                <div className={l}>Offense</div>
                <div className={l}>Offense</div>
                <div className={l}>Offense</div>
                <div className={l}>Offense</div>
                <div className={l}>Offense</div>
            </div>
        </div>
    )
}
const FileListSection = ({ type, username, list }) => {
    const canvasRef = useRef(null)

    const [lst, setList] = useState(list)

    useEffect(() => {
        lst.forEach((e, i) => {
            const path = window.location.pathname.includes('prefect') ? '../' : '../../'
            const fileName = `${path}user-assets/${username}/complaints/case-no-${e.complaint_case_number}/evidence/${e.evidence_file}`

            generateThumbnail(fileName, (thumbnailURL) => {
                setList((prev) => {
                    return prev.map((item) => 
                        item.evidence_file === e.evidence_file ? { ...item, src: thumbnailURL } : item
                    );
                })
            })
        })
    }, [])

    const generateThumbnail = (videoURL, callback) => {
        const video = document.createElement("video");
        video.src = videoURL;
        video.crossOrigin = "anonymous";
        video.muted = true;
        video.currentTime = 1;
        video.style.display = "none";

        video.onloadeddata = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;

            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

            const thumbnailURL = canvas.toDataURL("image/png");
            callback(thumbnailURL);
            video.remove();
        };
    }

    const t = (type == 'pic') ? 'Pictures' : 'Video'
    
    const displayAll = () => {
        const path = window.location.pathname.includes('prefect') ? '../' : '../../'

        return (
            (lst != null)
            ?
            lst.map((e, i) => {
                const fileName = `${path}user-assets/${username}/complaints/case-no-${e.complaint_case_number}/evidence/${e.evidence_file}`

                return (
                    (e.file_type == type)
                    ?
                    <div className="w-[12rem] cursor-pointer h-[10rem] flex-shrink-0 object-cover grid place-items-center relative">
                        <img src={(e.file_type == 'vid') ? e.src : fileName} alt="" className="absolute" />
                        {(type == 'vid')
                        ?
                        <button type="button" className="absolute w-[4rem] h-[4rem] text-[1.5em] text-white/80 bg-black/80 rounded-full z-10">
                            <i className="fa-solid fa-play"></i>
                        </button>
                        :
                        ''}
                    </div>
                    :
                    ''
                )
            })
            :
            <div className="cursor-pointer w-[12rem] h-[10rem] object-cover bg-gray-400 grid place-items-center relative">
                <div>No Records Yet</div>
            </div>         
        )
    }
    return (
        <div className="w-full">
            <div className="text-[1em]">
                <p><b>{t}</b></p>
            </div>
            <div className="grid w-full">
                <div className="flex text-[0.9em] gap-2 w-full overflow-hidden overflow-x-auto">
                    {displayAll()}
                </div>
            </div>
            <canvas ref={canvasRef} className="hidden"></canvas>
        </div>
    )
}
export default ViewComplaintModal