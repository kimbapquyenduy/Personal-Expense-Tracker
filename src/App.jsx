import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Home from "./pages/Home";
import { Register } from "./pages/Register";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { Login } from "./pages/Login";
import { Navbar } from "./components/Navbar";
import Schedule from "./components/Schedule";
import Analytics from "./components/Analytics";

function App() {
  const [count, setCount] = useState(0);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/Schedule",
          element: <Schedule />,
        },
        {
          path: "/Analytics",
          element: <Analytics />,
        },
      ],
    },

    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
