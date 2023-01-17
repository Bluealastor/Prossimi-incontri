const url = "https://dummyjson.com/"

const get = async (dataChange= "users") => {
    const response = await fetch(`${url}${dataChange}`)
    return await response?.json()
}

export {get}





