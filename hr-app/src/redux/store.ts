import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import createTransform from 'redux-persist-transform-filter';

const saveSubsetFilter = createTransform(
    (inboundState:any) => ({ token: inboundState.token }),
    (outboundState:any) => outboundState,
    { whitelist: ['auth'] }
  );
  
const persistConfig = {
    key: 'commerce', 
    storage, 
    transforms: [saveSubsetFilter],
}

const persistedReducer = persistReducer(persistConfig, authReducer)

export const reduxStore = configureStore({
    reducer: {
        auth: persistedReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export const persist = persistStore(reduxStore)