import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import FeaturedBox from "./components/FeaturedBox";
import ProjectsBox from "./components/ProjectsBox";
import AboutBox from "./components/AboutBox";
import Footer from "./components/Footer";
import ContactBox from "./components/ContactBox";
import ScrollReveal from "scrollreveal";
import Typed from "typed.js";

function App() {
  useEffect(() => {
    /** ScrollReveal */
    const sections = document.querySelectorAll("section[id]");
    console.log(sections);

    function scrollActive() {
      const scrollY = window.scrollY;
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
          sectionId = current.getAttribute("id");
        console.log(sectionHeight, sectionTop, sectionId);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList.add("active-link");
        } else {
          document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList.remove("active-link");
        }
      });
    }
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    //Home
    // featured box
    sr.reveal(".featured-text-card", {});
    sr.reveal(".featured-name", { delay: 100 });
    sr.reveal(".featured-text-info", { delay: 150 });
    sr.reveal(".social_icons", { delay: 150 });
    sr.reveal(".featured-image", { delay: 100 });
    sr.reveal(".featured-text-btn", { delay: 150 });

    // projectsbox
    sr.reveal(".project-box", { delay: 200 });

    // heading
    sr.reveal(".top-header", {});

    // left-right animation
    const srLeft = ScrollReveal({
      origin: "left",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    srLeft.reveal(".about-info", { delay: 150 });
    srLeft.reveal(".contact-info", { delay: 100 });

    const srRight = ScrollReveal({
      origin: "left",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    srRight.reveal(".skills-box", { delay: 150 });
    srRight.reveal(".form-control", { delay: 150 });

    window.addEventListener("scroll", scrollActive);
    // Type Effect
    const typingEffect = new Typed(".typedText", {
      strings: ["Superdev", "DevOps", "Front-END"],
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
