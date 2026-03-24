import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from 'lucide-react';
export function ForYouSection() {
  const items = [
  'Quieres emprender desde casa con una idea visual, emocional y posible.',
  'Necesitas una guía clara porque hoy te sientes confundida o estancada.',
  'Quieres conseguir tus primeros pedidos sin depender de tener miles de seguidores.',
  'Te interesa aprender a vender con más orden, más seguridad y más estrategia.',
  'Buscas una forma realista de empezar, incluso si hoy no tienes experiencia.'];

  return (
    <section className="py-20 md:py-28 bg-cream-ivory">
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
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-beige-sand">
          
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-dark mb-10 text-center">
            Este ebook es para ti si...
          </h2>

          <div className="space-y-6">
            {items.map((item, index) =>
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
              className="flex items-start">
              
                <div className="flex-shrink-0 mt-1 mr-4 w-8 h-8 rounded-full bg-gold-matte/10 flex items-center justify-center">
                  <CheckIcon className="w-5 h-5 text-gold-matte" />
                </div>
                <p className="text-lg text-coffee font-medium leading-relaxed">
                  {item}
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>);

}