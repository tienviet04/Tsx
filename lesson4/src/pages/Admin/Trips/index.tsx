import axios from "axios";
import { useEffect, useState } from "react";
import { ITrip } from "../../../interfaces";
import { Link } from "react-router-dom";
import Trip from "./trips";

const TripList = () => {
  const [trips, setTrips] = useState<ITrip[]>([]);
  const getTrips = async () => {
    const { data } = await axios.get(
      "http://localhost:3000/trips?_embed=busHouse"
    );
    setTrips(data);
  };

  useEffect(() => {
    getTrips();
  }, []);

  console.log(trips);

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-2xl font-medium">Danh sách chuyến đi</h1>
      </div>
      <Link to="add">
        <button className="my-2 inline-block rounded bg-white px-8 py-2 text-sm font-medium text-black transition hover:scale hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500">
          Thêm mới chuyến đi
        </button>
      </Link>
      {trips.map((trip) => (
        <Trip key={trip.id} data={trip} />
      ))}
    </div>
  );
};
export default TripList;
