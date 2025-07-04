import gsap, { ScrollTrigger, SplitText } from 'gsap/all';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cocktail from './components/Cocktail';
import About from './components/About';
import Art from './components/Art';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktail />
      <About />
      <Art />
    </main>
  );
};

export default App;
