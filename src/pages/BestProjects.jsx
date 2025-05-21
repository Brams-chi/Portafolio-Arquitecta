import React from 'react'
import Card from '../components/ui/card'
import reactLogo from '../assets/react.svg'
import { motion } from "framer-motion"

const BestProjects = () => {
    return (
        <section className="max-w-6xl mx-auto">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-serif mb-4"
            >
                <h2 className="text-3xl font-serif mb-8 text-center">Proyectos destacados</h2>
            </motion.h1>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.4 }}
                className="mt-6"
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((item) => (
                        <Card key={item} className="overflow-hidden hover:shadow-2xl transition-all">
                            <img src={reactLogo} alt="Proyecto" className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">Casa Familiar #{item}</h3>
                                <p className="text-sm text-neutral-600">Diseño orientado a la eficiencia y confort. Tramitación municipal completa.</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default BestProjects