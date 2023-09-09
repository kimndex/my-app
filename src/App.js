import "./styles.css";
import Search from "./Search";

import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Search defaultCity="Harare" />
      <div className="weather-forecast"></div>
      <Footer />
    </div>
  );
}
