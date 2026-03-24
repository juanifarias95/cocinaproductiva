import React from 'react';
import { motion } from 'framer-motion';
export function ProblemSection() {
  const painPoints = [
  'No sabes qué vender primero.',
  'No sabes cuánto cobrar.',
  'No sabes cómo conseguir tus primeros pedidos.',
  'Te da miedo invertir y que nadie compre.',
  'Sientes que otras avanzan, mientras tú sigues esperando el momento ideal.'];

  return (
    <section className="py-20 md:py-28 bg-white relative">
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
            once: true,
            margin: '-100px'
          }}
          transition={{
            duration: 0.6
          }}>
          
          <div className="w-16 h-1 bg-gold-matte mx-auto mb-8 rounded-full"></div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-coffee-dark mb-8 leading-tight">
            Si quieres emprender desde casa, pero no sabes por dónde empezar,
            este ebook es para ti
          </h2>

          <p className="text-lg md:text-xl text-text-body mb-10 leading-relaxed">
            Tal vez llevas tiempo pensando en generar ingresos propios, pero
            sigues con las mismas dudas:
          </p>
        </motion.div>

        <div className="space-y-4 mb-12 text-left max-w-2xl mx-auto">
          {painPoints.map((point, index) =>
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
            className="flex items-center p-4 rounded-lg bg-cream-ivory border border-beige-sand">
            
              <div className="w-2 h-2 rounded-full bg-taupe mr-4 flex-shrink-0"></div>
              <p className="text-coffee font-medium text-lg">{point}</p>
            </motion.div>
          )}
        </div>

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
            duration: 0.6,
            delay: 0.5
          }}
          className="p-8 rounded-2xl bg-beige-sand border border-taupe-light/30">
          
          <p className="text-xl md:text-2xl text-coffee-dark font-heading italic">
            "Este ebook fue creado para ayudarte a salir de esa confusión y
            convertir una idea bonita en una fuente real de ingresos."
          </p>
        </motion.div>
      </div>
    </section>);

}