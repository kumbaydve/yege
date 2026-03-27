import WordVariant from "./WordVariant"

export default function WordPair({word, variants, pick, right}){
    return <div className="flex flex-wrap justify-center gap select-none">
        <WordVariant pick={pick}
        style={{
            background: 'linear-gradient(135deg, #ffae00, #ff6600)'
        }}
        right={right}
        variants={variants}
        expected={0}
        glare_color='#ff660090'>
            {word}
        </WordVariant>

        <WordVariant pick={pick}
        style={{
            background: 'linear-gradient(135deg, #5e00ff, #9d00ff)'
        }}
        right={right}
        variants={variants}
        expected={1}
        glare_color='#8c00ffa0'>
            {word}
        </WordVariant>
    </div>
}
