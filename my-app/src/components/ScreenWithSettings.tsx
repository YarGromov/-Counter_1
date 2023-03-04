import React, {ChangeEvent, FormEvent, useState} from 'react';
import s from './ScreenWithSettings.module.css'
import {useDispatch} from "react-redux";
import {UniversalButton} from "./UniversalButton";


export const ScreenWithSettings = () => {
    const [maxValue, setMaxValue] = useState<number>(0)
    const [onInputValue, setOnInputValue] = useState<number>(0)

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

    const setDisabled = onInputValue < 0 || onInputValue >= maxValue;

     return (
        <div className={s.ScreenWithSettings}>
            <div className={s.firstContainer}>
                <div className={maxValueInputStyles()}>max value: <input  onInput={MaxValueInput}  type="number"/></div>
                <div className={startValueInputStyles()}>start value: <input onInput={onInput} type="number"/></div>
            </div>
            <div className={s.secondContainer}>
                <UniversalButton disabled={setDisabled} name={'set'} callback={setClick}/>
            </div>
        </div>
    );
};
