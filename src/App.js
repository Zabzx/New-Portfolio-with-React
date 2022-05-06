import Hero from "./components/Hero/Hero.jsx";
import Nav from "./components/Navigation/Nav.jsx";
import About from "./components/About/About.jsx";
import Tech from "./components/Tech/Tech.jsx"

function App() {
  return (
    <div className="App">
      <Hero/>
      <Nav/>
      <About/>
      <Tech/>
    </div>
  );
}

export default App;
