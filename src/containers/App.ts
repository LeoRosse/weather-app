import { connect } from "react-redux";
import { getWeather } from "../actions/weather";
import { getImage } from "../actions/image";
import { weather } from "../modules/weather";
import { image } from "../modules/image";

import App from "../App";

const mapDispatchToProps = {
  getWeather,
  getImage
};

const mapStateToProps = (state: any) => {
  return {
    weather: weather(state),
    image: image(image)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
