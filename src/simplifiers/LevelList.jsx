import word_sets from '../assets/word-sets'
import LevelPreview from './LevelPreview'

export default function LevelList(){
    const level_names = Object.keys(word_sets)

    const level_list = level_names.map(name => <LevelPreview key={name}>{name}</LevelPreview>)

    return <div className='flex flex-wrap justify-center gap-6 p max-w-dvw'>
        {level_list}
    </div>
}