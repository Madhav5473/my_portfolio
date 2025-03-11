"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    title: "Freelance AI Model Trainer",
    company: "Outlier.ai",
    period: "Jan 2025 - Present",
    location: "Remote",
    description: [
      "Designed and tested prompts to identify reasoning and logical errors in AI models.",
      "Evaluated model failures and analyzed step-by-step mistakes in responses.",
      "Iteratively refined and trained models to improve accuracy.",
      "Worked across domains including mathematics, general awareness, and coding.",
    ],
  },
  {
    title: "Data Scientist Intern",
    company: "HippoCloud Technologies",
    period: "05/2024 - 08/2024",
    location: "Vizag",
    description: [
      "Enhanced the face detection and recognition application using OpenCV, TensorFlow, LangChain, and Tkinter, achieving 78% accuracy and integrating new data to improve model performance.",
      "Developed and implemented a comprehensive anti-spoof detection system, significantly increasing security and reducing false positives by 15%.",
      "Contributed to Docker-based application deployment and developed interactive dashboards using Superset for data visualization.",
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center text-gray-800 mb-12"
      >
        Work Experience
      </motion.h2>
      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-8 bg-green-50 rounded-lg shadow-md p-6"
          >
            <div className="flex items-center mb-4">
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                <p className="text-green-600 font-medium">{exp.company}</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              {exp.period} | {exp.location}
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-4">
              {exp.description.map((item, itemIndex) => (
                <li key={itemIndex} className="mb-2">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Experience

