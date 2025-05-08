import React from 'react'
import style from './Fisection.module.scss'
import Card from './components/Card'

const Fisection = () => {

    const data = [
        {
            image : "https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr1.jpg",
            name : "Velva Kopf",
            title : "Biologist"
        },
        {
            image : "https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr2.jpg",
            name : "Velva Kopf",
            title : "Biologist"
        },
        {
            image : "https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr3.jpg",
            name : "Velva Kopf",
            title : "Biologist"
        }
    ]

    return (
        <div className={style.main}>
            <div className={style.text}>
                <p className={style.f}>Contacts</p>
                <p className={style.s}>Our Team</p>
            </div>

            <div className={style.cards}>
                {data?.map((item) => <Card item={item}/>)} 
            </div>
        </div>
    )
}

export default Fisection