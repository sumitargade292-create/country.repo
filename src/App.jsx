


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {AppLayout} from "./component/layout/AppLayout"; // <-- path sahi kiya hai
import "./App.css";

import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Country} from "./pages/Country";
import {Contact} from "./pages/Contact";
import {ErrorMsg} from "./pages/ErrorMsg";
import { CountryDetails } from "./component/Layout/CountryDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorMsg />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "/country",
        element: <Country />,
      },
      {
        path: "country/:id",
        element: <CountryDetails/>,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;