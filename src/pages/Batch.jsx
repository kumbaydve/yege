import { useLocation } from "react-router-dom"
import PickPraser from "../../utility/pick-parser"
import WordParser from "../../utility/word-parser"
import LevelCompleted from "../simplifiers/LevelCompleted"
import { useState } from "react"
import { useRef } from "react"
import { useEffect } from "react"
import WordPair from "../simplifiers/WordPair"
import { memo } from "react"
import word_sets from "../assets/word-sets"

const Batch = memo(() => {
    const location = useLocation()
    const params = new URLSearchParams(location.search)

    const [ix, setIx] = useState(-1)
    const [right, setRight] = useState(-1)
    const animating = useRef(false)
    
    const level = params.get('level')
    const batch = parseInt(params.get('batch'))

    const pick_parser = useRef(null)
    const word_parser = useRef(null)

    useEffect(() => {
        const text = word_sets[level]

        pick_parser.current = new PickPraser()
        word_parser.current = new WordParser(level, batch, text, pick_parser.current)

        word_parser.current.shuffle()

        setIx(0)
    }, [])

    const next = () => {
        setIx(was => was + 1)
        setRight(-1)

        animating.current = false
    }

    const pick = (i) => {
        if (animating.current) {return}
        
        if (word_parser.current.pair(ix)[3] == word_parser.current.variants[i]){
            setTimeout(next, 300)
        }
        else{
            if (i === 1) {setRight(0)}
            else {setRight(1)}

            setTimeout(next, 1200)
        }

        animating.current = true
        pick_parser.current.update(level, word_parser.current.pair(ix)[1], word_parser.current.pair(ix)[2], word_parser.current.pair(ix)[3], word_parser.current.variants[i])
        
        if (word_parser.current.ended(ix + 1)){
            pick_parser.current.save()
        }
    }

    return <main className='bg max-w-dvw'>
        {ix === -1 ?
        <h1 className="font-bold text-white big">...ПОДОЖДИТЕ...</h1>
        : (
            ix === word_parser.current.words.length ?
            <LevelCompleted />
            :
            <WordPair
            word={word_parser.current.pair(ix)[2]}
            variants={word_parser.current.variants}
            pick={pick}
            right={right} />
        )}
    </main>
})

export default Batch
