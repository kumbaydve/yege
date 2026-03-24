import { memo } from "react";
import Glare from "../basic/Glare";

const Nil = memo(() => {
    return <div className="bg">
        <Glare
        opacity={0.7}
        spanStyle={{
            background: `linear-gradient(135deg, #ffd400, #ff6200)`,
            fontSize: '3rem',
            fontWeight: '700'
        }}>
            ТАКОГО НЕТ
        </Glare>
        <Glare
        blur={0.4}
        spanStyle={{
            background: `linear-gradient(135deg, #ffd400, #ff6200)`,
            fontSize: '1.5rem',
            fontWeight: '600'
        }}>
            ИДИТЕ НАЗАД
        </Glare>
    </div>
})

export default Nil