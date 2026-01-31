import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.png';

const Footer = () => {
  const { t, language } = useLanguage();

  const quickLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/services', label: t('nav.services') },
    { path: '/projects', label: t('nav.projects') },
    { path: '/gallery', label: language === 'fr' ? 'Galerie' : 'Gallery' },
    { path: '/news', label: language === 'fr' ? 'Actualités' : 'News' },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-12 w-12 rounded-lg overflow-hidden shadow-lg bg-white/10">
                <img 
                  src={logo} 
                  alt="NOCOMETAB BTP Logo" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <div className="font-bold text-lg text-background">NOCOMETAB BTP</div>
                <div className="text-xs text-background/70">{t('footer.description')}</div>
              </div>
            </div>
            <p className="text-sm text-background/80 leading-relaxed">
              {t('about.mission')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-primary mb-4">{t('footer.quicklinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-background/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-primary mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-background/80">
                <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span>Kindonou, Cotonou, Bénin</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-background/80">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="tel:+2290195954763" className="hover:text-primary transition-colors">
                  +229 01 95 95 47 63
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-background/80">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:nocometabbtp@gmail.com" className="hover:text-primary transition-colors">
                  nocometabbtp@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Hours */}
          <div>
            <h3 className="font-semibold text-primary mb-4">{t('contact.hours')}</h3>
            <ul className="space-y-2 text-sm text-background/80 mb-6">
              <li>{t('contact.hours.weekday')}</li>
              <li>{t('contact.hours.saturday')}</li>
            </ul>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-lg bg-white/10 hover:bg-primary hover:text-foreground transition-all duration-300 flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://tiktok.com/@nocometabbtp"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-lg bg-white/10 hover:bg-primary hover:text-foreground transition-all duration-300 flex items-center justify-center"
                aria-label="TikTok"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-background/60">
          <p>© {new Date().getFullYear()} NOCOMETAB BTP. {t('footer.rights')}.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
