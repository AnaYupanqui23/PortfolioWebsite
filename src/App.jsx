import './App.css'
import { useState, useEffect } from 'react'
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';

const base = import.meta.env.BASE_URL

function App() {

  return (
    <>
      <div className="global-gradient-bg">
        <ShaderGradientCanvas
          key="global-gradient"
          style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
          pointerEvents="none"
        >
          <ShaderGradient
            key="gradient-inner"
            type="waterPlane"
            animate="on"
            uTime={0.2}
            uSpeed={0.2}
            uStrength={2.5}
            uDensity={5}
            uFrequency={5.5}
            color1="#cfcadc"
            color2="#d6b1cf" /**neutral pink shade edc8e5 */
            color3="#C4A882"
            wireframe={false}
            shader="defaults"
            rotationX={0}
            rotationY={0}
            rotationZ={180}
            positionX={0}
            positionY={0}
            positionZ={0}
            enableTransition={false}
            cDistance={5}
            cameraZoom={1}
          />
        </ShaderGradientCanvas>
      </div>
      
      <nav>
        <img src={`${base}website-logos/favicon-long1.png`} alt="Ana Paula" className="nav-logo" />
        <div className="nav-links">
          <a href="#about">about</a>
          <a href="#projects">projects</a>
          <a href="#skills">skills</a>
          <a href="#contact">contact</a>
        </div>
      </nav>

      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      
    </>
  )
}

export default App
