import { BASE_URL, V1_URL } from '../config'
import * as connection from './connection'

export const getCpus = () => {
    let config = {
        url: BASE_URL + V1_URL + "cpus"
    }
    return connection.getBody(config)
}

export const getById = (id) => {
    let config = {
        url: BASE_URL + V1_URL + "cpus/" + id 
    }
    return connection.getBody(config)
}

export const save = (cpu) => {
    let config = {
        url: BASE_URL + V1_URL + "cpus"
    }
    return connection.postBody(config, cpu)
}

export const edit = (cpu) => {
    let config = {
        url: BASE_URL + V1_URL + "cpus"
    }
    return connection.putBody(config, cpu)
}

export const deleteCpu = (id) => {
    let config = {
        url: BASE_URL + V1_URL + "cpus/" + id
    }
    return connection.deleteFunction(config)
}