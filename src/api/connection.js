import axios from "axios";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal)

export const postBody = async (config, body) => {
    try {
        let resp = (await axios.post(config.url, body, config));
        MySwal.fire({
            icon: 'success',
            title: 'Ok',
            text: resp
        })
        return resp.data
    } catch (error) {
        if (error.response.status == 404 || error.response.status == 500) {
            MySwal.fire({
                icon: 'error',
                title: 'Error',
                text: error.response.data
            })
            return;
        }
    }

}

export const getBody = async (config) => {
    try {
        let resp = (await axios.get(config.url, config));
        return resp.data;
    } catch (error) {
        if (error.response.status == 404 || error.response.status == 500) {
            MySwal.fire({
                icon: 'error',
                title: 'Error',
                text: error.response.data
            })
            return;
        }
    }

}

export const putBody = async (config, body = {}) => {
    try {
        let resp = (await axios.put(config.url, body, config)).data;
        MySwal.fire({
            icon: 'success',
            title: 'Ok',
            text: resp
        })
        return resp.data
    } catch (error) {
        if (error.response.status == 404 || error.response.status == 500) {
            MySwal.fire({
                icon: 'error',
                title: 'Error',
                text: error.response.data
            })
            return;
        }
    }

}

export const deleteFunction = async (config, body = {}) => {
    try {
        let resp = (await axios.delete(config.url, config)).data;
        MySwal.fire({
            icon: 'success',
            title: 'Ok',
            text: resp
        })
        return resp.data
    } catch (error) {
        if (error.response.status == 404 || error.response.status == 500) {
            MySwal.fire({
                icon: 'error',
                title: 'Error',
                text: error.response.data
            })
            return;
        }
    }
}