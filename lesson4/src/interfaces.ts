export interface ITrip {
    busHouseId: string,
    fromStation: string,
    id?: string,
    isBooked?: number,
    price: number,
    seats: number
    toStation: string,
    busHouse?: IBusHouse,
    
    station: string
}

export interface IBusHouse {
    id: string,
    name: string,
    adress: string,
    phone: string
}
export interface IStation {
    id: string,
    name: string,
    province: string,
    
}