import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Calendar, Building2, Users, Factory, Award, Shield, FileCheck } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

// Attestation images
import attestation1 from '@/assets/attestation-bonne-fin-1.jpg';
import attestation2 from '@/assets/attestation-bonne-fin-2.jpg';
import attestation3 from '@/assets/attestation-bonne-fin-3.jpg';
import attestation4 from '@/assets/attestation-bonne-fin-4.jpg';
import attestation5 from '@/assets/attestation-bonne-fin-5.jpg';
import attestation6 from '@/assets/attestation-bonne-fin-6.jpg';
import attestation7 from '@/assets/attestation-bonne-fin-7.jpg';

// Project images
import heroImage1 from '@/assets/nocometab-hero-1.jpg';
import finishedProject2 from '@/assets/finished-projects-2.jpg';
import finishedProject3 from '@/assets/finished-projects-3.jpg';
import finishedProject8 from '@/assets/finished-projects-8.jpg';
import finishedProject9 from '@/assets/finished-projects-9.jpg';

const ProjectsPage = () => {
  const { t, language } = useLanguage();

  // Updated metrics for metal construction
  const achievements = [
    { icon: Factory, value: '200T', label: language === 'fr' ? 'Silos installés' : 'Silos installed', color: 'text-primary' },
    { icon: Building2, value: '50+', label: language === 'fr' ? 'Charpentes montées' : 'Frameworks installed', color: 'text-primary' },
    { icon: Users, value: '100+', label: language === 'fr' ? 'Clients satisfaits' : 'Satisfied clients', color: 'text-primary' },
    { icon: Award, value: '15+', label: language === 'fr' ? "Années d'expérience" : 'Years experience', color: 'text-primary' },
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
        ? "Attestation de bonne fin d'exécution pour: Fabrication et Montage de la charpente métallique de la toiture de l'église, Fourniture et pose de tôles bac-alu pour la couverture de la toiture."
        : "Certificate of completion for: Fabrication and Assembly of the metal framework for the church roof, Supply and installation of bac-alu sheets for roof covering.",
      date: '08 Octobre 2018',
    },
    {
      src: attestation3,
      title: 'CIMBENIN S.A. - CIMBENIN',
      description: language === 'fr'
        ? "Attestation de bonne fin d'exécution pour travaux de chaudronnerie: fabrication d'un ballon d'air y compris la mise à l'épreuve, raccordement du circuit d'air de l'ensacheuse, fabrication d'un tank à gaz-oil de 10.000 litres."
        : "Certificate of completion for boilermaking work: air balloon fabrication including testing, bagging machine air circuit connection, 10,000 liter gas-oil tank fabrication.",
      date: '11/10/2011',
    },
    {
      src: attestation4,
      title: 'Communauté Électrique du Bénin (CEB)',
      description: language === 'fr'
        ? "Attestation de bonne fin d'exécution pour travaux de Génie Civil, travaux de peinture et de toiture, travaux de démontage et montage de pylônes, travaux de renforcement et montage de pylônes flambés."
        : "Certificate of completion for Civil Engineering work, painting and roofing work, pylon dismantling and assembly work, reinforcement and assembly of burnt pylons.",
      date: '05-07-2012',
    },
    {
      src: attestation5,
      title: 'CIMBENIN S.A. - HEIDELBERGCEMENT',
      description: language === 'fr'
        ? "Attestation de bonne exécution pour diverses prestations dont notamment: construction de trois salles de classes + bureau, magasin et WC, construction du hangar métallique du parking des chargeuses, aménagement et pavage de la chaussée d'accès à CIMBENIN."
        : "Certificate of good execution for various services including: construction of three classrooms + office, store and WC, construction of metal hangar for loader parking, development and paving of CIMBENIN access road.",
      date: '14/09/2015',
    },
    {
      src: attestation6,
      title: 'CIMBENIN S.A. - Lettre de Félicitation',
      description: language === 'fr'
        ? "Lettre de félicitation pour savoir-faire appréciable dans la construction du bâtiment dit « la maison de l'ouvrier » pour les travailleurs de la Cimbenin."
        : "Letter of commendation for appreciated expertise in construction of the 'workers house' building for Cimbenin employees.",
      date: '18 Octobre 2013',
    },
    {
      src: attestation7,
      title: 'MR INTERNATIONAL - ETISALAT BENIN',
      description: language === 'fr'
        ? "Attestation de bonne fin d'exécution pour l'aménagement de la salle technique de la direction de ETISALAT BENIN: fabrication d'une cuve de 5.000 litres y compris barémage, transport et pose de la cuve, prolongation de l'échappement."
        : "Certificate of completion for ETISALAT BENIN technical room development: 5,000 liter tank fabrication including calibration, tank transport and installation, exhaust extension.",
      date: '24 Mai 2012',
    },
  ];

  const projects = [
    {
      image: finishedProject2,
      title: language === 'fr' ? 'Montage Charpente et Silo 200 Tonnes - CIMBENIN' : '200-Ton Silo and Framework Assembly - CIMBENIN',
      location: 'CIMBENIN, Cotonou',
      date: '2023',
      type: language === 'fr' ? 'Structure Industrielle' : 'Industrial Structure',
      description: language === 'fr'
        ? "Construction et montage complet d'un silo de 200 tonnes avec charpente métallique à la cimenterie CIMBENIN."
        : 'Complete construction and assembly of a 200-ton silo with metal framework at the CIMBENIN cement plant.',
      stats: [
        { label: language === 'fr' ? 'Capacité' : 'Capacity', value: '200 T' },
        { label: language === 'fr' ? 'Hauteur' : 'Height', value: '25 m' },
        { label: language === 'fr' ? 'Durée' : 'Duration', value: '3 mois' },
      ],
      highlights: [
        language === 'fr' ? 'Silo grande capacité' : 'Large capacity silo',
        language === 'fr' ? 'Travaux en hauteur' : 'High-altitude work',
        language === 'fr' ? 'Structure renforcée' : 'Reinforced structure',
      ],
    },
    {
      image: finishedProject9,
      title: language === 'fr' ? "Charpente de l'Arène du Palais Royal de Nikki" : 'Royal Palace Arena Framework - Nikki',
      location: 'Nikki, Bénin',
      date: '2024',
      type: language === 'fr' ? 'Charpente' : 'Framework',
      description: language === 'fr'
        ? "Fabrication et montage de la charpente métallique pour l'arène du Palais Royal de Nikki, projet culturel majeur."
        : 'Fabrication and assembly of the metal framework for the Royal Palace arena in Nikki, a major cultural project.',
      stats: [
        { label: language === 'fr' ? 'Portée' : 'Span', value: '30 m' },
        { label: language === 'fr' ? 'Équipe' : 'Team', value: '15+' },
        { label: language === 'fr' ? 'Durée' : 'Duration', value: '2 mois' },
      ],
      highlights: [
        language === 'fr' ? 'Projet culturel' : 'Cultural project',
        language === 'fr' ? 'Grande portée' : 'Large span',
        language === 'fr' ? 'Design unique' : 'Unique design',
      ],
    },
    {
      image: finishedProject8,
      title: language === 'fr' ? "Montage du Moteur de l'Élévateur Ciment" : 'Cement Elevator Motor Assembly',
      location: 'CIMBENIN, Cotonou',
      date: '2024',
      type: language === 'fr' ? 'Montage Mécanique' : 'Mechanical Assembly',
      description: language === 'fr'
        ? "Installation et montage du moteur de l'élévateur à ciment incluant les travaux mécaniques, électriques et les tests de fonctionnement."
        : 'Installation and assembly of the cement elevator motor including mechanical, electrical work and function tests.',
      stats: [
        { label: language === 'fr' ? 'Puissance' : 'Power', value: '150 kW' },
        { label: language === 'fr' ? 'Charge' : 'Load', value: '50 T/h' },
        { label: language === 'fr' ? 'Tests' : 'Tests', value: '100%' },
      ],
      highlights: [
        language === 'fr' ? 'Haute puissance' : 'High power',
        language === 'fr' ? 'Installation précise' : 'Precise installation',
        language === 'fr' ? 'Tests complets' : 'Complete testing',
      ],
    },
    {
      image: finishedProject3,
      title: language === 'fr' ? 'Montage Silo et Charpente - Vue Technique' : 'Silo and Framework Assembly - Technical View',
      location: 'CIMBENIN, Cotonou',
      date: '2023',
      type: language === 'fr' ? 'Structure Métallique' : 'Metal Structure',
      description: language === 'fr'
        ? "Vue technique du montage de silo et charpente métallique avec échafaudages sécurisés et équipe expérimentée."
        : 'Technical view of silo and metal framework assembly with secure scaffolding and experienced team.',
      stats: [
        { label: language === 'fr' ? 'Échafaudages' : 'Scaffolding', value: '500 m²' },
        { label: language === 'fr' ? 'Sécurité' : 'Safety', value: '100%' },
        { label: language === 'fr' ? 'Équipe' : 'Team', value: '20+' },
      ],
      highlights: [
        language === 'fr' ? 'Sécurité renforcée' : 'Enhanced safety',
        language === 'fr' ? 'Échafaudages pro' : 'Pro scaffolding',
        language === 'fr' ? 'Équipe formée' : 'Trained team',
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

      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Stats Section - Responsive */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-5xl mx-auto mb-16 md:mb-20">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-scale-in border hover:border-primary/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="py-4 md:py-6 lg:py-8 px-3 md:px-4">
                <div className="w-10 h-10 md:w-14 lg:w-16 md:h-14 lg:h-16 mx-auto mb-2 md:mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <achievement.icon className={`h-5 w-5 md:h-7 lg:h-8 md:w-7 lg:w-8 text-accent`} />
                </div>
                <div className="text-lg md:text-2xl lg:text-3xl font-bold text-primary mb-1">
                  {achievement.value}
                </div>
                <p className="text-xs md:text-sm text-muted-foreground leading-tight">{achievement.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Attestations Section */}
        <div className="mb-16 md:mb-20">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 mb-3 md:mb-4 bg-accent/10 rounded-full">
              <FileCheck className="h-4 w-4 md:h-5 md:w-5 text-accent" />
              <span className="text-accent font-semibold text-xs md:text-sm uppercase tracking-wider">
                {language === 'fr' ? 'Certifications' : 'Certifications'}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">
              {language === 'fr' ? "Attestations de Bonne Fin d'Exécution" : 'Certificates of Completion'}
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
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
                  className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[380px] mx-2 md:mx-4"
                >
                  <Card className="overflow-hidden border hover:border-primary/50 transition-all duration-300 hover:shadow-elevated h-full">
                    <div className="relative">
                      <img
                        src={attestation.src}
                        alt={attestation.title}
                        className="w-full h-[320px] sm:h-[380px] md:h-[450px] object-contain bg-secondary/20"
                      />
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-accent text-accent-foreground text-xs">
                          <Award className="h-3 w-3 mr-1" />
                          {language === 'fr' ? 'Certifié' : 'Certified'}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-3 md:p-4">
                      <h3 className="font-bold text-sm md:text-base text-foreground mb-1 md:mb-2 line-clamp-1">{attestation.title}</h3>
                      <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">{attestation.description}</p>
                      <p className="text-xs text-primary font-semibold mt-1 md:mt-2">{attestation.date}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {attestations.map((attestation, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[380px] mx-2 md:mx-4"
                >
                  <Card className="overflow-hidden border hover:border-primary/50 transition-all duration-300 hover:shadow-elevated h-full">
                    <div className="relative">
                      <img
                        src={attestation.src}
                        alt={attestation.title}
                        className="w-full h-[320px] sm:h-[380px] md:h-[450px] object-contain bg-secondary/20"
                      />
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-accent text-accent-foreground text-xs">
                          <Award className="h-3 w-3 mr-1" />
                          {language === 'fr' ? 'Certifié' : 'Certified'}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-3 md:p-4">
                      <h3 className="font-bold text-sm md:text-base text-foreground mb-1 md:mb-2 line-clamp-1">{attestation.title}</h3>
                      <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">{attestation.description}</p>
                      <p className="text-xs text-primary font-semibold mt-1 md:mt-2">{attestation.date}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid with Images */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 md:mb-8 animate-fade-in">
            {language === 'fr' ? 'Projets Récents' : 'Recent Projects'}
          </h2>

          <div className="space-y-4 md:space-y-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="hover:shadow-elevated transition-all duration-300 animate-fade-in-up border hover:border-primary/50 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Project Image */}
                  <div className="lg:col-span-1">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 md:h-56 lg:h-full object-cover"
                    />
                  </div>
                  
                  {/* Project Details */}
                  <div className="lg:col-span-2">
                    <CardContent className="p-4 md:p-6 lg:p-8">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
                        <div className="lg:col-span-2">
                          <div className="flex flex-wrap items-center gap-2 mb-2 md:mb-3">
                            <Badge className="bg-primary text-primary-foreground text-xs">{project.type}</Badge>
                            <Badge variant="outline" className="flex items-center gap-1 text-xs">
                              <Calendar className="h-3 w-3" />
                              {project.date}
                            </Badge>
                          </div>

                          <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-2">{project.title}</h3>

                          <div className="flex items-center text-muted-foreground mb-3 md:mb-4">
                            <MapPin className="h-4 w-4 mr-1 text-primary" />
                            <span className="text-xs md:text-sm">{project.location}</span>
                          </div>

                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3 md:mb-4">{project.description}</p>

                          <div className="flex flex-wrap gap-1.5 md:gap-2">
                            {project.highlights.map((highlight, idx) => (
                              <span 
                                key={idx} 
                                className="inline-flex items-center gap-1 text-xs px-2 md:px-3 py-1 bg-secondary rounded-full"
                              >
                                <Shield className="h-3 w-3 text-primary" />
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="lg:border-l lg:pl-6">
                          <h4 className="font-semibold text-sm md:text-base text-foreground mb-3 md:mb-4">
                            {language === 'fr' ? 'Données Clés' : 'Key Data'}
                          </h4>
                          <div className="grid grid-cols-3 lg:grid-cols-1 gap-2 md:gap-3">
                            {project.stats.map((stat, idx) => (
                              <div key={idx} className="bg-secondary/50 rounded-lg p-2 md:p-3 text-center lg:text-left">
                                <div className="text-xs text-muted-foreground mb-0.5 md:mb-1">{stat.label}</div>
                                <div className="text-sm md:text-lg lg:text-xl font-bold text-primary">{stat.value}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
