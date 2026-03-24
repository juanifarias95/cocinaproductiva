import React from 'react';
import { motion } from 'framer-motion';
import { CTAButton } from './CTAButton';
export function FinalCTASection() {
  return (
    <section className="py-24 md:py-32 bg-beige-sand relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 border border-gold-matte/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-taupe/20 rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
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
            once: true
          }}
          transition={{
            duration: 0.8
          }}>
          
          <h2 className="text-3xl md:text-5xl font-bold text-coffee-dark mb-8 leading-tight">
            Tu negocio no empieza cuando todo está perfecto.{' '}
            <br className="hidden md:block" />
            <span className="text-gold-matte italic font-normal">
              Empieza cuando decides avanzar.
            </span>
          </h2>

          <p className="text-xl text-coffee mb-12 max-w-2xl mx-auto leading-relaxed">
            Si quieres dejar de sentir que emprender es algo lejano y empezar a
            construir una fuente de ingresos con una guía clara, este ebook es
            para ti.
          </p>

          <CTAButton size="large">Quiero mi ebook ahora</CTAButton>
        </motion.div>
      </div>
    </section>);

}