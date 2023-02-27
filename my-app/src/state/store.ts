import {combineReducers, legacy_createStore} from "redux";
import {resultReducer, settingsReducer} from "./reducer";

const rootReducer = combineReducers({
    results: resultReducer,
    settings: settingsReducer
})

export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>