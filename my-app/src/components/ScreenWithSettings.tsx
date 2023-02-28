import React, {ChangeEvent, ChangeEventHandler} from 'react';
import s from './ScreenWithSettings.module.css'


export const ScreenWithSettings = () => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const result = e.currentTarget.value;
        console.log(result)
    }
    return (
        <div className={s.ScreenWithSettings}>
            <div className={s.firstContainer}>
                <div>max value: <input onChange={onChangeHandler} type="number"/></div>
                <div>start value: <input onChange={onChangeHandler} type="number"/></div>
            </div>
            <div className={s.secondContainer}>
                <button>set</button>
            </div>
        </div>
    );
};
