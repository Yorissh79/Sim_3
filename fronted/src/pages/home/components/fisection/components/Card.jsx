import React from 'react'
import style from './Card.module.scss'
import { FaFacebook } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { ImInstagram } from 'react-icons/im'

const Card = ({item}) => {
    return (
        <div className={style.main}>
            <div className={style.icon}>
                <div className={style.box}>
                    <FaFacebook/>
                </div>
                <div className={style.box}>
                    <BsTwitter/>
                </div>
                <div className={style.box}>
                    <ImInstagram/>
                </div>
            </div>
            <div className={style.imgbox}>
                <img src={item.image} alt="" />
            </div>
            <div className={style.text}>
                <p className={style.f}>{item.name}</p>
                <p className={style.s}>{item.title}</p>
            </div>
        </div>
    )
}

export default Card