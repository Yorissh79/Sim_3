import React from 'react'
import style from './Card.module.scss'

const Card = ({item}) => {
    return (
        <div className={style.main}>
            <p className={style.f}>
                {item.price}
            </p>
                <p className={style.c}>per table</p>
            <p className={style.s}>{item.name}</p>
            <p className={style.t}>{item.des}</p>
            <button>Shop now</button>
        </div>
    )
}

export default Card