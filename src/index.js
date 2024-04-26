import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./rtk/Store";
import Signin from "./Signin";
import { Signup } from "./Signup";
import Map1 from "./Map1";
import SetAddress from "./SetAddress";
import ProfilePage from "./ProfilePage";
import Home from "./Home";
import First from "./First";
import Complaint from "./Complaint";

const router = createBrowserRouter([
  {
    path: "/first",
    element: <First />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/map1",
    element: <Map1 />,
  },
  {
    path: "/setAddress",
    element: <SetAddress />,
  },
  {
    path: "/profilePage",
    element: <ProfilePage />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/complaint",
    element: <Complaint />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
