import {store} from "./store";

const defaultState = {
    count: 0
}

export const reducer = (state = defaultState, action: any) => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, count: state.count + 1};
        case 'RESET':
            return {...state, count: 0};
        default:
            return state;
    }
}
export type AppRootStateType = ReturnType<typeof reducer>
