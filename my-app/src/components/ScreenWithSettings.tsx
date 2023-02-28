import React, {ChangeEvent, ChangeEventHandler} from 'react';
import s from './ScreenWithSettings.module.css'
import {useDispatch} from "react-redux";


export const ScreenWithSettings = () => {
    const dispatch = useDispatch();

    let maxValue: string;
    let startValue: string;
    const SET_VALUE = 'SET_VALUE';
    const MAX_VALUE = 'MAX_VALUE'

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        maxValue = e.currentTarget.value;
        console.log('max value: ' + maxValue)
    }
    const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        startValue = e.currentTarget.value;
        console.log('start value: ' + startValue)
    }

    const setClick = () => {
        dispatch({type: SET_VALUE, payload: Number(startValue)})
        dispatch({type: MAX_VALUE, payload: Number(maxValue)})
    }
     return (
        <div className={s.ScreenWithSettings}>
            <div className={s.firstContainer}>
                <div>max value: <input onChange={maxValueHandler} type="number"/></div>
                <div>start value: <input onChange={startValueHandler} type="number"/></div>
            </div>
            <div className={s.secondContainer}>
                <button onClick={setClick}>set</button>
            </div>
        </div>
    );
};
