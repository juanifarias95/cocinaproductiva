import React from 'react';
import { motion } from 'framer-motion';
export function SolutionSection() {
  return (
    <section className="py-20 md:py-28 bg-beige-sand">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              margin: '-100px'
            }}
            transition={{
              duration: 0.7
            }}
            className="order-2 lg:order-1">
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-coffee-dark mb-6 leading-tight">
              Una guía clara para transformar tu creatividad en pedidos reales
            </h2>

            <p className="text-lg md:text-xl text-text-body leading-relaxed mb-8">
              <strong className="text-coffee font-semibold">
                Desayunos Sorpresa Rentables
              </strong>{' '}
              no es solo un ebook sobre desayunos bonitos. Es una guía práctica
              para ayudarte a construir un negocio desde casa con más orden, más
              claridad y más confianza.
            </p>

            <div className="w-24 h-1 bg-gold-matte rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.7,
              delay: 0.2
            }}
            className="order-1 lg:order-2 relative">
            
            <div className="absolute -inset-4 bg-white rounded-2xl shadow-xl transform rotate-3 opacity-50"></div>
            <div className="absolute -inset-4 bg-cream-ivory rounded-2xl shadow-lg transform -rotate-2 opacity-70"></div>
            <div className="relative bg-white p-4 rounded-2xl shadow-2xl">
              <img
                src="/mockup_portada_ebook_2.png"
                alt="Ebook Desayunos Sorpresa Rentables"
                className="w-full h-auto rounded-xl" />
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}