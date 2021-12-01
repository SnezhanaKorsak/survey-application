import React, {useEffect} from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Start} from "./start/Start";
import {Test} from "./test/Test";
import {Results} from "./results/Results";
import {Footer} from "./footer/Footer";
import {Route, Routes} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {setNameForButton} from './state/settingsReducer';

function App() {
    let dispatch = useDispatch()

    useEffect( () => {
        fetch('http://localhost:5000/data')
            .then(res => res.json())
            .then(res => dispatch(setNameForButton(res.nameButton)))
    }, [])


    return (
        <div className="App">
            <Router>
                <Header/>
                <Routes>
                    <Route  path={'/'} element={<Start/>}/>

                    <Route path={'/start'} element={<Start/>}/>
                    <Route path={'/test'} element={<Test/>}/>
                    <Route path={'/results'} element={<Results/>}/>
                </Routes>

                <Footer/>
            </Router>



        </div>
    );
}

export default App;
