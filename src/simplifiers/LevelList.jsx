import word_sets from '../assets/word-sets'
import LevelPreview from './LevelPreview'

export default function LevelList(){
    const level_names = Object.keys(word_sets)

    return <section className='flex flex-wrap justify-center gap p max-w-dvw'>
        {level_names.map(name => {
            return <LevelPreview key={name}>
                {name}
            </LevelPreview>
        })}
    </section>
}
