import React, { Component } from "react";
import LivingImg from "../../assets/images/living.png";
import DiningImg from "../../assets/images/dinnig.png";
import BedroomImg from "../../assets/images/bedroom.png";

const Url = "https://test-ecommerce-gamma.vercel.app/categories";

const images = {
  Living: LivingImg,
  Dining: DiningImg,
  Bedroom: BedroomImg,
};

export default class Browse extends Component {
  constructor() {
    super();
    this.state = {
      data: null, // Initialize data as null
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch(Url, {
        method: "GET",
      });
      const data = await response.json();
      console.log(data); // Log the data to console
      this.setState({ data }); // Update state with fetched data
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { data } = this.state;
    return (
      <div className="text-center mt-6">
        <h2 className=" text-3xl font-bold">Browse The Range</h2>
        <p className=" opacity-50 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        {/* Render data if available */}
        {data && (
          <ul className="flex flex-wrap justify-center space-x-8">
            {data.map((item) => (
              <li key={item.id} className="flex flex-col items-center">
                <img
                  src={images[item.name]}
                  alt={item.name}
                  className="w-[381px] h-[480px] object-cover"
                />
                <span className=" font-bold text-2xl p-4">{item.name}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
