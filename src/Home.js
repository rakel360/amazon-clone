import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div classname="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            id="1234"
            title="The Lean startup"
            price={29.9}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            rating={5}
          />{" "}
          <Product
            id="1236"
            title="SAMSUNG 27-Inch Odyssey G5 Gaming Monitor with 1000R Curved Screen"
            price={435.5}
            image="https://m.media-amazon.com/images/I/81cSdJuBbFL._AC_UY436_FMwebp_QL65_.jpg"
            rating={3}
          />{" "}
        </div>{" "}
        <div className="home_row">
          <Product
            id="1264"
            title="All-new Echo Dot (4th Gen) | Smart speaker with Alexa | Glacier White"
            price={29.99}
            image="https://m.media-amazon.com/images/I/71JB6hM6Z6L._AC_UY436_FMwebp_QL65_.jpg"
            rating={4}
          />{" "}
          <Product
            id="1256"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={949.0}
            image="https://m.media-amazon.com/images/I/81FH2j7EnJL._AC_UY436_FMwebp_QL65_.jpg"
            rating={2}
          />{" "}
          <Product
            id="1210"
            title="Apple AirPods with Charging Case (Wired)"
            price={124.99}
            image="https://m.media-amazon.com/images/I/71NTi82uBEL._AC_UY436_FMwebp_QL65_.jpg"
            rating={3}
          />{" "}
        </div>{" "}
        <div className="home_row">
          <Product
            id="1209"
            title="Samsung QN32Q50RA 32 inch Class QLED 4K Smart Ultra High Definition TV"
            price={457}
            image="https://m.media-amazon.com/images/I/51RK-KkfNSL._AC_UY436_FMwebp_QL65_.jpg"
            rating={4}
          />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Home;
