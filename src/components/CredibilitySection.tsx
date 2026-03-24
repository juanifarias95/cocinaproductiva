import React from 'react';
import { motion } from 'framer-motion';
import { TargetIcon, BookOpenIcon, HomeIcon } from 'lucide-react';
export function CredibilitySection() {
  const pillars = [
  {
    icon: <TargetIcon className="w-8 h-8 text-coffee-dark" />,
    title: 'Enfoque práctico'
  },
  {
    icon: <BookOpenIcon className="w-8 h-8 text-coffee-dark" />,
    title: 'Lenguaje claro'
  },
  {
    icon: <HomeIcon className="w-8 h-8 text-coffee-dark" />,
    title: 'Aplicación real desde casa'
  }];

  return (
    <section className="py-20 md:py-28 bg-beige-sand">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
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
          }}>
          
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-dark mb-8">
            Una guía práctica, clara y pensada para principiantes
          </h2>

          <p className="text-lg md:text-xl text-text-body leading-relaxed mb-16 max-w-3xl mx-auto">
            Este ebook fue diseñado para ayudarte a empezar con criterio, no con
            confusión. Aquí no encontrarás teoría vacía ni promesas irreales.
            Encontrarás un proceso claro, explicado de forma simple, útil y
            accionable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) =>
          <motion.div
            key={index}
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
              duration: 0.5,
              delay: index * 0.1
            }}
            className="flex flex-col items-center">
            
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm border border-cream-ivory">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-coffee font-heading">
                {pillar.title}
              </h3>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}