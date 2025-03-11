"use client"

import { motion } from "framer-motion"

const achievements = [
  {
    title: "Coding Proficiency",
    description: "Solved around 200+ coding problems on LeetCode and GeeksforGeeks",
    link: "https://leetcode.com/u/Madhav_muntha/",
  },
  {
    title: "Hackathon Participation",
    description: "Participated in hackathons conducted by college and external organizations",
  },
]

const certificates = [
  {
    title: "Python for Data Science",
    organization: "NPTEL",
    period: "05/2023 - 07/2023",
    description:
      "Course covering Python programming language fundamentals and its applications in data science, including data analysis, visualization, and machine learning techniques.",
  },
  {
    title: "Methodology for Data Science",
    organization: "Coursera | IBM",
    period: "10/2023",
    description:
      "Completed a course covering essential methodologies for data science, including data collection, preprocessing, analysis, and interpretation techniques.",
  },
  {
    title: "Machine Learning with Python",
    organization: "Coursera | IBM",
    period: "12/2023",
    description:
      "Completed a course covering machine learning concepts and techniques using the Python programming language. Topics included data preprocessing, model selection, evaluation, and deployment.",
  },
]

const Achievements = () => {
  return (
    <section id="achievements" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center text-gray-800 mb-12"
      >
        Achievements & Certifications
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-green-50 rounded-lg shadow-md p-6"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{achievement.title}</h3>
            <p className="text-gray-600 mb-2">{achievement.description}</p>
            {achievement.link && (
              <a
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 underline"
              >
                View Profile
              </a>
            )}
          </motion.div>
        ))}
      </div>
      <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Certifications</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h4 className="text-lg font-semibold text-green-600 mb-2">{cert.title}</h4>
            <p className="text-gray-700 font-medium mb-2">{cert.organization}</p>
            <p className="text-gray-600 mb-2">{cert.period}</p>
            <p className="text-gray-600">{cert.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Achievements

