import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const BackToHome = () => {
  const location = useLocation();
  const { language } = useLanguage();
  
  // Don't show on homepage
  if (location.pathname === '/') {
    return null;
  }

  return (
    <div className="bg-muted border-b border-border">
      <div className="container mx-auto px-4">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 py-2.5 md:py-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
          aria-label={language === 'fr' ? 'Retour à l\'accueil' : 'Back to home'}
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          <Home className="h-4 w-4" />
          <span className="font-medium">
            {language === 'fr' ? 'Retour à l\'accueil' : 'Back to Home'}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BackToHome;
