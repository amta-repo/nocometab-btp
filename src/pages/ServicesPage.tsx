import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Ruler, Building2, Construction, ArrowRight, Hammer, Wrench, Factory } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

import heroImage3 from '@/assets/nocometab-hero-3.jpg';

const ServicesPage = () => {
  const { t, language } = useLanguage();

  const services = [
    {
      icon: Building2,
      title: t('service.topo.title'),
      description: t('service.topo.desc'),
      path: '/services/structures',
      features: [
        language === 'fr' ? 'Bâtiments industriels sur mesure' : 'Custom industrial buildings',
        language === 'fr' ? 'Structures commerciales' : 'Commercial structures',
        language === 'fr' ? 'Conception et fabrication' : 'Design and fabrication',
      ],
    },
    {
      icon: Construction,
      title: t('service.bornage.title'),
      description: t('service.bornage.desc'),
      path: '/services/charpentes',
      features: [
        language === 'fr' ? 'Charpentes métalliques robustes' : 'Robust metal frameworks',
        language === 'fr' ? 'Installation professionnelle' : 'Professional installation',
        language === 'fr' ? 'Solutions durables' : 'Durable solutions',
      ],
    },
    {
      icon: Ruler,
      title: t('service.drone.title'),
      description: t('service.drone.desc'),
      path: '/services/menuiserie',
      features: [
        language === 'fr' ? 'Portes et fenêtres métalliques' : 'Metal doors and windows',
        language === 'fr' ? 'Garde-corps et balustrades' : 'Railings and balustrades',
        language === 'fr' ? 'Travaux sur mesure' : 'Custom works',
      ],
    },
    {
      icon: Factory,
      title: t('service.urbanisme.title'),
      description: t('service.urbanisme.desc'),
      path: '/services/hangars',
      features: [
        language === 'fr' ? 'Hangars industriels' : 'Industrial warehouses',
        language === 'fr' ? 'Entrepôts de stockage' : 'Storage facilities',
        language === 'fr' ? 'Solutions clé en main' : 'Turnkey solutions',
      ],
    },
    {
      icon: Hammer,
      title: t('service.vrd.title'),
      description: t('service.vrd.desc'),
      path: '/services/toiture',
      features: [
        language === 'fr' ? 'Toitures métalliques' : 'Metal roofing',
        language === 'fr' ? 'Systèmes de couverture' : 'Coverage systems',
        language === 'fr' ? 'Étanchéité garantie' : 'Guaranteed waterproofing',
      ],
    },
    {
      icon: Wrench,
      title: t('service.conseil.title'),
      description: t('service.conseil.desc'),
      path: '/services/renovation',
      features: [
        language === 'fr' ? 'Rénovation de structures' : 'Structure renovation',
        language === 'fr' ? 'Modernisation' : 'Modernization',
        language === 'fr' ? 'Renforcement métallique' : 'Metal reinforcement',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Page Header */}
      <PageHeader
        titleFr="Nos Services"
        titleEn="Our Services"
        subtitleFr="Des solutions complètes en construction métallique pour tous vos projets"
        subtitleEn="Complete metal construction solutions for all your projects"
        backgroundImage={heroImage3}
      />

      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-scale-in border hover:border-primary/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="py-6 md:py-8 px-4 md:px-6">
                <div className="flex items-start space-x-3 md:space-x-4 mb-4 md:mb-6">
                  <div className="h-12 w-12 md:h-14 md:w-14 rounded-lg bg-gradient-navy flex items-center justify-center flex-shrink-0">
                    <service.icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-2xl font-bold text-foreground mb-1 md:mb-2">{service.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>

                <ul className="space-y-1.5 md:space-y-2 mb-4 md:mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs md:text-sm text-muted-foreground">
                      <ArrowRight className="h-3 w-3 md:h-4 md:w-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to={service.path}>
                  <Button variant="default" className="w-full text-sm md:text-base">
                    {t('services.learnmore')}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
