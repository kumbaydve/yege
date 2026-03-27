import Glare from "./Glare"

export default function Select({children, color, spanStyle, spanClassName, divStyle, divClassName}){
    const word = children[0].split('.')

    return <div className={"inline-block z-10 " + divClassName} style={divStyle}>
        <span className={spanClassName}
        style={{
            color: color ?? 'white',
            ...spanStyle
        }}>
            {word[0]}
        </span>
        
        <Glare
        blur={0.3}
        divClassName='mx-0.5'
        spanClassName={'grad ' + spanClassName}
        spanStyle={spanStyle}>
            {children[1].toUpperCase()}
        </Glare>

        <span className={spanClassName}
        style={{
            color: color ?? 'white',
            ...spanStyle
        }}>
            {word[1]}
        </span>
    </div>
}
