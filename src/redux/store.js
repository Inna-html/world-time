import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { cityReducer } from './slices/city.slice';


const rootReducer = combineReducers({
    city: cityReducer
})

const setupStore = () => configureStore({
    reducer: rootReducer
});



export { setupStore };

