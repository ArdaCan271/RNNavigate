import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
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

const persistedCounterReducer = persistReducer(counterPersistConfig, counterReducer);

export const store = configureStore({
  reducer: {
    counter: persistedCounterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);