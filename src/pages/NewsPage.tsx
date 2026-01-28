import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, ArrowRight, X } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

import galleryEquipment1 from '@/assets/gallery-equipment-1.jpg';
import galleryEquipment2 from '@/assets/gallery-equipment-2.jpg';
import galleryEquipment3 from '@/assets/gallery-equipment-3.jpg';
import galleryTeam1 from '@/assets/gallery-team-1.jpg';
import galleryCrane1 from '@/assets/gallery-crane-1.jpg';
import galleryWelding1 from '@/assets/gallery-welding-1.jpg';
import heroImage2 from '@/assets/nocometab-hero-2.jpg';

const NewsPage = () => {
  const { language } = useLanguage();
  const [selectedNews, setSelectedNews] = useState<typeof newsItems[0] | null>(null);
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleExpand = (id: number) => {
    if (expandedCards.includes(id)) {
      setExpandedCards(expandedCards.filter(cardId => cardId !== id));
    } else {
      setExpandedCards([...expandedCards, id]);
    }
  };

  const newsItems = [
    {
      id: 1,
      image: galleryCrane1,
      title: language === 'fr' 
        ? "Montage de séparateur industriel à la cimenterie" 
        : "Industrial separator assembly at cement plant",
      date: '2026-01-25',
      category: language === 'fr' ? 'Projet en cours' : 'Ongoing Project',
      summary: language === 'fr'
        ? "NOCOMETAB BTP réalise actuellement le montage d'un séparateur industriel de grande envergure dans une cimenterie locale."
        : "NOCOMETAB BTP is currently carrying out the assembly of a large-scale industrial separator at a local cement plant.",
      fullContent: language === 'fr'
        ? `Notre équipe technique est mobilisée sur un projet majeur de montage d'un séparateur industriel pour une cimenterie partenaire. Ce projet implique:

• Levage et positionnement d'équipements lourds pesant plusieurs tonnes
• Coordination avec les équipes de la cimenterie pour assurer la sécurité
• Utilisation de grues de grande capacité pour le montage en hauteur
• Travaux de soudure et d'assemblage sur site

Ce projet démontre notre capacité à gérer des opérations industrielles complexes et notre expertise en manutention d'équipements lourds. La livraison est prévue dans les délais convenus avec notre client.`
        : `Our technical team is mobilized on a major project to assemble an industrial separator for a partner cement plant. This project involves:

• Lifting and positioning of heavy equipment weighing several tons
• Coordination with cement plant teams to ensure safety
• Use of high-capacity cranes for high-altitude assembly
• On-site welding and assembly work

This project demonstrates our ability to manage complex industrial operations and our expertise in heavy equipment handling. Delivery is expected within the agreed deadlines with our client.`,
    },
    {
      id: 2,
      image: galleryEquipment1,
      title: language === 'fr' 
        ? "Livraison d'équipements lourds pour chantier" 
        : "Heavy equipment delivery for construction site",
      date: '2026-01-20',
      category: language === 'fr' ? 'Logistique' : 'Logistics',
      summary: language === 'fr'
        ? "Réception et installation d'équipements industriels spécialisés pour nos projets de construction métallique."
        : "Reception and installation of specialized industrial equipment for our metal construction projects.",
      fullContent: language === 'fr'
        ? `NOCOMETAB BTP a récemment pris livraison d'équipements industriels de pointe pour renforcer nos capacités de production et de montage sur site.

Ces nouveaux équipements comprennent:
• Machines de découpe et pliage de métaux
• Équipements de levage haute performance
• Outillage spécialisé pour soudure industrielle

Cette modernisation de notre parc d'équipements nous permet d'offrir des prestations encore plus performantes à nos clients et de prendre en charge des projets de plus grande envergure.`
        : `NOCOMETAB BTP has recently taken delivery of state-of-the-art industrial equipment to strengthen our on-site production and assembly capabilities.

This new equipment includes:
• Metal cutting and bending machines
• High-performance lifting equipment
• Specialized tooling for industrial welding

This modernization of our equipment fleet allows us to offer even more efficient services to our clients and take on larger-scale projects.`,
    },
    {
      id: 3,
      image: galleryWelding1,
      title: language === 'fr' 
        ? "Travaux de soudure industrielle en cours" 
        : "Industrial welding work in progress",
      date: '2026-01-18',
      category: language === 'fr' ? 'Production' : 'Production',
      summary: language === 'fr'
        ? "Nos soudeurs certifiés réalisent des travaux de haute précision sur des structures métalliques complexes."
        : "Our certified welders perform high-precision work on complex metal structures.",
      fullContent: language === 'fr'
        ? `L'équipe de soudeurs certifiés de NOCOMETAB BTP est actuellement engagée dans des travaux de soudure industrielle de haute précision.

Ces travaux comprennent:
• Soudure de conduites et tuyauteries industrielles
• Assemblage de structures porteuses
• Réparation et renforcement d'équipements existants
• Tests de qualité et contrôles non destructifs

Nos soudeurs possèdent des certifications reconnues et suivent des formations continues pour maintenir les plus hauts standards de qualité.`
        : `The certified welding team at NOCOMETAB BTP is currently engaged in high-precision industrial welding work.

This work includes:
• Welding of industrial pipes and piping
• Assembly of load-bearing structures
• Repair and reinforcement of existing equipment
• Quality testing and non-destructive testing

Our welders hold recognized certifications and undergo continuous training to maintain the highest quality standards.`,
    },
    {
      id: 4,
      image: galleryEquipment2,
      title: language === 'fr' 
        ? "Installation d'équipements de production" 
        : "Production equipment installation",
      date: '2026-01-15',
      category: language === 'fr' ? 'Installation' : 'Installation',
      summary: language === 'fr'
        ? "Mise en place de nouveaux équipements de production dans notre atelier de fabrication."
        : "Setting up new production equipment in our manufacturing workshop.",
      fullContent: language === 'fr'
        ? `Notre atelier de fabrication s'enrichit de nouveaux équipements de production de dernière génération.

Ces installations comprennent:
• Machines de découpe plasma CNC
• Presses plieuses hydrauliques
• Équipements de traitement de surface
• Systèmes de contrôle qualité automatisés

Ces investissements témoignent de notre engagement constant à améliorer nos capacités de production et à offrir des produits de qualité supérieure à nos clients.`
        : `Our manufacturing workshop is enriched with new state-of-the-art production equipment.

These installations include:
• CNC plasma cutting machines
• Hydraulic press brakes
• Surface treatment equipment
• Automated quality control systems

These investments demonstrate our constant commitment to improving our production capabilities and offering superior quality products to our clients.`,
    },
    {
      id: 5,
      image: galleryTeam1,
      title: language === 'fr' 
        ? "L'équipe NOCOMETAB BTP sur le terrain" 
        : "NOCOMETAB BTP team in the field",
      date: '2026-01-10',
      category: language === 'fr' ? 'Équipe' : 'Team',
      summary: language === 'fr'
        ? "Notre équipe de professionnels qualifiés travaille avec dévouement sur chaque projet."
        : "Our team of qualified professionals works with dedication on every project.",
      fullContent: language === 'fr'
        ? `L'équipe NOCOMETAB BTP est composée de professionnels expérimentés et passionnés par leur métier.

Notre équipe comprend:
• Ingénieurs en construction métallique
• Soudeurs certifiés
• Techniciens de montage
• Chefs de projet expérimentés
• Personnel administratif dévoué

Ensemble, nous formons une équipe soudée capable de relever tous les défis de construction métallique. Notre force réside dans notre expertise collective et notre engagement envers l'excellence.`
        : `The NOCOMETAB BTP team is made up of experienced professionals passionate about their work.

Our team includes:
• Metal construction engineers
• Certified welders
• Assembly technicians
• Experienced project managers
• Dedicated administrative staff

Together, we form a united team capable of meeting all metal construction challenges. Our strength lies in our collective expertise and commitment to excellence.`,
    },
    {
      id: 6,
      image: galleryEquipment3,
      title: language === 'fr' 
        ? "Manutention de cuves industrielles" 
        : "Industrial tank handling",
      date: '2026-01-05',
      category: language === 'fr' ? 'Manutention' : 'Handling',
      summary: language === 'fr'
        ? "Opérations de manutention et de positionnement de cuves industrielles de grande capacité."
        : "Handling and positioning operations of large capacity industrial tanks.",
      fullContent: language === 'fr'
        ? `NOCOMETAB BTP a réalisé avec succès des opérations de manutention de cuves industrielles de grande capacité.

Ces opérations ont impliqué:
• Transport sécurisé de cuves de plusieurs mètres cubes
• Levage et positionnement avec équipements spécialisés
• Installation sur fondations préparées
• Raccordement aux systèmes existants

Notre expertise en manutention lourde nous permet de prendre en charge des équipements de toutes tailles en toute sécurité.`
        : `NOCOMETAB BTP has successfully completed handling operations of large capacity industrial tanks.

These operations involved:
• Safe transport of tanks of several cubic meters
• Lifting and positioning with specialized equipment
• Installation on prepared foundations
• Connection to existing systems

Our expertise in heavy handling allows us to handle equipment of all sizes safely.`,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <PageHeader
        titleFr="Actualités & Projets"
        titleEn="News & Projects"
        subtitleFr="Restez informé de nos derniers projets, réalisations et actualités"
        subtitleEn="Stay informed about our latest projects, achievements and news"
        backgroundImage={heroImage2}
      />

      <div className="container mx-auto px-4 py-16">
        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news, index) => (
            <Card
              key={news.id}
              className={`overflow-hidden hover:shadow-elevated transition-all duration-500 animate-fade-in-up border-2 hover:border-primary/50 ${
                expandedCards.includes(news.id) ? 'lg:col-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    {news.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>{new Date(news.date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                  {news.title}
                </h3>
                
                <p className={`text-muted-foreground leading-relaxed mb-4 ${
                  expandedCards.includes(news.id) ? '' : 'line-clamp-3'
                }`}>
                  {expandedCards.includes(news.id) ? news.fullContent : news.summary}
                </p>
                
                <div className="flex gap-2">
                  <Button
                    variant="link"
                    className="p-0 h-auto text-primary font-semibold"
                    onClick={() => toggleExpand(news.id)}
                  >
                    {expandedCards.includes(news.id) 
                      ? (language === 'fr' ? 'Voir moins' : 'See less')
                      : (language === 'fr' ? 'Voir plus' : 'See more')
                    }
                    <ArrowRight className={`ml-1 h-4 w-4 transition-transform ${
                      expandedCards.includes(news.id) ? 'rotate-90' : ''
                    }`} />
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    className="ml-auto"
                    onClick={() => setSelectedNews(news)}
                  >
                    {language === 'fr' ? 'Détails' : 'Details'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* News Detail Modal */}
      <Dialog open={!!selectedNews} onOpenChange={() => setSelectedNews(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogTitle className="sr-only">{selectedNews?.title}</DialogTitle>
          
          <div className="relative">
            <img
              src={selectedNews?.image}
              alt={selectedNews?.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                {selectedNews?.category}
              </span>
            </div>
          </div>
          
          <div className="mt-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <Calendar className="h-4 w-4 text-primary" />
              <span>
                {selectedNews && new Date(selectedNews.date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
            </div>
            
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {selectedNews?.title}
            </h2>
            
            <DialogDescription asChild>
              <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {selectedNews?.fullContent}
              </div>
            </DialogDescription>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NewsPage;
