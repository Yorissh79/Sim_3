import React from 'react'
import style from './Card.module.scss'
import { useDispatch } from 'react-redux'
import { deleteBasketThunk, postBasketThunk } from '../../../redux/reducers/basketSlice'
import { deleteCardThunk } from '../../../redux/reducers/cardSlice'

const Card = ({item, who}) => {

    const dispatch = useDispatch()

    const addToBasket = () => {
        const data = {
            count: 0,
            name: item.name,
            description : item.description,
            price: item.price,
            image: item.image
        }
        dispatch(postBasketThunk(data))
    }

    const deleteAdmin = () => {
        dispatch(deleteCardThunk(item._id))
    }

    const deleteBasket = () => {
        dispatch(deleteBasketThunk(item._id))
    }

    return (
        <div className={style.main}>

            <div className={style.imgbox}>
                <img src={item.image} alt="" />
            </div>

            <div className={style.text}>
                <p className={style.f}>{item.name}</p>
                <p className={style.s}>{item.description}</p>
                <p className={style.t}>{item.price}</p>
            </div>

            {who == "home" ? <button onClick={() => {
                addToBasket()
            }}>Add to basket</button> : ""}
            {who == "admin" ? <button onClick={() => {
                deleteAdmin()
            }}>Delete</button> : ""}
            {who == "basket" ? <button onClick={() => {
                deleteBasket()
            }}>Delete</button> : ""}
        </div>
    )
}

export default Card