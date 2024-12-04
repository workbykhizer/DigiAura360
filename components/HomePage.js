import React from 'react'
import { motion } from 'framer-motion';
import Hero from './Hero'
import About from './About'
import Projects from './Projects';
import Services from './Services';


const HomePage = () => {
  return (
    <div>
        {/* Hero Section: Slide Up */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <Hero />
      </motion.div>

      {/* About Section: Slide Left */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <About />
      </motion.div>

      {/* Projects Section: Scale In */}
      <motion.div
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <Projects />
      </motion.div>


      <motion.div
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <Services/>
      </motion.div>
    </div>
  )
}

export default HomePage