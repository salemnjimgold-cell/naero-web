import React from 'react';
import { motion } from 'framer-motion';

export default function Terms() {
  return (
    <div className="page-container legal-page">
      <div className="container max-w-3xl mx-auto">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="badge mb-4">Legal</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of <span className="text-gradient">Service</span></h1>
          <p className="text-muted">Last updated: May 2026</p>
        </motion.div>

        <motion.div 
          className="glass-card p-8 md:p-12 legal-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
          <p className="text-muted mb-8">
            By accessing our platform, Naero, you agree to be bound by these Terms of Service and to comply with all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>

          <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
          <p className="text-muted mb-8">
            Permission is granted to temporarily download one copy of the materials (information or software) on Naero's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
          </p>

          <h2 className="text-2xl font-bold mb-4">3. Community Guidelines</h2>
          <p className="text-muted mb-4">When using the Naero platform, including the community and review features, you agree NOT to:</p>
          <ul className="list-disc pl-6 text-muted mb-8 space-y-2">
            <li>Post fake, misleading, or deceptive reviews.</li>
            <li>Harass, abuse, or harm another person.</li>
            <li>Use the platform to scam or exploit users.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">4. Naero AI Assistant</h2>
          <p className="text-muted mb-8">
            The Naero AI Assistant is designed to provide helpful local information and guidance. However, it is an automated tool. Users should always verify critical information (especially regarding health, legal, or emergency situations) through official channels.
          </p>

          <h2 className="text-2xl font-bold mb-4">5. Modifications</h2>
          <p className="text-muted mb-8">
            Naero may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
