import { configureStore } from "@reduxjs/toolkit";

import { cityReducer } from "./slices/city.slice";


const setupStore = () => configureStore({
    reducer: {
        city: cityReducer
    }
});



export { setupStore };

