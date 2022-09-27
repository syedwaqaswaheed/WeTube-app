import logo from "./logo.svg";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
            <Route path="watch/{id}" element={<Playback />} />
            <Route path="contact" element={<SearchResult />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
