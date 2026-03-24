import Select from '../basic/Select';
import PickPraser from '../../utility/pick-parser';

export default function GlobalWorstWords(){
    const pick_parser = new PickPraser()
    const worst_list = pick_parser.getWorst(null, 3)

    return <div
    className='relative flex gap-6 max-w-dvw flex-wrap justify-center px'
    style={{
        marginBottom: '13vh'
    }}>

        <div
        className='absolute top-0 left-0 bottom-0 right-0'
        style={{
            background: '#8c00ff70',
            transform: 'scale(1.1)',
            filter: 'blur(2.2rem)'
        }}></div>

        {worst_list.length && worst_list.map((word) => <Select key={word} spanClassName='big'>{word.slice(2)}</Select>)}
        
    </div>
}