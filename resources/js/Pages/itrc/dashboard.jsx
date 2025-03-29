import AuthLayout from "@/Layouts/auth-layout";
import QuantityCard from "@/Components/card/qntty-statistic-card";
import "../style.css";
import LineGraph from "@/Components/card/line-graph-statistic";
import DoughnutChart from "@/Components/card/pie-chart-statistic-card";
import LatestActiveAccountList from "@/Components/list/latest-active-user-list";
import NewUserList from "@/Components/list/new-user-list";
import DropdownField from "@/Components/other/dropdown";
import Calendar from "@/Components/schedule/calendar";

const ITRCDashboard = (props) => {
    const lineDataset = [
        {
            label: "Total",
            data: [10, 20, 30, 21, 10, 20, 30, 21, 10, 12, 32, 18],
            borderColor: "rgba(43, 255, 0, 0.445)",
            backgroundColor: "rgba(43, 255, 0, 0.445)",
            borderWidth: 2,
            pointRadius: 5,
            fill: true,
        },
    ];
    const doughnutDataset = [
        {
            data: [5, 3],
            backgroundColor: ["#36a2eb", "#ff6384"],
            hoverBackgroundColor: ["#2d91d1", "#ff4d6b"],
        },
    ];

    const yearDropdown = () => {
        const l = [];
        const date = new Date();
        for (let a = date.getFullYear(); a >= 2024; a--) {
            l.push({ value: a, label: a });
        }
        return l;
    };
    const userType = [
        { value: "itrc", label: "ITRC" },
        { value: "student", label: "Student" },
        { value: "prefect", label: "Prefect" },
        { value: "faculty", label: "Faculty" },
        { value: "program_head", label: "Program Head" },
        { value: "non_teaching_staff", label: "Non-Teaching Staff" },
        { value: "parent", label: "Parent" },
    ];
    return (
        <AuthLayout user={props.user} authType={props.authType}>
            <div className="w-full py-10">
                <div className="w-full">
                    <h1 className="text-[1.8em] font-[900]">Dashboard</h1>
                </div>
                <div className="w-full flex gap-5">
                    <div className="w-full flex flex-col gap-5 pt-6">
                        <div className="grid w-full gap-3 grid-cols-4">
                            <QuantityCard
                                h="h-[9rem]"
                                num={props.account_total}
                                icon="fa-users"
                                label="Total Registered Users"
                                color={{ bg: "bg-white" }}
                            />
                            <QuantityCard
                                h="h-[9rem]"
                                num={5}
                                label="New Registered Users"
                                icon="fa-user-plus"
                                color={{ bg: "bg-white" }}
                            />
                            <QuantityCard
                                h="h-[9rem]"
                                num={props.activate[0]}
                                icon="fa-user-check"
                                label="Activated Accounts"
                                color={{ bg: "bg-white" }}
                            />
                            <QuantityCard
                                h="h-[9rem]"
                                num={props.activate[1]}
                                icon="fa-user-lock"
                                label="Deactivated Accounts"
                                color={{ bg: "bg-white" }}
                            />
                            <QuantityCard
                                h="h-[9rem]"
                                num={props.account_total}
                                icon="fa-file"
                                label="Total Complaints"
                                color={{ bg: "bg-white" }}
                            />
                            <QuantityCard
                                h="h-[9rem]"
                                num={10}
                                label="Total Appointments"
                                icon="fa-calendar"
                                color={{ bg: "bg-white" }}
                            />
                            <QuantityCard
                                h="h-[9rem]"
                                num={2}
                                icon="fa-calendar-plus"
                                label="Upcoming Appointments"
                                color={{ bg: "bg-white" }}
                            />
                            <QuantityCard
                                h="h-[9rem]"
                                num={5}
                                icon="fa-door-open"
                                label="Total Gate Pass"
                                color={{ bg: "bg-white" }}
                            />
                        </div>
                        <div className="w-full flex justify-between gap-5">
                            <LineGraph
                                w="w-[70%]"
                                label={[
                                    "January",
                                    "February",
                                    "March",
                                    "April",
                                    "May",
                                    "June",
                                    "July",
                                    "August",
                                    "September",
                                    "October",
                                    "November",
                                    "December",
                                ]}
                                bg="bg-white"
                                title="Recent Total of Users"
                                dataset={lineDataset}
                                xTitle="Months"
                                yTitle="No.of Users"
                                side={
                                    <div className="flex gap-2">
                                        <DropdownField
                                            default={{
                                                value: "",
                                                label: "All Types",
                                            }}
                                            list={userType}
                                        />
                                        <DropdownField list={yearDropdown()} />
                                    </div>
                                }
                            />
                            <div className="w-[30%]">
                                <DoughnutChart
                                    dataset={doughnutDataset}
                                    label={["Active", "Inactive"]}
                                    title="Todays User Activity"
                                />
                            </div>
                        </div>
                        <div className="w-full flex gap-5">
                            <div className="w-full">
                                <div className="w-full bg-white rounded-md shadow-md shadow-black/20 px-4 py-5">
                                    <div>
                                        <h1>
                                            <b>Upcoming Appointments</b>
                                        </h1>
                                    </div>
                                    <Calendar />
                                </div>
                            </div>
                            <div className="w-[19rem] grid gap-3 flex-shrink-0">
                                <NewUserList active={props.new_users} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
};

export default ITRCDashboard;
/**
 * 
<div className="w-[19rem] flex-shrink-0">
    <LatestActiveAccountList active={props.active_users} />
</div>
 */
