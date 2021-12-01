import React from 'react';
import s from './Navbar.module.css';
import {Link} from "react-router-dom";


export const Navbar = () => {
    return (
        <div className={s.nav}>
            <Link to={'/start'}>НАЧАЛО</Link>
            <Link to={'/test'}>ТЕСТ</Link>
            <Link to={'/results'}>РЕЗУЛЬТАТЫ</Link>
        </div>
    )
}