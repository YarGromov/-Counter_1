import React, {useEffect, useState} from 'react';
import s from "./ScreenWithResults.module.css";
import {AppRootStateType} from "../state/store";
import {useDispatch, useSelector} from "react-redux";

export const INCREMENT = 'INCREMENT'
export const RESET = 'RESET'

export const ScreenWithResults = () => {

    const [show, setShow] = useState('')

    const dispatch = useDispatch()
    const count = useSelector<AppRootStateType, number | undefined>(state =>  state.count)
    const startValue = useSelector<AppRootStateType, number>(state => state.startValue)
    const maxValue = useSelector<AppRootStateType, number>(state => state.maxValue)
    const onInputValue = useSelector<AppRootStateType, number>(state => state.onInputValue)

    const countStyle = count &&  maxValue  <=  count ? s.red : ''

    const incrementFunc = () => {
        dispatch({type: INCREMENT})
    }

    const resetFunc = () => {
        dispatch({type: RESET})
    }


    useEffect(()=>{
        if (count) {
            setShow(count.toString())
        } else if (onInputValue < 0) {
            setShow('Incorrect value!')
        } else if (onInputValue >=0) {
            setShow ('Enter values and press "set" ')
        }
    },[count, onInputValue])

    return (
        <div className={s.ScreenWithResults}>
            <div className={s.firstContainer}>
                <div className={show === 'Incorrect value!' ? s.red : countStyle}>{show}</div>
            </div>
            <div className={s.secondContainer}>
                <button disabled={!!count && maxValue <= count} onClick={incrementFunc}>inc</button>
                <button disabled={count === startValue } onClick={resetFunc}>reset</button>
            </div>
        </div>
    );
};
