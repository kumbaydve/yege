import { memo } from "react";
import Glare from "../basic/Glare";
import NavBar from "../simplifiers/NavBar";

const Nil = memo(() => {
    return <main className="bg">
        <NavBar ix={-1} />

        <Glare
        opacity={0.7}
        spanClassName='huge font-bold grad'>
            ТАКОГО НЕТ
        </Glare>
        <Glare
        blur={0.4}
        spanClassName='medium grad'>
            ИДИТЕ НАЗАД
        </Glare>
    </main>
})

export default Nil
