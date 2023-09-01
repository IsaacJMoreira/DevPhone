import axios, { AxiosResponse } from "axios";
import baseURL from '../../../../baseURL'

export interface loginPayload {
    name: string,
    email: string,
    password: string
}

async function logon(payload: loginPayload): Promise<AxiosResponse> {
    try {
        const response = await axios.post(`${baseURL}/Logon`, payload)
        return response
    } catch (error) {
        console.log(error)
        throw error
    }
};

export const apiLogin = {
    logon
}