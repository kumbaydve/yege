import Percentage from "../basic/Percentage";
import Select from "../basic/Select";
import StatBar from "../basic/StatBar";
import LinkLit from '../basic/LinkLit';
import { useRef } from "react";
import { useEffect } from "react";
import PickPraser from "../../utility/pick-parser";
import { useState } from "react";
import BASE_URL from "../../utility/constants";

export default function LevelPreview({children}){
    const [stat_ready, setStatReady] = useState(false)
    const stat = useRef(null)
    const words = useRef(null)

    useEffect(() => {
        const pick_parser = new PickPraser()
        stat.current = pick_parser.getStat(children)
        const worst = pick_parser.getWorst(children, 3)
        
        if (worst.length !== 0){
            words.current = worst.map((word) => <Select key={word} color='#ccc' spanClassName='medium'>{word.slice(2)}</Select>)
        }
        else{
            words.current = <span className="text-gray-500 small">Неправильных слов нет</span>
        }

        setStatReady(true)
    }, [])

    return <LinkLit to={`${BASE_URL}/select-batch?name=${children}`}>

        <span className="font-bold text-white big">{children.toUpperCase().replace('_', ' / ')}</span>
        
        <div className="flex flex-wrap justify-center mt-6 mb-2 w-full" style={{
            columnGap: '1rem',
            padding: '0 1rem'
        }}>
            {stat_ready && words.current}
        </div>

        <div className="flex items-center w-full gap-6">
            {stat_ready && <StatBar>{stat.current}</StatBar>}
            {stat_ready && <Percentage blur={0.7} opacity={0.7} spanClassName='big'>{stat.current}</Percentage>}
        </div>
    </LinkLit>
}