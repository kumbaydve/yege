import BASE_URL from "../../utility/constants";
import LinkLit from "../basic/LinkLit";

export default function LevelCompleted(){
    return <LinkLit to={BASE_URL} className='max-w-full'>
        <span className="text-white big">Уровень пройден!</span>
        <span className="text-gray-500 mt-2 mb-2 medium">Нажмите, чтобы вернуца</span>
    </LinkLit>
}