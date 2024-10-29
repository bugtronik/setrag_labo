import axios from "axios"

export function getlocality() {
    return axios.get('http://127.0.0.1:8000/locality/')
        .then(res => res.data)
}