import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/detail";
import SideBar from "./components/Admin_Components/sidebar";
import NotFound from "./pages/notFound";
import AddTrip from "./pages/Admin/AddTrips";
import TripsList from "./pages/Admin/Trips";
import { getBusHouses } from "./api/busHouse.trip";
import Dashboard from "./pages/Admin/Dashboard";
import { getTripById } from "./api/trips.api";
import UpdateTrip from "./pages/Admin/Trips/update";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
  {
    path: "/admin",
    // Nested router
    element: <SideBar />,
    children: [
      { path: "", element: <Dashboard /> },
      { path: "trips", element: <TripsList /> },
      {
        path: "trips/add",
        loader: async () => {
          const { data } = await getBusHouses();
          return data;
        },
        element: <AddTrip />,
      },
      {
        path: "trips/:id",
        loader: async ({ params }) => {
          const { data: busHouses } = await getBusHouses();
          if (params.id) {
            const { data: trip } = await getTripById(params.id);
            return { trip, busHouses };
          }
          return { busHouses };
        },
        element: <UpdateTrip />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routers;
