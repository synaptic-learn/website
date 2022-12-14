import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Outlet
} from "react-router-dom";

import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import LessonPage from "./pages/LessonPage";
import LessonsPage from "./pages/LessonsPage";
import StreamPage from "./pages/StreamPage";
import AlertProvider from "./providers/AlertProvider";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <AlertProvider>
          <Navbar />
          <Alert />
          <Outlet />
        </AlertProvider>
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

export default function App() {
  return <RouterProvider router={router} />;
}
