import axios from "axios"
export const api=axios.create({
    baseURL:"https://netflix-clone-api-production-3993.up.railway.app/netflixApi"
})