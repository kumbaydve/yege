import Select from '../basic/Select';
import PickPraser from '../../utility/pick-parser';

export default function GlobalWorstWords(){
    const pick_parser = new PickPraser()
    const worst_list = pick_parser.getWorst(null, 3)

    return <section
    className='relative flex gap max-w-dvw flex-wrap justify-center px'
    style={{
        marginBottom: '13vh'
    }}>
        <div className='abs-fill'
        style={{
            background: '#8c00ff70',
            transform: 'scale(1.1)',
            filter: 'blur(2.2rem)'
        }}></div>

        {worst_list.length && worst_list.map((word) => {
            return <Select key={word}
            spanClassName='big'>
                {word.slice(2)}
            </Select>
        })}
    </section>
}
