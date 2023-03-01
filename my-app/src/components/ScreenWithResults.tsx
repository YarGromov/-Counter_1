import React from 'react';
import s from "./ScreenWithResults.module.css";
import {AppRootStateType} from "../state/store";
import {useDispatch, useSelector} from "react-redux";

export const INCREMENT = 'INCREMENT'
export const RESET = 'RESET'

export const ScreenWithResults = () => {

    const dispatch = useDispatch()
    const count = useSelector<AppRootStateType, number>(state => state.count)
    const startValue = useSelector<AppRootStateType, number>(state => state.startValue)
    const maxValue = useSelector<AppRootStateType, number>(state => state.maxValue)
    console.log(+count)
    const countStyle = maxValue <= count ? s.red : '';

    const incrementFunc = () => {
        dispatch({type: INCREMENT})
    }

    const resetFunc = () => {
        dispatch({type: RESET})
    }

    return (
        <div className={s.ScreenWithResults}>
            <div className={s.firstContainer}>
                <div className={countStyle}>{count}</div>
            </div>
            <div className={s.secondContainer}>
                <button disabled={maxValue <= count} onClick={incrementFunc}>inc</button>
                <button disabled={count === startValue} onClick={resetFunc}>reset</button>
            </div>
        </div>
    );
};
