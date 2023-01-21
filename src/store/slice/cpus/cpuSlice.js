import { createSlice } from "@reduxjs/toolkit";


export const cpuSlice = createSlice({
    name: 'cpus',
    initialState: {
        cpus: [],
        cpu: null
    },
    reducers: {
        setCpus: (state,action) => {
            state.cpus = action.payload
        },
        setCpu: (state, action) => {
            state.cpu = action.payload
        }
    }
});

export default cpuSlice.reducer
export const { setCpus, setCpu } = cpuSlice.actions