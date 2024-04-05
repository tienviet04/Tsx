import { ITrip } from "../interfaces";
import instance from "./instance";

export const getTrips = (query: string) => {
    const uri = "/trips?" + query
    const data = instance.get(uri)
    return data
}

export const getTripById = (id: number | string) => {
    const data = instance.get("/trips/" + id)
    return data
}

export const postTrip = async (data: ITrip) => {
    const uri = "trips"
    return instance.post(uri, data)
}
export const searchTrip = async (search: string) => {
    const uri = "trips/search" + search
    return instance.get(uri)
}

export const putTrip = async (id: string | number, data: ITrip) => {
    const uri = "trips/" + id
    return instance.put(uri, data)
}

export const deleteTrip = async (id: number | string) => {
    const uri = "trips/" + id
    return instance.delete(uri)
}