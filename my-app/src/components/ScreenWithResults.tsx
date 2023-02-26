import React from 'react';
import s from "./ScreenWithResults.module.css";

export const ScreenWithResults = () => {
    return (
        <div className={s.ScreenWithResults}>
            <div className={s.firstContainer}>
                <div>{0}</div>
            </div>
            <div className={s.secondContainer}>
                <button>inc</button>
                <button>reset</button>
            </div>
        </div>
    );
};
