import { useState } from "react";


export const CheckSlider = (props: { completed: boolean }) => {
    const [isChecked, setIsChecked] = useState(props.completed);

    const toggleChecked = () => {
        setIsChecked(!isChecked);
    }

    return (
        <div onClick={toggleChecked}>
            <label htmlFor="switch" className="flex items-center justify-between w-14 h-7 bg-merino-50 rounded-full border-2 border-merino-300 shadow-inner shadow-merino-200">
                <input type="checkbox" checked={isChecked} className="switch hidden peer" onChange={toggleChecked} id="switch" />
                <span className="slider
                    relative w-5 h-5
                    border-2 transition-all shadow shadow-merino-200
                    bg-red-800 rounded-full border-red-900 left-1 peer-checked:bg-green-500 peer-checked:border-green-600 peer-checked:left-7 "></span>
            </label>
        </div>
    )
}
