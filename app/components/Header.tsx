"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <a href="#" className="text-2xl font-bold text-gray-800">
              DS Portfolio
            </a>
          </motion.div>
          <div className="hidden md:flex space-x-4">
            {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-blue-500 transition duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4"
          >
            {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-gray-600 hover:text-blue-500 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  )
}

export default Header

