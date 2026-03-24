import PickPraser from '../../utility/pick-parser'
import global_stat_shader from '../assets/global-stat-shader'
import Percentage from '../basic/Percentage'
import Shader from '../basic/Shader'

export default function GlobalStat(){
    const pick_parser = new PickPraser()
    const stat = pick_parser.getStat()

    return <div
    className='flex items-center justify-center'
    style={{
        height: '25rem',
        maxWidth: '100vw',
        marginTop: '5vh',
        aspectRatio: 2.5
    }}>

        <Shader style={{
            width: '100%',
            height: '100%'
        }}>{global_stat_shader}</Shader>
        
        <Percentage divClassName='!absolute' spanClassName='big'>{stat ?? 0}</Percentage>

    </div>
}