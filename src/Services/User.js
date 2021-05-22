import axios from "axios";

export function getTheUser() {
    const url = "http://127.0.0.1:5000/api";
    return axios.get(url);
}