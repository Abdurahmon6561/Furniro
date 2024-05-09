import React, { Component } from "react";

import Hero from "../component/home/Hero";
import Browse from "../component/home/Browse";
import OurProduct from "../component/home/OurProduct";
import Furniture from "../assets/images/furniture.svg";
import Item from "../assets/images/Inspirations.svg";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className=" flex items-center justify-center">
          <Hero />
        </div>
        <Browse />
        <OurProduct />
        <img src={Item} alt="" className=" cursor-pointer mb-16" />
        <img src={Furniture} alt="" className=" cursor-text" />
      </div>
    );
  }
}
