// Import necessary styles and components
import "./App.css";
import Headers from "./components/Headers";
import PizzaContainer from "./pages/PizzaContainer";
import FinalPizza from "./pages/FinalPizza";
import { useSelectedBase } from "./context/SelectedBase";

function App() {
  // Access the state from the context
  const { displayFinalPizza } = useSelectedBase();

  return (
    // Create the main App component
    <div className="App">
      {/* Render the header */}
      <Headers />

      {/* Conditionally render either the final pizza or the pizza container based on displayFinalPizza state */}
      {displayFinalPizza ? <FinalPizza /> : <PizzaContainer />}
    </div>
  );
}

// Export the App component
export default App;
