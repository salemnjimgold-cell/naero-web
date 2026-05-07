import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';
import './FAQ.css';

const faqs = [
  {
    question: "Is Naero free?",
    answer: "Yes, the core features of Naero including local discovery, community access, and basic AI assistance are completely free. We believe everyone deserves to feel safe and integrated in a new country."
  },
  {
    question: "Do I need residency proof to use Naero?",
    answer: "Absolutely not. Naero is designed to be borderless. You don't need any local documents, residency proof, or complicated verification to start exploring and connecting."
  },
  {
    question: "Can I use Naero while traveling?",
    answer: "Yes! Naero is perfect for short-term travelers as well as long-term expats. It adapts to your current location and provides relevant information whether you are staying for a weekend or a decade."
  },
  {
    question: "Is Naero available worldwide?",
    answer: "Naero is rapidly expanding globally. While our data is richest in major metropolitan hubs, the community features and AI Assistant can be utilized anywhere in the world."
  },
  {
    question: "How does Naero AI work?",
    answer: "Naero AI acts as your personal local guide. It combines real-time data with verified community reviews to answer your questions, translate local nuances, and help you navigate daily life securely."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="page-container faq-page">
      <div className="container max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="badge mb-4">Support & Help</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked <span className="text-gradient">Questions</span></h1>
          <p className="text-xl text-muted">Everything you need to know about the Naero ecosystem.</p>
        </motion.div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className={`faq-item glass-card ${openIndex === index ? 'active' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            >
              <div className="faq-question">
                <h3 className="text-xl font-bold">{faq.question}</h3>
                <ChevronDown className={`faq-icon ${openIndex === index ? 'rotate' : ''}`} />
              </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    className="faq-answer-container"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="faq-answer text-muted">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="glass-card p-10 text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <MessageCircle size={40} className="mx-auto text-primary mb-6" />
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-muted mb-6">Our human support team is ready to help you with anything you need.</p>
          <a href="/contact" className="btn-primary">Contact Support</a>
        </motion.div>
      </div>
    </div>
  );
}
