import React from "react";
import "./App.styles.scss";
import { Weather } from "./@typings/weather";
import { WeatherInfo } from "./components/WeatherInfo";

interface AppProps {
  weather: Weather;
  getWeather: (keyword: string) => void;
}

const App: React.FC<AppProps> = ({ weather, getWeather }) => {
  const [keywords, setKeywords] = React.useState("");
  const search = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      getWeather(keywords);
      setKeywords("");
    }
  };
  return (
    <main className="main">
      <input
        type="text"
        onKeyPress={search}
        onChange={e => setKeywords(e.target.value)}
        value={keywords}
      />
      <WeatherInfo showInfo={weather !== null} weather={weather} />
    </main>
  );
};

export default App;
