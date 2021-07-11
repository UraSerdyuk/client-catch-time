import {combineReducers,createStore,applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import userReducer from "./reducers/userReducer";
import stopWatchReducer from "./reducers/stopWatchReducer";

const rootReducer = combineReducers({
    user:userReducer,
    stopWatch:stopWatchReducer
})

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))


export type RootState = ReturnType<typeof rootReducer>
