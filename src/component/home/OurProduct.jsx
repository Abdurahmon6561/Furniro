import React, { Component } from "react";
import Img_1 from "../../assets/images/image_1.png";
import Img_2 from "../../assets/images/image_2.png";
import Img_3 from "../../assets/images/image_3.png";
import Img_4 from "../../assets/images/image_4.png";
import Img_5 from "../../assets/images/image_6.png";
import Img_6 from "../../assets/images/image_7.png";
import Img_7 from "../../assets/images/image_8.png";

export default class OurProduct extends Component {
  render() {
    return (
      <div className="mt-14 mb-[93px]">
        <p className="text-center text-3xl font-bold">Our Products</p>
        <div className="flex justify-around">
          <div className="mt-8 relative">
            <img src={Img_1} alt="" />
            <div className="bg-slate-100 w-[285px] h-[145px]">
              <p className="text-2xl font-semibold p-2">Syltherine</p>
              <p className="opacity-50 p-2">Stylish cafe chair</p>
              <p className="font-semibold p-2 text-2xl">
                Rp 2.500.000{" "}
                <span className="opacity-50 text-xl underline">
                  Rp 3.500.000
                </span>
              </p>
            </div>
            <button className="absolute top-0 left-0 w-full h-full bg-white opacity-0 hover:opacity-100 flex justify-center items-center transition duration-300 text-yellow-500 font-bold">
              View Details
            </button>
          </div>

          <div className="mt-8 relative">
            <img src={Img_2} alt="" />
            <div className="bg-slate-100 w-[285px] h-[145px]">
              <p className="text-2xl font-semibold p-2">Liora</p>
              <p className="opacity-50 p-2">Stylish cafe chair</p>
              <p className="font-semibold p-2 text-2xl">
                Rp 2.500.000{" "}
                <span className="opacity-50 text-xl underline">
                  Rp 3.500.000
                </span>
              </p>
            </div>
            <button className="absolute top-0 left-0 w-full h-full bg-white opacity-0 hover:opacity-100 flex justify-center items-center transition duration-300 text-yellow-500 font-bold">
              View Details
            </button>
          </div>
          <div className="mt-8 relative">
            <img src={Img_3} alt="" />
            <div className="bg-slate-100 w-[285px] h-[145px]">
              <p className="text-2xl font-semibold p-2">Lolito</p>
              <p className="opacity-50 p-2">Stylish cafe chair</p>
              <p className="font-semibold p-2 text-2xl">Rp 5.000.000 </p>
            </div>
            <button className="absolute top-0 left-0 w-full h-full bg-white opacity-0 hover:opacity-100 flex justify-center items-center transition duration-300 text-yellow-500 font-bold">
              View Details
            </button>
          </div>

          <div className="mt-8 relative">
            <img src={Img_4} alt="" />
            <div className="bg-slate-100 w-[285px] h-[145px]">
              <p className="text-2xl font-semibold p-2">Reprise</p>
              <p className="opacity-50 p-2">Stylish cafe chair</p>
              <p className="font-semibold p-2 text-2xl">Rp 7.000.000 </p>
            </div>
            <button className="absolute top-0 left-0 w-full h-full bg-white opacity-0 hover:opacity-100 flex justify-center items-center transition duration-300 text-yellow-500 font-bold">
              View Details
            </button>
          </div>
        </div>
        <div className="flex justify-around">
          <div className="mt-8 relative">
            <img src={Img_5} alt="" />
            <div className="bg-slate-100 w-[285px] h-[145px]">
              <p className="text-2xl font-semibold p-2">Grifo</p>
              <p className="opacity-50 p-2">Stylish cafe chair</p>
              <p className="font-semibold p-2 text-2xl">Rp 1.500.000 </p>
            </div>
            <button className="absolute top-0 left-0 w-full h-full bg-white opacity-0 hover:opacity-100 flex justify-center items-center transition duration-300 text-yellow-500 font-bold">
              View Details
            </button>
          </div>

          <div className="mt-8 relative">
            <img src={Img_6} alt="" />
            <div className="bg-slate-100 w-[285px] h-[145px]">
              <p className="text-2xl font-semibold p-2">Muggo</p>
              <p className="opacity-50 p-2">Stylish cafe chair</p>
              <p className="font-semibold p-2 text-2xl">Rp 1500.000 </p>
            </div>
            <button className="absolute top-0 left-0 w-full h-full bg-white opacity-0 hover:opacity-100 flex justify-center items-center transition duration-300 text-yellow-500 font-bold">
              View Details
            </button>
          </div>
          <div className="mt-8 relative">
            <img src={Img_7} alt="" />
            <div className="bg-slate-100 w-[285px] h-[145px]">
              <p className="text-2xl font-semibold p-2">Pingky</p>
              <p className="opacity-50 p-2">Stylish cafe chair</p>
              <p className="font-semibold p-2 text-2xl">Rp 5.000.000 </p>
            </div>
            <button className="absolute top-0 left-0 w-full h-full bg-white opacity-0 hover:opacity-100 flex justify-center items-center transition duration-300 text-yellow-500 font-bold">
              View Details
            </button>
          </div>

          <div className="mt-8 relative">
            <img src={Img_4} alt="" />
            <div className="bg-slate-100 w-[285px] h-[145px]">
              <p className="text-2xl font-semibold p-2">Reprise</p>
              <p className="opacity-50 p-2">Stylish cafe chair</p>
              <p className="font-semibold p-2 text-2xl">Rp 7.000.000 </p>
            </div>
            <button className="absolute top-0 left-0 w-full h-full bg-white opacity-0 hover:opacity-100 flex justify-center items-center transition duration-300 text-yellow-500 font-bold">
              View Details
            </button>
          </div>
        </div>
        <button className="w-[245px] h-[48px] border-2 border-yellow-600 text-xl text-yellow-600 font-semibold ml-[640px] mt-[32px] hover:bg-yellow-600 hover:text-white transition duration-700 ease-in-out">
          Show More
        </button>
      </div>
    );
  }
}
