import { configureStore } from "@reduxjs/toolkit";
import cpuReducer from './slice/cpus/cpuSlice';
import socketReducer from './slice/sockets/socketSlice';

export const store = configureStore({
    reducer: {
        cpu: cpuReducer,
        socket: socketReducer
    }
})