import LinkLit from "../basic/LinkLit"
import BASE_URL from "../../utility/constants"
import { memo } from "react"
import lessons from "../assets/lessons"

const SelectTheory = memo(() => {
    return <div className="bg gap-6">
        {Object.keys(lessons).map((title) => {
            return <LinkLit to={`${BASE_URL}/theory?name=${title}`}
            key={title}
            className='text-white text-3xl'
            inner_style={{padding: '1rem 2.5rem'}}
            style={{width: 'fit-content'}}>
                {title}
            </LinkLit>
        })}
    </div>
})

export default SelectTheory