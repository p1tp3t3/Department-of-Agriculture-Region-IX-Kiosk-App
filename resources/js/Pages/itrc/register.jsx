import AuthLayout from "@/Layouts/auth-layout";
import "../style.css";
import { useState, useEffect } from "react";
import StudentForm from "./register/student-form";
import PrefectForm from "./register/prefect-form";
import FacultyForm from "./register/faculty-form";
import ProgramHeadForm from "./register/program-head-form";
import NonTeachingStaffForm from "./register/non-teaching-staff-form";
import ParentForm from "./register/parent-form";
import Reload from "@/Components/other/reload";

const Register = (props) => {
    const [active, setActive] = useState(0),
        [reload, setReload] = useState(false),
        [reloadType, setReloadType] = useState(""),
        [reloadLabel, setReloadLabel] = useState("");

    const tab = () => {
        const t = [
            ["fa-solid fa-user-graduate", "Student"],
            ["fa-solid fa-user", "Prefect"],
            ["fa-solid fa-user-tie", "Faculty"],
            ["fa-solid fa-user-tie", "Program Head"],
            ["fa-solid fa-user", "Staff"],
            ["fa-solid fa-user", "Parent"],
        ];
        return t.map((e, i) => (
            <>
                <div key={i} className="w-full">
                    <input
                        type="radio"
                        id={`radion-${i + 1}`}
                        name="tabs"
                        onClick={() => setActive(i)}
                    />
                    <label
                        className={`tab ${
                            active === i ? "active" : ""
                        } hover flex gap-2`}
                        for={`radion-${i + 1}`}
                    >
                        <i className={e[0]}></i>
                        <div>{e[1]}</div>
                    </label>
                </div>
            </>
        ));
    };
    const loadRegister = (r, t, l) => {
        setReload(r);
        setReloadType(t);
        setReloadLabel(l);
    };
    const fadeEffect = (i) => {
        return active == i ? "opacity-0" : "opacity-1";
    };
    const isReload = () => {
        return reload ? "opacity-1 z-50" : "opacity-0";
    };
    return (
        <>
            <Reload
                transition={isReload()}
                type={reloadType}
                label={reloadLabel}
            />
            <AuthLayout user={props.user} authType={props.authType}>
                <div className="w-full py-10 grid gap-10">
                    <div className="flex gap-1">
                        <div className="flex gap-1 items-center">
                            <h1 className="text-[1.7em] ">
                                <b>Registration Form</b>
                            </h1>
                        </div>
                    </div>
                    <div className="grid gap-5">
                        <div className="register-tab">
                            <div className="t tabs text-[0.9em]">{tab()}</div>
                        </div>
                        <div className="flex overflow-auto overflow-y-hidden overflow-x-hidden shadow-gray-400 shadow-md rounded-md">
                            <Forms
                                active={active}
                                program={props.program}
                                fade={fadeEffect}
                                reload={loadRegister}
                            />
                        </div>
                    </div>
                </div>
            </AuthLayout>
        </>
    );
};
const Forms = (props) => {
    const form = [
        <StudentForm program={props.program} reload={props.reload} />,
        <PrefectForm reload={props.reload} />,
        <FacultyForm program={props.program} reload={props.reload} />,
        <ProgramHeadForm program={props.program} reload={props.reload} />,
        <NonTeachingStaffForm reload={props.reload} />,
        <ParentForm reload={props.reload} />,
    ];
    return form.map((e, i) => (
        <div
            key={i}
            className={`w-full shrink-0 grow-0 transition-[0.3s] ${props.fade(
                props.i
            )}`}
            style={{ translate: `${-100 * props.active}%` }}
        >
            <div className="px-20 py-14 bg-white">{e}</div>
        </div>
    ));
};
export default Register;
