import Header from "./components/Header";
import Banner from './components/Banner'
import ServicesExperience from './components/ServicesExperience'
import Projects from './components/Projects'
import Footer from './components/Footer'
import React from "react";

function App() {
  return (
    <div>
        <Header/>
        <Banner/>
        <ServicesExperience/>
        <Projects/>
        <Footer/>
    </div>
  );
}

export default App;
