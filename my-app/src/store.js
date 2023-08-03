import { applyMiddleware,legacy_createStore as createStore } from "redux";
import thunk from 'redux-thunk';
import {persistStore,persistReducer}  from 'redux-persist';
import reducers from "./state/reducers/index";
import storage from 'redux-persist/lib/storage';
const persistConfig={
    key:'persist-key',
    storage
};
const persistedReducer= persistReducer(persistConfig,reducers); 
export const store=createStore(persistedReducer,{},applyMiddleware(thunk));
const persistor=persistStore(store);
export default store;
export {persistor};