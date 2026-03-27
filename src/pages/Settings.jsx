import { memo } from "react";
import NavBar from "../simplifiers/NavBar";
import FontSizeSetting from "../simplifiers/FontSizeSetting";

const Settings = memo(() => {
    return <main className="bg gap">
        <NavBar ix={2} />

        <FontSizeSetting />
    </main>
})

export default Settings
