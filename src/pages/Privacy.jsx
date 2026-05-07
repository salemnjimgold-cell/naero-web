import React from 'react';
import { motion } from 'framer-motion';

export default function Privacy() {
  return (
    <div className="page-container legal-page">
      <div className="container max-w-3xl mx-auto">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="badge mb-4">Legal</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy <span className="text-gradient">Policy</span></h1>
          <p className="text-muted">Last updated: May 2026</p>
        </motion.div>

        <motion.div 
          className="glass-card p-8 md:p-12 legal-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
          <p className="text-muted mb-8">
            At Naero, we take your privacy extremely seriously. We are committed to protecting your personal information and your right to privacy. This privacy policy explains what information we collect, how we use it, and what rights you have in relation to it.
          </p>

          <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
          <p className="text-muted mb-4">We collect personal information that you voluntarily provide to us when you register on the Naero platform. This includes:</p>
          <ul className="list-disc pl-6 text-muted mb-8 space-y-2">
            <li>Names and Contact Data (Email addresses).</li>
            <li>Credentials (Passwords and security information).</li>
            <li>Location Data (Only when explicitly permitted to provide local recommendations).</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
          <p className="text-muted mb-8">
            We use personal information collected via our platform for a variety of business purposes, primarily to facilitate the creation of and secure your account, to provide Naero AI assistance, and to enable user-to-user communications.
          </p>

          <h2 className="text-2xl font-bold mb-4">4. Sharing Your Information</h2>
          <p className="text-muted mb-8">
            We do not sell, rent, or trade your personal information to third parties. We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
          </p>

          <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
          <p className="text-muted mb-8">
            We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards, no electronic transmission over the Internet can be guaranteed to be 100% secure.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
