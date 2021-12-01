import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk'
import {settingsReducer} from "./settingsReducer";
import {questionsReducer} from "./questionsReducer";


const rootReducer = combineReducers({
    settings: settingsReducer,
    questions: questionsReducer,
})

export type AppRootStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer, applyMiddleware(thunk))

//@ts-ignore
window.store=store
