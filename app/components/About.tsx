"use client"

import { motion } from "framer-motion"

const About = () => {
  return (
    <section id="about" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center text-gray-800 mb-12"
      >
        About Me
      </motion.h2>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/2 mb-8 md:mb-0"
        >
          <img src="/Images/profile.jpg?height=400&width=400" alt="Madhav" className="rounded-full w-64 h-64 mx-auto" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="md:w-1/2"
        >
          <h3 className="text-2xl font-semibold text-green-600 mb-4">Education</h3>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>
              B.Tech in Artificial Intelligence and Data Science
              <br />
              Vishnu Institute of Technology (2021 - Present)
              <br />
              CGPA: 8.4
            </li>
            <li>
              MPC (Mathematics, Physics, Chemistry)
              <br />
              Narayana Jr College (2019 - 2021)
              <br />
              Marks: 945
            </li>
          </ul>
          <h3 className="text-2xl font-semibold text-green-600 mb-4">Interests</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Exploring New Technologies</li>
            <li>Fitness and Weight Training</li>
            <li>Motorcycles & Traveling</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default About

