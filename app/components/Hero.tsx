"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState, useEffect } from "react"
import Image from "next/image"

const titles = [
  "AI Enthusiast",
  "Data Scientist",
  "Machine Learning Engineer",
  "Prompt Engineer",
  "Deep Learning Researcher",
]

const Hero = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length)
    }, 2000) // Change title every 2 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="bg-gradient-to-r from-green-50 to-green-100 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          >
            Hi, I&apos;m Satya Venkata Madhav Muntha
          </motion.h1>
          <AnimatePresence mode="wait">
            <motion.h2
              key={currentTitleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-semibold text-green-600 mb-4"
            >
              {titles[currentTitleIndex]}
            </motion.h2>
          </AnimatePresence>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 mb-6"
          >
            Aspiring AI & Data Science Engineer passionate about building intelligent systems and solving real-world
            challenges with machine learning and deep learning.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4"
          >
            <a href="mailto:madhavmsv2903@gmail.com" className="text-green-600 hover:text-green-700">
              madhavmsv2903@gmail.com
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="tel:+919121730396" className="text-green-600 hover:text-green-700">
              +91 9121730396
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 flex items-center justify-center sm:justify-start gap-4"
          >
            <a
              href="https://linkedin.com/in/satya-venkata-madhav-muntha-064461246"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700"
            >
              LinkedIn
            </a>
            <span>|</span>
            <a
              href="https://github.com/Madhav5473"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700"
            >
              GitHub
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link
              href="#contact"
              className="bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-300 mt-6 inline-block"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/2"
        >
          {/* Replace with Next.js Image component */}
          <Image
            src="/Images/profile_ai.webp"
            alt="Madhav Muntha"
            width={400}
            height={400}
            className="w-full h-auto rounded-lg shadow-lg"
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

