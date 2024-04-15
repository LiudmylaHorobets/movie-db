import { UnknownAction, applyMiddleware, createStore } from "redux";

import { ThunkAction, thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension"; // todo: DEV only
import rootReducer from "./reducers";

function configureStore() {
  const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));
  const store = createStore(rootReducer, composedEnhancer);
  return store;
}

const store = configureStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType> = ThunkAction<
  ReturnType,
  RootState,
  undefined,
  UnknownAction
>;

export default store;
