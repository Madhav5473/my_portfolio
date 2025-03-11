"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    category: "Languages",
    skills: ["Python", "SQL", "R"],
  },
  {
    category: "Frameworks",
    skills: ["Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "OpenCV", "NLTK"],
  },
  {
    category: "Tools",
    skills: ["PowerBI", "MySQL", "Excel", "Git"],
  },
  {
    category: "Platforms",
    skills: ["Jupyter Notebook", "Visual Studio"],
  },
  {
    category: "Technologies",
    skills: ["Generative AI", "Natural Language Processing (NLP)"],
  },
  {
    category: "Soft Skills",
    skills: ["Time Management", "Problem-Solving", "Analytical Thinking", "Team Collaboration", "Adaptability"],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center text-gray-800 mb-12"
      >
        Skills
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h3 className="text-xl font-semibold text-green-600 mb-4">{category.category}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills

