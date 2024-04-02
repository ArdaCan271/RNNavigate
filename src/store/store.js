import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import colorReducer from "./colorSlice";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "@react-native-async-storage/async-storage";

const counterPersistConfig = {
  key: "counter",
  version: 1,
  storage: storage,
};

const colorPersistConfig = {
  key: "color",
  version: 1,
  storage: storage,
};

const persistedCounterReducer = persistReducer(counterPersistConfig, counterReducer);
const persistedColorReducer = persistReducer(colorPersistConfig, colorReducer);

export const store = configureStore({
  reducer: {
    counter: persistedCounterReducer,
    color: persistedColorReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);