import React, {useState} from 'react';
import s from '../resultForQuestion/ResultForQuestion.module.css'


export const ResultForQuestion = () => {
    const [isHidden, setIsHidden] = useState(true)

    const hiddenBlock = () => {
        setIsHidden(!isHidden)
    }
    return (
        <div className={s.resultForQuestionContainer}>
            <div className={s.coverBlock}>
                <div onClick={hiddenBlock} className={s.questionNumber}>
                    1
                </div>
                <div className={s.questionTitle}>
                    text question
                </div>

            </div>
            {!isHidden && <div className={s.answerBlock}>

            </div>}


        </div>
    )
}