import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
//import { ThemeProvider } from "./ThemeContext";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import WhyUsSection from "./components/WhyUsSection";
import HistorySection from "./components/HistorySection";
import GurujiSection from "./components/GurujiSection";
import ServicesSection from "./components/ServicesSection";
import CallToBookSection from "./components/CallToBookSection";
import ReviewsSection from "./components/ReviewsSection";
import GallerySection from "./components/GallerySection";
import MapTimingSection from "./components/MapTimingSection";
import Footer from "./components/Footer";
import FloatingContactButtons from "./components/FloatingContactButtons";
import "./App.css";

function App() {
  return (
      <Router>
        <div className="app">
          <Header />
          <main>
            <HeroSection />
            <WhyUsSection />
            <HistorySection />
            <GurujiSection />
            <ServicesSection />
            <CallToBookSection />
            <ReviewsSection />
            <GallerySection />
            <MapTimingSection />
            <FloatingContactButtons />
          </main>
          <Footer />
        </div>
      </Router>
  );
}

export default App;