import { setSockets } from "./socketSlice";

export const fetchSockets = (data) => {
    return async(dispatch) => {
        await dispatch(setSockets(data));
    }
}