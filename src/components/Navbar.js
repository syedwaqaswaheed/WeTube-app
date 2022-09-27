import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";


// watch?v=tSdA179x2IM
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/playback">Playback</Link>
        </li>
        <li>
          <Link to="/search">SearchResult</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
