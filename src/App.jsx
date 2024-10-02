import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import FeaturedBox from "./components/FeaturedBox";
import ProjectsBox from "./components/ProjectsBox";
import AboutBox from "./components/AboutBox";
import Footer from "./components/Footer";
import ContactBox from "./components/ContactBox";
import Typed from "typed.js";

function App() {
  useEffect(() => {
    const typingEffect = new Typed(".typedText", {
      strings: ["Superdev", "Developer", "Front-END"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
    });
    return () => {
      typingEffect.destroy();
    };
  }, []);

  return (
    <>
      <div className="App">
        <Header />
        <main className="wrapper">
          <FeaturedBox />
          <AboutBox />
          <ProjectsBox />
          <ContactBox />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
