import React from 'react';
import { motion } from 'framer-motion';
import { XIcon, CheckIcon } from 'lucide-react';
export function BeforeAfterSection() {
  const beforeItems = [
  'No sabes qué vender',
  'No sabes cuánto cobrar',
  'Te da miedo empezar',
  'Consumes contenido, pero no avanzas',
  'No tienes una estrategia clara'];

  const afterItems = [
  'Tienes una oferta definida',
  'Sabes cuánto te cuesta y cuánto cobrar',
  'Entiendes qué mostrar y cómo vender',
  'Te mueves con más orden y más confianza',
  'Tienes un plan real para conseguir tus primeros pedidos'];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
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
            Del caos y la duda, a una idea clara y vendible
          </h2>
          <div className="w-16 h-1 bg-taupe mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Before Column */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="bg-beige-sand/50 rounded-2xl p-8 border border-beige-sand">
            
            <h3 className="text-2xl font-bold text-taupe mb-8 font-heading text-center">
              ANTES
            </h3>
            <ul className="space-y-6">
              {beforeItems.map((item, index) =>
              <li key={index} className="flex items-center text-taupe">
                  <XIcon className="w-5 h-5 mr-4 flex-shrink-0 opacity-60" />
                  <span className="text-lg">{item}</span>
                </li>
              )}
            </ul>
          </motion.div>

          {/* After Column */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6,
              delay: 0.2
            }}
            className="bg-cream-ivory rounded-2xl p-8 border border-gold-matte/30 shadow-lg relative overflow-hidden">
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-matte/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
            <h3 className="text-2xl font-bold text-coffee-dark mb-8 font-heading text-center">
              DESPUÉS
            </h3>
            <ul className="space-y-6 relative z-10">
              {afterItems.map((item, index) =>
              <li
                key={index}
                className="flex items-center text-coffee-dark font-medium">
                
                  <div className="w-6 h-6 rounded-full bg-gold-matte flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckIcon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg">{item}</span>
                </li>
              )}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>);

}