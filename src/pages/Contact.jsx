import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Button from '../components/ui/button';
import Modal from '../components/ui/modal';
import { motion } from "framer-motion"


const Contact = () => {
  const form = useRef();
  const [showForm, setShowForm] = useState(true);
  const [modalMessage, setModalMessage] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const submitted = localStorage.getItem('form_submitted');
    if (submitted === 'true') setShowForm(false);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_EMAILJS_PUBLIC_KEY,
        import.meta.env.VITE_TEMPLATE_EMAILJS_PUBLIC_KEY,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setModalMessage('Formulario enviado con éxito. Nos contactaremos contigo pronto. ✉️');
          setModalOpen(true);
          setShowForm(false);
          localStorage.setItem('form_submitted', 'true');
        },
        () => {
          setModalMessage('Hubo un error al enviar el mensaje. Por favor intenta más tarde. ❌');
          setModalOpen(true);
        }
      );
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="bg-neutral-100 text-black py-16 px-4">
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-2xl mx-auto text-center"
        >
            <h2 className="text-3xl font-serif mb-6">Contacto</h2>
            <p className="mb-8 text-lg font-medium">{showForm ? '¿Tienes un proyecto en mente o necesitas asesoría? Escríbeme y conversemos.' : 'Genial buena idea.'}</p>

            {showForm ? (
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <input
                type="text"
                name="name"
                placeholder="Nombre"
                className="w-full p-3 rounded-xl text-black"
                required
                />
                <input
                type="email"
                name="correo"
                placeholder="Correo electrónico"
                className="w-full p-3 rounded-xl text-black"
                required
                />
                <textarea
                name="message"
                placeholder="Mensaje"
                rows={5}
                className="w-full p-3 rounded-xl text-black"
                required
                />
                <Button type="submit" variant="outline">
                Enviar mensaje
                </Button>
            </form>
            ) : (
            <div className="mt-6 text-lg">
                ¡Gracias por escribirnos! Nos contactaremos contigo pronto. 💬
            </div>
            )}
          </motion.div>

      <Modal show={modalOpen} message={modalMessage} onClose={handleCloseModal} />
    </section>
  );
};

export default Contact;
