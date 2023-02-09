import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "./storage";
import thunk from "redux-thunk";

import { cartReducer } from "./slices/cart";
// import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

const reducers = combineReducers({
    cart: cartReducer,
});

const persistConfig = {
    key: "root",
    storage,
    timeout: 1000
};

const persistedReducer = persistReducer(persistConfig, reducers);

// const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//             },
//         }),
// });

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
});

export default store;
