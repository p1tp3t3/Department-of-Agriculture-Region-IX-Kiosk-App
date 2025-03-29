import AuthLayout from "@/Layouts/auth-layout"
import QuantityCard from "@/Components/card/qntty-statistic-card"
import '../style.css'   
import LineGraph from "@/Components/card/line-graph-statistic"
import DoughnutChart from "@/Components/card/pie-chart-statistic-card"
import DropdownField from "@/Components/other/dropdown"
import Calendar from "@/Components/schedule/calendar"



const PrefectDashBoard = (props) => {
    const lineDataset = [
        {
            label: "Total",
            data: [10, 20, 30, 21, 10, 20, 30, 21, 10, 12, 32, 18],
            borderColor: "rgba(43, 255, 0, 0.445)", 
            backgroundColor: "rgba(43, 255, 0, 0.445)", 
            borderWidth: 2,
            pointRadius: 5,
            fill: true,
        }
    ]
    const doughnutDataset = [
        {
            data: [10, 20],
            backgroundColor: ["#36a2eb", "#ff6384"],
            hoverBackgroundColor: ["#2d91d1", "#ff4d6b"],
        }
    ]

    const yearDropdown = () => {
        const l = []
        const date = new Date()
        for(let a = date.getFullYear(); a >= 2024; a--) {
            l.push({ value: a, label: a })
        }
        return l
    }
    return (
        <AuthLayout user={props.user}>
            <div className="w-full py-10">
                <div className="w-full">
                    <h1 className="text-[1.8em] font-[900]">Dashboard</h1>
                </div>
                <div className="w-full flex gap-5">
                    <div className="w-full flex flex-col gap-5 pt-6">
                        <div className="grid w-full gap-3 grid-cols-4">
                            <QuantityCard 
                                h='h-[9rem]' 
                                num={10}
                                icon='fa-file'
                                label='Total Complaints'
                                color={{bg: 'bg-white'}}
                            />  
                            <QuantityCard 
                                h='h-[9rem]'
                                num={10}
                                label='Total Appointments'
                                icon='fa-calendar'
                                color={{bg: 'bg-white'}}
                            />
                            <QuantityCard 
                                h='h-[9rem]' 
                                num={2}
                                icon='fa-calendar-plus'
                                label='Upcoming Appointments'
                                color={{bg: 'bg-white'}}
                            />
                            <QuantityCard 
                                h='h-[9rem]' 
                                num={5}
                                icon='fa-door-open'
                                label='Total Gate Pass' 
                                color={{bg: 'bg-white'}}
                            />
                        </div>
                        <div className="w-full flex justify-between gap-5">
                            <LineGraph 
                                w='w-[70%]' 
                                label={
                                    ['January', 'February', 'March', 
                                     'April', 'May', 'June', 
                                     'July', 'August', 'September', 
                                     'October', 'November', 'December']
                                }
                                bg='bg-white'
                                title='Recent Total of Users'
                                dataset={lineDataset} 
                                xTitle='Months'
                                yTitle='No.of Users'
                                side={<DropdownField list={yearDropdown()} />}
                            />
                            <div className="w-[30%]">
                                <DoughnutChart 
                                    dataset={doughnutDataset}
                                    label={['Active', 'Inactive']} 
                                    title='Todays User Activity' 
                                />
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </AuthLayout>
    )
}
export default PrefectDashBoard