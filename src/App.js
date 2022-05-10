import Hero from "./components/Hero/Hero.jsx";
import Nav from "./components/Navigation/Nav.jsx";
import About from "./components/About/About.jsx";
import Tech from "./components/Tech/Tech.jsx"
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Hero/>
      <Nav/>
      <About/>
      <Tech/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
