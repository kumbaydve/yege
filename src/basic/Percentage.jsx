import Glare from "./Glare";

function colorLerp(color1, color2, frac) {
    const r = color1[0] + (color2[0] - color1[0]) * frac
    const g = color1[1] + (color2[1] - color1[1]) * frac
    const b = color1[2] + (color2[2] - color1[2]) * frac

    return [Math.round(r), Math.round(g), Math.round(b)]
}

export default function Percentage({spanClassName, divClassName, divStyle, children, blur, opacity, spanStyle}){
    return <Glare
    divClassName={divClassName}
    spanClassName={'abril ' + spanClassName}
    divStyle={divStyle}
    blur={blur}
    opacity={opacity}
    spanStyle={{
        background: `linear-gradient(135deg, rgb(${colorLerp([0x0, 0xff, 0xae], [0xff, 0xd4, 0x00], children).join(', ')}) 10%, rgb(${colorLerp([0x4d, 0xff, 0x0], [0xff, 0x62, 0x00], children).join(', ')}) 90%)`,
        ...spanStyle
    }}>
        {Math.round(children * 100)}%
    </Glare>
}