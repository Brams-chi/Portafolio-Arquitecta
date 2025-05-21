import React from 'react'
import { motion } from "framer-motion"
import Button from '../components/ui/button'

const Home = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/vite.svg')" }}>
        <div className="bg-white/70 p-8 rounded-2xl text-center max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-serif mb-4"
          >
            Diseño arquitectónico CRC
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg font-light"
          >
            Especialistas en ambientes, tramitaciones municipales y arquitectura orientada al espacio.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6"
          >
          </motion.div>
        </div>
      </section>
  )
}

export default Home