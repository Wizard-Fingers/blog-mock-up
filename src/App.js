import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Layout } from "./components/Layout";
import{Footer} from './components/Footer'
function App() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <Hero />
      <Layout />
      <Footer/>
    </div>
  );
}

export default App;
