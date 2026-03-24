import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
export function FAQSection() {
  const faqs = [
  {
    question: '¿Necesito experiencia previa?',
    answer:
    'No. Este ebook fue creado especialmente para principiantes. Todo está explicado de forma simple y paso a paso.'
  },
  {
    question: '¿Necesito mucho dinero para comenzar?',
    answer:
    'No. El ebook te enseña a empezar con lo mínimo necesario, sin grandes inversiones.'
  },
  {
    question: '¿Esto sirve si nunca he vendido por redes?',
    answer:
    'Sí. Incluye guías claras para empezar a vender por Instagram, Facebook y WhatsApp desde cero.'
  },
  {
    question: '¿Cómo recibo el ebook?',
    answer:
    'Inmediatamente después de tu compra recibirás un enlace de descarga en tu correo electrónico.'
  },
  {
    question: '¿Sirve en cualquier país?',
    answer:
    'Sí. Los principios y estrategias aplican para cualquier país de habla hispana.'
  }];

  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="py-20 md:py-28 bg-cream-ivory">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
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
          
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-dark mb-4">
            Preguntas frecuentes
          </h2>
          <div className="w-16 h-1 bg-taupe mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 10
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.4,
              delay: index * 0.1
            }}
            className="bg-white rounded-xl border border-beige-sand overflow-hidden">
            
              <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none">
              
                <span className="text-lg font-bold text-coffee-dark font-heading">
                  {faq.question}
                </span>
                <motion.div
                animate={{
                  rotate: openIndex === index ? 180 : 0
                }}
                transition={{
                  duration: 0.3
                }}
                className="flex-shrink-0 ml-4 text-gold-matte">
                
                  <ChevronDownIcon className="w-5 h-5" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index &&
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0
                }}
                animate={{
                  height: 'auto',
                  opacity: 1
                }}
                exit={{
                  height: 0,
                  opacity: 0
                }}
                transition={{
                  duration: 0.3
                }}>
                
                    <div className="px-6 pb-5 text-text-body">{faq.answer}</div>
                  </motion.div>
              }
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}