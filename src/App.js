// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from "./components/header";
import About from "./components/about";
import Skills from "./components/skills";
import Portfilio from "./components/portfolio";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <h1 className="text-center text-primary">My Design</h1>
      <Header />
      <About />
      <Skills />
      <Portfilio />
      <Footer />
    </>
  );
}

export default App;
