import "./styles.css";
import Search from "./Search";
import Date from "./Date";
import Current from "./Current";
import Button from "./Button";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Search />
      <div className="row">
        <Date />
        <Current />
      </div>
      <Button />
      <div id="weather-forecast"></div>
      <Footer />
    </div>
  );
}
