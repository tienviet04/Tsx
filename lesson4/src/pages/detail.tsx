import Header from "../components/header";
import Body from "../components/body";
import Footer from "../components/footer";
import Search from "../components/search";
import List from "../components/list";
import { ITrip } from "../interfaces";
import { useState } from "react";
import { getTrips } from "../api/trips.api";
import Item from "../components/item";
function Detail() {
  const [trips, setTrips] = useState<ITrip[]>([]);

  const handleSearch = async (query: string) => {
    console.log(query);
    const { data } = await getTrips(query);
    setTrips(data);
  };
  console.log(trips);
  return (
    <div>
      <Header />
      <Search onSearch={handleSearch} />
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
