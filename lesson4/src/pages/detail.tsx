import Header from "../components/header";
import Body from "../components/body";
import Footer from "../components/footer";
import Search from "../components/search";
import List from "../components/list";
import { ITrip } from "../interfaces";
import { useState, useEffect } from "react";
import { getTrips } from "../api/trips.api";
import Item from "../components/item";
import { useLocation } from "react-router-dom";

function Detail() {
  const [trips, setTrips] = useState<ITrip[]>([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const fromStation = queryParams.get("fromStation");
  const toStation = queryParams.get("toStation");

  console.log(trips);

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

    fetchTrips();
  }, [fromStation, toStation]); // Sử dụng các tham số từ query string trong dependency array

  return (
    <div>
      <Header />
      <Search />
      <div className="flex w-[1040px] mr-auto ml-[271px] py-5">
        <List></List>
        <div className="w-full h-auto  grid grid-cols-1 gap-4 ">
          {trips.map((item) => (
            <Item key={item.id} />
          ))}
        </div>
      </div>
      <Body />
      <Footer />
    </div>
  );
}

export default Detail;
