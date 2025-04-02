import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Register } from "./screen/Register";
import { Login } from "./screen/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
