"use client"

import { motion } from "framer-motion"

const projects = [
  {
    title: "Speech-Controlled AI Assistant",
    description:
      "Developed a Python-based voice assistant using SpeechRecognition, pyttsx3, OpenAI API, and PyAutoGUI. Integrated text-to-speech and speech recognition to automate tasks like Google/YouTube search, email sending, music playback, WhatsApp messaging, and system controls.",
    techStack: ["Python", "SpeechRecognition", "pyttsx3", "OpenAI API", "PyAutoGUI"],
    date: "2024",
  },
  {
    title: "CNN-Based Waste Classification",
    description:
      "Developed a CNN model using Python, TensorFlow/Keras, OpenCV, and NumPy to classify plastic waste into different categories. Implemented deep learning techniques for accurate waste classification, aiding in efficient recycling and waste management.",
    techStack: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy"],
    date: "2024",
  },
  {
    title: "Driver Drowsiness Detection System",
    description:
      "Developed a real-time system to detect driver drowsiness using OpenCV, achieving a good accuracy rate in identifying drowsy states. Utilized OpenCV for face and eye detection, along with NumPy for efficient data processing. Integrated audio alarms triggered by prolonged eye closures, reducing reaction time to drowsiness incidents.",
    techStack: ["OpenCV", "NumPy", "Python"],
    date: "05/2024",
  },
  {
    title: "House Price Prediction",
    description:
      "Developed a machine learning model to predict house prices in Bengaluru using Python, Pandas, scikit-learn, Flask, and created a web interface. Evaluated model performance using cross-validation techniques, achieving an accuracy of 85%.",
    techStack: ["Python", "Pandas", "scikit-learn", "Flask"],
    date: "12/2023",
  },
  {
    title: "Comprehensive GST Calculator",
    description:
      "Designed to accurately determine GST rates, cross-verifying against original rates to prevent fraudulent imposition. Developed a web-based solution using HTML, CSS, and JavaScript, integrated with an XML database.",
    techStack: ["HTML", "CSS", "JavaScript", "XML"],
    date: "08/2023",
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-gray-800 mb-12"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
            >
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{project.date}</p>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

