// import axios from "axios"
const user = "users"
const url = "https://dummyjson.com/"
// const photo = "photos"
// const album = "albums"

const get = async (dataChange= "users") => {
    const response = await fetch(`${url}${dataChange}`)
    return await response?.json()
}


export {get}





