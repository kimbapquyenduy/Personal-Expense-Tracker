import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Home from "./pages/Home";
import { Register } from "./pages/Register";
import {
  createBrowserRouter,
  Navigate,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { Login } from "./pages/Login";
import { Navbar } from "./components/Navbar";
import Schedule from "./components/sidebarChild/Schedule";
import Analytics from "./components/sidebarChild/Analytics";

import Expense from "./components/sidebarChild/Expense";
import { AuthContextProvider } from "./context/AuthConext";
import { ProtectRoute } from "./components/ProtectedRoute";
import { Dashboard } from "./components/sidebarChild/Dashboard/Dashboard";

function App() {
  const [count, setCount] = useState(0);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectRoute>
          <Home />
        </ProtectRoute>
      ),
      children: [
        {
          path: "/Schedule",
          element: <Schedule />,
        },
        {
          path: "/Analytics",
          element: <Analytics />,
        },
        {
          path: "/Expense",
          element: <Expense />,
        },
        {
          index: true,
          element: <Dashboard />,
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
      <AuthContextProvider>
        <Navbar />
        <RouterProvider router={router} />
      </AuthContextProvider>
    </>
  );
}

export default App;
