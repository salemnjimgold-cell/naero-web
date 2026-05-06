import { Link } from 'react-router-dom';
import { Mail, Globe, MessageCircle, Hash } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src="/new_mascot.png" alt="Naero Logo" />
              <span>Naero</span>
            </Link>
            <p className="footer-tagline">Not a stranger anymore.</p>
            <p className="footer-desc">
              Helping foreigners, travelers, students, migrants, and newcomers feel safe and integrated in any new country.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Community"><Hash size={20} /></a>
              <a href="#" aria-label="Global"><Globe size={20} /></a>
              <a href="#" aria-label="Contact"><Mail size={20} /></a>
              <a href="#" aria-label="Chat"><MessageCircle size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Platform</h4>
            <ul>
              <li><Link to="/features">Features</Link></li>
              <li><Link to="/how-it-works">How it works</Link></li>
              <li><Link to="/travelers">For Travelers</Link></li>
              <li><Link to="/newcomers">For Newcomers</Link></li>
              <li><Link to="/assistant">Naero AI</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/community">Community</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Legal</h4>
            <ul>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Use</Link></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Naero Inc. All rights reserved.</p>
          <div className="footer-bottom-links">
            <span>Made with ❤️ for the global community</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
