import "./App.css";
import { Navbar } from "../Navbar/Navbar";
import { Routing } from "../Routing/Routing";

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routing />
      </header>
    </div>
  );
};
