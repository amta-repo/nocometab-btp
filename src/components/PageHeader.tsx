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
      className="relative h-[200px] sm:h-[280px] md:h-[350px] lg:h-[400px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark overlay for professional look and text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/85 via-foreground/70 to-foreground/90" />
      
      {/* Golden accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 md:mb-4 drop-shadow-lg">
          {language === 'fr' ? titleFr : titleEn}
        </h1>
        {(subtitleFr || subtitleEn) && (
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
            {language === 'fr' ? subtitleFr : subtitleEn}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
