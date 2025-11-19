import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Ruler, MapPin, Plane, Building2, Construction, Scale, ArrowRight } from 'lucide-react';

const ServicesPage = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Ruler,
      title: t('service.topo.title'),
      description: t('service.topo.desc'),
      path: '/services/topographie',
      features: [
        t('language') === 'fr' ? 'Levés topographiques de précision' : 'Precision topographic surveys',
        t('language') === 'fr' ? 'Cartographie numérique et SIG' : 'Digital mapping and GIS',
        t('language') === 'fr' ? 'Modélisation 3D du terrain' : '3D terrain modeling',
      ],
    },
    {
      icon: MapPin,
      title: t('service.bornage.title'),
      description: t('service.bornage.desc'),
      path: '/services/bornage',
      features: [
        t('language') === 'fr' ? 'Délimitation légale des propriétés' : 'Legal property delimitation',
        t('language') === 'fr' ? 'Bornage amiable et judiciaire' : 'Amicable and judicial boundary marking',
        t('language') === 'fr' ? 'Certificats de mesurage' : 'Measurement certificates',
      ],
    },
    {
      icon: Plane,
      title: t('service.drone.title'),
      description: t('service.drone.desc'),
      path: '/services/drone',
      features: [
        t('language') === 'fr' ? 'Photogrammétrie aérienne' : 'Aerial photogrammetry',
        t('language') === 'fr' ? 'Orthophotos haute résolution' : 'High-resolution orthophotos',
        t('language') === 'fr' ? 'Modèles numériques de terrain' : 'Digital terrain models',
      ],
    },
    {
      icon: Building2,
      title: t('service.urbanisme.title'),
      description: t('service.urbanisme.desc'),
      path: '/services/urbanisme',
      features: [
        t('language') === 'fr' ? "Plans d'aménagement" : 'Development plans',
        t('language') === 'fr' ? 'Études de lotissement' : 'Subdivision studies',
        t('language') === 'fr' ? "Schémas d'urbanisme" : 'Urban planning schemes',
      ],
    },
    {
      icon: Construction,
      title: t('service.vrd.title'),
      description: t('service.vrd.desc'),
      path: '/services/vrd',
      features: [
        t('language') === 'fr' ? 'Études de voirie' : 'Road studies',
        t('language') === 'fr' ? 'Réseaux divers (eau, assainissement)' : 'Utility networks (water, sanitation)',
        t('language') === 'fr' ? 'Plans de récolement' : 'As-built plans',
      ],
    },
    {
      icon: Scale,
      title: t('service.conseil.title'),
      description: t('service.conseil.desc'),
      path: '/services/conseil',
      features: [
        t('language') === 'fr' ? 'Expertise foncière et immobilière' : 'Land and real estate expertise',
        t('language') === 'fr' ? 'Conseil juridique technique' : 'Technical legal advice',
        t('language') === 'fr' ? 'Assistance aux litiges fonciers' : 'Assistance with land disputes',
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('services.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="h-14 w-14 rounded-lg bg-gradient-hero flex items-center justify-center flex-shrink-0">
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                      <ArrowRight className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to={service.path}>
                  <Button variant="default" className="w-full">
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
