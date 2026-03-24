import Glare from "./Glare"

export default function Select({children, color, spanStyle, spanClassName}){
    const word = children[0].split('.')

    return <div className="inline-block z-10">
        <span className={spanClassName} style={{
            color: color ?? '#fff',
            ...spanStyle
        }}>
            {word[0]}
        </span>
        
        <Glare
        blur={0.3}
        divStyle={{
            margin: '0 0.2rem'
        }}
        spanClassName={spanClassName}
        spanStyle={{
            background: 'linear-gradient(135deg, #ffd400 10%, #ff6200 90%)',
            ...spanStyle
        }}>
            {children[1].toUpperCase()}
        </Glare>

        <span className={spanClassName} style={{
            color: color ?? '#fff',
            ...spanStyle
        }}>
            {word[1]}
        </span>
    </div>
}