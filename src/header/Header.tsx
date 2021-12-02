import React from 'react';
import s from './Header.module.css'
import {Navbar} from "../navbar/Navbar";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";


export const Header = () => {


    let userName = useSelector<AppRootStateType, string>(state => state.settings.userName)

        return (
        <div className={s.header}>
            <div className={s.name}>Опрос проходит: {userName}</div>
            <Navbar/>
        </div>
    )
}