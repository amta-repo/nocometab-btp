import { useLanguage } from '@/contexts/LanguageContext';

interface PageHeaderProps {
  titleFr: string;
  titleEn: string;
  subtitleFr?: string;
  subtitleEn?: string;
  backgroundImage: string;
}

const PageHeader = ({ titleFr, titleEn, subtitleFr, subtitleEn, backgroundImage }: PageHeaderProps) => {
  const { language } = useLanguage();

  return (
    <div 
      className="relative h-[300px] md:h-[400px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      
      {/* Yellow accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          {language === 'fr' ? titleFr : titleEn}
        </h1>
        {(subtitleFr || subtitleEn) && (
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto drop-shadow-md">
            {language === 'fr' ? subtitleFr : subtitleEn}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
