import "./Style.css";
import FormComponents from "./Components/FormComponents";

import Heading from "./Components/Heading";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading />
        <FormComponents />
      </header>
    </div>
  );
}

export default App;