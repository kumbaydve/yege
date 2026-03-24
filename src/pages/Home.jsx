import { memo } from "react"
import NavBar from "../simplifiers/NavBar"
import GlobalStat from "../simplifiers/GlobalStat"
import GlobalWorstWords from "../simplifiers/GlobalWorstWords"
import LevelList from "../simplifiers/LevelList"

const Home = memo(() => {
    return <div className='bg'>
        <NavBar ix={0} />
        <GlobalStat />
        <GlobalWorstWords />
        <LevelList />
    </div>
})

export default Home