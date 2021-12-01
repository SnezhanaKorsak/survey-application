import { Dispatch } from "redux"

export type IState = {
    userName: string
    nameStartButton: string
    nameNextButton: string
    nameFinishButton: string
    isEditable: boolean
}

type ResponseType = {
        nameStartButton: string
        nameNextButton: string
        nameFinishButton: string
}
const initialState: IState = {
    userName: '',
    nameStartButton: '',
    nameNextButton: '',
    nameFinishButton: '',
    isEditable: true
}

export const settingsReducer = (state = initialState, action: ActionType): IState => {
    switch (action.type) {
        case "SET-USER-NAME":
            return {...state, userName: action.name}
        case "CHANGE-EDITABLE-STATUS":
            return {...state, isEditable: action.value}
        case "SET-NAME-FOR-BUTTON":
            return {...state,
                nameStartButton: action.date.nameStartButton,
                nameNextButton: action.date.nameNextButton,
                nameFinishButton: action.date.nameFinishButton
            }

        default:
            return state
    }

}

type ActionType = ReturnType<typeof setUserName>
    | ReturnType<typeof changeEditableStatus>
    | ReturnType<typeof setNameForButton>

export const setUserName = (name: string) => {
    return {
        type: 'SET-USER-NAME',
        name
    } as const
}
export const changeEditableStatus = (value: boolean) => {
    return {
        type: 'CHANGE-EDITABLE-STATUS',
        value
    } as const
}
export const setNameForButton = (date: ResponseType) => {
    return {
        type: 'SET-NAME-FOR-BUTTON',
        date
    } as const
}

export const getDateForButtonTC = () => (dispatch: Dispatch) => {
    fetch('http://localhost:5000/data')
        .then(res => res.json())
        .then(res => {
            dispatch(setNameForButton(res.nameButton))
            console.log(res.nameButton)
        })
}
