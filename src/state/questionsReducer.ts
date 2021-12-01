import { Dispatch } from "redux"

export type QuestionType = {
    id: number
    quest: string
    answerType: string
    answers: AnswerType[]
}
type AnswerType = {
    id: string
    answer: string
}
export type IState = {
    questions: QuestionType[]
}


const initialState: IState = {
    questions: []
}

export const questionsReducer = (state = initialState, action: ActionType): IState => {
    switch (action.type) {
        case "SET-QUESTION":
            return {...state, questions: action.date}
        case "SET-CURRENT-QUESTION":
            return {...state, questions: state.questions.filter( f => f.id === action.id)}


        default:
            return state
    }

}

type ActionType = ReturnType<typeof setQuestion>
    | ReturnType<typeof setCurrentQuestion>
    | ReturnType<typeof changeStatus>


export const setQuestion = (date: QuestionType[]) => {
    return {
        type: 'SET-QUESTION',
        date
    } as const
}

export const setCurrentQuestion = (id: number) => {
    return {
        type: 'SET-CURRENT-QUESTION',
        id
    } as const
}
export const changeStatus = (isChecked: boolean) => {
    return {
        type: 'CHANGE-STATUS',
        isChecked
    } as const
}

export const getQuestionTC = () => {
    return (dispatch: Dispatch) => {
        fetch('http://localhost:5000/data')
        .then(res => res.json())
         .then(res => {
             dispatch(setQuestion(res.questions))
         })
        //dispatch(setCurrentQuestion(id))
    }
}