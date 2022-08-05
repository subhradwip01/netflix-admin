import axios from "axios"
export const api=axios.create({
    baseURL:"https://subhradwip-netflix.herokuapp.com/netflixApi"
})