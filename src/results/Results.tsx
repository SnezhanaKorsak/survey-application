import React from 'react';
import s from './Results.module.css'
import {ResultForQuestion} from "./resultForQuestion/ResultForQuestion";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";
import {ResultType} from "../state/resultsReducer";


export const Results = () => {
    let results = useSelector<AppRootStateType, ResultType[]>(state => state.results.results)

    return (
        <div className={s.resultsBlock}>
            <div className={s.title}>
                <h3>Нажми на номер вопроса и узнай свой результат</h3>
            </div>
            <div className={s.resultsContainer}>
                {
                    results.length !== 0
                        ? results.map(r => {
                            return <ResultForQuestion key={r.id}
                                                      id={r.id}
                                                      userAnswer={r.userAnswer}
                                                      quest={r.quest}
                            />
                        })
                        : ''
                }

            </div>

        </div>
    )
}