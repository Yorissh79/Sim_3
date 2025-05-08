import React from 'react'
import style from './Home.module.scss'
import Fsection from './components/fsection/Fsection'
import Ssection from './components/ssection/Ssection'
import Fosection from './components/fosection/Fosection'
import Fisection from './components/fisection/Fisection'
import Tsection from './components/tsection/Tsection'

const Home = () => {
    return (
        <div className={style.main}>
            <Fsection/>
            <Ssection/>
            <Tsection/>
            <Fosection/>
            <Fisection/>
        </div>
    )
}

export default Home