import React, { Children } from 'react';
import { motion } from 'framer-motion';
import {
  TargetIcon,
  CalculatorIcon,
  SparklesIcon,
  UsersIcon,
  MapIcon } from
'lucide-react';
export function BenefitsSection() {
  const benefits = [
  {
    icon: <TargetIcon className="w-6 h-6 text-gold-matte" />,
    text: 'Definirás qué tipo de desayunos vender primero sin complicarte con demasiadas opciones.'
  },
  {
    icon: <CalculatorIcon className="w-6 h-6 text-gold-matte" />,
    text: 'Aprenderás a calcular costos y precios para no trabajar de más y ganar de menos.'
  },
  {
    icon: <SparklesIcon className="w-6 h-6 text-gold-matte" />,
    text: 'Sabrás cómo hacer que tus desayunos se vean más atractivos, profesionales y vendibles.'
  },
  {
    icon: <UsersIcon className="w-6 h-6 text-gold-matte" />,
    text: 'Descubrirás cómo captar clientes por Instagram, Facebook y WhatsApp con mensajes claros y contenido simple.'
  },
  {
    icon: <MapIcon className="w-6 h-6 text-gold-matte" />,
    text: 'Tendrás una ruta práctica para conseguir tus primeros pedidos con más seguridad.'
  }];

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  return (
    <section className="py-20 md:py-28 bg-cream-ivory">
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
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-coffee-dark mb-4">
            Lo que podrás lograr con este ebook
          </h2>
          <div className="w-16 h-1 bg-taupe mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-50px'
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {benefits.map((benefit, index) =>
          <motion.div
            key={index}
            variants={itemVariants}
            className={`bg-white p-8 rounded-2xl shadow-sm border border-beige-sand ${index === benefits.length - 1 && benefits.length % 2 !== 0 && benefits.length % 3 !== 0 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}>
            
              <div className="w-14 h-14 rounded-full bg-cream-ivory flex items-center justify-center mb-6 border border-beige-sand">
                {benefit.icon}
              </div>
              <p className="text-coffee font-medium text-lg leading-relaxed">
                {benefit.text}
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>);

}