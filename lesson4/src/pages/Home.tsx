import Footer from "../components/footer";
import Header from "../components/header";
import Body from "../components/body";
import Banner from "../components/banner";
import BodyHome from "../components/bodyHome";
import Index from "../components/carousels";
import Search from "../components/search";
import { ITrip } from "../interfaces";
import { useState } from "react";
import { getTrips } from "../api/trips.api";
//import Item from "../components/item";

function Home() {
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
      <div className="relative h-[400px] banner">
        <Banner />
        <div className="w-full absolute -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2">
          <Search onSearch={handleSearch} />
        </div>
      </div>
      <div className="pt-12">
        <BodyHome />
      </div>
      <Index />
      <Body />
      <Footer />
    </div>
  );
}

export default Home;
