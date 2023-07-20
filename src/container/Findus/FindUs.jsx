import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";

import "./findus.css";

const FindUs = () => (
  <div className="app__findus app__bg section__padding">
    <div className="app__findus-content">
      <div className="app__findus-content-left">
        <SubHeading title="Contact" />
        <h1 className="headtext__cormorant">Find Us</h1>
        <p className="p__opensans firstP">
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudhheath, CW9 7SG
        </p>
        <p className="p__opensans secondP">Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
        <button type="button" className="custom__button">
          Visit Us
        </button>
      </div>
    </div>
    <div className="app__findus-content-img">
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
