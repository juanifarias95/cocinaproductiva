import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckIcon,
  ShieldCheckIcon,
  ZapIcon,
  SmartphoneIcon } from
'lucide-react';
import { CTAButton } from './CTAButton';
export function OfferSection() {
  const includes = [
  'Ebook completo',
  '6 bonos incluidos',
  'Acceso inmediato',
  'Formato digital'];

  return (
    <section className="py-20 md:py-32 bg-coffee-dark relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold-matte rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-taupe rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
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
          className="text-center mb-12 md:mb-16">
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-cream-ivory mb-6 leading-tight">
            Empieza hoy a construir tu negocio de desayunos sorpresa
          </h2>
        </motion.div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image & Includes */}
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
              duration: 0.6,
              delay: 0.2
            }}>
            
            <img
              src="/mockup_portada_ebook_2.png"
              alt="Ebook y Bonos"
              className="w-full max-w-md mx-auto h-auto rounded-lg mb-8 drop-shadow-xl" />
            

            <div className="space-y-3 max-w-sm mx-auto">
              {includes.map((item, index) =>
              <div key={index} className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-gold-matte/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <CheckIcon className="w-3 h-3 text-gold-matte" />
                  </div>
                  <span className="text-coffee font-medium">{item}</span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Right: Pricing & CTA */}
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
              delay: 0.4
            }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left">
            
            <p className="text-taupe font-bold uppercase tracking-widest text-sm mb-4">
              OFERTA ESPECIAL
            </p>

            <div className="mb-6">
              <p className="text-xl text-coffee-dark mb-2">Hoy por solo</p>
              <p className="text-2xl text-taupe-light line-through font-body mb-1">
                $30.000
              </p>
              <p className="text-6xl md:text-7xl font-bold text-coffee-dark font-heading">
                $14.990
              </p>
            </div>

            <p className="text-lg text-text-body mb-8 leading-relaxed max-w-md">
              Una inversión pequeña para empezar a construir una fuente de
              ingresos propia con más claridad y menos improvisación.
            </p>

            <CTAButton
              size="large"
              className="w-full sm:w-auto mb-8 shadow-gold-matte/30">
              
              Sí, quiero comprar ahora
            </CTAButton>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full border-t border-beige-sand pt-6">
              <div className="flex flex-col items-center text-center">
                <ShieldCheckIcon className="w-6 h-6 text-taupe mb-2" />
                <span className="text-xs text-taupe font-medium">
                  Pago seguro
                </span>
              </div>
              <div className="flex flex-col items-center text-center">
                <ZapIcon className="w-6 h-6 text-taupe mb-2" />
                <span className="text-xs text-taupe font-medium">
                  Acceso digital inmediato
                </span>
              </div>
              <div className="flex flex-col items-center text-center">
                <SmartphoneIcon className="w-6 h-6 text-taupe mb-2" />
                <span className="text-xs text-taupe font-medium">
                  Lectura desde celular o PC
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}