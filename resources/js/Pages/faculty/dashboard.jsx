import AuthLayout from "@/Layouts/auth-layout";
import QuantityCard from "@/Components/card/qntty-statistic-card";
import BarGraph from "@/Components/card/bar-graph-statistic-card"
import '../style.css'   


const FacultyDashboard = (props) => {
    const actDataset = [
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
    return (
        <AuthLayout user={props.user} authType={props.authType}>
            <div className="w-full py-10">
                <div className="w-full">
                    <h1 className="text-[1.8em] font-[900]">Dashboard</h1>
                </div>
                <div className="w-full flex gap-5">
                    <div className="w-full flex flex-col gap-5 pt-6">
                        <div className="flex w-full gap-3">
                            <QuantityCard 
                                h='h-[9rem]' 
                                num={54}
                                icon='fa-user-check'
                                textColor='text-green-700'
                                label='Total Violations'
                                color={{bg: 'bg-white'}}/>
                            <QuantityCard 
                                h='h-[9rem]' 
                                num={12}
                                icon='fa-users'
                                label='Total Complaints'
                                textColor='text-blue-700'
                                color={{bg: 'bg-white'}}/>  
                            <QuantityCard 
                                h='h-[9rem]'
                                num={5}
                                label='Subjected in Complaint'
                                icon='fa-user-plus'
                                textColor='text-green-700'
                                color={{bg: 'bg-white'}}/>
                        </div>
                        <div className="flex w-full gap-3">
                            <QuantityCard 
                                h='h-[9rem]' 
                                num={12}
                                icon='fa-users'
                                label='Total Admissioned'
                                textColor='text-blue-700'
                                color={{bg: 'bg-white'}}/>  
                            <QuantityCard 
                                h='h-[9rem]' 
                                num={54}
                                icon='fa-user-check'
                                textColor='text-green-700'
                                label='Called-In'
                                color={{bg: 'bg-white'}}/>
                            <QuantityCard 
                                    h='h-[9rem]'
                                    num={5}
                                    label='Referred'
                                    icon='fa-user-plus'
                                    textColor='text-green-700'
                                    color={{bg: 'bg-white'}}/>
                        </div>
                        <div className="w-full flex gap-5">
                            <BarGraph 
                                w='w-[50%]' 
                                label={
                                    ["January", "February", "March", 
                                     'April', 'May', 'June', 'July', 
                                     'August', 'September', 'October', 
                                     'November', 'December']
                                }
                                bg='bg-white'
                                title='Recent Complaints Issued'
                                dataset={actDataset} 
                                yTitle='No. of Complaints'
                            />
                            <BarGraph 
                                w='w-[50%]' 
                                label={
                                    ["January", "February", "March", 
                                     'April', 'May', 'June', 'July', 
                                     'August', 'September', 'October', 
                                     'November', 'December']
                                }
                                bg='bg-white'
                                title='Recent Subjected in Complaint'
                                dataset={actDataset} 
                                yTitle='No. of Complaints'
                            />
                        </div>
                    </div> 
                </div>
            </div>
        </AuthLayout>
    )
}
export default FacultyDashboard