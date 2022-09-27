import logo from "./logo.svg";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import NoPage from "./pages/NoPage";
import Playback from "./pages/Playback";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/playback:playbackId" element={<Playback />} />
            <Route path="/search" element={<SearchResult />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
