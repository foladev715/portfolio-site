import "./App.css";
import React from "react";
import About from "./components/about";
import Navbar from "./components/navbar";
import Services from "./components/services";
import TopSection from "./components/topSection";
import Stats from "./components/stats";
import Projects from "./components/projects";
import Testimonials from "./components/testimonials";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <TopSection />
        <About />
        <Services />
        <Stats />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
