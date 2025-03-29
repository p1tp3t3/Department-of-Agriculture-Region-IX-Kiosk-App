import ProfilePic from "../other/profile-pic"
import { useState } from "react"

const GatePassRequestList = (props) => {
    return (
        <div className="w-full px-5 py-3 bg-white rounded-md shadow-black/20 shadow-sm">
            <table className="w-full border-collapse">
                <thead className="border-b-[1px] border-gray-400">
                    <th className="py-3 text-start">No.</th>
                    <th className="py-3 text-start">User</th>
                    <th className="py-3 flex gap-4 items-center">
                        <div>Request Since</div>
                        <div className="flex-shrink-0">
                            <button
                                type="button"
                                className="w-[1.5rem] h-[1.5rem] text-[0.8em] rounded-full hover:bg-gray-300"
                                onClick={() => {}}
                            >
                                <i className="fa-solid fa-arrow-up"></i>
                            </button>
                        </div>
                    </th>
                    <th className="py-3 text-start">Action</th>
                </thead>
                <tbody>
                    <Row />
                    <Row />
                    <Row />
                    <Row />
                    <Row />
                </tbody>
            </table>
        </div>
    )
}
const Row = (props) => {
    const btn = "px-2 py-1 text-[0.8em] text-white rounded-md"
    return (
        <tr>
            <td className="py-2 text-[0.9em]">
                {`1`}
            </td>
            <td className="py-2">
                <div className="flex gap-5 items-center">
                    <ProfilePic
                        size={2.5}
                        src={`../user-assets/${'kris62'}/profile-${'kris62'}.jpg`}
                        showActive={false}
                        activeBorderColor="border-white border-[3px]"
                    />
                    <div>
                        <h1 className="text-[0.9em] font-[900]">{`${
                            'first name'
                        } ${
                            'last name'
                        }`}</h1>
                        <p className="text-[0.7em]">{`${'username'}`}</p>
                    </div>
                </div>
            </td>
            <td className="py-2 text-[0.9em]">
                {`yesterday`}
            </td>
            <td className="py-2 text-[0.9em] flex gap-2">
                <button type="button">
                    <i className="fa-solid fa-eye"></i>
                </button>
                <button type="button" className={`${btn} bg-green-500`}>
                    Approve
                </button>
                <button type="button" className={`${btn} bg-red-500`}>
                    Disapprove
                </button>
            </td>
        </tr>
    )
}
export default GatePassRequestList