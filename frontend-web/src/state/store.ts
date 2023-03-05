import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../state/index'
import { persistReducer, FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = { key: 'root', storage, version: 1 }
const persistedReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
    reducer: { auth: persistedReducer },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})  

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch