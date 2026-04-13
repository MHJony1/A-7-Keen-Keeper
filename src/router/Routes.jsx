import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Homepage from "./pages/homepage/Homepage";
import FriendDetails from "./pages/friendsDetails/FriendDetails";
import Timeline from "./pages/timeline/Timeline";
import Stats from "./pages/stats/Stats";
import ErrorPage from "./pages/errorpage/ErrorPage";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/friendsDetails/:id",
          element: <FriendDetails />,
        },
        {
          path: "/timeline",
          element: <Timeline />,
        },
        {
          path: "/stats",
          element: <Stats />,
        },
      ],
      errorElement: <ErrorPage />,
    }
  ]
)