import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ZoomIn, MapPin, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

import finishedProject1 from '@/assets/finished-projects-1.jpg';
import finishedProject6 from '@/assets/finished-projects-6.jpg';
import heroImage1 from '@/assets/nocometab-hero-1.jpg';
import heroImage2 from '@/assets/nocometab-hero-2.jpg';
import heroImage3 from '@/assets/nocometab-hero-3.jpg';
import heroImage4 from '@/assets/nocometab-hero-4.jpg';
import galleryEquipment1 from '@/assets/gallery-equipment-1.jpg';
import galleryEquipment2 from '@/assets/gallery-equipment-2.jpg';
import galleryEquipment3 from '@/assets/gallery-equipment-3.jpg';
import galleryEquipment4 from '@/assets/gallery-equipment-4.jpg';
import galleryTeam1 from '@/assets/gallery-team-1.jpg';
import galleryCrane1 from '@/assets/gallery-crane-1.jpg';
import galleryWelding1 from '@/assets/gallery-welding-1.jpg';
import galleryIndustrial1 from '@/assets/gallery-industrial-1.jpg';

const GalleryPage = () => {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

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
        ? "Réalisation complète de la charpente métallique pour l'Église Sacré-Cœur de Cotonou Akpakpa."
        : "Complete construction of the metal framework for Sacré-Cœur Church in Cotonou Akpakpa.",
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
        ? "Construction de la charpente métallique pour le hall séparateur de ciment d'une cimenterie."
        : "Construction of the metal framework for the cement separator hall of a cement plant.",
      highlights: language === 'fr'
        ? ['Environnement industriel', 'Structure renforcée', 'Résistance aux vibrations', 'Normes de sécurité']
        : ['Industrial environment', 'Reinforced structure', 'Vibration resistance', 'Safety standards'],
    },
    {
      id: 3,
      src: galleryCrane1,
      title: language === 'fr' 
        ? "Levage de Séparateur Industriel" 
        : "Industrial Separator Lifting",
      location: 'Cimenterie, Cotonou',
      date: '2026',
      category: language === 'fr' ? 'Levage' : 'Lifting',
      description: language === 'fr'
        ? "Opération de levage et positionnement d'un séparateur industriel lourd à la cimenterie."
        : "Lifting and positioning operation of a heavy industrial separator at the cement plant.",
      highlights: language === 'fr'
        ? ['Équipements lourds', 'Grue haute capacité', 'Précision millimétrique', 'Sécurité maximale']
        : ['Heavy equipment', 'High-capacity crane', 'Millimeter precision', 'Maximum safety'],
    },
    {
      id: 4,
      src: galleryWelding1,
      title: language === 'fr' 
        ? "Travaux de Soudure Industrielle" 
        : "Industrial Welding Work",
      location: 'Site industriel, Cotonou',
      date: '2026',
      category: language === 'fr' ? 'Soudure' : 'Welding',
      description: language === 'fr'
        ? "Travaux de soudure de haute précision sur des structures métalliques et tuyauteries industrielles."
        : "High-precision welding work on metal structures and industrial piping.",
      highlights: language === 'fr'
        ? ['Soudeurs certifiés', 'Haute précision', 'Normes internationales', 'Contrôle qualité']
        : ['Certified welders', 'High precision', 'International standards', 'Quality control'],
    },
    {
      id: 5,
      src: galleryIndustrial1,
      title: language === 'fr' 
        ? "Transport d'Équipements Industriels" 
        : "Industrial Equipment Transport",
      location: 'Zone Industrielle',
      date: '2026',
      category: language === 'fr' ? 'Logistique' : 'Logistics',
      description: language === 'fr'
        ? "Transport et livraison de cuves et équipements industriels lourds sur site."
        : "Transport and delivery of heavy industrial tanks and equipment on site.",
      highlights: language === 'fr'
        ? ['Transport sécurisé', 'Équipements spéciaux', 'Logistique optimisée', 'Livraison ponctuelle']
        : ['Safe transport', 'Special equipment', 'Optimized logistics', 'Punctual delivery'],
    },
    {
      id: 6,
      src: galleryEquipment1,
      title: language === 'fr' 
        ? "Installation de Broyeur Industriel" 
        : "Industrial Crusher Installation",
      location: 'Cimenterie, Bénin',
      date: '2026',
      category: language === 'fr' ? 'Installation' : 'Installation',
      description: language === 'fr'
        ? "Installation et positionnement d'un broyeur industriel de grande capacité."
        : "Installation and positioning of a large capacity industrial crusher.",
      highlights: language === 'fr'
        ? ['Équipement lourd', 'Installation précise', 'Chaînes de levage', 'Expertise technique']
        : ['Heavy equipment', 'Precise installation', 'Lifting chains', 'Technical expertise'],
    },
    {
      id: 7,
      src: galleryEquipment2,
      title: language === 'fr' 
        ? "Montage de Moteurs Industriels" 
        : "Industrial Motor Assembly",
      location: 'Site industriel',
      date: '2026',
      category: language === 'fr' ? 'Montage' : 'Assembly',
      description: language === 'fr'
        ? "Assemblage et installation de moteurs industriels haute performance."
        : "Assembly and installation of high-performance industrial motors.",
      highlights: language === 'fr'
        ? ['Moteurs puissants', 'Assemblage expert', 'Tests de fonctionnement', 'Mise en service']
        : ['Powerful motors', 'Expert assembly', 'Performance tests', 'Commissioning'],
    },
    {
      id: 8,
      src: galleryEquipment3,
      title: language === 'fr' 
        ? "Manutention de Cuves" 
        : "Tank Handling",
      location: 'Zone Portuaire',
      date: '2026',
      category: language === 'fr' ? 'Manutention' : 'Handling',
      description: language === 'fr'
        ? "Opérations de manutention et positionnement de cuves industrielles."
        : "Handling and positioning operations of industrial tanks.",
      highlights: language === 'fr'
        ? ['Cuves de grande capacité', 'Équipe expérimentée', 'Sécurité renforcée', 'Précision']
        : ['Large capacity tanks', 'Experienced team', 'Enhanced safety', 'Precision'],
    },
    {
      id: 9,
      src: galleryTeam1,
      title: language === 'fr' 
        ? "L'Équipe NOCOMETAB BTP" 
        : "NOCOMETAB BTP Team",
      location: 'Cotonou, Bénin',
      date: '2026',
      category: language === 'fr' ? 'Équipe' : 'Team',
      description: language === 'fr'
        ? "Notre équipe de professionnels qualifiés sur un chantier industriel."
        : "Our team of qualified professionals on an industrial site.",
      highlights: language === 'fr'
        ? ['Équipe soudée', 'Expertise reconnue', 'Formation continue', 'Professionnalisme']
        : ['United team', 'Recognized expertise', 'Continuous training', 'Professionalism'],
    },
    {
      id: 10,
      src: galleryEquipment4,
      title: language === 'fr' 
        ? "Inspection d'Équipements" 
        : "Equipment Inspection",
      location: 'Atelier NOCOMETAB',
      date: '2026',
      category: language === 'fr' ? 'Contrôle' : 'Control',
      description: language === 'fr'
        ? "Inspection et contrôle qualité des équipements avant installation."
        : "Inspection and quality control of equipment before installation.",
      highlights: language === 'fr'
        ? ['Contrôle rigoureux', 'Standards élevés', 'Documentation complète', 'Traçabilité']
        : ['Rigorous control', 'High standards', 'Complete documentation', 'Traceability'],
    },
    {
      id: 11,
      src: heroImage1,
      title: language === 'fr' 
        ? "Équipe NOCOMETAB BTP en action" 
        : "NOCOMETAB BTP Team in Action",
      location: 'Cotonou, Bénin',
      date: '2024',
      category: language === 'fr' ? 'Équipe' : 'Team',
      description: language === 'fr'
        ? "Notre équipe de professionnels qualifiés travaillant sur un chantier de construction métallique."
        : "Our team of qualified professionals working on a metal construction site.",
      highlights: language === 'fr'
        ? ['Équipe qualifiée', 'Soudeurs certifiés', 'Formation continue', 'Sécurité prioritaire']
        : ['Qualified team', 'Certified welders', 'Continuous training', 'Safety priority'],
    },
    {
      id: 12,
      src: heroImage2,
      title: language === 'fr' 
        ? "Construction de Hangar Industriel" 
        : "Industrial Warehouse Construction",
      location: 'Porto-Novo',
      date: '2024',
      category: language === 'fr' ? 'Hangar' : 'Warehouse',
      description: language === 'fr'
        ? "Montage d'un hangar industriel de grande portée avec charpente métallique."
        : "Assembly of a large-span industrial warehouse with metal framework.",
      highlights: language === 'fr'
        ? ['Grande portée', 'Sans poteau central', 'Optimisation espace', 'Polyvalent']
        : ['Large span', 'No central column', 'Space optimization', 'Versatile'],
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
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <PageHeader
        titleFr="Notre Galerie"
        titleEn="Our Gallery"
        subtitleFr="Découvrez nos réalisations en construction métallique à travers le Bénin"
        subtitleEn="Discover our metal construction achievements across Benin"
        backgroundImage={heroImage3}
      />

      <div className="container mx-auto px-4 py-16">
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <Card
              key={image.id}
              className={`overflow-hidden hover:shadow-elevated transition-all duration-500 animate-fade-in-up border-2 hover:border-primary/50 cursor-pointer group ${
                expandedCard === image.id ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
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
  );
};

export default GalleryPage;
