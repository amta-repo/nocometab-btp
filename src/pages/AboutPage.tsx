import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import SeoHelmet from '@/components/SeoHelmet';
import { Award, Target, Users, TrendingUp, CheckCircle2, Building2, Shield, ArrowRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

import organogram from '@/assets/nocometab-organogram-1.jpg';
import aboutHeader from '@/assets/about-header.jpg';

const AboutPage = () => {
  const { t, language } = useLanguage();

  const values = [
    { key: 'integrity', icon: Shield },
    { key: 'accuracy', icon: CheckCircle2 },
    { key: 'innovation', icon: TrendingUp },
    { key: 'sustainability', icon: Building2 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SeoHelmet
        title="À Propos | NOCOMETAB BTP | Construction Métallique Bénin"
        description="Découvrez NOCOMETAB BTP: +15 ans d'expertise en construction métallique au Bénin. Notre équipe, nos valeurs, notre vision pour l'Afrique de l'Ouest."
        canonical="https://nocometabbtp.com/about"
      />
      {/* Page Header */}
      <PageHeader
        titleFr="À Propos de Nous"
        titleEn="About Us"
        subtitleFr="Experts en construction métallique depuis plus de 15 ans"
        subtitleEn="Metal construction experts for over 15 years"
        backgroundImage={aboutHeader}
      />

      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Mission Statement */}
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <p className="text-lg md:text-2xl text-primary font-semibold italic max-w-3xl mx-auto">{t('about.mission')}</p>
        </div>

        {/* Company Description */}
        <Card className="max-w-4xl mx-auto mb-12 md:mb-16 shadow-elevated animate-scale-in border border-accent/20">
          <CardContent className="py-8 md:py-12 px-4 md:px-8">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4 md:mb-6">{t('about.description')}</p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {language === 'fr'
                ? "Experts en construction métallique, nous accompagnons les particuliers, les entreprises et les institutions dans la réalisation de leurs projets de bâtiments industriels, commerciaux et résidentiels."
                : 'Metal construction experts, we support individuals, companies and institutions in carrying out their industrial, commercial and residential building projects.'}
            </p>
          </CardContent>
        </Card>

        {/* Organogram Section */}
        <div className="max-w-4xl mx-auto mb-12 md:mb-16">
          <h2 className="text-xl md:text-3xl font-bold text-center text-foreground mb-6 md:mb-8">
            {language === 'fr' ? 'Notre Équipe de Direction' : 'Our Leadership Team'}
          </h2>
          <Card className="overflow-hidden shadow-elevated border border-accent/20">
            <img 
              src={organogram} 
              alt="Organigramme NOCOMETAB BTP" 
              className="w-full object-contain bg-white"
            />
          </Card>
        </div>

        {/* Values Section */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-xl md:text-3xl font-bold text-center text-foreground mb-8 md:mb-12">{t('about.values')}</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {values.map((value, index) => (
              <Card 
                key={value.key} 
                className="hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border hover:border-primary/50" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="py-6 md:py-8 px-3 md:px-4 text-center">
                  <div className="h-12 w-12 md:h-16 md:w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <value.icon className="h-6 w-6 md:h-8 md:w-8 text-accent" />
                  </div>
                  <h3 className="text-sm md:text-xl font-semibold text-foreground mb-2 md:mb-3">{t(`about.value.${value.key}`)}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed hidden md:block">
                    {value.key === 'integrity' && (language === 'fr' ? "Nous agissons avec transparence et professionnalisme." : 'We act with transparency and professionalism.')}
                    {value.key === 'accuracy' && (language === 'fr' ? 'La qualité et la précision sont au cœur de nos réalisations.' : 'Quality and precision are at the heart of our achievements.')}
                    {value.key === 'innovation' && (language === 'fr' ? "Nous utilisons les techniques les plus modernes." : 'We use the most modern techniques.')}
                    {value.key === 'sustainability' && (language === 'fr' ? 'Nous construisons des structures durables.' : 'We build durable structures.')}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl md:text-3xl font-bold text-center text-foreground mb-8 md:mb-12">
            {language === 'fr' ? 'Pourquoi Nous Choisir ?' : 'Why Choose Us?'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {[
              { icon: Award, title: language === 'fr' ? 'Expertise Certifiée' : 'Certified Expertise', desc: language === 'fr' ? "Constructeurs qualifiés avec plus de 15 ans d'expérience." : 'Qualified builders with over 15 years of experience.' },
              { icon: Target, title: language === 'fr' ? 'Solutions Sur-Mesure' : 'Tailored Solutions', desc: language === 'fr' ? 'Approche personnalisée adaptée à chaque projet.' : 'Personalized approach adapted to each project.' },
              { icon: Users, title: language === 'fr' ? 'Service Client' : 'Customer Service', desc: language === 'fr' ? 'Accompagnement continu du devis à la livraison.' : 'Ongoing support from quote to delivery.' },
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-soft transition-shadow duration-300 border hover:border-primary/50">
                <CardContent className="py-6 md:py-8 px-4">
                  <item.icon className="h-10 w-10 md:h-12 md:w-12 text-primary mx-auto mb-3 md:mb-4" />
                  <h3 className="text-base md:text-xl font-semibold text-foreground mb-2 md:mb-3">{item.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Internal Links & External Resources */}
        <div className="max-w-5xl mx-auto mt-12 md:mt-16">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">
            {language === 'fr' ? 'Explorez NOCOMETAB BTP' : 'Explore NOCOMETAB BTP'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { path: '/services', labelFr: 'Nos Services de Construction', labelEn: 'Our Construction Services' },
              { path: '/projects', labelFr: 'Nos Réalisations & Projets', labelEn: 'Our Projects & Achievements' },
              { path: '/gallery', labelFr: 'Galerie Photos', labelEn: 'Photo Gallery' },
              { path: '/contact', labelFr: 'Demander un Devis Gratuit', labelEn: 'Request a Free Quote' },
              { path: '/faq', labelFr: 'Questions Fréquentes', labelEn: 'Frequently Asked Questions' },
              { path: '/news', labelFr: 'Actualités & Projets en Cours', labelEn: 'News & Ongoing Projects' },
            ].map(link => (
              <Link key={link.path} to={link.path}>
                <Card className="hover:border-primary/50 transition-colors cursor-pointer h-full">
                  <CardContent className="pt-4 pb-4 flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">
                      {language === 'fr' ? link.labelFr : link.labelEn}
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* External Authority Links */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              {language === 'fr' ? 'Ressources Utiles' : 'Useful Resources'}
            </h3>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.worldsteel.org/" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                World Steel Association ↗
              </a>
              <a href="https://www.aisc.org/" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                American Institute of Steel Construction ↗
              </a>
              <a href="https://www.iso.org/standard/72140.html" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                {language === 'fr' ? 'Normes ISO Construction Acier' : 'ISO Steel Construction Standards'} ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
