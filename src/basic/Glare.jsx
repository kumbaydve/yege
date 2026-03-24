export default function Glare({divStyle, spanClassName, divClassName, children, spanStyle, blur, opacity}){
	const common_style = {
		color: '#fff',
		background: 'none',
		WebkitBackgroundClip: 'text',
		WebkitTextFillColor: 'transparent'
	}

	return <div className={"relative inline-block " + divClassName} style={divStyle}>
		<span className={'absolute select-none ' + spanClassName} style={{
			...common_style,
			filter: `blur(${blur ?? 1.1}rem)`,
			opacity: opacity ?? .9,
			...spanStyle
		}}>{children}</span>

		<span className={'relative ' + spanClassName} style={{
			...common_style,
			...spanStyle
		}}>{children}</span>
	</div>
}