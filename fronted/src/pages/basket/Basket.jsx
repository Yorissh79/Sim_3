import React, { useEffect } from 'react'
import style from './Basket.module.scss'
import Backcard from '../../components/Backcard/Backcard'
import { useDispatch, useSelector } from 'react-redux'
import { getBasketThunk } from '../../redux/reducers/basketSlice'

const Basket = () => {
    
    const dispatch = useDispatch()
    const data = useSelector(state => state.basket.data)

    useEffect(() => {
        dispatch(getBasketThunk())
    }, [])

    return (
        <div className={style.main}>
            <Backcard data={data} who={"basket"}/>
        </div>
    )
}

export default Basket