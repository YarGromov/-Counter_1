import React, {ChangeEvent, FormEvent, useState} from 'react';
import s from './ScreenWithSettings.module.css'
import {useDispatch} from "react-redux";


export const ScreenWithSettings = () => {
    const [maxValue, setMaxValue] = useState<number>(0)
    const [onInputValue, setOnInputValue] = useState<number>(0)

    const dispatch = useDispatch();

    const SET_VALUE = 'SET_VALUE';
    const MAX_VALUE = 'MAX_VALUE';
    const ON_INPUT_VALUE = 'ON_INPUT_VALUE';

    // const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     setMaxValue(+e.currentTarget.value);
    // }

    const MaxValueInput = (e: FormEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
        dispatch({type: MAX_VALUE, payload: +e.currentTarget.value})
    }

    const setClick = () => {
        dispatch({type: SET_VALUE, payload: onInputValue})
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
                <div>max value: <input onInput={MaxValueInput} /*onChange={maxValueHandler}*/ type="number"/></div>
                <div>start value: <input onInput={onInput} type="number"/></div>
            </div>
            <div className={s.secondContainer}>
                <button disabled={onInputValue < 0 || onInputValue >= maxValue} onClick={setClick}>set</button>
            </div>
        </div>
    );
};
