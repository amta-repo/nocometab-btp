import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

const heroImages = [heroImage5, heroImage6, heroImage7, servicesFramework, servicesCivil, finishedProject4, finishedProject5, finishedProject7];

const HomePage = () => {
  const { t, language } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedService, setSelectedService] = useState<(typeof services)[number] | null>(null);
  const [serviceImageIndex, setServiceImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
      {/* Hero Section with Sliding Background */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Sliding Background Images */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${image})`,
              opacity: currentImageIndex === index ? 1 : 0,
            }}
          />
        ))}
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        
        {/* Accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
        
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 mb-4 md:mb-6 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30">
              <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider">
                {language === 'fr' ? 'Construction Métallique Professionnelle' : 'Professional Metal Construction'}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
              NOCOMETAB <span className="text-primary">BTP</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-3xl lg:text-4xl mb-3 md:mb-4 font-semibold">
              {t('hero.title')}
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 md:mb-10 max-w-2xl mx-auto text-gray-200 px-4">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-8 md:mb-12 px-4">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 md:px-8 py-5 md:py-6 text-base md:text-lg shadow-lg">
                  {t('hero.cta.quote')}
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                className="rounded-full w-12 h-12 md:w-14 md:h-14 p-0 bg-white/20 hover:bg-primary text-white hover:text-primary-foreground backdrop-blur-sm border border-white/30"
                onClick={() => window.open('https://wa.me/+22995954663', '_blank')}
              >
                <Phone className="h-5 w-5 md:h-6 md:w-6" />
              </Button>
            </div>

            {/* Trust Badges - responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4 max-w-3xl mx-auto px-4 mb-16 sm:mb-20 md:mb-24">
              {trustBadges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 md:px-4 md:py-3 animate-scale-in border border-white/10"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <badge.icon className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
                  <span className="text-xs md:text-sm font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Image indicators - separated from trust badges */}
        <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex gap-2 md:gap-2.5 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 rounded-full transition-all duration-300 ${
                currentImageIndex === index ? 'bg-primary w-6 sm:w-8 md:w-10' : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
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
                onClick={() => window.open('https://wa.me/+22995954663', '_blank')}
              >
                <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                {t('cta.whatsapp')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto shadow-elevated border border-accent/20">
            <CardContent className="py-8 md:py-12 px-4 md:px-8">
              <div className="text-center">
                <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
                  {t('contact.title')}
                </h2>
                <p className="text-sm md:text-lg text-muted-foreground mb-6 md:mb-8">
                  {t('contact.subtitle')}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
                  <div className="flex flex-col items-center p-4 md:p-5 rounded-lg bg-secondary/50">
                    <Phone className="h-6 w-6 md:h-8 md:w-8 text-primary mb-2" />
                    <p className="text-xs md:text-sm text-muted-foreground mb-1">
                      {language === 'fr' ? 'Téléphone' : 'Phone'}
                    </p>
                    <a
                      href="tel:+2290195954763"
                      className="font-semibold text-sm md:text-base text-foreground hover:text-primary transition-colors"
                    >
                      +229 01 95 95 47 63
                    </a>
                  </div>
                  <div className="flex flex-col items-center p-4 md:p-5 rounded-lg bg-secondary/50">
                    <Mail className="h-6 w-6 md:h-8 md:w-8 text-primary mb-2" />
                    <p className="text-xs md:text-sm text-muted-foreground mb-1">Email</p>
                    <a
                      href="mailto:nocometabbtp@gmail.com"
                      className="font-semibold text-sm md:text-base text-foreground hover:text-primary transition-colors break-all"
                    >
                      nocometabbtp@gmail.com
                    </a>
                  </div>
                  <div className="flex flex-col items-center p-4 md:p-5 rounded-lg bg-secondary/50">
                    <Clock className="h-6 w-6 md:h-8 md:w-8 text-primary mb-2" />
                    <p className="text-xs md:text-sm text-muted-foreground mb-1">{t('contact.hours')}</p>
                    <p className="font-semibold text-sm md:text-base text-foreground">
                      {t('contact.hours.weekday')}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                  <Link to="/contact">
                    <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                      {t('cta.quoterequest')}
                    </Button>
                  </Link>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto"
                    onClick={() => window.open('https://wa.me/+22995954663', '_blank')}
                  >
                    {t('cta.whatsapp')}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
