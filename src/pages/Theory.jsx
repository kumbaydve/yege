import { memo } from "react"
import { useLocation } from "react-router-dom"
import lessons from "../assets/lessons"

const Theory = memo(() => {
    const location = useLocation()
    const params = new URLSearchParams(location.search)

    const name = params.get('name')

    return <div className="bg text-black text-2xl p"
    style={{background: 'white'}}>
        <div className="lesson-container">
            {lessons[name]()}
        </div>
    </div>
})

export default Theory