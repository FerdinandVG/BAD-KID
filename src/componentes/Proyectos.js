import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import './ParallaxGrid.css';
import badkidlogo from './badkidlogo.png';
import fondopr from './fondoproyectos.jpg';
import declaracionuno from './declaracionuno.jpg';
import biutiful from './biutiful.png';
import cartelseisocho from './cartelseisocho.jpg';
import corazonroto from './corazonroto.png';
import diosperdone from './diosperdone.png';
import fueraporros from './fueraporros.jpg';
import gayispunk from './gayispunkmb.jpg';
import eternamente from './eternamente.png';
import cruzlgbt from './cruzlgbt.jpg';
import { motion } from 'framer-motion';


const Card = ({ src }) => (
  <motion.div
    className="card"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    <motion.img
      src={src}
      alt="art"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    />
  </motion.div>
)


const ParallaxGrid = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const images = [
    declaracionuno,
    biutiful,
    cartelseisocho,
    corazonroto,
    diosperdone,
    fueraporros,
    gayispunk,
    eternamente,
    cruzlgbt,

    
  ];

  const MAX_OFFSET = 250; // controla hasta dónde se separan las columnas

  const getTransform = (speed) => {
    const rawOffset = scrollY * (1 - speed)
    const offset = Math.min(rawOffset, MAX_OFFSET)
    return { transform: `translateY(${offset}px)` }
  }

  return (
    <div className="parallax-wrapper">

      {/* FONDO FULL SCREEN */}
      <div
        className="pcontainer"
        style={{ backgroundImage: `url(${fondopr})` }}
      >
        <Link to="/home">
          <img
            src={badkidlogo}
            alt="Bad Kid Logo"
            className="badkidlogo"
          />
        </Link>

        <ul className="uppermenu">
          <li>
            <Link to="/home/proyectos">PROYECTOS</Link>
          </li>
          <li>
            <Link to="/home/historia">COMPARTE TU HISTORIA</Link>
          </li>
          <li>
            <Link to="/home/directorio">AYUDA LGBT</Link>
          </li>
        </ul>
      </div>

      {/* GRID PARALLAX */}
      <div className="parallax-container">

        <div className="column" style={getTransform(0.10)}>
        {images.map((src, i) => (
  <Card key={i} src={src} />
))}
        </div>

        <div className="column" style={getTransform(0.40)}>
        {images.map((src, i) => (
  <Card key={i} src={src} />
))}
        </div>

        <div className="column" style={getTransform(0.70)}>
        {images.map((src, i) => (
  <Card key={i} src={src} />
))}
        </div>

        <div className="column" style={getTransform(0.100)}>
        {images.map((src, i) => (
  <Card key={i} src={src} />
))}
        </div>

      </div>

    </div>
  )
}

export default ParallaxGrid