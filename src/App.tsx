import React from "react";
import "./App.styles.scss";

interface AppProps {
  weather: any;
  getWeather: (keyword: string) => void;
}

const App: React.FC<AppProps> = props => {
  const [keywords, setKeywords] = React.useState("");
  const search = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.getWeather(keywords);
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
    </main>
  );
};

export default App;
