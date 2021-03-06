/*eslint-disable */
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import userReducer from "./reducers/userReducer";
import stopWatchReducer from "./reducers/stopWatchReducer";
import gameReducer from './reducers/game/gameReducer';

const rootReducer = combineReducers({
  user: userReducer,
  stopWatch: stopWatchReducer,
  game:gameReducer
});

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export type RootState = ReturnType<typeof rootReducer>;
