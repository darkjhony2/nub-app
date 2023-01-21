import { configureStore } from "@reduxjs/toolkit";
import cpuReducer from './slice/cpus/cpuSlice';

export const store = configureStore({
    reducer: {
        cpu: cpuReducer
    }
})