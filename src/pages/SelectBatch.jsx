import { memo } from "react"
import { useLocation } from "react-router-dom"
import word_sets from '../assets/word-sets'
import BatchPreview from "../simplifiers/BatchPreview"
import LinkLit from "../basic/LinkLit"
import BASE_URL from "../../utility/constants"
import NavBar from "../simplifiers/NavBar"

const SelectBatch = memo(() => {
    const location = useLocation()
    const params = new URLSearchParams(location.search)

    const name = params.get('name')

    const text = word_sets[name]
    const words = text.split(/\r?\n|\r/)
    const n = parseInt(words[0])

    return <main className="bg gap p-15!">
        <NavBar ix={-1} />

        <div className="flex gap flex-wrap justify-center max-w-dvw">
            <LinkLit to={`${BASE_URL}/batch?level=${name}&batch=-1`}
            linkClassName='py-4 px-10'>
                <span className="font-bold text-white big">ВСЕ</span>
            </LinkLit>

            <LinkLit to={`${BASE_URL}/batch?level=${name}&batch=-2`}
            linkClassName='py-4 px-10'>
                <span className="font-bold text-white big">СЛОЖНЫЕ</span>
            </LinkLit>
        </div>

        <div className="flex flex-wrap justify-center gap max-w-dvw">
            {words.slice(2, n + 2).map((word, i) => {
                return <BatchPreview key={i} level={name} batch={i} word={word} />
            })}
        </div>
    </main>
})

export default SelectBatch
