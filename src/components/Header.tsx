import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { pathname } = useLocation();

  // Only the homepage has the hero section directly behind the header.
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  // Trim navigation: FAQ, News, Gallery removed from header (kept in footer).
  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/services', label: t('nav.services') },
    { path: '/projects', label: t('nav.projects') },
    { path: '/contact', label: t('nav.contact') },
  ];

  // Transparent over hero on home (top of page); solid otherwise or when scrolled.
  const transparent = isHome && !isMenuOpen && !isScrolled;

  const headerClasses = transparent
    ? 'bg-transparent border-transparent shadow-none'
    : 'bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 border-b border-border shadow-sm';

  const linkBaseColor = transparent
    ? 'text-white hover:bg-white/10 hover:text-primary'
    : 'text-foreground hover:bg-secondary hover:text-accent';

  const brandText = transparent ? 'text-white' : 'text-foreground';
  const brandSubText = transparent ? 'text-white/80' : 'text-muted-foreground';
  const iconColor = transparent ? 'text-white hover:bg-white/10' : 'hover:bg-secondary';

  return (
    <header className={`sticky top-0 z-40 w-full transition-colors duration-300 ${headerClasses}`}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
              <img
                src={logo}
                alt="NOCOMETAB BTP Logo"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <div className={`font-bold text-base md:text-lg ${brandText}`}>NOCOMETAB BTP</div>
              <div className={`text-xs hidden md:block ${brandSubText}`}>{t('footer.description')}</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 xl:px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-primary/90 text-primary-foreground shadow-sm'
                      : linkBaseColor
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className={`flex items-center space-x-1 ${iconColor}`}
            >
              <Globe className="h-4 w-4" />
              <span className="font-medium text-sm">{language.toUpperCase()}</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className={`lg:hidden ${iconColor}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md animate-fade-in">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground hover:bg-secondary'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
