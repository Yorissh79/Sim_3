import React, { useEffect } from 'react'
import style from './Tsection.module.scss'
import Backcard from '../../../../components/Backcard/Backcard'
import { useDispatch, useSelector } from 'react-redux'
import { getCardThunk } from '../../../../redux/reducers/cardSlice'

const Tsection = () => {

    const dispatch = useDispatch()
    const dat = useSelector(state => state.card.card)

    useEffect(() => {
        dispatch(getCardThunk())
    }, [])

    return (
        <div className={style.main}>
            <div className={style.text}>
                <p className={style.f}> Devoted to wonderful beauty</p>
                <p className={style.s}> Flowers Pricing</p>
            </div>
            <Backcard data={dat} who={"home"}/>
        </div>
    )
}

export default Tsection