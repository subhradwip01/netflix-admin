import axios from "axios"
export const api=axios.create({
    baseURL:"https://subh-netflix-api.onrender.com/netflixApi"
})