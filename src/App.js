import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import CastList from "./Components/CastList/CastList";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import CastDetails from "./Components/CastDetails/CastDetails";

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
      path: "/castDetails/:id",
      loader: async ({ params }) => {
        return fetch(`https://rickandmortyapi.com/api/character/${params.id}`);
      },
      element: <CastDetails></CastDetails>,
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
