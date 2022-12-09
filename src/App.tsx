import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Outlet
} from "react-router-dom";

import Navbar from "./components/Navbar";
import LessonsPage from "./pages/LessonsPage";
import StreamPage from "./pages/StreamPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <>
          <Navbar />
          <Outlet />
        </>
      }
    >
      <Route index element={<StreamPage />} />
      <Route
        path="lessons"
        element={<LessonsPage />}
        loader={function () {
          return fetch(`/api/lessons`);
        }}
      />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
