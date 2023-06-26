import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./slices/menuSlice";

const store = configureStore({
    reducer: {
        menu: menuSlice
    }
});

export default store;