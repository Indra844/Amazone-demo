import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_banner"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Wireless/CEEX/Coolpad/Cool_3_Plus/LP/D10886066_IN_WLME_Coolpad_LP_PC_top_banner_C3._CB442783719_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            id="1"
            title=" Samsung Galaxy A51 (SM-A515F/DS) Dual SIM 128GB, GSM Unlocked - Prism
          Crush Black"
            price={20000}
            image="https://images-na.ssl-images-amazon.com/images/I/61sAKMokIUL.__AC_SY300_QL70_ML2_.jpg"
          />
          <Product
            id="2"
            title="Star LabTop 13.3-inch Ultrabook Laptop (English UK Keyboard, Ubuntu 20.04 LTS)
          "
            price={24500}
            image="https://images-na.ssl-images-amazon.com/images/I/619SB5HJKdL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="3"
            title="Apple’s most expensive MacBook Pro now costs $6,700"
            price={400000}
            image="https://cdn.vox-cdn.com/thumbor/9irnvBSKifXX26oUiD0FuRBifoY=/0x0:4000x3072/1200x800/filters:focal(1674x792:2314x1432)/cdn.vox-cdn.com/uploads/chorus_image/image/60346761/mbp15touch_space_gallery2_201807_GEO_US.0.jpeg"
          />
          <Product
            id="4"
            title="New MacBook Air has more to love and is now just $999"
            price={72000}
            image="https://cdn.cultofmac.com/wp-content/uploads/2019/11/Screen-Shot-2019-11-13-at-12.24.12-PM.jpg"
          />
          <Product
            id="5"
            title="HHmei G21 Waterproof Rainbow Keyboard with Rainbow Backlight USB Wired Game Keyboard - Light Leopard G21 Wired USB"
            price={750}
            image="https://images-na.ssl-images-amazon.com/images/I/51gOnPxDerL._AC_SX522_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="6"
            title="Signature Brand Acoustic Guitar"
            price={4000}
            image="https://5.imimg.com/data5/US/XI/MY-44705228/signature-classical-acoustic-guitar-500x500.jpg"
          />
          <Product
            id="7"
            title="Cort CR100|Classic Rock Series Electic Guitar"
            price={4500}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSWBxuaCVgS3lBm8ek0dDopbdsuCqn5-bqmGg&usqp=CAU"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
