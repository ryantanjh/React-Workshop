import Homepage from "./pages/Homepage";
import Blogpage from "./pages/Blogpage";
import { Routes, Route } from "react-router-dom";

const routes = [
  {
    path: "/",
    component: <Homepage />
  },
  {
    path: "/blog",
    component: <Blogpage />
  }
];

const RouteSwitch = () => {
  return (
    <Routes>
      {routes.map((e) => {
        return <Route path={e.path} element={e.component} />;
      })}
    </Routes>
  );
};
export default RouteSwitch;
