import React, {useEffect, useState} from 'react';
import s from './Test.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";
import {IState} from "../state/settingsReducer";
import {Question} from "./question/Question";
import {getQuestionTC} from "../state/questionsReducer";


export const Test = () => {
    let dispatch = useDispatch()
    let nameButton = useSelector<AppRootStateType, IState>(state => state.settings)
    let [id, setId] = useState(1)

    useEffect( () => {
        dispatch(getQuestionTC(id))
    }, [])

    const setIdHandler = () => {
       if(id < 4) setId(++id)
    }

    return (
        <div className={s.testBlock}>
            <div className={s.testContainer}>

                <div className={s.testContainerBottom}/>
                <div className={s.testContainerMiddle}/>
                <div className={s.testContainerTop}>
                    <Question currentId={id}/>
                </div>

            </div>
            <button className={s.nextButton} onClick={setIdHandler}>{nameButton.nameNextButton}</button>
        </div>
    )
}