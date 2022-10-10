import React from "react";
import { Navbar } from "./components/Navbar";
import { Layout } from "./components/Layout";
import { Hero } from "./components/Hero";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Layout />
    </div>
  );
}

export default App;
