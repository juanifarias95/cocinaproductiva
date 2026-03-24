import React from 'react';
import { motion } from 'framer-motion';
import {
  ClipboardCheckIcon,
  CalculatorIcon,
  MessageCircleIcon,
  PackageIcon,
  CalendarIcon,
  BookOpenIcon } from
'lucide-react';
import { CTAButton } from './CTAButton';
export function BonusSection() {
  const bonuses = [
  {
    title: 'Checklist de inicio para lanzar con orden',
    icon: <ClipboardCheckIcon className="w-8 h-8 text-gold-matte" />,
    number: '1',
    image: "/mockup_bono_1.png"

  },
  {
    title: 'Plantilla básica de costos y precios',
    icon: <CalculatorIcon className="w-8 h-8 text-gold-matte" />,
    number: '2',
    image: "/mockup_portada_ebook_2.png"

  },
  {
    title: 'Guiones de venta por WhatsApp',
    icon: <MessageCircleIcon className="w-8 h-8 text-gold-matte" />,
    number: '3',
    image: "/mockup_portada_ebook_2.png"

  },
  {
    title: 'Ideas de paquetes y extras rentables',
    icon: <PackageIcon className="w-8 h-8 text-gold-matte" />,
    number: '4',
    image: "/mockup_portada_ebook_2.png"

  },
  {
    title: 'Calendario de fechas especiales',
    icon: <CalendarIcon className="w-8 h-8 text-gold-matte" />,
    number: '5',
    image: "/mockup_portada_ebook_2.png"

  },
  {
    title: 'Fuentes y referencias de apoyo',
    icon: <BookOpenIcon className="w-8 h-8 text-gold-matte" />,
    number: '6',
    image: "/mockup_portada_ebook_2.png"

  }];

  return (
    <section className="py-20 md:py-28 bg-[#EFE8E0]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
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
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-coffee-dark mb-6">
            Además, recibirás estos bonos prácticos
          </h2>
          <p className="text-lg md:text-xl text-coffee max-w-2xl mx-auto">
            Para ayudarte a implementar más rápido, este ebook incluye
            herramientas adicionales pensadas para que no improvises.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {bonuses.map((bonus, index) =>
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
            className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-gold-matte relative overflow-hidden">
            
              <div className="absolute top-0 right-0 bg-cream-ivory text-taupe font-heading font-bold text-6xl opacity-20 -mt-2 -mr-2 pointer-events-none">
                {bonus.number}
              </div>
              <div className="mb-5 flex justify-center">
                <img
                src={bonus.image}
                alt={`Bono ${bonus.number}: ${bonus.title}`}
                className="w-36 h-auto rounded-lg drop-shadow-md" />
              
              </div>
              <div className="mb-4">{bonus.icon}</div>
              <h3 className="text-xl font-bold text-coffee-dark font-heading leading-snug">
                Bono {bonus.number}: <br />
                <span className="text-coffee">{bonus.title}</span>
              </h3>
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
            delay: 0.4
          }}
          className="text-center">
          
          <CTAButton size="large">Quiero mi ebook + bonos ahora</CTAButton>
        </motion.div>
      </div>
    </section>);

}