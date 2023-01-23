import "./App.css";
import Form from "./components/Form";
import Result from "./components/Result";
import Global from "./styles/global";

const App = () => {
  return (
    <div className="App">
      <Global />
      <div className="App-div">
        <Form />
        <Result />
      </div>
    </div>
  );
};

export default App;
