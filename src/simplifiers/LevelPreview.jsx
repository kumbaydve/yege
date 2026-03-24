import Percentage from "../basic/Percentage";
import Select from "../basic/Select";
import StatBar from "../basic/StatBar";
import LinkLit from '../basic/LinkLit';
import PickPraser from "../../utility/pick-parser";
import BASE_URL from "../../utility/constants";

export default function LevelPreview({children}){
    let words

    const pick_parser = new PickPraser()
    const stat = pick_parser.getStat(children)
    const worst_words = pick_parser.getWorst(children, 3)

    if (worst_words.length !== 0){
        words = worst_words.map((word) => <Select key={word} color='#ccc' spanClassName='medium'>{word.slice(2)}</Select>)
    }
    else{
        words = <span className="text-gray-500 small">Неправильных слов нет</span>
    }

    return <LinkLit to={`${BASE_URL}/select-batch?name=${children}`}>
        <span className="font-bold text-white big">{children.toUpperCase().replace('_', ' / ')}</span>
        
        <div className="flex flex-wrap justify-center mt-6 mb-2 w-full" style={{
            columnGap: '1rem',
            padding: '0 1rem'
        }}>
            {words}
        </div>

        <div className="flex items-center w-full gap-6 mt-auto">
            <StatBar>{stat}</StatBar>
            <Percentage blur={0.7} opacity={0.7} spanClassName='big'>{stat}</Percentage>
        </div>
    </LinkLit>
}