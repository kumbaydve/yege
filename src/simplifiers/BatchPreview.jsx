import Percentage from "../basic/Percentage"
import StatBar from "../basic/StatBar"
import LinkLit from "../basic/LinkLit"
import PickPraser from "../../utility/pick-parser"
import BASE_URL from '../../utility/constants'

export default function BatchPreview({level, batch, word}){
    const pick_parser = new PickPraser()
    const stat = pick_parser.getStat(level, batch)
    const split_ix = word.lastIndexOf(' ')

    return <LinkLit to={`${BASE_URL}/batch?level=${level}&batch=${batch}`}>
        {/* <span className="font-bold text-white big">{batch + 1}. {word.split(' ')[0].replace('.', word.split(' ')[1]).toUpperCase()}</span> */}
        <span className="font-bold text-white big">{batch + 1}. {word.slice(0, split_ix).replace('.', word.slice(split_ix + 1)).toUpperCase()}</span>

        <div className="flex items-center w-full mt-4 gap-6">
            <StatBar>{stat}</StatBar>
            <Percentage spanClassName='big' blur={0.7} opacity={0.7}>{stat}</Percentage>
        </div>
    </LinkLit>
}