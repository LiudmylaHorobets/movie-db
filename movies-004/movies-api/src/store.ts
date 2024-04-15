import { createStore } from "redux";
import rootReduser from "./reducers";

const store = createStore(rootReduser);

export type RootState = ReturnType<typeof store.getState>;

export default store;
