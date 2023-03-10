import About from "./components/About";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Herosection from "./components/Herosection";
import Nesletter from "./components/Nesletter";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Work from "./components/Work";


function App() {
  return (
    <>
      <Herosection />
      <div className="container">
        <About />
        <Services />
        <Work />
      </div>
      <Testimonials />
      <Blog />
<Nesletter/>
    <Footer/>
    </>
  );
}

export default App;
