import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { X, ZoomIn, MapPin, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

import finishedProject1 from '@/assets/finished-projects-1.jpg';
import finishedProject6 from '@/assets/finished-projects-6.jpg';
import heroImage1 from '@/assets/nocometab-hero-1.jpg';
import heroImage2 from '@/assets/nocometab-hero-2.jpg';
import heroImage3 from '@/assets/nocometab-hero-3.jpg';
import heroImage4 from '@/assets/nocometab-hero-4.jpg';

const GalleryPage = () => {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    {
      id: 1,
      src: finishedProject1,
      title: language === 'fr' 
        ? "Fabrication et Montage de la Charpente de l'Église Sacré-Cœur" 
        : "Fabrication and Assembly of Sacré-Cœur Church Framework",
      location: 'Akpakpa, Cotonou',
      date: '2023',
      category: language === 'fr' ? 'Charpente' : 'Framework',
      description: language === 'fr'
        ? "Réalisation complète de la charpente métallique pour l'Église Sacré-Cœur de Cotonou Akpakpa. Ce projet ambitieux a nécessité une expertise technique pointue pour concevoir et monter une structure capable de supporter les charges importantes d'une toiture de grande portée. Les travaux ont inclus la fabrication sur mesure des fermes métalliques, leur traitement anticorrosion, et le montage sur site avec des équipements de levage adaptés."
        : "Complete construction of the metal framework for Sacré-Cœur Church in Cotonou Akpakpa. This ambitious project required sharp technical expertise to design and assemble a structure capable of supporting the significant loads of a large-span roof. Work included custom fabrication of metal trusses, anti-corrosion treatment, and on-site assembly with appropriate lifting equipment.",
      highlights: language === 'fr'
        ? ['Structure autoportante', 'Portée de 25 mètres', 'Traitement galvanisé', 'Montage en 6 semaines']
        : ['Self-supporting structure', '25-meter span', 'Galvanized treatment', 'Assembly in 6 weeks'],
    },
    {
      id: 2,
      src: finishedProject6,
      title: language === 'fr' 
        ? "Montage de la Charpente du Hall Séparateur Ciment" 
        : "Assembly of Cement Separator Hall Framework",
      location: 'Zone Industrielle, Cotonou',
      date: '2024',
      category: language === 'fr' ? 'Industriel' : 'Industrial',
      description: language === 'fr'
        ? "Construction de la charpente métallique pour le hall séparateur de ciment d'une cimenterie. Ce projet industriel de grande envergure a impliqué la conception de structures capables de résister aux environnements industriels exigeants, avec des contraintes de poussière et de vibrations. L'équipe NOCOMETAB BTP a démontré son savoir-faire dans les constructions métalliques industrielles."
        : "Construction of the metal framework for the cement separator hall of a cement plant. This large-scale industrial project involved designing structures capable of withstanding demanding industrial environments, with dust and vibration constraints. The NOCOMETAB BTP team demonstrated its expertise in industrial metal constructions.",
      highlights: language === 'fr'
        ? ['Environnement industriel', 'Structure renforcée', 'Résistance aux vibrations', 'Normes de sécurité']
        : ['Industrial environment', 'Reinforced structure', 'Vibration resistance', 'Safety standards'],
    },
    {
      id: 3,
      src: heroImage1,
      title: language === 'fr' 
        ? "Équipe NOCOMETAB BTP en action" 
        : "NOCOMETAB BTP Team in Action",
      location: 'Cotonou, Bénin',
      date: '2024',
      category: language === 'fr' ? 'Équipe' : 'Team',
      description: language === 'fr'
        ? "Notre équipe de professionnels qualifiés travaillant sur un chantier de construction métallique. NOCOMETAB BTP dispose d'une équipe de techniciens expérimentés, de soudeurs certifiés et d'ingénieurs compétents qui garantissent la qualité de chaque projet. La formation continue et le respect des normes de sécurité sont au cœur de notre culture d'entreprise."
        : "Our team of qualified professionals working on a metal construction site. NOCOMETAB BTP has a team of experienced technicians, certified welders and competent engineers who guarantee the quality of each project. Continuous training and compliance with safety standards are at the heart of our corporate culture.",
      highlights: language === 'fr'
        ? ['Équipe qualifiée', 'Soudeurs certifiés', 'Formation continue', 'Sécurité prioritaire']
        : ['Qualified team', 'Certified welders', 'Continuous training', 'Safety priority'],
    },
    {
      id: 4,
      src: heroImage2,
      title: language === 'fr' 
        ? "Construction de Hangar Industriel" 
        : "Industrial Warehouse Construction",
      location: 'Porto-Novo',
      date: '2024',
      category: language === 'fr' ? 'Hangar' : 'Warehouse',
      description: language === 'fr'
        ? "Montage d'un hangar industriel de grande portée avec charpente métallique. Ce type de structure offre une grande flexibilité d'utilisation et une durabilité exceptionnelle. Les hangars NOCOMETAB BTP sont conçus pour optimiser l'espace intérieur tout en garantissant la solidité structurelle nécessaire aux activités industrielles et de stockage."
        : "Assembly of a large-span industrial warehouse with metal framework. This type of structure offers great flexibility of use and exceptional durability. NOCOMETAB BTP warehouses are designed to optimize interior space while ensuring the structural strength necessary for industrial and storage activities.",
      highlights: language === 'fr'
        ? ['Grande portée', 'Sans poteau central', 'Optimisation espace', 'Polyvalent']
        : ['Large span', 'No central column', 'Space optimization', 'Versatile'],
    },
    {
      id: 5,
      src: heroImage3,
      title: language === 'fr' 
        ? "Atelier de Fabrication NOCOMETAB" 
        : "NOCOMETAB Manufacturing Workshop",
      location: 'Kindonou, Cotonou',
      date: '2024',
      category: language === 'fr' ? 'Atelier' : 'Workshop',
      description: language === 'fr'
        ? "Vue de notre atelier de fabrication où sont produits tous les éléments métalliques avant leur montage sur site. Notre atelier est équipé de machines modernes pour la découpe, le pliage, la soudure et le traitement des métaux. Cette capacité de production interne nous permet de garantir la qualité et les délais de livraison."
        : "View of our manufacturing workshop where all metal elements are produced before on-site assembly. Our workshop is equipped with modern machines for cutting, bending, welding and metal treatment. This internal production capacity allows us to guarantee quality and delivery times.",
      highlights: language === 'fr'
        ? ['Équipement moderne', 'Contrôle qualité', 'Production locale', 'Délais maîtrisés']
        : ['Modern equipment', 'Quality control', 'Local production', 'Controlled deadlines'],
    },
    {
      id: 6,
      src: heroImage4,
      title: language === 'fr' 
        ? "Réalisations Diverses de Menuiserie Métallique" 
        : "Various Metal Joinery Works",
      location: 'Bénin',
      date: '2024',
      category: language === 'fr' ? 'Menuiserie' : 'Joinery',
      description: language === 'fr'
        ? "Aperçu de nos réalisations en menuiserie métallique: charpentes décoratives, structures ornementales, et travaux de métallurgie fine. NOCOMETAB BTP excelle également dans les travaux de finition qui allient fonctionnalité et esthétique. Chaque pièce est fabriquée avec précision pour répondre aux exigences spécifiques de nos clients."
        : "Overview of our metal joinery achievements: decorative frameworks, ornamental structures, and fine metalwork. NOCOMETAB BTP also excels in finishing work that combines functionality and aesthetics. Each piece is manufactured with precision to meet the specific requirements of our clients.",
      highlights: language === 'fr'
        ? ['Travail artisanal', 'Finitions soignées', 'Design personnalisé', 'Métallurgie fine']
        : ['Craftsmanship', 'Careful finishes', 'Custom design', 'Fine metalwork'],
    },
  ];

  const handlePrev = () => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage?.id);
    if (currentIndex > 0) {
      setSelectedImage(galleryImages[currentIndex - 1]);
    } else {
      setSelectedImage(galleryImages[galleryImages.length - 1]);
    }
  };

  const handleNext = () => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage?.id);
    if (currentIndex < galleryImages.length - 1) {
      setSelectedImage(galleryImages[currentIndex + 1]);
    } else {
      setSelectedImage(galleryImages[0]);
    }
  };

  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 mb-6 bg-primary/10 rounded-full">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              {language === 'fr' ? 'Portfolio' : 'Portfolio'}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {language === 'fr' ? 'Notre Galerie' : 'Our Gallery'}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'fr'
              ? 'Découvrez nos réalisations en construction métallique à travers le Bénin. Chaque projet témoigne de notre expertise et de notre engagement qualité.'
              : 'Discover our metal construction achievements across Benin. Each project reflects our expertise and quality commitment.'}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <Card
              key={image.id}
              className={`overflow-hidden hover:shadow-elevated transition-all duration-500 animate-fade-in-up border-2 hover:border-primary/50 cursor-pointer group ${
                expandedCard === image.id ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage(image);
                      }}
                    >
                      <ZoomIn className="h-4 w-4 mr-2" />
                      {language === 'fr' ? 'Voir détails' : 'View details'}
                    </Button>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    {image.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">
                  {image.title}
                </h3>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-primary" />
                    {image.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-primary" />
                    {image.date}
                  </span>
                </div>
                
                <p className={`text-muted-foreground text-sm leading-relaxed ${
                  expandedCard === image.id ? '' : 'line-clamp-3'
                }`}>
                  {image.description}
                </p>
                
                <Button
                  variant="link"
                  className="p-0 h-auto mt-3 text-primary font-semibold"
                  onClick={() => setExpandedCard(expandedCard === image.id ? null : image.id)}
                >
                  {expandedCard === image.id 
                    ? (language === 'fr' ? 'Voir moins' : 'See less')
                    : (language === 'fr' ? 'Voir plus' : 'See more')
                  } →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Image Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto p-0">
            <DialogTitle className="sr-only">{selectedImage?.title}</DialogTitle>
            <div className="relative">
              <img
                src={selectedImage?.src}
                alt={selectedImage?.title}
                className="w-full max-h-[60vh] object-contain bg-black"
              />
              
              {/* Navigation buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                  {selectedImage?.category}
                </span>
                <span className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {selectedImage?.location}
                </span>
                <span className="flex items-center gap-1 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {selectedImage?.date}
                </span>
              </div>
              
              <h2 className="text-2xl font-bold text-foreground mb-4">
                {selectedImage?.title}
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {selectedImage?.description}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {selectedImage?.highlights.map((highlight, index) => (
                  <div 
                    key={index}
                    className="px-4 py-3 bg-secondary rounded-lg text-center"
                  >
                    <span className="text-sm font-medium text-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default GalleryPage;