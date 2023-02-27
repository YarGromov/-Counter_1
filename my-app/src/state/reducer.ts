
export type CountStateType = {
    count: number
}
const defaultState: CountStateType = {
    count: 0
}

export type ActionType = {
    type: "INCREMENT" | "RESET"
}

export const resultReducer = (state = defaultState, action: ActionType) => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, count: state.count + 1};
        case 'RESET':
            return {...state, count: 0};
        default:
            return state;
    }
}

export const settingsReducer = (state = defaultState, action: any) => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, count: state.count + 1};
        case 'RESET':
            return {...state, count: 0};
        default:
            return state;
    }
}