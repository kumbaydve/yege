import { memo } from "react"
import { useLocation } from "react-router-dom"
import lessons from "../assets/lessons"

const Theory = memo(() => {
    const location = useLocation()
    const params = new URLSearchParams(location.search)

    const name = params.get('name')

    return <main className="bg text-black p bg-white!">
        <article className="lesson-container">
            {lessons[name]()}
        </article>
    </main>
})

export default Theory
