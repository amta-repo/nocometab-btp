import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Newspaper, ChevronRight } from 'lucide-react';

const NewsStrip = () => {
  const { language } = useLanguage();

  const newsItems = [
    {
      id: 1,
      title: language === 'fr' 
        ? "🏗️ Nouveau projet: Montage de séparateur industriel à la cimenterie" 
        : "🏗️ New project: Industrial separator assembly at cement plant",
    },
    {
      id: 2,
      title: language === 'fr'
        ? "⚙️ Livraison d'équipements lourds pour chantier industriel"
        : "⚙️ Heavy equipment delivery for industrial site",
    },
    {
      id: 3,
      title: language === 'fr'
        ? "🔧 Charpente métallique de l'Arène du Palais Royal de Nikki terminée"
        : "🔧 Metal framework for Nikki Royal Palace Arena completed",
    },
    {
      id: 4,
      title: language === 'fr'
        ? "📋 Nouvelles attestations de bonne fin d'exécution obtenues"
        : "📋 New certificates of completion obtained",
    },
    {
      id: 5,
      title: language === 'fr'
        ? "🎉 Plus de 15 ans d'excellence en construction métallique"
        : "🎉 Over 15 years of excellence in metal construction",
    },
  ];

  return (
    <div className="bg-foreground text-background border-b border-white/10">
      <div className="relative overflow-hidden py-1.5 md:py-2">
        <Link to="/news" className="block">
          <div className="flex items-center animate-news-scroll">
            {/* News icon */}
            <div className="flex items-center gap-1.5 md:gap-2 px-2 md:px-4 py-0.5 md:py-1 bg-primary text-primary-foreground font-semibold text-xs md:text-sm flex-shrink-0 rounded-r-full">
              <Newspaper className="h-3 w-3 md:h-4 md:w-4" />
              <span className="hidden sm:inline">{language === 'fr' ? 'Actualités' : 'News'}</span>
              <ChevronRight className="h-3 w-3 md:h-4 md:w-4" />
            </div>
            
            {/* First set of news */}
            {newsItems.map((news) => (
              <span 
                key={`first-${news.id}`}
                className="flex-shrink-0 px-4 md:px-8 text-xs md:text-sm font-medium whitespace-nowrap hover:text-primary transition-colors"
              >
                {news.title}
              </span>
            ))}
            
            {/* Duplicate for seamless loop */}
            {newsItems.map((news) => (
              <span 
                key={`second-${news.id}`}
                className="flex-shrink-0 px-4 md:px-8 text-xs md:text-sm font-medium whitespace-nowrap hover:text-primary transition-colors"
              >
                {news.title}
              </span>
            ))}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NewsStrip;
