import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Calendar, Building2, Users, TrendingUp, Award, Shield, FileCheck } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

import attestation1 from '@/assets/attestation-bonne-fin-1.jpg';
import attestation2 from '@/assets/attestation-bonne-fin-2.jpg';
import attestation4 from '@/assets/attestation-bonne-fin-4.jpg';
import heroImage1 from '@/assets/nocometab-hero-1.jpg';

const ProjectsPage = () => {
  const { t, language } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  const achievements = [
    { icon: Building2, value: '+50K m²', label: t('achievements.hectares'), color: 'text-primary' },
    { icon: MapPin, value: '15', label: t('achievements.communes'), color: 'text-primary' },
    { icon: Users, value: '100+', label: t('achievements.clients'), color: 'text-primary' },
    { icon: TrendingUp, value: '99.9%', label: t('achievements.accuracy'), color: 'text-primary' },
  ];

  const attestations = [
    {
      src: attestation1,
      title: 'CIMBENIN S.A.',
      description: language === 'fr' 
        ? "Attestation de bonne fin d'exécution pour travaux de construction métallique incluant: fabrication d'un ballon d'air, raccordement du circuit d'air, fabrication d'un tank à gaz-oil de 20.000 litres, et réfection du hangar de l'ensachage."
        : "Certificate of completion for metal construction work including: air balloon fabrication, air circuit connection, 20,000 liter gas-oil tank fabrication, and bagging shed renovation.",
      date: '29/05/2011',
    },
    {
      src: attestation2,
      title: 'Paroisse Saint Louis de GBEDEGBE',
      description: language === 'fr'
        ? "Attestation de bonne fin d'exécution pour: Fabrication et Montage de la charpente métallique de la toiture de l'église, Fourniture et pose de tôles bac-alu pour la couverture de la toiture, Fabrication et pose des troncs de Quête."
        : "Certificate of completion for: Fabrication and Assembly of the metal framework for the church roof, Supply and installation of bac-alu sheets for roof covering, Fabrication and installation of collection boxes.",
      date: '08 Octobre 2018',
    },
    {
      src: attestation4,
      title: 'Communauté Électrique du Bénin (CEB)',
      description: language === 'fr'
        ? "Attestation de bonne fin d'exécution pour travaux de Génie Civil, travaux de peinture et de toiture, travaux de démontage et montage de pylônes, travaux de renforcement et montage de pylônes flambés, fourniture de fers cornières. Montant: 168.926.900 F CFA."
        : "Certificate of completion for Civil Engineering work, painting and roofing work, pylon dismantling and assembly work, reinforcement and assembly of burnt pylons, supply of angle irons. Amount: 168,926,900 F CFA.",
      date: '05-07-2012',
    },
  ];

  const projects = [
    {
      title: language === 'fr' ? 'Hangar Industriel - Zone Portuaire' : 'Industrial Warehouse - Port Area',
      location: 'Port de Cotonou',
      date: '2024',
      type: language === 'fr' ? 'Structure Métallique' : 'Metal Structure',
      description: language === 'fr'
        ? "Construction d'un hangar industriel de 2000m² pour stockage de marchandises avec structure métallique complète."
        : 'Construction of a 2000m² industrial warehouse for goods storage with complete metal structure.',
      stats: [
        { label: language === 'fr' ? 'Surface' : 'Area', value: '2000 m²' },
        { label: language === 'fr' ? 'Hauteur' : 'Height', value: '12 m' },
        { label: language === 'fr' ? 'Portée' : 'Span', value: '30 m' },
      ],
      highlights: [
        language === 'fr' ? 'Structure autoportante' : 'Self-supporting structure',
        language === 'fr' ? 'Traitement anticorrosion' : 'Anti-corrosion treatment',
        language === 'fr' ? 'Livré en 4 mois' : 'Delivered in 4 months',
      ],
    },
    {
      title: language === 'fr' ? 'Charpente Métallique - Centre Commercial' : 'Metal Framework - Shopping Center',
      location: 'Akpakpa, Cotonou',
      date: '2024',
      type: language === 'fr' ? 'Charpente' : 'Framework',
      description: language === 'fr'
        ? "Installation d'une charpente métallique moderne pour un centre commercial avec toiture en bac acier."
        : 'Installation of a modern metal framework for a shopping center with steel deck roofing.',
      stats: [
        { label: language === 'fr' ? 'Surface' : 'Area', value: '1500 m²' },
        { label: language === 'fr' ? 'Portée' : 'Span', value: '25 m' },
        { label: language === 'fr' ? 'Charge' : 'Load', value: '150 kg/m²' },
      ],
      highlights: [
        language === 'fr' ? 'Design moderne' : 'Modern design',
        language === 'fr' ? 'Grande portée' : 'Large span',
        language === 'fr' ? 'Finition thermolaquée' : 'Powder coated finish',
      ],
    },
    {
      title: language === 'fr' ? 'Menuiserie Métallique - Immeuble Résidentiel' : 'Metal Joinery - Residential Building',
      location: 'Abomey-Calavi',
      date: '2023',
      type: language === 'fr' ? 'Menuiserie' : 'Joinery',
      description: language === 'fr'
        ? "Fourniture et installation de portes, fenêtres et garde-corps métalliques pour un immeuble de 5 étages."
        : 'Supply and installation of metal doors, windows and railings for a 5-story building.',
      stats: [
        { label: language === 'fr' ? 'Portes' : 'Doors', value: '60' },
        { label: language === 'fr' ? 'Fenêtres' : 'Windows', value: '120' },
        { label: language === 'fr' ? 'Garde-corps' : 'Railings', value: '200 ml' },
      ],
      highlights: [
        language === 'fr' ? 'Sur mesure' : 'Custom made',
        language === 'fr' ? 'Finition premium' : 'Premium finish',
        language === 'fr' ? 'Installation rapide' : 'Fast installation',
      ],
    },
    {
      title: language === 'fr' ? 'Toiture Métallique - Complexe Scolaire' : 'Metal Roofing - School Complex',
      location: 'Sèmè-Kpodji',
      date: '2023',
      type: language === 'fr' ? 'Couverture' : 'Roofing',
      description: language === 'fr'
        ? "Réalisation de la toiture métallique complète d'un complexe scolaire avec système d'étanchéité et isolation."
        : 'Complete metal roofing of a school complex with waterproofing system and insulation.',
      stats: [
        { label: language === 'fr' ? 'Surface couverte' : 'Covered Area', value: '3000 m²' },
        { label: language === 'fr' ? 'Durée' : 'Duration', value: '3 mois' },
        { label: language === 'fr' ? 'Bâtiments' : 'Buildings', value: '6' },
      ],
      highlights: [
        language === 'fr' ? 'Isolation thermique' : 'Thermal insulation',
        language === 'fr' ? 'Étanchéité garantie' : 'Guaranteed waterproofing',
        language === 'fr' ? 'Durabilité 25 ans' : '25 years durability',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <PageHeader
        titleFr="Nos Réalisations"
        titleEn="Our Achievements"
        subtitleFr="Découvrez nos projets réalisés avec succès à travers le Bénin"
        subtitleEn="Discover our successfully completed projects across Benin"
        backgroundImage={heroImage1}
      />

      <div className="container mx-auto px-4 py-16">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mb-20">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-scale-in border-2 hover:border-primary/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6 pb-6 md:pt-8 md:pb-8">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <achievement.icon className={`h-6 w-6 md:h-8 md:w-8 ${achievement.color}`} />
                </div>
                <div className="text-xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 md:mb-2 break-words">
                  {achievement.value}
                </div>
                <p className="text-xs md:text-sm text-muted-foreground">{achievement.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Attestations Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-primary/10 rounded-full">
              <FileCheck className="h-5 w-5 text-primary" />
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                {language === 'fr' ? 'Certifications' : 'Certifications'}
              </span>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {language === 'fr' ? "Attestations de Bonne Fin d'Exécution" : 'Certificates of Completion'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === 'fr'
                ? 'Témoignages officiels de la satisfaction de nos clients et de la qualité de nos réalisations.'
                : 'Official testimonials of our clients satisfaction and the quality of our achievements.'}
            </p>
          </div>

          {/* Scrolling Attestations */}
          <div className="relative overflow-hidden py-4">
            <div className="flex animate-slide-left">
              {/* First set */}
              {attestations.map((attestation, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-[350px] md:w-[400px] mx-4"
                >
                  <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-elevated h-full">
                    <div className="relative">
                      <img
                        src={attestation.src}
                        alt={attestation.title}
                        className="w-full h-[400px] md:h-[500px] object-contain bg-secondary/20"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-primary text-primary-foreground">
                          <Award className="h-3 w-3 mr-1" />
                          {language === 'fr' ? 'Certifié' : 'Certified'}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-foreground mb-2">{attestation.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-3">{attestation.description}</p>
                      <p className="text-xs text-primary font-semibold mt-2">{attestation.date}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {attestations.map((attestation, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-[350px] md:w-[400px] mx-4"
                >
                  <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-elevated h-full">
                    <div className="relative">
                      <img
                        src={attestation.src}
                        alt={attestation.title}
                        className="w-full h-[400px] md:h-[500px] object-contain bg-secondary/20"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-primary text-primary-foreground">
                          <Award className="h-3 w-3 mr-1" />
                          {language === 'fr' ? 'Certifié' : 'Certified'}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-foreground mb-2">{attestation.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-3">{attestation.description}</p>
                      <p className="text-xs text-primary font-semibold mt-2">{attestation.date}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 animate-fade-in">
            {language === 'fr' ? 'Projets Récents' : 'Recent Projects'}
          </h2>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="hover:shadow-elevated transition-all duration-300 animate-fade-in-up border-2 hover:border-primary/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6 pb-6 md:pt-8 md:pb-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <Badge className="bg-primary text-primary-foreground">{project.type}</Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {project.date}
                        </Badge>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{project.title}</h3>

                      <div className="flex items-center text-muted-foreground mb-4">
                        <MapPin className="h-4 w-4 mr-1 text-primary" />
                        <span className="text-sm">{project.location}</span>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {project.highlights.map((highlight, idx) => (
                          <span 
                            key={idx} 
                            className="inline-flex items-center gap-1 text-xs px-3 py-1 bg-secondary rounded-full"
                          >
                            <Shield className="h-3 w-3 text-primary" />
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="lg:border-l lg:pl-6">
                      <h4 className="font-semibold text-foreground mb-4">
                        {language === 'fr' ? 'Données Clés' : 'Key Data'}
                      </h4>
                      <div className="space-y-3">
                        {project.stats.map((stat, idx) => (
                          <div key={idx} className="bg-secondary/50 rounded-lg p-3">
                            <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
                            <div className="text-lg md:text-xl font-bold text-primary">{stat.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
