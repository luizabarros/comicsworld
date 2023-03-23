import axios from "axios"

const api = axios.create({
    baseURL: "https://gateway.marvel.com/v1/public/comics?ts=1&apikey=645c45b6e45190c9ac29c9b07204e11d&hash=3af1af86f06346812336a903306aca3e",
    timeout: 5000
})

export default api