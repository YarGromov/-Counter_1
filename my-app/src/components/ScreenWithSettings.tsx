import React, {ChangeEvent, ChangeEventHandler, FormEvent} from 'react';
import s from './ScreenWithSettings.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";


export const ScreenWithSettings = () => {
    const dispatch = useDispatch();
    const inputValue = useSelector<AppRootStateType, number>(state => state.inputValue)

    let maxValue: string;
    let startValue: string;

    const SET_VALUE = 'SET_VALUE';
    const MAX_VALUE = 'MAX_VALUE';
    const INPUT_VALUE = 'INPUT_VALUE'

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

    const showInput = (e: FormEvent<HTMLInputElement>) => {
        let inputV = e.currentTarget.value
       dispatch({type: INPUT_VALUE, payload: inputV})
    }
     return (
        <div className={s.ScreenWithSettings}>
            <div className={s.firstContainer}>
                <div>max value: <input  onChange={maxValueHandler} type="number"/></div>
                <div>start value: <input onInput={showInput} onChange={startValueHandler} type="number"/></div>
            </div>
            <div className={s.secondContainer}>
                <button disabled={inputValue < 0}   onClick={setClick}>set</button>
            </div>
        </div>
    );
};
