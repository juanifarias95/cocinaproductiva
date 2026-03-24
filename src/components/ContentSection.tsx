import React from 'react';
import { motion } from 'framer-motion';
export function ContentSection() {
  const chapters = [
  {
    title: 'Introducción',
    description:
    'El primer paso para transformar tu mentalidad y prepararte para emprender con éxito.'
  },
  {
    title: 'Capítulo 1. La Oportunidad Real',
    description:
    'Por qué los desayunos sorpresa son un modelo de negocio rentable y de alta demanda.'
  },
  {
    title: 'Capítulo 2. Construcción del Negocio',
    description:
    'Cómo definir tu oferta, elegir tus primeros productos y crear un menú atractivo.'
  },
  {
    title: 'Capítulo 3. Costos, Precios y Rentabilidad',
    description:
    'La fórmula exacta para saber cuánto gastas, cuánto cobrar y asegurar tu ganancia.'
  },
  {
    title: 'Capítulo 4. Operación Profesional Desde Casa',
    description:
    'Organiza tu espacio, tus compras y tu tiempo para trabajar de forma eficiente.'
  },
  {
    title: 'Capítulo 5. Marca, Redes y Primeras Ventas',
    description:
    'Estrategias simples para mostrar tu trabajo y atraer clientes sin ser experta en marketing.'
  },
  {
    title: 'Capítulo 6. Plan de Acción y Resultados',
    description:
    'Tu hoja de ruta para los próximos 30 días: qué hacer exactamente para lograr tus primeros $300 USD.'
  }];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6
          }}
          className="text-center mb-16">
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-coffee-dark mb-4">
            Todo lo que aprenderás dentro
          </h2>
          <div className="w-16 h-1 bg-gold-matte mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-6">
          {chapters.map((chapter, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: -20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}
            className="flex flex-col sm:flex-row bg-cream-ivory rounded-xl p-6 border border-beige-sand hover:border-taupe-light transition-colors duration-300">
            
              <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                <div className="w-12 h-12 rounded-full bg-white border border-gold-matte flex items-center justify-center text-gold-matte font-heading font-bold text-xl">
                  {index === 0 ? '0' : index}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-coffee-dark mb-2 font-heading">
                  {chapter.title}
                </h3>
                <p className="text-text-body">{chapter.description}</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}