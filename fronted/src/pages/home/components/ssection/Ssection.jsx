import React from 'react'
import style from './Ssection.module.scss'

const Ssection = () => {
    return (
        <div className={style.main}>
            
            <div className={style.right}>
                <div className={style.text}>
                    <h1> Our Mission</h1> 
                    <p> Lorem ipsum dolor sit amet, pri omnium verterem id, sit labore dicunt an, ea civibus.</p>
                    <button>Read more</button>
                </div>
            </div>

            <div className={style.left}>
                <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/b4.jpg" alt="" />
            </div>

        </div>
    )
}

export default Ssection