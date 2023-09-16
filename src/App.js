import "./App.css";
import Headers from "./components/Headers";
import PizzaContainer from "./pages/PizzaContainer";
import FinalPizza from "./pages/FinalPizza";
import { useSelectedBase } from "./context/SelectedBase";

function App() {
  const { displayFinalPizza } = useSelectedBase();

  return (
    <div className="App">
      <Headers />

      {displayFinalPizza ? <FinalPizza /> : <PizzaContainer />}
    </div>
  );
}

export default App;
