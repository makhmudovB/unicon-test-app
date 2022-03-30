import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { rootReducer } from "./reducers/rootReducer";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const persistConfig = {
  key: "system",
  storage,
  whitelist: ["auth"],
};
const persistReduce = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistReduce, applyMiddleware(thunk));
export const persistor = persistStore(store);
