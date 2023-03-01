
export type CountStateType = {
    count: number | undefined
    maxValue: number
    startValue: number
    onInputValue: number
}
const defaultState: CountStateType = {
    count: 0,
    maxValue: 0,
    startValue: 0,
    onInputValue: 0
}

export type ReducerActionType = {
    type: "INCREMENT" | "RESET" | "SET_VALUE" | "MAX_VALUE" | "INPUT_VALUE" | 'ON_INPUT_VALUE' | 'SET_COUNT'
    payload: number
}

export const reducer = (state = defaultState, action: ReducerActionType): CountStateType => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, count: state.count && state.count + 1};
        case 'RESET':
            return {...state, count: state.startValue};
        case 'SET_VALUE':
            return {...state, startValue: action.payload, count: action.payload};
        case 'MAX_VALUE':
            return {...state, maxValue: action.payload};
        case 'ON_INPUT_VALUE':
            return {...state, onInputValue: action.payload};
        case 'SET_COUNT':
            return {...state, count: action.payload};
        default:
            return state;
    }
}
