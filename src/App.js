import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import CastList from "./Components/CastList/CastList";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/castList",
      element: <CastList></CastList>,
    },
    {
      path: "*",
      element: <NotFound></NotFound>,
    },
  ]);
  return (
    <div className="App font-face-TT-regular">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
