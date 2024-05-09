import React, { Component } from "react";

const Url = "https://test-ecommerce-gamma.vercel.app/categories";

export default class FetchUrl extends Component {
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
      <div>
        {/* Render data if available */}
        {data && (
          <ul>
            {data.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
