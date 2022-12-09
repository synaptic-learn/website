import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Outlet
} from "react-router-dom";
import { io } from "socket.io-client";

import Navbar from "./components/Navbar";
import LessonPage from "./pages/LessonPage";
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
      <Route
        path="lessons/:id"
        element={<LessonPage />}
        loader={function ({ params }) {
          return fetch(`/api/lessons/${params.id}`);
        }}
      />
    </Route>
  )
);

const socket = io();
socket.on("message", console.log);

export default function App() {
  return <RouterProvider router={router} />;
}
