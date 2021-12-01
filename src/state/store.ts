import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk'
import {settingsReducer} from "./settingsReducer";
import {questionsReducer} from "./questionsReducer";
import {resultsReducer} from "./resultsReducer";


const rootReducer = combineReducers({
    settings: settingsReducer,
    questions: questionsReducer,
    results: resultsReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer, applyMiddleware(thunk))

//@ts-ignore
window.store = store
