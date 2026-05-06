import LinkLit from "../basic/LinkLit"
import BASE_URL from "../../utility/constants"
import { memo } from "react"
import lessons from "../assets/lessons"
import NavBar from "../simplifiers/NavBar"

const SelectTheory = memo(() => {
    return <main className="bg gap">
        <NavBar ix={1} />

        <div className="mt-8 flex items-center flex-col gap">
            {Object.keys(lessons).map((title) => {
                return <LinkLit to={`${BASE_URL}/theory?name=${title}`}
                key={title}
                linkClassName='text-white big py-4! px-16!'
                borderClassName='w-fit!'>
                    {title}
                </LinkLit>
            })}
        </div>
    </main>
})

export default SelectTheory
