import React, {ChangeEvent, useState} from 'react';
import s from './ScreenWithSettings.module.css'
import {useDispatch} from "react-redux";



export const ScreenWithSettings = () => {
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)

    const dispatch = useDispatch();

    const SET_VALUE = 'SET_VALUE';
    const MAX_VALUE = 'MAX_VALUE';

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value);
    }

    const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value);
    }

    const setClick = () => {
        dispatch({type: SET_VALUE, payload: startValue})
        dispatch({type: MAX_VALUE, payload: maxValue})
    }

     return (
        <div className={s.ScreenWithSettings}>
            <div className={s.firstContainer}>
                <div>max value: <input  onChange={maxValueHandler} type="number"/></div>
                <div>start value: <input  onChange={startValueHandler} type="number"/></div>
            </div>
            <div className={s.secondContainer}>
                <button disabled={startValue < 0}   onClick={setClick}>set</button>
            </div>
        </div>
    );
};
