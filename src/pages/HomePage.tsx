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

import heroImage1 from '@/assets/nocometab-hero-1.jpg';
import heroImage2 from '@/assets/nocometab-hero-2.jpg';
import heroImage3 from '@/assets/nocometab-hero-3.jpg';
import heroImage4 from '@/assets/nocometab-hero-4.jpg';
import servicesImage from '@/assets/services-aerial.jpg';

const heroImages = [heroImage1, heroImage2, heroImage3, heroImage4];

const HomePage = () => {
  const { t, language } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

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
      fullDescription: language === 'fr' 
        ? "Notre expertise en structures métalliques comprend la conception, la fabrication et le montage de bâtiments industriels, commerciaux et agricoles. Nous utilisons des aciers de haute qualité et des techniques de soudure avancées pour garantir la solidité et la durabilité de chaque structure. Notre équipe d'ingénieurs assure un suivi rigoureux de chaque projet, de l'étude de faisabilité à la livraison finale."
        : "Our metal structure expertise includes design, fabrication and assembly of industrial, commercial and agricultural buildings. We use high quality steels and advanced welding techniques to ensure the strength and durability of each structure. Our team of engineers ensures rigorous monitoring of each project, from feasibility study to final delivery.",
      features: language === 'fr'
        ? ['Études techniques et calculs de structures', 'Fabrication en atelier', 'Montage sur site', 'Certification qualité']
        : ['Technical studies and structural calculations', 'Workshop manufacturing', 'On-site assembly', 'Quality certification'],
    },
    {
      icon: Construction,
      title: t('service.bornage.title'),
      description: t('service.bornage.desc'),
      path: '/services/charpentes',
      fullDescription: language === 'fr'
        ? "Nous réalisons des charpentes métalliques sur mesure pour tous types de bâtiments. Nos charpentes sont conçues pour offrir une résistance maximale aux intempéries et aux charges. Avec plus de 50 000 m² de charpentes réalisées, nous sommes votre partenaire de confiance."
        : "We create custom metal frameworks for all types of buildings. Our frameworks are designed to offer maximum resistance to weather and loads. With over 50,000 m² of frameworks completed, we are your trusted partner.",
      features: language === 'fr'
        ? ['Charpentes industrielles', 'Charpentes commerciales', 'Fermes et pannes', 'Traitement anticorrosion']
        : ['Industrial frameworks', 'Commercial frameworks', 'Trusses and purlins', 'Anti-corrosion treatment'],
    },
    {
      icon: Ruler,
      title: t('service.drone.title'),
      description: t('service.drone.desc'),
      path: '/services/menuiserie',
      fullDescription: language === 'fr'
        ? "Notre atelier de menuiserie métallique fabrique portes, fenêtres, portails, garde-corps et escaliers sur mesure. Chaque pièce est réalisée avec précision pour s'adapter parfaitement à vos espaces. Nous proposons différentes finitions: peinture, galvanisation, thermolaquage."
        : "Our metal joinery workshop manufactures custom doors, windows, gates, railings and stairs. Each piece is made with precision to fit your spaces perfectly. We offer different finishes: painting, galvanization, powder coating.",
      features: language === 'fr'
        ? ['Portes et portails', 'Fenêtres et baies vitrées', 'Garde-corps et rampes', 'Escaliers métalliques']
        : ['Doors and gates', 'Windows and bay windows', 'Railings and handrails', 'Metal stairs'],
    },
    {
      icon: Factory,
      title: t('service.urbanisme.title'),
      description: t('service.urbanisme.desc'),
      path: '/services/hangars',
      fullDescription: language === 'fr'
        ? "Construction de hangars et entrepôts métalliques de grande portée. Nos solutions permettent d'optimiser l'espace de stockage tout en garantissant la sécurité et la durabilité. Nous réalisons des portées allant jusqu'à 50 mètres sans poteau intermédiaire."
        : "Construction of large-span metal warehouses and storage facilities. Our solutions optimize storage space while ensuring safety and durability. We achieve spans up to 50 meters without intermediate columns.",
      features: language === 'fr'
        ? ['Hangars industriels', 'Entrepôts logistiques', 'Ateliers de production', 'Structures agricoles']
        : ['Industrial warehouses', 'Logistics warehouses', 'Production workshops', 'Agricultural structures'],
    },
    {
      icon: Hammer,
      title: t('service.vrd.title'),
      description: t('service.vrd.desc'),
      path: '/services/toiture',
      fullDescription: language === 'fr'
        ? "Installation de couvertures métalliques performantes: bac acier, tôles ondulées, panneaux sandwich. Nos toitures offrent une excellente isolation thermique et une grande résistance aux intempéries. Nous assurons également l'étanchéité et l'évacuation des eaux pluviales."
        : "Installation of high-performance metal roofing: steel decking, corrugated sheets, sandwich panels. Our roofs offer excellent thermal insulation and great weather resistance. We also ensure waterproofing and rainwater drainage.",
      features: language === 'fr'
        ? ['Bac acier et tôles', 'Panneaux sandwich', 'Gouttières et descentes', 'Isolation thermique']
        : ['Steel decking and sheets', 'Sandwich panels', 'Gutters and downspouts', 'Thermal insulation'],
    },
    {
      icon: Wrench,
      title: t('service.conseil.title'),
      description: t('service.conseil.desc'),
      path: '/services/renovation',
      fullDescription: language === 'fr'
        ? "Rénovation et renforcement de structures métalliques existantes. Nous diagnostiquons l'état de vos installations et proposons des solutions adaptées: remplacement d'éléments, traitement anticorrosion, mise aux normes, extension de bâtiments."
        : "Renovation and reinforcement of existing metal structures. We diagnose the condition of your facilities and offer suitable solutions: element replacement, anti-corrosion treatment, standards compliance, building extensions.",
      features: language === 'fr'
        ? ['Diagnostic structurel', 'Renforcement', 'Réhabilitation', 'Extensions']
        : ['Structural diagnosis', 'Reinforcement', 'Rehabilitation', 'Extensions'],
    },
  ];

  const achievements = [
    { icon: Building2, value: '+50000m²', label: t('achievements.hectares') },
    { icon: MapPin, value: '15', label: t('achievements.communes') },
    { icon: Users, value: '100+', label: t('achievements.clients') },
    { icon: TrendingUp, value: '99.9%', label: t('achievements.accuracy') },
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
        ? "Plus de 10 ans d'expérience dans la construction métallique au Bénin."
        : 'Over 10 years of experience in metal construction in Benin.',
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
      <section className="relative h-[650px] md:h-[750px] flex items-center justify-center overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        
        {/* Yellow accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-primary" />
        
        <div className="container relative z-10 mx-auto px-4 text-center text-white animate-fade-in-up">
          <div className="inline-block px-4 py-2 mb-6 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              {language === 'fr' ? 'Construction Métallique Professionnelle' : 'Professional Metal Construction'}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            NOCOMETAB <span className="text-primary">BTP</span>
          </h1>
          <p className="text-2xl md:text-4xl mb-4 font-semibold">
            {t('hero.title')}
          </p>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-gray-200">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-6 text-lg">
                {t('hero.cta.quote')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              className="rounded-full w-14 h-14 md:w-auto md:h-auto md:rounded-lg md:px-6 md:py-6 bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => window.open('https://wa.me/+22995954663', '_blank')}
            >
              <Phone className="h-5 w-5 md:mr-2" />
              <span className="hidden md:inline">{t('hero.cta.chat')}</span>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 animate-scale-in border border-white/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <badge.icon className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Image indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentImageIndex === index ? 'bg-primary w-8' : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-accent-foreground/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t('about.title')}
            </h2>
            <p className="text-xl text-primary font-semibold mb-6 italic">
              {t('about.mission')}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {t('about.description')}
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { key: 'integrity', icon: Award },
                { key: 'accuracy', icon: CheckCircle2 },
                { key: 'innovation', icon: TrendingUp },
                { key: 'sustainability', icon: Building2 },
              ].map((value, index) => (
                <Card key={value.key} className="hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                  <CardContent className="pt-6 pb-6 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <p className="font-semibold text-sm">
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
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('services.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-scale-in group border-2 hover:border-primary/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6 pb-6">
                  <div className="h-14 w-14 rounded-lg bg-gradient-hero flex items-center justify-center mb-4 group-hover:bg-gradient-accent transition-all duration-300">
                    <service.icon className="h-7 w-7 text-white group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-primary font-semibold"
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

      {/* Service Detail Modal */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <div className="flex items-center gap-4 mb-4">
              {selectedService && (
                <div className="h-14 w-14 rounded-lg bg-gradient-hero flex items-center justify-center">
                  <selectedService.icon className="h-7 w-7 text-white" />
                </div>
              )}
              <DialogTitle className="text-2xl">{selectedService?.title}</DialogTitle>
            </div>
            <DialogDescription className="text-base leading-relaxed">
              {selectedService?.fullDescription}
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-6">
            <h4 className="font-semibold mb-3 text-foreground">
              {language === 'fr' ? 'Nos prestations incluent:' : 'Our services include:'}
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {selectedService?.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-6 flex gap-4">
            <Link to="/contact" className="flex-1">
              <Button className="w-full bg-primary hover:bg-primary/90">
                {language === 'fr' ? 'Demander un devis' : 'Request a Quote'}
              </Button>
            </Link>
            <Link to={selectedService?.path || '/services'}>
              <Button variant="outline">
                {language === 'fr' ? 'En savoir plus' : 'Learn more'}
              </Button>
            </Link>
          </div>
        </DialogContent>
      </Dialog>

      {/* Achievements Section */}
      <section
        className="py-20 relative bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(20, 20, 20, 0.9), rgba(20, 20, 20, 0.9)), url(${servicesImage})`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 text-white animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('achievements.title')}
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              {language === 'fr' 
                ? 'Des chiffres qui témoignent de notre engagement et de notre expertise.'
                : 'Numbers that reflect our commitment and expertise.'}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center text-white animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <achievement.icon className="h-10 w-10 text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-primary">
                  {achievement.value}
                </div>
                <p className="text-sm md:text-base text-gray-300">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              {language === 'fr' ? 'Prêt à démarrer votre projet ?' : 'Ready to start your project?'}
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              {language === 'fr' 
                ? 'Contactez-nous dès maintenant pour une étude gratuite et un devis personnalisé.'
                : 'Contact us now for a free study and personalized quote.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8">
                  {t('cta.quoterequest')}
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => window.open('https://wa.me/+22995954663', '_blank')}
              >
                <Phone className="h-5 w-5 mr-2" />
                {t('cta.whatsapp')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto shadow-elevated border-2 border-primary/20">
            <CardContent className="pt-12 pb-12">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {t('contact.title')}
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  {t('contact.subtitle')}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="flex flex-col items-center p-4 rounded-lg bg-secondary/50">
                    <Phone className="h-8 w-8 text-primary mb-2" />
                    <p className="text-sm text-muted-foreground mb-1">
                      {language === 'fr' ? 'Téléphone' : 'Phone'}
                    </p>
                    <a
                      href="tel:+2290195954663"
                      className="font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      +229 01 95 95 46 63
                    </a>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-lg bg-secondary/50">
                    <Mail className="h-8 w-8 text-primary mb-2" />
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a
                      href="mailto:nocometabbtp@gmail.com"
                      className="font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      nocometabbtp@gmail.com
                    </a>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-lg bg-secondary/50">
                    <Clock className="h-8 w-8 text-primary mb-2" />
                    <p className="text-sm text-muted-foreground mb-1">{t('contact.hours')}</p>
                    <p className="font-semibold text-foreground text-sm">
                      {t('contact.hours.weekday')}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                      {t('cta.quoterequest')}
                    </Button>
                  </Link>
                  <Button
                    size="lg"
                    variant="outline"
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