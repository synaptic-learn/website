import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import StreamPage from "./pages/StreamPage";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<StreamPage />} />
      </Routes>
    </BrowserRouter>
  );
}
