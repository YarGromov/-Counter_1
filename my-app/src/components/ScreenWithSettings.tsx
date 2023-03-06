import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import s from './ScreenWithSettings.module.css'
import {useDispatch, useSelector} from "react-redux";
import {UniversalButton} from "./UniversalButton";
import {AppRootStateType} from "../state/store";


export const ScreenWithSettings = () => {
    const [maxValue, setMaxValue] = useState<number>(0)
    const [onInputValue, setOnInputValue] = useState<number>(0)

    const maxValue2 = useSelector<AppRootStateType, number>(state => state.counter.maxValue)
    const onInputValue2 = useSelector<AppRootStateType, number | undefined>(state => state.counter.onInputValue)

    const dispatch = useDispatch();

    const SET_VALUE = 'SET_VALUE';
    const MAX_VALUE = 'MAX_VALUE';
    const ON_INPUT_VALUE = 'ON_INPUT_VALUE';

    const maxValueInputStyles = () => {
        if (maxValue < 0) {
            return s.incorrectFirstContainer
        }
        if ((maxValue !== 0 && onInputValue !== 0) && maxValue === onInputValue){
            return s.incorrectFirstContainer
        }
        if ((maxValue < onInputValue) && maxValue === 0){
            return s.incorrectFirstContainer
        }
    }

    const startValueInputStyles = () => {
        if (onInputValue < 0) {
            return s.incorrectFirstContainer
        }
        if ((maxValue !== 0 && onInputValue !== 0) && maxValue === onInputValue){
            return s.incorrectFirstContainer
        }
        if (maxValue > 0 && onInputValue > maxValue) {
            return s.incorrectFirstContainer
        }
        if((maxValue === 0) && onInputValue > maxValue) {
            return s.incorrectFirstContainer
        }
    }

    const maxValueInput = (e: FormEvent<HTMLInputElement>) => {
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

    const setDisabled = onInputValue < 0 || onInputValue >= maxValue;

    useEffect(()=>{
        if (maxValue2){
            setMaxValue(maxValue2)
        }
        if (onInputValue2){
            setOnInputValue(onInputValue2)
        }
    },[maxValue2,onInputValue2])

     return (
        <div className={s.ScreenWithSettings}>
            <div className={s.firstContainer}>
                <div className={maxValueInputStyles()}>max value: <input value={maxValue}  onInput={maxValueInput}  type="number"/></div>
                <div className={startValueInputStyles()}>start value: <input value={onInputValue} onInput={onInput} type="number"/></div>
            </div>
            <div className={s.secondContainer}>
                <UniversalButton disabled={setDisabled} name={'set'} callback={setClick}/>
            </div>
        </div>
    );
};
