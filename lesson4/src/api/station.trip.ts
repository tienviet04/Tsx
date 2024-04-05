import instance from "./instance";

const getStation = async () => {
    const data = await instance.get("/stations")
    return data
}

export {
    getStation
}