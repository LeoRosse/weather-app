import React from "react";
import "./App.styles.scss";
import { Weather } from "./@typings/weather";
import { WeatherInfo } from "./components/WeatherInfo";

interface AppProps {
  weather: Weather;
  image: any;
  getWeather: (keyword: string) => void;
  getImage: (keyword: string) => void;
}

const App: React.FC<AppProps> = ({ weather, getWeather, image, getImage }) => {
  const [keywords, setKeywords] = React.useState("");
  const search = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      getWeather(keywords);
      getImage(keywords);
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
        className="main__input"
        placeholder="Choose a city..."
      />
      <WeatherInfo
        showInfo={weather !== null}
        weather={weather}
        image={image}
      />
    </main>
  );
};

export default App;
