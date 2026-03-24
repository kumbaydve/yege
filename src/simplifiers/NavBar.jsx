import { Link } from "react-router-dom"
import BASE_URL from "../../utility/constants"

const pages = [
    ['ТЕСТЫ', ''],
    ['ТЕОРИЯ', '/select-theory'],
    ['НАСТРОЙКИ', '/settings']
]

export default function NavBar({ix}){
    return <nav className="fixed top-0 w-full flex justify-center gap-10 p-3 z-20"
    style={{
        backdropFilter: 'blur(0.7rem)'
    }}>
        {pages.map((name_url, i) => {
            return <Link to={BASE_URL + name_url[1]}
            key={i}
            className={`medium ${i === ix ? 'text-gray-200' : 'text-gray-400'}`}>
                {name_url[0]}
            </Link>
        })}
    </nav>
}