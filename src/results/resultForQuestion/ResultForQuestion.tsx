import React, {useState} from 'react';
import s from '../resultForQuestion/ResultForQuestion.module.css'


type ResultForQuestionPropsType = {
    id: number
    userAnswer: string
    quest: string
}

export const ResultForQuestion: React.FC<ResultForQuestionPropsType> = ({
                                                                            id,
                                                                            userAnswer,
                                                                            quest
                                                                        }) => {

    const [isHidden, setIsHidden] = useState(true)

    const hiddenBlock = () => {
        setIsHidden(!isHidden)
    }
    return (
        <div className={s.resultForQuestionContainer}>
            <div className={s.coverBlock}>
                <div onClick={hiddenBlock} className={s.questionNumber}>
                    {id}
                </div>
                <div className={s.questionTitle}>
                    {quest}
                </div>

            </div>
            {!isHidden && <div className={s.answerBlock}>
                {userAnswer}
            </div>}


        </div>
    )
}