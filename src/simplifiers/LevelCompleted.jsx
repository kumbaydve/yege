import BASE_URL from "../../utility/constants";
import LinkLit from "../basic/LinkLit";

export default function LevelCompleted(){
    return <LinkLit to={BASE_URL}
    borderClassName='max-w-full'>
        <h1 className="text-white big">Уровень пройден!</h1>
        <h2 className="text-gray-500 my-2 medium">Нажмите, чтобы вернуца</h2>
    </LinkLit>
}
