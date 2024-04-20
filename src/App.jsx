import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { listPageLoader, singlePageLoader } from "./lib/loader";
import HomePage from "./pages/homePage/HomePage";
import { Layout, RequireAuth } from "./pages/layout/Layout";
import ListPage from "./pages/listPage/ListPage";
import Login from "./pages/login/Login";
import NewPostPage from "./pages/newPostPage/NewPostPage";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import SinglePage from "./pages/singlePage/SinglePage";
import UpdateProfile from "./pages/updateProfile/UpdateProfile";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
          loader: listPageLoader,
        },
        {
          path: "/:id",
          element: <SinglePage />,
          loader: singlePageLoader,
        },

        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/profile/update",
          element: <UpdateProfile />,
        },
        {
          path: "/addPost",
          element: <NewPostPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
