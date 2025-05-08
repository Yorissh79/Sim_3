import React from 'react'
import style from './Backcard.module.scss'
import Card from './components/Card'

const Backcard = ({data, who}) => {
    return (
        <div className={style.main}>
            {data?.map((item) => <Card item={item} who={who}></Card>)}
        </div>
    )
}

export default Backcard