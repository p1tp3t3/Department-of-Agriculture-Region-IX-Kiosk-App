import UpModal from "./up-modal"
import FormTextfield from "../other/form-input"
import UserProfileList from "../list/search-user-list"
import FormButton from "../other/button"
import './style.css'
import SearchBar from "../other/search-bar"
import { useState, useRef, useEffect } from "react"
import ProfilePic from "../other/profile-pic"
import DropdownField from "../other/dropdown"
import { sendData } from "../other/function"


const IssueComplaintModal = (props) => {
    
    const [search, setSearch] = useState(""),
          [isSearchFocus, focusSearch] = useState(false),
          [searchedStudent, setSearchedStudent] = useState(null)
    
    useEffect(() => {
        if(searchedStudent != null) {
            props.setter((prev) => ({
                ...prev,
                subject: searchedStudent[0].user_id
            }))
        }else {
            props.setter((prev) => ({
                ...prev,
                subject: ''
            }))
        }
    }, [searchedStudent, props.val.subject])

    const canvasRef = useRef(null)

    const [picture_list, setPictureList] = useState([]),
          [req_picture_list, setReqPictureList] = useState([]),

          [video_list, setVideoList] = useState([]),
          [req_video_list, setReqVideoList] = useState([])

          
    const handleSearch = (e) => {
        const val = e.target.value;
        setSearch(val);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const concatFileList = req_picture_list.concat(req_video_list)
        const f = new FormData()

        f.append('complainant', props.val.complainant)
        f.append('subject', props.val.subject)
        f.append('complaint_description', props.val.complaint_description)


        concatFileList.forEach((file, index) => {
            f.append(`evidence[${index}]`, file);
        })

        props.reload(true, "text-wait", "Your Complaint is Generating");
        sendData(
            `/complaint/create`,
            f,
            success,
            error
        );
    }
    const success = () => {
        props.reload(true, "success", "Complaint Generated Successfully");
        setTimeout(() => {
            props.reload(false);
        }, 3000);
    };
    const error = () => {
        props.reload(true, "error", "Failed to Generate Complaint");
        setTimeout(() => {
            props.reload(false);
        }, 3000);
    };
    const picChange = (e) => {
        const file = Array.from(e.target.files);
        const imageFiles = file.filter((f) => f.type.startsWith("image/"));

        const newImages = imageFiles.map((f) => ({
            src: URL.createObjectURL(f),
        }));

        setPictureList((prev) => [...prev, ...newImages]);
        setReqPictureList(file)
    }
    const vidChange = (e) => {
        const files = Array.from(e.target.files)
        const videoFiles = files.filter((file) => file.type.startsWith("video/"))
        const l = []
        videoFiles.forEach((file) => {
            const fileURL = URL.createObjectURL(file);
            generateThumbnail(fileURL, file);
        });
        setReqVideoList(files)
    }
    const generateThumbnail = (videoURL, file) => {
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

            setVideoList((prev) => [...prev, { id: prev.length + 1, src: thumbnailURL, file: file }]);

            video.remove();
        }
    }
    const removeFile = (type, id) => {
        switch(type) {
            case 'pic':
                const newPicList = picture_list.filter((val, index) => index !== id)
                setPictureList(newPicList)
                break
            case 'vid':
                const newVidList = video_list.filter((val, index) => index !== id)
                setVideoList(newVidList)
                break
        }
    } 
    const getSearchedStudent = (s) => {
        const f = props.student_list.filter((e, i) => e.id == s)
        setSearchedStudent(f)
        setSearch('')
    }

    const lvl = [
        { val: 1, label: "1st Year" },
        { val: 2, label: "2nd Year" },
        { val: 3, label: "3rd Year" },
        { val: 4, label: "4th Year" },
    ]
    return (
        <UpModal
            close={props.close}
            pd={["px-10", "py-4"]}
            isEnableOuterClose={props.close}
            closeModal={props.closeModal}
            bgColor="bg-white"
            w="w-[60rem]">
            <div className="w-full">
                <div className="pt-3 text-[1.2em]">
                    <h1><b>Who do you want to Complaint?</b></h1>
                </div>
                <div className="py-3 w-full">
                    <form onSubmit={handleSubmit} method="post">
                        <div>
                            <div className="grid gap-4">
                                <div className="grid gap-2">
                                    <div className="w-full relative">
                                        <SearchBar
                                            setSearch={setSearch}
                                            name="search_student"
                                            search={search}
                                            isFocus={isSearchFocus}
                                            plc="Search Student Name as Subject of Complaint"
                                            focus={focusSearch}
                                            handleSearch={handleSearch}
                                            w="w-full"
                                        />
                                        {search.length != 0 && (
                                            <div className="mt-2 absolute w-full z-10">
                                                <UserProfileList
                                                    list={props.student_list}
                                                    lim={6}
                                                    search={search}
                                                    withLink={false}
                                                    default="Student Not Found"
                                                    event={getSearchedStudent}
                                                />
                                            </div>
                                        )}
                                    </div>
                                    <div className="grid gap-1">
                                        {(searchedStudent) &&
                                        <>
                                        <div className="text-[0.8em]">Subjected Student:</div>
                                        <SubjectedStudent 
                                            src={`../user-assets/${searchedStudent[0].username}/profile-${searchedStudent[0].username}.jpg`}
                                            name={[searchedStudent[0].first_name, searchedStudent[0].last_name]}
                                            student={searchedStudent[0].student}
                                            unselect={setSearchedStudent}
                                        />
                                        </>}
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <div>
                                            <div>
                                                <div>Student Possible Offense</div>
                                                <DropdownField
                                                    default={{
                                                        value: "",
                                                        label: "Select Offense",
                                                    }}
                                                    name="offense"
                                                    list={lvl}
                                                />
                                                <div className="flex gap-2 flex-wrap">
                                                    <div className="text-[0.9em] px-2 py-1 bg-gray-200 rounded-md">
                                                        <div className="flex gap-3 items-center">Offense<button type="button"><i className="fa-solid fa-xmark"></i></button></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <FormTextfield 
                                        label="Complaint Description" 
                                        name="complaint_description" 
                                        id="complaint_reason"
                                        type="textarea"
                                        val={props.val.complaint_description}
                                        change={props.change} 
                                        req={true}
                                        color={{ border: 'border-blue-700', bg: 'bg-gray-200' }} 
                                    />
                                </div>
                            </div>
                            <div>
                                <div>Provide Strong Evidences (If Any)</div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <div>1 - 5 Pictures (jpg or png file only)</div>
                                        <div>
                                            {(picture_list.length != 0)
                                            ?
                                            <div className="grid gap-3">
                                                <label htmlFor="pic_file" className="bg-blue-500 text-white cursor-pointer w-[2rem] h-[2rem] rounded-full flex-shrink-0 grid place-items-center">
                                                    <i className="fa-solid fa-plus"></i>
                                                </label>
                                                <div className="flex gap-2 overflow-y-hidden overflow-x-auto pb-2">
                                                    {picture_list.map((e, i) => 
                                                        <div key={i}>
                                                            <File 
                                                                type='pic' 
                                                                i={i} 
                                                                removeFile={removeFile} 
                                                                src={e.src} 
                                                            />
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            :
                                            <label htmlFor="pic_file" className="cursor-pointer h-[10rem] grid place-items-center border-[4px] border-gray-500 border-dashed rounded-lg">
                                                <div className="text-[0.8em]">
                                                    Upload Pictures Here Up To 3MB
                                                </div>
                                            </label>
                                            }
                                            <input 
                                                type="file" 
                                                className="hidden" 
                                                id="pic_file" 
                                                name="pic_evidence"
                                                accept="image/png, image/jpeg" 
                                                multiple 
                                                onChange={picChange} 
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div>1 Video (mp4 or wav file only)</div>
                                        {(video_list.length != 0)
                                        ?
                                        <div className="grid gap-3">
                                            <label htmlFor="vid_file" className="bg-blue-500 text-white cursor-pointer w-[2rem] h-[2rem] rounded-full flex-shrink-0 grid place-items-center">
                                                <i className="fa-solid fa-plus"></i>
                                            </label>
                                            <div className="flex gap-2 overflow-y-hidden overflow-x-auto pb-2">
                                                {video_list.map((e, i) => 
                                                    <div key={i}>
                                                        <File 
                                                            type='vid' 
                                                            i={i} 
                                                            removeFile={removeFile} 
                                                            src={e.src} 
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        :
                                        <label htmlFor="vid_file" className="cursor-pointer h-[10rem] grid place-items-center border-[4px] border-gray-500 border-dashed rounded-lg">
                                            <div className="text-[0.8em]">
                                                Upload Videos Here Up To 40MB
                                            </div>
                                        </label>
                                        }
                                        <input 
                                            type="file" 
                                            className="hidden" 
                                            id="vid_file" 
                                            name="vid_evidence"
                                            accept="video/mp4, video/wav" 
                                            onChange={vidChange} 
                                        />
                                        <canvas ref={canvasRef} className="hidden"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex justify-end">
                            <FormButton label='Submit' type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </UpModal>
    )
}



const SubjectedStudent = (props) => {
    return (
        <div className=" grid relative">
            <div className="absolute">
                <button 
                    type="button" 
                    className="bg-gray-300 relative top-[-0.3rem] z-[5] w-[1.2rem] h-[1.2rem] rounded-full text-[0.8em]"
                    onClick={() => props.unselect(null)}
                >
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div className="flex gap-2">
                <div>
                    <ProfilePic 
                        activeBorderColor='border-white border-[3px]'  
                        src={props.src} 
                        size={2.5} 
                    />
                </div>
                <div className="text-[0.8em]">
                    <h1 className="text-[1.2em]"><b>{`${props.name[0]} ${props.name[1]}`}</b></h1>
                    <h1 className="text-[0.9em]">{`${props.student.program.name} ${props.student.year_level}`}</h1>
                </div>
            </div>
        </div>
    )
}


const File = (props) => {
    const t = (props.type == 'pic') ? 'pic' : 'vid'
    return (
        <div className="bg-gray-300 w-[5rem] h-[6rem] rounded-md overflow-hidden object-cover grid place-items-center relative p-1 flex-shrink-0">
            <div className="justify-self-end self-start z-10">
                <button 
                    type="button" 
                    className="bg-white w-[1.2rem] h-[1.2rem] rounded-full text-[0.8em]"
                    onClick={() => props.removeFile(t, props.i)}
                >
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
            <img src={props.src} alt="" srcset="" className="absolute" />
            {(t == 'pic')
            ?
            ''
            :
            <button type="button" className="cursor-default absolute w-[2rem] h-[2rem] text-white/80 bg-black/80 rounded-full z-10">
                <i className="fa-solid fa-play"></i>
            </button>}
        </div>
    )
}
export default IssueComplaintModal