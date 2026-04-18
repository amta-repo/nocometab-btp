import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SeoHelmet from '@/components/SeoHelmet';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  MapPin,
  Ruler,
  Building2,
  Construction,
  Scale,
  Award,
  Users,
  TrendingUp,
  CheckCircle2,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Hammer,
  Factory,
  Shield,
  Wrench,
} from 'lucide-react';

// New hero images
import heroImage5 from '@/assets/nocometab-hero-5.jpg';
import heroImage6 from '@/assets/nocometab-hero-6.jpg';
import heroImage7 from '@/assets/nocometab-hero-7.jpg';
import servicesFramework from '@/assets/services-framework-1.jpg';
import servicesCivil from '@/assets/services-civil-1.jpg';
import servicesPiping from '@/assets/services-piping-1.jpg';
import servicesWelding from '@/assets/services-welding-1.jpg';
import finishedProject4 from '@/assets/finished-projects-4.jpg';
import finishedProject5 from '@/assets/finished-projects-5.jpg';
import finishedProject7 from '@/assets/finished-projects-7.jpg';
import directorImage from '@/assets/director.jpg';
import heroVideo from '@/assets/hero-video.mp4';
import contactBg from '@/assets/contact-bg.jpg';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';

const HomePage = () => {
  const { t, language } = useLanguage();
  const [selectedService, setSelectedService] = useState<(typeof services)[number] | null>(null);
  const [serviceImageIndex, setServiceImageIndex] = useState(0);

  const services = [
    {
      icon: Building2,
      title: t('service.topo.title'),
      description: t('service.topo.desc'),
      path: '/services/structures',
      images: [finishedProject5, servicesCivil, finishedProject7],
      fullDescription: language === 'fr' 
        ? "Notre expertise en structures métalliques comprend la conception, la fabrication et le montage de bâtiments industriels, commerciaux et agricoles. Nous utilisons des aciers de haute qualité et des techniques de soudure avancées pour garantir la solidité et la durabilité de chaque structure."
        : "Our metal structure expertise includes design, fabrication and assembly of industrial, commercial and agricultural buildings. We use high quality steels and advanced welding techniques to ensure the strength and durability of each structure.",
      features: language === 'fr'
        ? ['Études techniques et calculs', 'Fabrication en atelier', 'Montage sur site', 'Certification qualité']
        : ['Technical studies', 'Workshop manufacturing', 'On-site assembly', 'Quality certification'],
    },
    {
      icon: Construction,
      title: t('service.bornage.title'),
      description: t('service.bornage.desc'),
      path: '/services/charpentes',
      images: [heroImage5, heroImage6, servicesFramework],
      fullDescription: language === 'fr'
        ? "Nous réalisons des charpentes métalliques sur mesure pour tous types de bâtiments. Nos charpentes sont conçues pour offrir une résistance maximale aux intempéries et aux charges."
        : "We create custom metal frameworks for all types of buildings. Our frameworks are designed to offer maximum resistance to weather and loads.",
      features: language === 'fr'
        ? ['Charpentes industrielles', 'Charpentes commerciales', 'Fermes et pannes', 'Traitement anticorrosion']
        : ['Industrial frameworks', 'Commercial frameworks', 'Trusses and purlins', 'Anti-corrosion treatment'],
    },
    {
      icon: Ruler,
      title: t('service.drone.title'),
      description: t('service.drone.desc'),
      path: '/services/menuiserie',
      images: [servicesWelding, heroImage7, servicesPiping],
      fullDescription: language === 'fr'
        ? "Notre atelier de menuiserie métallique fabrique portes, fenêtres, portails, garde-corps et escaliers sur mesure."
        : "Our metal joinery workshop manufactures custom doors, windows, gates, railings and stairs.",
      features: language === 'fr'
        ? ['Portes et portails', 'Fenêtres et baies vitrées', 'Garde-corps et rampes', 'Escaliers métalliques']
        : ['Doors and gates', 'Windows and bay windows', 'Railings and handrails', 'Metal stairs'],
    },
    {
      icon: Factory,
      title: t('service.urbanisme.title'),
      description: t('service.urbanisme.desc'),
      path: '/services/hangars',
      images: [servicesFramework, heroImage5, finishedProject4],
      fullDescription: language === 'fr'
        ? "Construction de hangars et entrepôts métalliques de grande portée. Nos solutions permettent d'optimiser l'espace de stockage."
        : "Construction of large-span metal warehouses and storage facilities. Our solutions optimize storage space.",
      features: language === 'fr'
        ? ['Hangars industriels', 'Entrepôts logistiques', 'Ateliers de production', 'Structures agricoles']
        : ['Industrial warehouses', 'Logistics warehouses', 'Production workshops', 'Agricultural structures'],
    },
    {
      icon: Hammer,
      title: t('service.vrd.title'),
      description: t('service.vrd.desc'),
      path: '/services/toiture',
      images: [heroImage6, servicesFramework, heroImage5],
      fullDescription: language === 'fr'
        ? "Installation de couvertures métalliques performantes: bac acier, tôles ondulées, panneaux sandwich."
        : "Installation of high-performance metal roofing: steel decking, corrugated sheets, sandwich panels.",
      features: language === 'fr'
        ? ['Bac acier et tôles', 'Panneaux sandwich', 'Gouttières et descentes', 'Isolation thermique']
        : ['Steel decking and sheets', 'Sandwich panels', 'Gutters and downspouts', 'Thermal insulation'],
    },
    {
      icon: Wrench,
      title: t('service.conseil.title'),
      description: t('service.conseil.desc'),
      path: '/services/renovation',
      images: [servicesPiping, heroImage7, servicesWelding],
      fullDescription: language === 'fr'
        ? "Rénovation et renforcement de structures métalliques existantes. Nous diagnostiquons l'état de vos installations."
        : "Renovation and reinforcement of existing metal structures. We diagnose the condition of your facilities.",
      features: language === 'fr'
        ? ['Diagnostic structurel', 'Renforcement', 'Réhabilitation', 'Extensions']
        : ['Structural diagnosis', 'Reinforcement', 'Rehabilitation', 'Extensions'],
    },
  ];

  // Updated metal construction metrics based on attestations
  const achievements = [
    { 
      icon: Building2, 
      value: '200T', 
      label: language === 'fr' ? 'Silos fabriqués' : 'Silos fabricated' 
    },
    { 
      icon: Factory, 
      value: '50+', 
      label: language === 'fr' ? 'Charpentes montées' : 'Frameworks installed' 
    },
    { 
      icon: Users, 
      value: '100+', 
      label: language === 'fr' ? 'Clients satisfaits' : 'Satisfied clients' 
    },
    { 
      icon: Award, 
      value: '15+', 
      label: language === 'fr' ? 'Années d\'expérience' : 'Years of experience' 
    },
  ];

  const trustBadges = [
    { icon: Award, text: t('trust.member') },
    { icon: CheckCircle2, text: t('trust.experience') },
    { icon: Shield, text: t('trust.projects') },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: language === 'fr' ? 'Expertise Reconnue' : 'Recognized Expertise',
      description: language === 'fr'
        ? "Plus de 15 ans d'expérience dans la construction métallique au Bénin."
        : 'Over 15 years of experience in metal construction in Benin.',
    },
    {
      icon: Shield,
      title: language === 'fr' ? 'Qualité Garantie' : 'Guaranteed Quality',
      description: language === 'fr'
        ? 'Matériaux de première qualité et finitions impeccables.'
        : 'Premium quality materials and impeccable finishes.',
    },
    {
      icon: Clock,
      title: language === 'fr' ? 'Délais Respectés' : 'On-Time Delivery',
      description: language === 'fr'
        ? 'Engagement sur les délais de livraison convenus.'
        : 'Commitment to agreed delivery deadlines.',
    },
    {
      icon: Users,
      title: language === 'fr' ? 'Équipe Qualifiée' : 'Qualified Team',
      description: language === 'fr'
        ? 'Techniciens et soudeurs certifiés et expérimentés.'
        : 'Certified and experienced technicians and welders.',
    },
  ];

  return (
    <div className="min-h-screen">
      <SeoHelmet
        title="NOCOMETAB BTP | N°1 Construction Métallique au Bénin & Afrique de l'Ouest"
        description="NOCOMETAB BTP - Leader en construction métallique au Bénin. Charpentes métalliques, hangars industriels, structures acier, menuiserie métallique. +15 ans d'expérience. Devis gratuit ☎ +229 01 95 95 47 63"
        canonical="https://nocometabbtp.com/"
      />
      {/* Hero Section with Video Background — pulled up under transparent header */}
      <section className="relative -mt-16 md:-mt-20 min-h-[88vh] md:min-h-[92vh] flex items-center overflow-hidden">
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />

        {/* Dark overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />

        {/* Accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

        <div className="container relative z-10 mx-auto px-4 text-white pt-20 sm:pt-24 md:pt-28">
          <div className="max-w-2xl text-left">
            <div className="inline-block px-3 py-1 mb-4 md:mb-6 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30">
              <span className="text-primary font-semibold text-[0.6rem] md:text-xs uppercase tracking-wider">
                {language === 'fr' ? 'Construction Métallique Professionnelle' : 'Professional Metal Construction'}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 md:mb-6 leading-tight">
              {language === 'fr' ? (
                <>Bâtir <span className="text-primary">l’avenir</span> en acier.</>
              ) : (
                <>Building the <span className="text-primary">future</span> in steel.</>
              )}
            </h1>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-start sm:items-center mb-8 md:mb-12">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 md:px-8 py-5 md:py-6 text-base md:text-lg shadow-lg">
                  {t('hero.cta.quote')}
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                className="rounded-full w-12 h-12 md:w-14 md:h-14 p-0 bg-white/20 hover:bg-primary text-white hover:text-primary-foreground backdrop-blur-sm border border-white/30"
                onClick={() => window.open('https://wa.me/+22995954763', '_blank')}
                aria-label="WhatsApp"
              >
                <Phone className="h-5 w-5 md:h-6 md:w-6" />
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-3 max-w-2xl">
              {trustBadges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 md:px-4 md:py-3 animate-scale-in border border-white/10"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <badge.icon className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
                  <span className="text-xs md:text-sm font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Director's Welcome Section - Modern card */}
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        {/* Decorative background blobs */}
        <div className="absolute top-10 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-10 -right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" aria-hidden="true" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="bg-card/90 backdrop-blur-sm rounded-3xl shadow-elevated border border-border/60 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                {/* Director Image */}
                <div className="relative lg:col-span-2 animate-fade-in">
                  <div className="relative h-full min-h-[320px] md:min-h-[420px]">
                    <img
                      src={directorImage}
                      alt="Mr Angelo GBETIE - Directeur de NOCOMETAB BTP"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-card/40" />
                    {/* Name plate */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                      <div className="inline-block bg-card/95 backdrop-blur-md rounded-xl px-4 py-3 shadow-soft">
                        <h3 className="font-bold text-base md:text-lg text-foreground">Mr Angelo GBETIE</h3>
                        <p className="text-primary font-medium text-xs md:text-sm">
                          {language === 'fr' ? 'Directeur, NOCOMETAB BTP' : 'Director, NOCOMETAB BTP'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Welcome Message */}
                <div className="lg:col-span-3 p-6 md:p-10 lg:p-12 animate-fade-in" style={{ animationDelay: '150ms' }}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 bg-primary/10 rounded-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider">
                      {language === 'fr' ? 'Mot du Directeur' : "Director's Message"}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
                    {language === 'fr' ? 'Bienvenue chez NOCOMETAB BTP' : 'Welcome to NOCOMETAB BTP'}
                  </h2>

                  <div className="space-y-3 md:space-y-4 text-muted-foreground">
                    <p className="text-sm md:text-base leading-relaxed">
                      {language === 'fr'
                        ? "Chers partenaires et clients, c'est avec fierté que je vous accueille sur le site de NOCOMETAB BTP, votre partenaire de confiance pour tous vos projets de construction métallique en Afrique de l'Ouest."
                        : "Dear partners and clients, it is with pride that I welcome you to the NOCOMETAB BTP website, your trusted partner for all your metal construction projects in West Africa."}
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      {language === 'fr'
                        ? "Depuis plus de 15 ans, notre engagement envers l'excellence, la qualité et le respect des délais a fait de nous une référence dans notre domaine."
                        : "For over 15 years, our commitment to excellence, quality and meeting deadlines has made us a reference in our field."}
                    </p>
                  </div>

                  <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4">
                    <Link to="/about" className="w-full sm:w-auto">
                      <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                        {language === 'fr' ? 'En savoir plus sur nous' : 'Learn more about us'}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link to="/contact" className="w-full sm:w-auto">
                      <Button variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10">
                        {language === 'fr' ? 'Contactez-nous' : 'Contact us'}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in p-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <item.icon className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                </div>
                <h3 className="font-bold text-sm md:text-lg mb-1 md:mb-2 text-foreground">{item.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
              {t('about.title')}
            </h2>
            <p className="text-lg md:text-xl text-primary font-semibold mb-4 md:mb-6 italic">
              {t('about.mission')}
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8">
              {t('about.description')}
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mt-8 md:mt-12">
              {[
                { key: 'integrity', icon: Award },
                { key: 'accuracy', icon: CheckCircle2 },
                { key: 'innovation', icon: TrendingUp },
                { key: 'sustainability', icon: Building2 },
              ].map((value, index) => (
                <Card key={value.key} className="hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border hover:border-primary/50">
                  <CardContent className="pt-4 pb-4 md:pt-6 md:pb-6 flex flex-col items-center">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/10 flex items-center justify-center mb-2 md:mb-3">
                      <value.icon className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                    </div>
                    <p className="font-semibold text-xs md:text-sm text-center">
                      {t(`about.value.${value.key}`)}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 animate-fade-in">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
              {t('services.title')}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-scale-in group border hover:border-primary/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-5 pb-5 md:pt-6 md:pb-6">
                  <div className="h-12 w-12 md:h-14 md:w-14 rounded-lg bg-gradient-navy flex items-center justify-center mb-3 md:mb-4 group-hover:bg-gradient-accent transition-all duration-300">
                    <service.icon className="h-6 w-6 md:h-7 md:w-7 text-white group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-primary font-semibold text-sm md:text-base"
                    onClick={() => setSelectedService(service)}
                  >
                    {t('services.learnmore')} →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal with Image Carousel */}
      <Dialog open={!!selectedService} onOpenChange={() => { setSelectedService(null); setServiceImageIndex(0); }}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0">
          {/* Image Carousel */}
          {selectedService?.images && selectedService.images.length > 0 && (
            <div className="relative w-full h-48 sm:h-64 md:h-80 overflow-hidden">
              {selectedService.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${selectedService.title} ${idx + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    serviceImageIndex === idx ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              {/* Carousel indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {selectedService.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setServiceImageIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      serviceImageIndex === idx ? 'bg-primary w-6' : 'bg-white/60 hover:bg-white'
                    }`}
                  />
                ))}
              </div>
              {/* Navigation arrows */}
              <button
                onClick={() => setServiceImageIndex((prev) => prev > 0 ? prev - 1 : selectedService.images.length - 1)}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 hover:bg-background flex items-center justify-center shadow"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
              </button>
              <button
                onClick={() => setServiceImageIndex((prev) => prev < selectedService.images.length - 1 ? prev + 1 : 0)}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 hover:bg-background flex items-center justify-center shadow"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}
          
          <div className="p-4 md:p-6">
            <DialogHeader>
              <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                {selectedService && (
                  <div className="h-12 w-12 md:h-14 md:w-14 rounded-lg bg-gradient-navy flex items-center justify-center flex-shrink-0">
                    <selectedService.icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                )}
                <DialogTitle className="text-xl md:text-2xl">{selectedService?.title}</DialogTitle>
              </div>
              <DialogDescription className="text-sm md:text-base leading-relaxed">
                {selectedService?.fullDescription}
              </DialogDescription>
            </DialogHeader>
            
            <div className="mt-4 md:mt-6">
              <h4 className="font-semibold mb-2 md:mb-3 text-foreground text-sm md:text-base">
                {language === 'fr' ? 'Nos prestations incluent:' : 'Our services include:'}
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {selectedService?.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-muted-foreground text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-4 md:mt-6 flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link to="/contact" className="flex-1">
                <Button className="w-full">
                  {language === 'fr' ? 'Demander un devis' : 'Request a Quote'}
                </Button>
              </Link>
              <Link to={selectedService?.path || '/services'}>
                <Button variant="outline" className="w-full sm:w-auto">
                  {language === 'fr' ? 'En savoir plus' : 'Learn more'}
                </Button>
              </Link>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Achievements Section - Dark Navy */}
      <section
        className="py-16 md:py-20 relative bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.95), rgba(30, 41, 59, 0.95)), url(${finishedProject5})`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 text-white animate-fade-in">
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
              {t('achievements.title')}
            </h2>
            <p className="text-sm md:text-lg text-gray-300 max-w-2xl mx-auto">
              {language === 'fr' 
                ? 'Des chiffres qui témoignent de notre engagement et de notre expertise.'
                : 'Numbers that reflect our commitment and expertise.'}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center text-white animate-scale-in p-3 md:p-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 md:w-16 lg:w-20 md:h-16 lg:h-20 mx-auto mb-2 md:mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <achievement.icon className="h-6 w-6 md:h-8 lg:h-10 md:w-8 lg:w-10 text-primary" />
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2 text-primary">
                  {achievement.value}
                </div>
                <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-tight">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-primary-foreground mb-3 md:mb-4">
              {language === 'fr' ? 'Prêt à démarrer votre projet ?' : 'Ready to start your project?'}
            </h2>
            <p className="text-sm md:text-lg text-primary-foreground/80 mb-6 md:mb-8 max-w-2xl mx-auto">
              {language === 'fr' 
                ? 'Contactez-nous dès maintenant pour une étude gratuite et un devis personnalisé.'
                : 'Contact us now for a free study and personalized quote.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-6 md:px-8">
                  {t('cta.quoterequest')}
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => window.open('https://wa.me/+22995954763', '_blank')}
              >
                <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                {t('cta.whatsapp')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links & SEO Section */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 md:mb-8 text-center">
              {language === 'fr' ? 'Explorez NOCOMETAB BTP' : 'Explore NOCOMETAB BTP'}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {[
                { path: '/about', labelFr: 'Notre Histoire & Valeurs', labelEn: 'Our History & Values' },
                { path: '/services/structures', labelFr: 'Structures Métalliques', labelEn: 'Metal Structures' },
                { path: '/services/charpentes', labelFr: 'Charpentes Métalliques', labelEn: 'Metal Frameworks' },
                { path: '/services/menuiserie', labelFr: 'Menuiserie Métallique', labelEn: 'Metal Joinery' },
                { path: '/services/hangars', labelFr: 'Hangars Industriels', labelEn: 'Industrial Warehouses' },
                { path: '/services/toiture', labelFr: 'Toiture & Couverture', labelEn: 'Roofing & Coverage' },
                { path: '/services/renovation', labelFr: 'Rénovation & Entretien', labelEn: 'Renovation & Maintenance' },
                { path: '/projects', labelFr: 'Nos Réalisations', labelEn: 'Our Projects' },
                { path: '/gallery', labelFr: 'Galerie Photos', labelEn: 'Photo Gallery' },
                { path: '/news', labelFr: 'Actualités', labelEn: 'News' },
                { path: '/faq', labelFr: 'Questions Fréquentes', labelEn: 'FAQ' },
                { path: '/contact', labelFr: 'Devis Gratuit', labelEn: 'Free Quote' },
              ].map(link => (
                <Link key={link.path} to={link.path}>
                  <Card className="hover:border-primary/50 transition-colors cursor-pointer h-full">
                    <CardContent className="pt-3 pb-3 md:pt-4 md:pb-4 flex items-center gap-2">
                      <ArrowRight className="h-3 w-3 md:h-4 md:w-4 text-primary flex-shrink-0" />
                      <span className="text-xs md:text-sm font-medium text-foreground">
                        {language === 'fr' ? link.labelFr : link.labelEn}
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* External Authority Links */}
            <div className="mt-8 text-center">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {language === 'fr' ? 'Ressources du Secteur' : 'Industry Resources'}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://www.worldsteel.org/" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                  World Steel Association ↗
                </a>
                <a href="https://www.steelconstruction.info/" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                  Steel Construction Info ↗
                </a>
                <a href="https://www.aisc.org/" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                  AISC ↗
                </a>
                <a href="https://www.facebook.com/profile.php?id=61588065011103" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                  NOCOMETAB BTP Facebook ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* Compelling Contact CTA over background image */}
      <section
        className="relative py-20 md:py-28 bg-cover bg-center"
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        {/* Dark overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/75 to-foreground/55" />
        {/* Accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl text-center mx-auto text-white">
            <div className="inline-block px-3 py-1 mb-4 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30">
              <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider">
                {language === 'fr' ? 'Parlons de votre projet' : "Let's talk about your project"}
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 md:mb-6 leading-tight">
              {language === 'fr'
                ? 'Et si votre prochain projet devenait notre prochaine réussite ?'
                : 'What if your next project became our next success story?'}
            </h2>
            <p className="text-base md:text-lg text-white/85 mb-8 md:mb-10">
              {language === 'fr'
                ? 'Recevez une étude gratuite et un devis personnalisé en moins de 24h.'
                : 'Get a free study and a personalized quote in less than 24 hours.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 md:px-10 py-5 md:py-6 text-base md:text-lg shadow-lg">
                  {t('cta.quoterequest')}
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-foreground font-semibold px-6 md:px-10 py-5 md:py-6 text-base md:text-lg backdrop-blur-sm bg-white/10"
                onClick={() => window.open('https://wa.me/+22995954763', '_blank')}
              >
                <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                {t('cta.whatsapp')}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
