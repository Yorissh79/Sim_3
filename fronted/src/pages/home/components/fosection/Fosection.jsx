import React from 'react'
import style from './Fosection.module.scss'
import Card from './components/card/Card'

const Fosection = () => {

    const data = [
        {
            price: "$16",
            name : "Birthday Events",
            des  : "Lorem ipsum dolor sit amet laudem partem perfecto per "
        },
        {
            price: "$31",
            name : "Wedding Events",
            des  : "Lorem ipsum dolor sit amet laudem partem perfecto per "
        },
        {
            price: "$52",
            name : "Party Events",
            des  : "Lorem ipsum dolor sit amet laudem partem perfecto per "
        }
    ]

    return (
        <div className={style.main}>
            <div className={style.text}>
                <p className={style.f}>Devoted to wonderful beauty</p>
                <p className={style.s}> Events Pricing</p>
            </div>
            
            <div className={style.cards}>
                {
                    data?.map((item) => <Card item={item}/>)
                } 
            </div>
        </div>
    )
}

export default Fosection