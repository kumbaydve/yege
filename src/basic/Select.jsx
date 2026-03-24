import Glare from "./Glare"

export default function Select({children, color, size}){
    const word = children[0].split('.')

    return <div className="inline-block z-10">
        <span style={{
            color: color ?? '#fff',
            fontSize: size ?? '1.4rem'
        }}>
            {word[0]}
        </span>
        
        <Glare
        blur={0.3}
        divStyle={{
            margin: '0 0.2rem'
        }}
        spanStyle={{
            fontSize: size ?? '1.4rem',
            background: 'linear-gradient(135deg, #ffd400 10%, #ff6200 90%)'
        }}>
            {children[1].toUpperCase()}
        </Glare>

        <span style={{
            color: color ?? '#fff',
            fontSize: size ?? '1.4rem'
        }}>
            {word[1]}
        </span>
    </div>
}