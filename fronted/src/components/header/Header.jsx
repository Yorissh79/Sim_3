import React from 'react'
import style from './Header.module.scss'
import { Link } from 'react-router'
import { CiMenuBurger } from 'react-icons/ci'

const Header = () => {
    return (
        <div className={style.main}>

            <div className={style.left}>
                <a href={"#"}>Floral Studio</a>
            </div>

            <div className={style.pages}>
                <Link to={"/"}>Home</Link>
                <Link>About us</Link>
                <Link>Portfolio</Link>
                <Link to={"/admin"}>Admin</Link>
                <Link to={"/basket"}>Basket</Link>
            </div>

            <div className={style.burger}>
                <CiMenuBurger/>
            </div>

        </div>
    )
}

export default Header