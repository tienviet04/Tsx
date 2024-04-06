import Header from "../components/header";
import Body from "../components/body";
import Footer from "../components/footer";
import Search from "../components/search";
import List from "../components/list";
import { ITrip, IBusHouse } from "../interfaces";
import { useState, useEffect } from "react";
import { getTrips } from "../api/trips.api"; // Assuming you have an API function to fetch busHouses
import { getBusHouses } from "../api/busHouse.trip";
import Item from "../components/item";
import { useLocation } from "react-router-dom";

function Detail() {
  const [trips, setTrips] = useState<ITrip[]>([]);
  const [busHouses, setBusHouses] = useState<IBusHouse[]>([]); // State to hold busHouses data
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const fromStation = queryParams.get("fromStation");
  const toStation = queryParams.get("toStation");

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        if (fromStation && toStation) {
          // Tạo query string từ các tham số
          const queryString = `fromStation=${fromStation}&toStation=${toStation}`;
          // Gọi hàm getTrips với query string đã tạo
          const { data } = await getTrips(queryString);
          setTrips(data);
        }
      } catch (error) {
        console.error("Error fetching trips:", error);
      }
    };

    const fetchBusHouses = async () => {
      try {
        // Fetch busHouses data
        const { data } = await getBusHouses(); // Assuming getBusHouses is an API function to fetch busHouses
        setBusHouses(data);
      } catch (error) {
        console.error("Error fetching busHouses:", error);
      }
    };

    fetchTrips();
    fetchBusHouses();
  }, [fromStation, toStation]); // Sử dụng các tham số từ query string trong dependency array

  // Function to populate busHouse data in trips
  const populateBusHouse = (trips: ITrip[], busHouses: IBusHouse[]) => {
    return trips.map((trip) => {
      const busHouse = busHouses.find((bus) => bus.id === trip.busHouseId);
      return { ...trip, busHouse };
    });
  };

  const populatedTrips = populateBusHouse(trips, busHouses);

  return (
    <div>
      <Header />
      <Search />
      <div className="flex w-[1040px] mr-auto ml-[271px] py-5">
        <List></List>
        <div className="w-full h-auto  grid grid-cols-1 gap-4 ">
          <Item trips={populatedTrips} />
        </div>
      </div>
      <Body />
      <Footer />
    </div>
  );
}

export default Detail;
