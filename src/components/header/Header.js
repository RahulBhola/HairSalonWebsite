import React from "react";
import Banner from "./Banner";
import { bannerImg } from "../../assets/index";
import Gallery from "./gallery";
import Location from "./Location";

const Header = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" bg-stone-900 bg-opacity-50">
          <div className="h-max pt-10 xl:pt-24 pb-24">
            <Banner />
          </div>
        </div>
      </div>
      <Gallery/>
      <Location/>

    </div>
  );
};

export default Header;
