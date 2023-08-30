import axios from "axios";
import api from "../api"

interface loginPayload {
    email: string,
    password: string
}

async function logar(payload: loginPayload){
    try {
        const response = await api.post("/login", payload)
        return response
    } catch (error) {
        console.log(error)
    }
};

export const apiLogin = {
    logar
}