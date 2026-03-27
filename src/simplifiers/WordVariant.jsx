export default function WordVariant({pick, style, right, variants, children, expected, glare_color}){
    return <button className='px-16 py-5 r text-white cursor-pointer relative max-w-dvw text-4xl'
    onClick={() => pick(expected)}
    style={style}>
        <div className="abs-fill -z-1"
        style={{
            background: right === -1  ? glare_color : (right === expected ? '#00ff48' : '#ff0048'),
            filter: `blur(${right === -1 ? 2.5 : 5}rem)`,
            transition: 'all 0.2s ease'
        }}></div>

        {children.replace('.', ' ' + variants[expected] + ' ')}
    </button>
}
