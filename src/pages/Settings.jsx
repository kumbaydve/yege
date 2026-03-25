import { memo } from "react";
import NavBar from "../simplifiers/NavBar";
import { useId } from "react";
import BorderLit from "../basic/BorderLit";

const Settings = memo(() => {
    const id = useId()

    let default_font_size = 1

    const local_font_size = localStorage.getItem('font-size')

    if (local_font_size){
        default_font_size = parseFloat(local_font_size)
    }

    return <div className="bg gap-4">
        <NavBar ix={2} />

        <label className="text-white big" htmlFor={id}>Выберите размер шрифта</label>

        <BorderLit className='r w-30 h-13'>
            <input type="number"
            name="font-size"
            id={id}
            defaultValue={default_font_size}
            onChange={text => {
                const new_font_size = Math.max(0.1, Math.min(10, parseFloat(text.target.value)))

                if (new_font_size){
                    document.documentElement.style.fontSize = `${new_font_size}rem`
                    localStorage.setItem('font-size', new_font_size.toString())
                }
            }}
            className="black w-full h-full r outline-none medium text-center text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
        </BorderLit>
    </div>
})

export default Settings