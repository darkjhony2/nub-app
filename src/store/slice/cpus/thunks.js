import { setCpu, setCpus } from "./cpuSlice";

export const fetchCpus = (data) => {
    return async(dispatch) => {
        await dispatch(setCpus(data));
    }
}

export const selectCpu = (data) => {
    return async(dispatch) => {
        await dispatch(setCpu(data));
    }
}