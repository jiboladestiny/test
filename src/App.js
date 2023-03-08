import About from "./components/About";
import Herosection from "./components/Herosection";
import Services from "./components/Services";
import Work from "./components/Work";


function App() {
  return (
    <>
      <Herosection />
      <div className="container">
        <About />
        <Services/>
        <Work/>
      </div>
    </>
  );
}

export default App;
