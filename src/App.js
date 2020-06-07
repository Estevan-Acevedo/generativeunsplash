import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";
import Header from "./components/header";
import Picturepage from "./components/picturepage";
import Footer from "./components/footer";
import Search from "./components/search";
import "./App.css";
import Random from "./components/random";
import Searchpage from "./components/searchpage";
import P5Wrapper from "react-p5-wrapper";

import MySketch from "react-p5";

const imagesUrl =
  "https://api.unsplash.com/photos/?page=1&per_page=12&client_id=1kV8nZ5_pV1wBQJB_prZ0Rs5pkpTarBY2-NNW7X-_yg";

export default function App() {
  const [images, updateimages] = useState([]);
  useEffect(() => {
    const apiCall = async () => {
      const images = await axios(imagesUrl);
      console.log(images);
      console.log(images.data);

      updateimages(images.data);
    };
    apiCall();
  }, []);

  const [searchImages, updateSearchImages] = useState([]);
  const searchApiCall = async (searchText) => {
    const searchUrl = `https://api.unsplash.com/search/photos?page=1&per_page=12&query=${searchText}&client_id=1kV8nZ5_pV1wBQJB_prZ0Rs5pkpTarBY2-NNW7X-_yg`;
    const searchImages = await axios(searchUrl);
    console.log(searchImages);
    console.log(searchImages.data);

    updateSearchImages(searchImages.data.results);
  };

  return (
    <>
      <nav>
        <Header />
        <Search searchApiCall={searchApiCall} />

        <Link to="/random">
          <button>Random</button>
        </Link>
      </nav>

      <Random />

      <Route path="/picturepage/:id">
        <Picturepage images={images} />
      </Route>

      <Route path="/searchpage/:id">
        <Searchpage searchImages={searchImages} />
      </Route>
      <div className="pictures">
        <Route path="/search/">
          {searchImages.map((image) => (
            <Link to={`/searchpage/${image.id}`}>
              <img src={image.urls.small} />
            </Link>
          ))}
        </Route>

        <Route path="/" exact>
          {images.map((image) => (
            <Link to={`/picturepage/${image.id}`}>
              <img src={image.urls.small} />
            </Link>
          ))}
        </Route>
      </div>

      <Footer />
    </>
  );
}
