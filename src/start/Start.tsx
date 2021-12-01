import React, {ChangeEvent, useState} from 'react';
import s from './Start.module.css'
import {useDispatch, useSelector} from "react-redux";
import {changeEditableStatus, setUserName} from "../state/settingsReducer";
import {Link} from 'react-router-dom';
import {AppRootStateType} from "../state/store";


export const Start = () => {
    let dispatch = useDispatch()
    let isEditable = useSelector<AppRootStateType, boolean>(state => state.settings.isEditable)
    let nameStartButton = useSelector<AppRootStateType, string>(state => state.settings.nameStartButton)

    let [name, setName] = useState('')

    const changeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
        if (name.trim() !== '') {
            dispatch(changeEditableStatus(false))
        }
    }
    const addUserNameHandler = () => {
        dispatch(setUserName(name))
    }
    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') addUserNameHandler()
    }

    return (
        <div className={s.startBlock}>
            <div className={s.startContainer}>
                <div className={s.title}>
                    <h1>Пожалуйста, примите участие в нашем опросе</h1>
                </div>
                <div className={s.conditions}>
                    <p>Введите свое имя и нажмите на кнопку для запуска опроса<br/>
                        (данное поле является обязательным)
                    </p>
                </div>
                <div className={s.enterBlock}>
                    <input className={s.inputName}
                           type="text"
                           value={name}
                           onChange={changeValueHandler}
                           onKeyPress={onKeyPressHandler}
                           placeholder="Ваше имя"
                    />

                    <button className={s.startButton} onClick={addUserNameHandler} disabled={isEditable}>
                        {isEditable ? nameStartButton : <Link to={'/test'}>{nameStartButton}</Link>}
                    </button>
                </div>
            </div>

        </div>
    )
}