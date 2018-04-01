import * as PropTypes from "prop-types";
import React, { Component } from "react";
// import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import styled, { keyframes } from "styled-components";

import "./brHackNightLogo.css";
import * as keys from "./keys.json";
const fetchJsonp = require("fetch-jsonp");
let axios = require("axios");
let jsonpAdapter = require("axios-jsonp");

const HackNightLogo = ({ className, children }) => (
  <div className={className}>{children}</div>
);

const Path = ({ className, children }) => (
  <path className={className}>{children} ></path>
);

const Drop = styled.div`
  animation: ${rain} 1s linear infinite;
`;

const Lightning = styled.div`
  animation: ${spark} 2s linear infinite;
`;

const ST0 = {
  fill: "#FCC310"
};
const ST1 = {
  fill: "#414042"
};
const ST2 = {
  // fill: "#FFFFFF",
  // stroke: "#414042",
  // strokeWidth: "5",
  // strokeLinecap: "round",
  // strokeLinejoin: "round",
  // strokeMiterlimet: "10"
};
const ST3 = {
  fill: "#FCC310",
  stroke: "#414042",
  strokeWidth: "5",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimet: "10"
};
const ST4 = {
  fill: "#034AEC"
};
const ST5 = {
  fill: "none"
};

const rain = keyframes`
	0%{
    transform: translateY(0);
    opacity: 0;
  }
  15%{
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(250%);
  }
`;

const spark = keyframes`
	0% {
		opacity: 0;
	}
	14%{
		opacity: 0;
	}
	18%{
		opacity: 1;
	}
	22%{
		opacity: 0;
	}
	74%{
		opacity: 0;
	}
	65% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
`;

