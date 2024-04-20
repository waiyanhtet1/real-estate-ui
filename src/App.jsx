import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./pages/listPage/ListPage";
import HomePage from "./pages/homePage/HomePage";
import SinglePage from "./pages/singlePage/SinglePage";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import UpdateProfile from "./pages/updateProfile/UpdateProfile";
import { Layout, RequireAuth } from "./pages/layout/Layout";
import NewPostPage from "./pages/newPostPage/NewPostPage";

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
        },
        {
          path: "/:id",
          element: <SinglePage />,
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
