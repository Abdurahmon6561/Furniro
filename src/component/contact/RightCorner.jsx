import React, { Component } from "react";

export default class RightCorner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    // Handle form submission here
    console.log("Form submitted!");
    console.log(this.state);
  };

  render() {
    const { name, email, subject, message } = this.state;
    return (
      <div className="mr-10">
        <div className="mt-[36px]">
          <label className="block">
            <span className="cursor-pointer font-semibold">Your name</span>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              placeholder="Abc"
              className="mt-1 px-3 py-2 bg-white border shadow-sm w-[453px] h-[75px] border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
            />
          </label>
        </div>
        <div className="mt-[36px]">
          <label className="block">
            <span className="cursor-pointer font-semibold">Email address</span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              placeholder="Abc@def.com"
              className="mt-1 px-3 py-2 bg-white border shadow-sm w-[453px] h-[75px] border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
            />
          </label>
        </div>
        <div className="mt-[36px]">
          <label className="block">
            <span className="cursor-pointer font-semibold">Subject</span>
            <input
              type="text"
              name="subject"
              value={subject}
              onChange={this.handleChange}
              placeholder="This is an optional"
              className="mt-1 px-3 py-2 bg-white border shadow-sm w-[453px] h-[75px] border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
            />
          </label>
        </div>
        <div className="mt-[36px]">
          <label className="block">
            <span className="cursor-pointer font-semibold">Message</span>
            <input
              type="text"
              name="message"
              value={message}
              onChange={this.handleChange}
              placeholder="Hi! i’d like to ask about"
              className="mt-1 px-3 py-2 bg-white border shadow-sm w-[453px] h-[120px] border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
            />
          </label>
        </div>
        <button
          type="button"
          onClick={this.handleSubmit}
          className="w-[237px] mt-[49px] mb-[63px] h-[74px] text-white font-bold rounded-xl  hover:rounded-xl hover:w-[150px] hover:h-[74px] hover:transition duration-700 ease-in-out"
          style={{ backgroundColor: "rgb(184, 142, 47)" }}
        >
          Submit
        </button>
      </div>
    );
  }
}
