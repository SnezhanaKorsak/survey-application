import React from 'react';
import s from './Header.module.css'
import {Navbar} from "../navbar/Navbar";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";


export const Header = () => {
    let finishClassName;
    window.scrollY > 1000 ? finishClassName = `${s.header}` : finishClassName = `${s.header} ${s.headerFixed}`

    let userName = useSelector<AppRootStateType, string>(state => state.settings.userName)

        return (
        <div className={finishClassName}>
            <div className={s.name}>Опрос проходит: {userName}</div>
            <Navbar/>
        </div>
    )
}