export default class LogoDiv extends Component {
  // define props
  constructor(props) {
    super(props);
    this.state = {
      mobileNavOpen: false,
      weatherLocation: "70816",
      weatherInfo: false
    };
    this.toggleMobileNav = this.toggleMobileNav.bind(this);
    this.closeMobileNav = this.closeMobileNav.bind(this);
  }
  toggleMobileNav = e => {
    this.setState({
      mobileNavOpen: !this.state.mobileNavOpen
    });
  };
  closeMobileNav = e => {
    this.setState({
      mobileNavOpen: false,
      weatherInfo: []
    });
  };
  componentDidMount() {
    console.log("keys", keys);
    const suffix =
      "?client_id=" +
      keys.client_id +
      "&client_secret=" +
      keys.clientSecret +
      "";
    const gapiKey = keys.gapiKey;
    axios({
      url: `http://api.aerisapi.com/observations/${
        this.state.weatherLocation
      }${suffix}`,
      adapter: jsonpAdapter
    }).then(res => {
      let body = res.data.response;
      this.setState({ weatherInfo: body });
    });
  }
  showWeather = e => {
    // alert(
    //   `Current temperature in ${location} is: ${temp_f}. Estimate forecast ${weather}.`
    // );
  };
  render() {
    const menuClass = this.state.mobileNavOpen ? "active" : "";
    const myWeather = this.state.weatherInfo;
    const { icon, temp_f, weather } = this.state.weatherInfo
      ? this.state.weatherInfo.ob
      : false;
    const { location } = this.state.weatherInfo
      ? this.state.weatherInfo.place
      : false;
    console.log("icon", icon);

    const clear = this.state.weatherInfo
      ? this.state.weatherInfo.ob.icon.includes("clear") ||
        this.state.weatherInfo.ob.icon.includes("sunny")
      : false;
    const cloudy = this.state.weatherInfo
      ? this.state.weatherInfo.ob.icon.includes("cloudy")
      : false;
    const rain = this.state.weatherInfo
      ? this.state.weatherInfo.ob.icon.includes("rain")
      : false;
    const tstorm = this.state.weatherInfo
      ? this.state.weatherInfo.ob.icon.includes("tstorm")
      : false;
    const unknown = this.state.weatherInfo
      ? this.state.weatherInfo.ob.icon.includes("unknown")
      : false;

    console.log("icon", icon);

    return (
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 327.6 160.9"
      >
        <g>
          <g id="text-wrapper">
            <g id="text">
              <path
                id="b"
                className="st0"
                style={ST0}
                d="M0,100.2h16.5c2.8,0,5.1,0.3,6.9,0.8s3.3,1.3,4.4,2.2c1.1,0.9,1.9,2,2.3,3.3c0.4,1.2,0.7,2.6,0.7,4
                          c0,1.8-0.4,3.4-1.1,4.8s-2,2.6-3.8,3.5c2.2,1.1,3.7,2.4,4.6,3.9s1.3,3.3,1.3,5.4c0,1.5-0.3,3-0.8,4.4s-1.4,2.7-2.5,3.7
                          c-1.2,1.1-2.7,1.9-4.7,2.5c-1.9,0.6-4.3,0.9-7.1,0.9H0V100.2z M10,115.4h5.7c1.8,0,3.1-0.3,3.8-0.9s1-1.5,1-2.7
                          c0-1.3-0.4-2.2-1.2-2.7c-0.8-0.6-2.2-0.9-4.1-0.9H10V115.4z M10,131.7h5.8c2.2,0,3.8-0.4,4.6-1.2s1.2-1.9,1.2-3.2
                          c0-1.4-0.4-2.4-1.2-3.1c-0.8-0.7-2.2-1.1-4.3-1.1H10V131.7z"
              />
              <path
                id="r"
                className="st0"
                style={ST0}
                d="M67.5,112.7c0,2.5-0.5,4.7-1.4,6.6c-1,1.9-2.4,3.4-4.4,4.6l8.1,15.8H58.5L52,126.1h-5.7v13.6H36.2
                          v-39.5h15.6c3.1,0,5.6,0.4,7.6,1c2,0.7,3.6,1.6,4.8,2.8c1.2,1.2,2,2.5,2.5,4C67.2,109.6,67.5,111.1,67.5,112.7z M46.3,117.8h5.2
                          c2.1,0,3.6-0.4,4.5-1.2c0.9-0.8,1.3-2,1.3-3.6c0-1.5-0.5-2.6-1.4-3.4s-2.5-1.2-4.8-1.2h-4.9v9.4H46.3z"
              />
              <path
                id="hack"
                className="st1"
                style={ST1}
                d="M82.8,100.6v14.6c1.2-1.6,2.5-2.9,4-3.6s3.2-1.2,4.9-1.2c6.1,0,9.2,3.5,9.2,10.5v18.8h-6v-17.9
                          c0-2.3-0.4-3.9-1.2-4.8c-0.8-0.9-2-1.4-3.6-1.4c-1.1,0-2.1,0.2-3,0.6s-1.7,0.9-2.3,1.6s-1.1,1.4-1.5,2.3s-0.5,1.7-0.5,2.7v17h-6
                          v-39.1L82.8,100.6L82.8,100.6z M123.9,136c-1,1.3-2.3,2.3-3.7,3.2c-1.5,0.8-3.3,1.3-5.4,1.3c-1.3,0-2.5-0.2-3.6-0.5
                          s-2.1-0.9-2.9-1.6c-0.8-0.7-1.5-1.6-1.9-2.7c-0.5-1.1-0.7-2.3-0.7-3.8c0-2,0.4-3.6,1.3-4.8c0.8-1.2,1.9-2.2,3.3-2.9
                          c1.4-0.7,2.9-1.2,4.6-1.5s3.4-0.4,5.1-0.5l4.1-0.2v-1.2c0-2.2-0.5-3.6-1.5-4.5c-1-0.8-2.3-1.2-3.9-1.2c-1.9,0-3.2,0.3-4.1,1
                          s-1.5,1.6-1.8,2.8l-5.5-0.6c0.5-2.8,1.7-4.8,3.6-6.1s4.6-1.9,8-1.9c2.2,0,4,0.3,5.4,0.9s2.6,1.4,3.4,2.4c0.8,1,1.4,2.2,1.8,3.6
                          c0.3,1.4,0.5,2.9,0.5,4.6v17.8h-5.7V136H123.9z M119.9,126.4c-1.8,0.1-3.2,0.3-4.3,0.6c-1.1,0.3-2,0.7-2.6,1.1
                          c-0.6,0.5-1,1-1.2,1.6s-0.3,1.3-0.3,1.9c0,1.2,0.4,2.2,1.1,2.9c0.8,0.7,1.9,1,3.3,1c2.6,0,4.6-0.7,5.8-2.1
                          c1.3-1.4,1.9-3.3,1.9-5.6v-1.6L119.9,126.4z M159.9,129.7c-0.4,3.4-1.5,6.1-3.5,8s-4.8,2.9-8.5,2.9c-2.2,0-4.1-0.4-5.8-1.1
                          s-3-1.7-4.1-3s-1.9-2.9-2.4-4.7s-0.8-3.9-0.8-6.2c0-2.3,0.3-4.3,0.9-6.2c0.6-1.9,1.5-3.5,2.6-4.8s2.5-2.4,4.2-3.1
                          c1.6-0.7,3.5-1.1,5.6-1.1c1.9,0,3.6,0.3,4.9,0.8c1.3,0.5,2.4,1.2,3.3,2.1c0.9,0.9,1.6,1.9,2.1,3.1s0.8,2.4,1.1,3.7l-6,0.9
                          c-0.3-1.6-0.8-2.9-1.6-4s-2.1-1.6-4-1.6c-1.3,0-2.4,0.3-3.3,0.9s-1.6,1.3-2.1,2.3c-0.5,0.9-0.9,2-1.1,3.2
                          c-0.2,1.2-0.3,2.4-0.3,3.7c0,1.4,0.1,2.8,0.4,4c0.2,1.2,0.6,2.3,1.2,3.2c0.5,0.9,1.2,1.6,2.1,2.1s1.9,0.8,3.2,0.8
                          c1.8,0,3.2-0.5,4.2-1.5s1.5-2.4,1.8-4.3h5.9V129.7z M170.8,100.6v21.6l11.7-11h7l-9.9,9.7l10.8,18.8h-6.6l-8.5-15.2l-4.5,4.2
                          v11.1H165v-39.1h5.8V100.6z"
              />
              <path
                id="dot"
                className="st0"
                style={ST0}
                d="M195,136.2c0-0.6,0.1-1.1,0.3-1.6s0.5-0.9,0.8-1.3s0.8-0.6,1.2-0.8c0.5-0.2,1-0.3,1.6-0.3
                          s1.1,0.1,1.5,0.3c0.5,0.2,0.9,0.5,1.2,0.8s0.6,0.8,0.8,1.3s0.3,1,0.3,1.6s-0.1,1.2-0.3,1.7s-0.5,0.9-0.9,1.3
                          c-0.4,0.3-0.8,0.6-1.2,0.8c-0.5,0.2-0.9,0.3-1.4,0.3c-0.6,0-1.1-0.1-1.6-0.3s-0.9-0.5-1.2-0.8s-0.6-0.8-0.8-1.3
                          S195,136.8,195,136.2z"
              />
              <path
                id="night"
                className="st1"
                style={ST1}
                d="M213.6,111.2v4.2c1.2-1.8,2.6-3,4.1-3.8s3.2-1.2,4.9-1.2c6.1,0,9.2,3.5,9.2,10.5v18.8h-6v-17.9
                          c0-2.3-0.4-3.9-1.2-4.8s-2-1.4-3.6-1.4c-1.1,0-2,0.2-2.9,0.6s-1.7,0.9-2.3,1.6s-1.1,1.4-1.5,2.3s-0.6,1.8-0.6,2.7v17h-6v-28.5
                          L213.6,111.2L213.6,111.2z M244.3,100.6v6.2h-6.2v-6.2H244.3z M244.2,111.2v28.5h-6v-28.5H244.2z M256.6,141.9
                          c0.3,1.5,0.9,2.6,1.9,3.2c0.9,0.6,2.4,0.9,4.6,0.9c1.6,0,2.9-0.3,3.9-1s1.7-1.7,2.1-3c0.4-1.4,0.7-3.2,0.7-5.6v-1.9
                          c-1,1.5-2.2,2.6-3.7,3.3c-1.5,0.8-3.1,1.2-5,1.2c-3.7,0-6.5-1.3-8.5-3.8s-3-6-3-10.5c0-4.3,1.1-7.8,3.3-10.5
                          c2.2-2.6,5.1-3.9,8.7-3.9c3.4,0,6.2,1.4,8.4,4.3v-3.5h5.8v24.2c0,5.5-1,9.4-3.1,11.9c-2,2.4-5.2,3.6-9.6,3.6
                          c-4,0-6.9-0.7-8.9-2.2c-2-1.4-3.2-3.7-3.5-6.9h5.9V141.9z M269.8,124.4c0-3-0.6-5.2-1.8-6.7c-1.2-1.5-2.9-2.3-5.3-2.3
                          c-2.2,0-3.9,0.8-5.1,2.4s-1.8,3.9-1.8,6.9s0.6,5.2,1.8,6.9c1.2,1.6,2.8,2.4,4.9,2.4c2.3,0,4.1-0.8,5.4-2.3s1.9-3.7,1.9-6.4V124.4
                          z M288.1,100.6v14.6c1.2-1.6,2.5-2.9,4-3.6s3.2-1.2,4.9-1.2c6.1,0,9.2,3.5,9.2,10.5v18.8h-6v-17.9c0-2.3-0.4-3.9-1.2-4.8
                          c-0.8-0.9-2-1.4-3.6-1.4c-1.1,0-2.1,0.2-3,0.6s-1.7,0.9-2.3,1.6s-1.1,1.4-1.5,2.3s-0.5,1.7-0.5,2.7v17h-6v-39.1L288.1,100.6
                          L288.1,100.6z M309.7,116.1v-4.9h4.3v-7.7h6v7.7h6.8v4.9H320V131c0,1.5,0.3,2.5,0.9,3.2s1.4,1,2.6,1c0.6,0,1.2,0,1.7-0.1
                          s1.1-0.2,1.6-0.4l0.9,4.7c-1.7,0.6-3.5,0.9-5.5,0.9c-3,0-5.1-0.8-6.3-2.4c-1.2-1.6-1.8-4.1-1.8-7.3v-14.3h-4.4V116.1z"
              />
            </g>
          </g>
          <g id="mark">
            <path
              id="cloud"
              className="st2 dark"
              style={ST2}
              d="M176.6,40.7h-7.2c0-9.4-7.6-17.1-17.1-17.1l0,0c-9.4,0-17.1,7.6-17.1,17.1l0,0c0,0.1,0,0.2,0,0.4
                      c-8.9,1.8-15.6,9.6-15.6,19l0,0c0,10.7,8.7,19.4,19.4,19.4h37.6c10.7,0,19.4-8.7,19.4-19.4l0,0C195.9,49.4,187.3,40.7,176.6,40.7z
                      "
            />
            <path
              id="moon"
              className="st3"
              style={ST3}
              d="M204.2,50c-14.2-1.1-24.9-13.6-23.7-27.8c0.6-8,4.9-14.9,11-19.2c-0.1,0-0.2,0-0.3,0
                      c-15.8-1.3-29.6,10.5-30.9,26.3C159,45,170.8,58.8,186.6,60.1c9.8,0.8,18.8-3.4,24.5-10.5C208.9,50,206.6,50.2,204.2,50z"
            />
            <polyline
              id="left-chevron"
              className="st5"
              style={ST5}
              points="104.8,68.7 85.3,52.6 104.8,36.5 		"
            />
            <polyline
              id="right-chevron"
              className="st5"
              style={ST5}
              points="219.7,36.5 239.2,52.6 219.7,68.7 		"
            />
            <path
              id="Spark_1_"
              className="st0 hide spark spark-1"
              style={ST0}
              d="M166.5,89.2c0.2,0.2,0.2,0.5,0.1,0.7l-8.4,18.1c-0.1,0.2-0.4,0.4-0.7,0.4c-0.1,0-0.1,0-0.2,0
                      c-0.3-0.1-0.5-0.4-0.5-0.8l3.1-12.6l-6.3,1.6c-0.1,0-0.1,0-0.2,0c-0.2,0-0.4-0.1-0.5-0.2c-0.2-0.2-0.2-0.4-0.2-0.6l3.1-12.9
                      c0.1-0.3,0.4-0.5,0.7-0.5h5.1c0.4,0,0.7,0.3,0.7,0.7c0,0.1,0,0.2-0.1,0.3l-2.7,7.2l6.2-1.5c0.1,0,0.1,0,0.2,0
                      C166.1,89,166.3,89.1,166.5,89.2L166.5,89.2z"
            />
            <path
              id="Drop_3_"
              className="st4 hide rain rain-5"
              style={ST5}
              d="M148.3,79.5l-2.1,2.1c-1.2,1.2-1.2,3.1,0,4.2c1.2,1.2,3.1,1.2,4.2,0c1.2-1.2,1.2-3.1,0-4.2
                      L148.3,79.5z"
            />
            <Drop className="" />
            <path
              id="Drop_2_"
              className="st4 hide rain rain-4"
              style={ST4}
              d="M158.9,77.4l-2.1,2.1c-1.2,1.2-1.2,3.1,0,4.2c1.2,1.2,3.1,1.2,4.2,0c1.2-1.2,1.2-3.1,0-4.2
                      L158.9,77.4z"
            />
            <path
              id="Drop_4_"
              className="st4 hide rain rain-3"
              style={ST4}
              d="M141.3,79.5l-2.1,2.1c-1.2,1.2-1.2,3.1,0,4.2c1.2,1.2,3.1,1.2,4.2,0c1.2-1.2,1.2-3.1,0-4.2
                      L141.3,79.5z"
            />
            <path
              id="Drop"
              className="st4 hide rain rain-2"
              style={ST4}
              d="M174.4,78.3l-2.1,2.1c-1.2,1.2-1.2,3.1,0,4.2c1.2,1.2,3.1,1.2,4.2,0c1.2-1.2,1.2-3.1,0-4.2
                      L174.4,78.3z"
            />
            <path
              id="Drop_1_"
              className="st4 hide rain rain-1"
              style={ST4}
              d="M165,81.9l-2.1,2.1c-1.2,1.2-1.2,3.1,0,4.2c1.2,1.2,3.1,1.2,4.2,0c1.2-1.2,1.2-3.1,0-4.2
                      L165,81.9z"
            />
          </g>
        </g>
      </svg>
    );
  }

  componentWillMount() {
    // fires immediately before the initial render
  }
  componentWillReceiveProps() {
    // fires when component is receiving new props
  }
  // shouldComponentUpdate() {
  // // fires before rendering with new props or state
  // }
  componentWillUpdate() {
    // fires immediately before rendering
    // with new props or state
  }
  componentDidUpdate() {
    // fires immediately after rendering with new P or S
  }
  componentWillUnmount() {
    // fires immediately before component is unmounted
    // from DOM (removed)
  }
}
