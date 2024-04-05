import instance from "./instance";

const getBusHouses = async () => {
    const data = await instance.get("/busHouses")
    return data
}

export {
    getBusHouses
}