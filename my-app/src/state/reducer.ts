
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

export type ReducerActionType = {
    type: "INCREMENT" | "RESET" | "SET_VALUE" | "MAX_VALUE"
    payload: number
}

export const reducer = (state = defaultState, action: ReducerActionType): CountStateType => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, count: state.count + 1};
        case 'RESET':
            return {...state, count: 0};
        case 'SET_VALUE':
            return {...state, startValue: action.payload, count: action.payload};
        case 'MAX_VALUE':
            return {...state, maxValue: action.payload};
        default:
            return state;
    }
}
