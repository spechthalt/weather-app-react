import Form from "./Form";
import MainInfo from "./MainInfo";
import Credits from "./Credits";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="app-container">
          <div className="weather-app">
            <Form />
            <MainInfo />
          </div>
          <Credits />
        </div>
      </div>
    </div>
  );
}

export default App;
