import BorderLit from "./BorderLit"
import { Link } from "react-router-dom"

export default function LinkLit({children, to, style, className, inner_style}){
    return <BorderLit className={'max-w-dvw select-none r ' + className} style={{
        width: '30rem',
        ...style
    }}>
        <Link to={to} className="flex flex-col items-center w-full h-full rounded-2xl decoration-0 max-w-dvw black" style={{
            padding: '1rem 2.5rem 0.5rem 2.5rem',
            ...inner_style
        }}>
            {children}
        </Link>
    </BorderLit>
}