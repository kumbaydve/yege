import BorderLit from "./BorderLit"
import { Link } from "react-router-dom"

export default function LinkLit({children, to, borderStyle, borderClassName, linkStyle, linkClassName}){
    return <BorderLit className={'max-w-dvw select-none r ' + borderClassName}
    style={{
        width: '30rem',
        ...borderStyle
    }}>
        <Link to={to}
        className={"flex flex-col items-center w-full h-full r decoration-0 max-w-dvw black " + linkClassName}
        style={{
            padding: '1rem 2.5rem 0.5rem 2.5rem',
            ...linkStyle
        }}>
            {children}
        </Link>
    </BorderLit>
}
