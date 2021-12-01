export type ResultType = {
    id: number
    userAnswer: string
    quest: string
}
export type IStateResults = {
    results: ResultType[]
}


const initialState: IStateResults = {
    results: []
}

export const resultsReducer = (state = initialState, action: ActionType): IStateResults => {
    switch (action.type) {
        case "ADD-RESULT":
            let newResult = {id: action.id, userAnswer: action.answer, quest: action.quest}
            let copy = {...state, results: [...state.results, newResult]}
            console.log(copy)
            return  copy

        default:
            return state
    }

}

type ActionType = ReturnType<typeof addResult>

export const addResult = (id: number, answer: string, quest: string) => {
    return {
        type: 'ADD-RESULT',
        id, answer,quest
    } as const
}
