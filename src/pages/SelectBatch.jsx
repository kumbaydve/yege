import { memo } from "react"
import { useLocation } from "react-router-dom"
import word_sets from '../assets/word-sets'
import BatchPreview from "../simplifiers/BatchPreview"
import LinkLit from "../basic/LinkLit"
import BASE_URL from "../../utility/constants"

const SelectBatch = memo(() => {
    const location = useLocation()
    const params = new URLSearchParams(location.search)

    const name = params.get('name')

    const text = word_sets[name]
    const words = text.split(/\r?\n|\r/)
    const n = parseInt(words[0])

    const batches = words.slice(2, n + 2).map((word, i) => <BatchPreview key={i} level={name} batch={i} word={word}/>)
    
    return <div className="bg">
        <div className="flex gap-6 flex-wrap justify-center max-w-dvw p pb-0">
            <LinkLit to={`${BASE_URL}/batch?level=${name}&batch=-1`} inner_style={{padding: '1rem 2.5rem'}}><h3>ВСЕ</h3></LinkLit>
            <LinkLit to={`${BASE_URL}/batch?level=${name}&batch=-2`} inner_style={{padding: '1rem 2.5rem'}}><h3>СЛОЖНЫЕ</h3></LinkLit>
        </div>

        <div className="flex flex-wrap justify-center gap-6 p max-w-dvw">
            {batches}
        </div>
    </div>
})

export default SelectBatch