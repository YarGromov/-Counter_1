import React, {useEffect, useState} from 'react';
import s from "./ScreenWithResults.module.css";
import {AppRootStateType} from "../state/store";
import {useDispatch, useSelector} from "react-redux";
import {UniversalButton} from "./UniversalButton";

export const INCREMENT = 'INCREMENT'
export const RESET = 'RESET'

export const ScreenWithResults = () => {

    const [show, setShow] = useState('Enter values and press "set"')

    const dispatch = useDispatch()
    const count = useSelector<AppRootStateType, number | undefined>(state => state.count)
    const maxValue = useSelector<AppRootStateType, number>(state => state.maxValue)
    const onInputValue = useSelector<AppRootStateType, number | undefined>(state => state.onInputValue)


    const incrementFunc = () => {
        dispatch({type: INCREMENT})
    }

    const resetFunc = () => {
        dispatch({type: RESET})
    }

    const getStyleForCount = () => {
        if (show === 'Incorrect value!') {
            return s.incorrectValue
        }
        if (show === 'Enter values and press "set"') {
            return s.enterValue
        }
        if (show !== 'Incorrect value!' && show !== 'Enter values and press "set"' && maxValue === count) {
            return s.finalNumericValue
        }
        if (show !== 'Incorrect value!' && show !== 'Enter values and press "set"' && maxValue !== count) {
            return s.resultNumValueStyle
        }
    }

    useEffect(() => {
        if (count || count === 0) {
            setShow(count.toString())
            if (onInputValue && onInputValue < 0) {
                setShow('Incorrect value!')
            }
        } else if (onInputValue && onInputValue < 0) {
            setShow('Incorrect value!')
        } else if (onInputValue && onInputValue >= 0) {
            setShow('Enter values and press "set"')
        }
        if (onInputValue && onInputValue >= maxValue) {
            setShow('Incorrect value!')
        }
        if (onInputValue && onInputValue > maxValue) {
            setShow('Incorrect value!')
        }
        if (maxValue < 0) {
            setShow('Incorrect value!')
        }
    }, [count, onInputValue, maxValue])

    const incDisabled = !!count && maxValue <= count || count === undefined || maxValue === onInputValue;
    const resetDisabled = (count === onInputValue) || (onInputValue !== undefined && onInputValue > maxValue) || maxValue === onInputValue;

    return (
        <div className={s.ScreenWithResults}>
            <div className={s.firstContainer}>
                <div className={getStyleForCount()}>{show}</div>
            </div>
            <div className={s.secondContainer}>
                <UniversalButton name={'inc'} callback={incrementFunc} disabled={incDisabled}/>
                <UniversalButton name={'reset'} callback={resetFunc} disabled={resetDisabled}/>
            </div>
        </div>
    );
};

