import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from 'lucide-react';
import { CTAButton } from './CTAButton';
export function HeroSection() {
  return (
    <section className="relative bg-cream-ivory overflow-hidden py-16 md:py-24 lg:py-32">
      {/* Subtle decorative background element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-gold-matte opacity-5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Copy Column */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut'
            }}
            className="order-2 lg:order-1 text-center lg:text-left">
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-coffee-dark">
              Desayunos Sorpresa Rentables
            </h1>

            <p className="text-xl md:text-2xl text-taupe font-medium mb-6 leading-relaxed">
              La guía paso a paso para empezar desde cero y generar tus primeros
              300 USD en 30 días
            </p>

            <p className="text-lg text-text-body mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Aprende a crear, presentar y vender desayunos sorpresa desde casa,
              incluso si hoy no tienes experiencia, clientes ni una marca
              creada.
            </p>

            <ul className="space-y-4 mb-10 text-left max-w-md mx-auto lg:mx-0">
              {[
              'Paso a paso para principiantes',
              'Ideal para vender por Instagram, Facebook y WhatsApp',
              'Incluye bonos prácticos para lanzar más rápido'].
              map((item, index) =>
              <motion.li
                key={index}
                initial={{
                  opacity: 0,
                  x: -20
                }}
                animate={{
                  opacity: 1,
                  x: 0
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.4 + index * 0.1
                }}
                className="flex items-start">
                
                  <span className="flex-shrink-0 mt-1 mr-3 bg-gold-matte/20 rounded-full p-1">
                    <CheckIcon className="w-4 h-4 text-gold-matte" />
                  </span>
                  <span className="text-coffee font-medium">{item}</span>
                </motion.li>
              )}
            </ul>

            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.5,
                delay: 0.8
              }}
              className="flex flex-col items-center lg:items-start">
              
              <CTAButton size="large" className="w-full sm:w-auto">
                Quiero mi ebook ahora
              </CTAButton>
              <p className="mt-4 text-sm text-taupe font-medium">
                Acceso inmediato en formato digital
              </p>
            </motion.div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: 'easeOut'
            }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
            
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Decorative blob behind image */}
              <div className="absolute inset-0 bg-beige-sand rounded-full blur-3xl transform scale-90 opacity-70"></div>
              <img
                src="/mockup_portada_ebook_2.png"
                alt="Mockup del ebook Desayunos Sorpresa Rentables"
                className="relative z-10 w-full h-auto drop-shadow-2xl rounded-lg" />
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}