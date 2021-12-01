import React, {useEffect} from 'react';
import s from './Test.module.css'
import {useDispatch} from "react-redux";
import {Question} from "./question/Question";
import {getQuestionTC} from '../state/questionsReducer';


export const Test = () => {

    useEffect(() => {
        dispatch(getQuestionTC())
    }, [])


    let dispatch = useDispatch()


    return (
        <div className={s.testBlock}>
            <div className={s.testContainer}>

                <div className={s.testContainerBottom}/>
                <div className={s.testContainerMiddle}/>
                <div className={s.testContainerTop}>
                    <Question/>
                </div>

            </div>


        </div>
    )
}