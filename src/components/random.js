import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";

const randomUrl =
  "https://api.unsplash.com/photos/random/?client_id=1kV8nZ5_pV1wBQJB_prZ0Rs5pkpTarBY2-NNW7X-_yg";

export default function Random() {
  const [randomImages, updateimages] = useState([]);
  useEffect(() => {
    const apiCall = async () => {
      const response = await axios(randomUrl);
      console.log(response);
      console.log(response.data);

      updateimages(response.data);
    };
    apiCall();
  }, []);

  return (
    <>
      <div className="individual">
        <Route path="/random">
          {randomImages.urls && <img src={randomImages.urls.full} />}
        </Route>
      </div>
    </>
  );
}
