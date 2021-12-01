import React, {useState} from 'react';
import s from './Question.module.css'
import { useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {QuestionType} from "../../state/questionsReducer";

type QuestionPropsType = {
    currentId: number
}

export const Question: React.FC<QuestionPropsType> = ({currentId}) => {

    let[answer, setAnswer] = useState('')
    //let dispatch = useDispatch()
    let questions = useSelector<AppRootStateType, QuestionType[]>(state => state.questions.questions)
    let currentQuestion: QuestionType = questions.filter(q => q ? q.id === currentId : '')[0]

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer(e.currentTarget.value)
    }
    const mappedOptions = currentQuestion && currentQuestion.answerType !== 'text'
        ? currentQuestion.answers.map((options) => (
            <div key={options.id} className={s.options}>
                <input type={currentQuestion.answerType}
                       name='choice'
                       value={options.answer}

                />
                {options.answer}
            </div>
        ))
        : <input className={s.textType}
                 type={currentQuestion ? currentQuestion.answerType : ''}
                 value={answer} autoFocus
                 onChange={onChangeHandler}
        />



    return (
        <>
            <div className={s.question}>
                <span>Вопрос: {currentId}/{questions.length}</span>
                <span>
                    {currentQuestion ? currentQuestion.quest : ''}
                </span>

            </div>

            <div className={s.answer}>
                <div>
                    {mappedOptions}
                </div>
                    {currentQuestion && currentQuestion.answerType === 'text' && <button>Отправить</button>}

            </div>

        </>

    )
}

