import React, {useState} from 'react';
import s from './Question.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {QuestionType} from "../../state/questionsReducer";
import {addResult, ResultType} from "../../state/resultsReducer";
import {Link} from "react-router-dom";
import {IState} from "../../state/settingsReducer";

type QuestionPropsType = {
    //currentId: number
}

export const Question: React.FC<QuestionPropsType> = () => {
    let dispatch = useDispatch()

    let [answer, setAnswer] = useState('')
    let [id, setId] = useState(1)

    let questions = useSelector<AppRootStateType, QuestionType[]>(state => state.questions.questions)
    let currentQuestion: QuestionType = questions.filter(q => q ? q.id === id : '')[0]

    let results = useSelector<AppRootStateType, ResultType[]>(state => state.results.results)
    let nameButton = useSelector<AppRootStateType, IState>(state => state.settings)


    const addResultHandler = () => {

        dispatch(addResult(id, answer, currentQuestion.quest))
        setAnswer('')
        if (id < 4) setId(++id)
    }



    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer(e.currentTarget.value)
    }
    const onChangeCallback = (currentId: number, e: React.ChangeEvent<HTMLInputElement>) => {

        setAnswer(e.currentTarget.value)
    }


    const mappedOptions = currentQuestion && currentQuestion.answerType !== 'text'
        ? currentQuestion.answers.map((options) => (
            <div key={options.id} className={s.options}>
                <input type={currentQuestion.answerType}
                       name='choice'
                       value={options.answer}
                       onChange={(e) => onChangeCallback(id, e)}
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
                <span>Вопрос: {id}/{questions.length}</span>
                <span>
                    {currentQuestion ? currentQuestion.quest : ''}
                </span>

            </div>

            <div className={s.answer}>
                <div>
                    {mappedOptions}
                </div>

            </div>
            {results.length >= 4
                ? <button className={s.button}>
                    <Link to={'/results'}>{nameButton.nameFinishButton}</Link>
                </button>
                : <button className={s.button} onClick={addResultHandler}>{nameButton.nameNextButton}</button>
            }

        </>

    )
}


