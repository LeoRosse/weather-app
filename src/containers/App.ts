import { connect } from "react-redux";
import { getWeather } from "../actions/weather";
import { weather } from "../modules/weather";

import App from "../App";

const mapDispatchToProps = {
  getWeather
};

const mapStateToProps = (state: any) => {
  return {
    weather: weather(state)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
