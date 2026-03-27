import PickPraser from '../../utility/pick-parser'
import global_stat_shader from '../assets/global-stat-shader'
import Percentage from '../basic/Percentage'
import Shader from '../basic/Shader'

export default function GlobalStat(){
    const pick_parser = new PickPraser()
    const stat = pick_parser.getStat()

    return <section
    className='flex items-center justify-center max-w-dvw'
    style={{
        height: '25rem',
        marginTop: '5vh',
        aspectRatio: 2.5
    }}>
        <Shader className='w-full h-full'>
            {global_stat_shader}
        </Shader>

        <Percentage divClassName='absolute!'
        spanClassName='huge'>
            {stat}
        </Percentage>
    </section>
}
