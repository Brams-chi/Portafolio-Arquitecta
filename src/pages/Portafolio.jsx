import React from 'react'
import { motion } from "framer-motion"
import PDFMagazine from '../components/ui/PDFMagazine'

const Portafolio = () => {
    return (
        <>
            {/* Portafolio */}

            <section className="text-center">
                <h2 className="text-3xl font-serif mb-4">Visualiza el portafolio</h2>
                <p className="mb-6 text-neutral-600">Conoce más a fondo la trayectoria profesional y proyectos realizados.</p>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.1 }}
                >
                    <PDFMagazine file={'/Portafolio_CRC.pdf'} />
                </motion.h1>
            </section>

            <section className="py-16 px-4">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-serif mb-6">Sobre CRC</h2>
                    <p className="text-neutral-700 leading-relaxed">
                        Arquitecta con más de 4 años de experiencia en el diseño de espacios funcionales y estéticamente armoniosos.
                        Especializado/a en proyectos residenciales, comerciales y equipamiento técnico. Comprometido/a con la sostenibilidad,
                        la eficiencia energética y la integración de los espacios con los clientes.
                    </p>
                </div>
            </motion.div>
            </section>
        </>
    )
}

export default Portafolio