
export type CountStateType = {
    count: number
    maxValue: number
    startValue: number
}
const defaultState: CountStateType = {
    count: 0,
    maxValue: 0,
    startValue: 0
}

export type ResultReducerActionType = {
    type: "INCREMENT" | "RESET"
    payload: number
}

export const resultReducer = (state = defaultState, action: ResultReducerActionType): CountStateType => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, count: state.count + 1};
        case 'RESET':
            return {...state, count: 0};
        default:
            return state;
    }
}

export type SettingReducerActionType = {
    type: "SET_VALUE" | "MAX_VALUE"
    payload: number
}

export const settingsReducer = (state = defaultState, action: SettingReducerActionType): CountStateType => {
    switch (action.type) {
        case 'SET_VALUE':
            return {...state, startValue: action.payload};
        case 'MAX_VALUE':
            return {...state, maxValue: action.payload};
        default:
            return state;
    }
}