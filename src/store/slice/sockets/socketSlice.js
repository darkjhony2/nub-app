import { createSlice } from "@reduxjs/toolkit";

export const socketSlice = createSlice({
    name: 'sockets',
    initialState: {
        sockets: []
    },
    reducers: {
        setSockets: (state, action) => {
            state.sockets = action.payload
        }
    }
});

export default socketSlice.reducer
export const { setSockets } = socketSlice.actions