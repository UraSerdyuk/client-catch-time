/*eslint-disable */
import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import userReducer from "./reducers/userReducer";
import stopWatchReducer from "./reducers/stopWatchReducer";
import gameReducer from './reducers/game';

const rootReducer = combineReducers({
  user: userReducer,
  stopWatch: stopWatchReducer,
  game:gameReducer
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;
