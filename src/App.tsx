import React, {useEffect} from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Start} from "./start/Start";
import {Test} from "./test/Test";
import {Results} from "./results/Results";
import {Footer} from "./footer/Footer";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {setNameForButton} from './state/settingsReducer';


function App() {
    let dispatch = useDispatch()


    useEffect(() => {
        fetch('https://61a8c15333e9df0017ea3ac5.mockapi.io/api/data/data')
            .then(res => res.json())
            .then(res => dispatch(setNameForButton(res[0].nameButton)))
        //.then(res => console.log(res[0].nameButton))


    }, [])


    return (
        <div className="App">
            <Router>
                <Header/>
                <Routes>
                    <Route path={'/survey-application'} element={<Start/>}/>

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
