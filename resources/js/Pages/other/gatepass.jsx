import { useState, useRef } from "react";
import AuthLayout from "@/Layouts/auth-layout";
import RequestGatePassModal from "@/Components/modal/request-gatepass-modal";
import GatePassList from "@/Components/list/gate-pass-list";
import bg from "../../images/QR_code_for_mobile_English_Wikipedia.svg.png";


const GatePass = (props) => {
    const [requestGatePass, openRequestGatePass] = useState(false);
    const [data, setData] = useState({
        reason: "",
        other_reason: "",
    });

    const gatepassRef = useRef(null);

    /*
    const handlePrint = () => {
        if (!gatepassRef.current) {
            console.error("Error: gatepassRef is null!");
            return;
        }
    
        const printContent = gatepassRef.current.cloneNode(true);
        
        const iframe = document.createElement("iframe");
        iframe.style.position = "absolute";
        iframe.style.width = "0px";
        iframe.style.height = "0px";
        iframe.style.border = "none";
        iframe.style.visibility = "hidden";
    
        document.body.appendChild(iframe);
    
        const doc = iframe.contentWindow.document;
        const tailwindStyles = [...document.styleSheets]
                                .map(styleSheet => {
                                    try {
                                        return [...styleSheet.cssRules].map(rule => rule.cssText).join("\n");
                                    } catch (e) {
                                        return "";
                                    }
                                })
                                .join("\n");
        doc.open();
        doc.write(`
            <style>
                @page { 
                    size: auto; 
                    margin: 0;  
                /*}
                body { 
                    font-family: Arial, sans-serif; 
                    margin: 0; padding: 10rem; 
                }
                @media print {
                    body { visibility: visible; }
                    iframe { display: none; }
                }
                    ${tailwindStyles}
            </style>
            <body>
                ${printContent.outerHTML}
            </body>
        `);
        doc.close();
    
        iframe.contentWindow.focus();
        iframe.contentWindow.print();
        setTimeout(() => document.body.removeChild(iframe), 500);
    };*/

    return (
        <>
            <RequestGatePassModal
                close={requestGatePass}
                closeModal={openRequestGatePass}
                val={data}
                setter={setData}
                pd={["px-5", "py-7"]}
                isEnableOuterClose={true}
            />
            <AuthLayout user={props.user} authType={props.authType}>
                <div className="w-full py-10">
                    <div className="w-full grid gap-10 relative">
                        <div className="flex justify-between items-center">
                            <h1 className="text-[1.7em]">
                                <b>Gate Pass</b>
                            </h1>
                            <button
                                type="button"
                                className="px-4 py-2 bg-blue-700 text-[0.9em] text-white rounded"
                                onClick={() => openRequestGatePass(true)}
                            >
                                Request Gate Pass
                            </button>
                        </div>
                        <div className="w-full">
                            <div className="w-full px-5 py-3 bg-white rounded-md shadow-black/20 shadow-sm">
                                <div className="flex justify-between gap-10">
                                    <div className="w-[25rem] flex-shrink-0">
                                        <div ref={gatepassRef} className="w-full h-[25rem] grid place-items-center relative bg-white">
                                            <img src={bg} alt="Gate Pass" className="h-full absolute object-cover" />
                                        </div>
                                        <div className="grid gap-2 text-center">
                                            <p>This will expire on Jan 11, 2026</p>
                                            <div className="flex gap-2 justify-center">
                                                <a
                                                    href={bg}
                                                    download="GatePass_QRCode.png"
                                                    className="py-2 px-3 bg-blue-600 text-white text-[0.9em] rounded-lg"
                                                >
                                                    <i className="fa-solid fa-download"></i> Download Gate Pass QRCode
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <GatePassList type={props.user.user_type} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthLayout>
        </>
    );
};

export default GatePass;
