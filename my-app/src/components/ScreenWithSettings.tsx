import React, {ChangeEvent, FormEvent, useState} from 'react';
import s from './ScreenWithSettings.module.css'
import {useDispatch} from "react-redux";



export const ScreenWithSettings = () => {
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [onInputValue, setOnInputValue] = useState<number>(0)

    const dispatch = useDispatch();

    const SET_VALUE = 'SET_VALUE';
    const MAX_VALUE = 'MAX_VALUE';
    const ON_INPUT_VALUE = 'ON_INPUT_VALUE';

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value);
    }

    const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value);
        dispatch({type: 'SET_COUNT', payload: undefined})
    }

    const setClick = () => {
        dispatch({type: SET_VALUE, payload: startValue})
        dispatch({type: MAX_VALUE, payload: maxValue})
    }

    const onInput = (e: FormEvent<HTMLInputElement>) => {
        setOnInputValue(+e.currentTarget.value)
        dispatch({type: ON_INPUT_VALUE, payload: +e.currentTarget.value})
    }
    console.log("onInputValue " + onInputValue)
     return (
        <div className={s.ScreenWithSettings}>
            <div className={s.firstContainer}>
                <div>max value: <input  onChange={maxValueHandler} type="number"/></div>
                <div>start value: <input onInput={onInput}  onChange={startValueHandler} type="number"/></div>
            </div>
            <div className={s.secondContainer}>
                <button disabled={startValue <= 0}  onClick={setClick}>set</button>
            </div>
        </div>
    );
};
