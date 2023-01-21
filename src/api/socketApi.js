import { BASE_URL, V1_URL } from '../config'
import * as connection from './connection'

export const getAll = () => {
    let config = {
        url: BASE_URL + V1_URL + "sockets"
    }
    return connection.getBody(config)
}

export const getById = (id) => {
    let config = {
        url: BASE_URL + V1_URL + "sockets/" + id 
    }
    return connection.getBody(config)
}

export const save = (socket) => {
    let config = {
        url: BASE_URL + V1_URL + "sockets"
    }
    return connection.postBody(config, socket)
}

export const edit = (socket) => {
    let config = {
        url: BASE_URL + V1_URL + "sockets"
    }
    return connection.putBody(config, socket)
}

export const deleteCpu = (id) => {
    let config = {
        url: BASE_URL + V1_URL + "sockets/" + id
    }
    return connection.deleteFunction(config)
}