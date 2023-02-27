import React, {useState} from 'react';
import s from "./ScreenWithResults.module.css";
import {AppRootStateType, reducer} from "../state/reducer";
import {useDispatch, useSelector} from "react-redux";

export const INCREMENT = 'INCREMENT'
export const  RESET = 'RESET'

export const ScreenWithResults = () => {

    const dispatch = useDispatch()
    const count = useSelector<AppRootStateType, number>(state => state.count)

    const incrementFunc = () => {
        dispatch({type: INCREMENT})
    }
    const resetFunc = () => {
        dispatch({type: RESET})
    }
    return (
        <div className={s.ScreenWithResults}>
            <div className={s.firstContainer}>
                <div>{count}</div>
            </div>
            <div className={s.secondContainer}>
                <button onClick={incrementFunc}>inc</button>
                <button onClick={resetFunc}>reset</button>
            </div>
        </div>
    );
};
