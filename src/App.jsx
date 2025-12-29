import { useState, useEffect } from 'react';

//translations
import { texts } from './i18n/texts';

//components

//Desktop
import TopBar from './Components/Desktop/TopBar/Bar';
import Home from './Components/Desktop/HomePage/HomePage';
import About from './Components/Desktop/AboutMe/AboutMe';
import Projects from './Components/Desktop/PersonalProjects/PersonalProjects';
import Skills from './Components/Desktop/Skills/Skills';
import Contact from './Components/Desktop/ContactMe/ContactMe';
import Footer from './Components/Desktop/Footer/Footer';

//Mobile
import SideBar from './Components/Mobile/sideBar/SideBar';
import HomeM from './Components/Mobile/HomeMobile/HomeMobile';

//styles
import './App.css'



import { LangContext } from './context/LangContext';

function App() {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  const [lang, setLang] = useState(() => {
    return localStorage.getItem("lang") || "es"
  });

  useEffect(() => {
    localStorage.setItem("lang", lang)
  }, [lang])



  return (
    <LangContext.Provider value={{ lang, setLang, t: texts[lang] }}>
      <div className="appContainerWidth">
        <div className='AppContainer'>
          {isMobile ? (
            <div className="sideBar">
              <SideBar />
            </div>
          ) : (
            <div className="topBar">
              <TopBar />
            </div>
          )}
          <div className="content">

            {isMobile ? (
              <div id="homeM">
                <HomeM />
              </div>

            ) : (
              <div id="home">
                <Home />
              </div>
            )}
            <div id="about">
              <About />
            </div>
            <div id="skills">
              <Skills />
            </div>
            <div id="projects">
              <Projects />
            </div>
            <div id="contact">
              <Contact />
            </div>

          </div>
        </div>
        <Footer />
      </div>
    </LangContext.Provider>
  )
}

export default App
