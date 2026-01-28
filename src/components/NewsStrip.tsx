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
        ? "🔧 Travaux de soudure et découpe sur site en cours"
        : "🔧 On-site welding and cutting work in progress",
    },
    {
      id: 4,
      title: language === 'fr'
        ? "📋 NOCOMETAB BTP obtient de nouvelles certifications"
        : "📋 NOCOMETAB BTP obtains new certifications",
    },
    {
      id: 5,
      title: language === 'fr'
        ? "🎉 Célébration de 10 ans d'excellence en construction métallique"
        : "🎉 Celebrating 10 years of excellence in metal construction",
    },
  ];

  return (
    <div className="bg-accent text-accent-foreground">
      <div className="relative overflow-hidden py-2">
        <Link to="/news" className="block">
          <div className="flex items-center animate-news-scroll">
            {/* News icon */}
            <div className="flex items-center gap-2 px-4 py-1 bg-primary text-primary-foreground font-semibold text-sm flex-shrink-0 rounded-r-full">
              <Newspaper className="h-4 w-4" />
              <span>{language === 'fr' ? 'Actualités' : 'News'}</span>
              <ChevronRight className="h-4 w-4" />
            </div>
            
            {/* First set of news */}
            {newsItems.map((news) => (
              <span 
                key={`first-${news.id}`}
                className="flex-shrink-0 px-8 text-sm font-medium whitespace-nowrap hover:text-primary transition-colors"
              >
                {news.title}
              </span>
            ))}
            
            {/* Duplicate for seamless loop */}
            {newsItems.map((news) => (
              <span 
                key={`second-${news.id}`}
                className="flex-shrink-0 px-8 text-sm font-medium whitespace-nowrap hover:text-primary transition-colors"
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
