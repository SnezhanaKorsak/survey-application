import React from 'react';
import s from './Results.module.css'
import {ResultForQuestion} from "./resultForQuestion/ResultForQuestion";


export const Results = () => {
    return (
        <div className={s.resultsBlock}>
            <div className={s.title}>
                <h3>Нажми на номер вопроса и узнай свой результат</h3>
            </div>
            <div className={s.resultsContainer}>

                <ResultForQuestion/>
                <ResultForQuestion/>
                <ResultForQuestion/>
                <ResultForQuestion/>
            </div>

        </div>
    )
}