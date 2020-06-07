import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";

export default function Search(props) {
  const [searchText, setSearchText] = useState([]);

  let handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <>
      <nav>
        <input
          className="input"
          type="text"
          placeholder="Find Image"
          onChange={handleChange}
        />
        <Link to="/search">
          <button onClick={() => props.searchApiCall(searchText)}>
            search
          </button>
        </Link>
      </nav>
    </>
  );
}
