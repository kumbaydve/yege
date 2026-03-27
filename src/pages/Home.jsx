import { memo } from "react"
import NavBar from "../simplifiers/NavBar"
import GlobalStat from "../simplifiers/GlobalStat"
import GlobalWorstWords from "../simplifiers/GlobalWorstWords"
import LevelList from "../simplifiers/LevelList"

const Home = memo(() => {
    return <main className='bg'>
        <NavBar ix={0} />

        <GlobalStat />
        <GlobalWorstWords />
        <LevelList />
    </main>
})

export default Home
