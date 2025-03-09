import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme/themeSlice";
import countryReducer from "./country/countrySlice";

const store = configureStore({
    reducer:{
        theme:themeReducer,
        countries:countryReducer
    }
})

export default store;