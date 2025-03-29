import UpModal from "./up-modal"
import FormButton from "../other/button"
import './style.css'

const FilterModal = (props) => {
    
    function renderFilter(s) {
        const l = []
        for(let a = 0; a < s; a++) {
            l.push(
                <div 
                    className="filter-border transition-all rounded-[10rem] text-[0.9em] overflow-hidden border-2 grid place-items-center border-gray-300 h-[2rem]">
                    <input type="radio" className="hidden" name="val" id={`val`} />
                    <label className="cursor-pointer py-1 px-4 w-full h-full" htmlFor={`val`}>Val{a + 1}</label>
                </div>
            )
        }
        return l.map((e, i) => <span key={i}>{e}</span>)
    }

    return (
        <UpModal
            close={props.close} 
            closeModal={props.closeModal}
            isEnableOuterClose={props.isEnableOuterClose}
            pd={props.pd}
            bgColor='bg-white'
            w='w-[35rem]'>
            <div className="w-full" id="filter-modal">
                <div>
                    <div className="w-full grid gap-3">
                        <div className="text-[1.5em]">
                            <h1><b>Filter</b></h1>
                        </div>
                        <div className="w-full grid gap-2">
                            <div>
                                <div className="text-[0.9em]">
                                    <p><b>Category 1</b></p>
                                </div>
                                <div className="w-full">
                                    <div className="flex flex-wrap w-full gap-2">
                                        {renderFilter(10)}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="text-[0.9em]">
                                    <p><b>Category 2</b></p>
                                </div>
                                <div className="w-full">
                                    <div className="flex flex-wrap w-full gap-2">
                                        {renderFilter(10)}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex justify-end">
                            <FormButton type="button" label='Apply' />
                        </div>
                    </div>
                </div>
            </div>
        </UpModal>
    )
}

/**
 * 
 * const category = [
*      {
*           category_label: 'Users',
            structure_type: 'button',
*           filters: [
*               { val: 'student', label: 'Student' },
*               { val: 'faculty', label: 'Faculty' },
*               { val: 'non_teaching_staff', label: 'Non Teaching Staff' }
*           ]
*      },
       {
*           category_label: 'Activation Status',
            structure_type: 'radio',
*           filters: [
*               { val: 'activate', label: 'Activated' },
*               { val: 'deactivate', label: 'Deactivated' }
*           ]
*      }
 * ]
 */
export default FilterModal