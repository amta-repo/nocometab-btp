import { Building2, Construction, Ruler, Factory, Hammer, Wrench } from 'lucide-react';

export interface ServiceDetail {
  icon: any;
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  fullDescriptionFr: string;
  fullDescriptionEn: string;
  benefitsFr: string[];
  benefitsEn: string[];
  applicationsFr: string[];
  applicationsEn: string[];
  faqFr: { q: string; a: string }[];
  faqEn: { q: string; a: string }[];
  seoTitleFr: string;
  seoTitleEn: string;
  seoDescFr: string;
  seoDescEn: string;
}

export const serviceDetails: Record<string, ServiceDetail> = {
  structures: {
    icon: Building2,
    titleFr: 'Structures Métalliques',
    titleEn: 'Metal Structures',
    descriptionFr: 'Conception et fabrication de structures métalliques sur mesure pour bâtiments industriels et commerciaux.',
    descriptionEn: 'Design and fabrication of custom metal structures for industrial and commercial buildings.',
    fullDescriptionFr: "NOCOMETAB BTP est le spécialiste de la conception, fabrication et montage de structures métalliques au Bénin et en Afrique de l'Ouest. Nos ingénieurs réalisent des études techniques complètes et nos soudeurs certifiés utilisent des aciers de haute qualité pour garantir la solidité, la durabilité et la conformité de chaque ouvrage. Que ce soit pour un bâtiment industriel, un centre commercial ou un complexe agricole, nous livrons des structures prêtes à l'emploi dans les délais convenus.",
    fullDescriptionEn: "NOCOMETAB BTP is the specialist in the design, fabrication and assembly of metal structures in Benin and West Africa. Our engineers carry out complete technical studies and our certified welders use high-quality steels to guarantee the strength, durability and compliance of each structure. Whether for an industrial building, a shopping center or an agricultural complex, we deliver ready-to-use structures within agreed deadlines.",
    benefitsFr: [
      'Études techniques et calculs de dimensionnement',
      'Fabrication en atelier avec contrôle qualité',
      'Montage et assemblage sur site par équipes certifiées',
      'Traitement anticorrosion et peinture industrielle',
      'Certification de conformité structurelle',
      'Garantie décennale sur les ouvrages',
    ],
    benefitsEn: [
      'Technical studies and dimensioning calculations',
      'Workshop fabrication with quality control',
      'On-site assembly by certified teams',
      'Anti-corrosion treatment and industrial painting',
      'Structural compliance certification',
      'Ten-year warranty on structures',
    ],
    applicationsFr: ['Bâtiments industriels', 'Centres commerciaux', 'Complexes agricoles', 'Plateformes logistiques'],
    applicationsEn: ['Industrial buildings', 'Shopping centers', 'Agricultural complexes', 'Logistics platforms'],
    faqFr: [
      { q: 'Combien coûte une structure métallique au Bénin ?', a: "Le coût dépend de la surface, la complexité et les finitions. NOCOMETAB BTP offre des devis gratuits personnalisés. En moyenne, les structures métalliques coûtent 15 à 30 % moins cher que le béton pour des portées équivalentes. Contactez-nous au +229 01 95 95 47 63 pour une estimation." },
      { q: 'Quelle est la durée de vie d\'une structure métallique ?', a: "Avec un traitement anticorrosion approprié, une structure métallique NOCOMETAB BTP dure plus de 50 ans. Nous appliquons des peintures époxy et des galvanisations qui protègent l'acier contre la corrosion tropicale." },
      { q: 'Quels types d\'acier utilisez-vous ?', a: "Nous utilisons principalement des aciers S235, S275 et S355 conformes aux normes européennes. Le choix dépend des charges, de la portée et des conditions environnementales du projet." },
    ],
    faqEn: [
      { q: 'How much does a metal structure cost in Benin?', a: "The cost depends on surface area, complexity and finishes. NOCOMETAB BTP offers free personalized quotes. On average, metal structures cost 15-30% less than concrete for equivalent spans. Contact us at +229 01 95 95 47 63 for an estimate." },
      { q: 'What is the lifespan of a metal structure?', a: "With proper anti-corrosion treatment, a NOCOMETAB BTP metal structure lasts over 50 years. We apply epoxy paints and galvanizations that protect steel against tropical corrosion." },
      { q: 'What types of steel do you use?', a: "We primarily use S235, S275 and S355 steels that comply with European standards. The choice depends on loads, span and environmental conditions of the project." },
    ],
    seoTitleFr: 'Structures Métalliques au Bénin | NOCOMETAB BTP',
    seoTitleEn: 'Metal Structures in Benin | NOCOMETAB BTP',
    seoDescFr: "Conception, fabrication et montage de structures métalliques au Bénin. Bâtiments industriels, commerciaux et agricoles. Devis gratuit NOCOMETAB BTP.",
    seoDescEn: 'Design, fabrication and assembly of metal structures in Benin. Industrial, commercial and agricultural buildings. Free quote from NOCOMETAB BTP.',
  },
  charpentes: {
    icon: Construction,
    titleFr: 'Charpentes Métalliques',
    titleEn: 'Metal Frameworks',
    descriptionFr: 'Charpentes robustes et durables pour tous types de constructions.',
    descriptionEn: 'Robust and durable frameworks for all types of constructions.',
    fullDescriptionFr: "Les charpentes métalliques NOCOMETAB BTP sont conçues pour offrir une résistance maximale aux intempéries, aux charges et aux conditions climatiques tropicales. Notre bureau d'études réalise des calculs de dimensionnement précis et nos ateliers fabriquent des fermes, pannes et contreventements sur mesure. Nous assurons le montage complet avec nos grues et équipes spécialisées.",
    fullDescriptionEn: "NOCOMETAB BTP metal frameworks are designed to offer maximum resistance to weather, loads and tropical climatic conditions. Our design office carries out precise dimensioning calculations and our workshops manufacture custom trusses, purlins and bracing. We ensure complete assembly with our cranes and specialized teams.",
    benefitsFr: [
      'Charpentes industrielles grande portée (jusqu\'à 40m)',
      'Charpentes pour bâtiments commerciaux',
      'Fermes, pannes et contreventements sur mesure',
      'Traitement anticorrosion galvanisation à chaud',
      'Montage par équipes spécialisées avec grues',
      'Respect des normes de construction en vigueur',
    ],
    benefitsEn: [
      'Large-span industrial frameworks (up to 40m)',
      'Frameworks for commercial buildings',
      'Custom trusses, purlins and bracing',
      'Hot-dip galvanization anti-corrosion treatment',
      'Assembly by specialized teams with cranes',
      'Compliance with current construction standards',
    ],
    applicationsFr: ['Usines et industries', 'Supermarchés et centres commerciaux', 'Églises et salles polyvalentes', 'Bâtiments agricoles'],
    applicationsEn: ['Factories and industries', 'Supermarkets and shopping centers', 'Churches and multipurpose halls', 'Agricultural buildings'],
    faqFr: [
      { q: 'Quelle portée maximale pour une charpente métallique ?', a: "NOCOMETAB BTP réalise des charpentes métalliques avec des portées allant jusqu'à 40 mètres sans poteau intermédiaire. Pour des portées supérieures, nous proposons des solutions avec poutres treillis." },
      { q: 'Charpente métallique ou charpente bois : laquelle choisir ?', a: "La charpente métallique offre une meilleure résistance aux termites (problème majeur en Afrique), une plus grande portée, et une durée de vie supérieure. Elle est aussi plus rapide à monter et 100% recyclable." },
      { q: 'Combien de temps pour fabriquer et monter une charpente métallique ?', a: "En moyenne, la fabrication prend 2-4 semaines et le montage 1-2 semaines selon la complexité. NOCOMETAB BTP s'engage sur des délais précis dans chaque devis." },
    ],
    faqEn: [
      { q: 'What is the maximum span for a metal framework?', a: "NOCOMETAB BTP builds metal frameworks with spans up to 40 meters without intermediate columns. For larger spans, we offer lattice beam solutions." },
      { q: 'Metal framework or wood framework: which to choose?', a: "Metal frameworks offer better resistance to termites (a major problem in Africa), greater span, and a longer lifespan. They are also faster to assemble and 100% recyclable." },
      { q: 'How long to fabricate and assemble a metal framework?', a: "On average, fabrication takes 2-4 weeks and assembly 1-2 weeks depending on complexity. NOCOMETAB BTP commits to precise deadlines in each quote." },
    ],
    seoTitleFr: 'Charpentes Métalliques au Bénin | Fabrication & Montage | NOCOMETAB BTP',
    seoTitleEn: 'Metal Frameworks in Benin | Fabrication & Assembly | NOCOMETAB BTP',
    seoDescFr: "Fabrication et montage de charpentes métalliques au Bénin. Portées jusqu'à 40m. Traitement anticorrosion. Devis gratuit NOCOMETAB BTP ☎ +229 01 95 95 47 63",
    seoDescEn: 'Fabrication and assembly of metal frameworks in Benin. Spans up to 40m. Anti-corrosion treatment. Free quote from NOCOMETAB BTP.',
  },
  menuiserie: {
    icon: Ruler,
    titleFr: 'Menuiserie Métallique',
    titleEn: 'Metal Joinery',
    descriptionFr: 'Portes, fenêtres, garde-corps et tous travaux de menuiserie métallique.',
    descriptionEn: 'Doors, windows, railings and all metal joinery works.',
    fullDescriptionFr: "Notre atelier de menuiserie métallique fabrique sur mesure tous les ouvrages en acier et aluminium : portes, fenêtres, portails coulissants et battants, garde-corps, balustrades, escaliers droits et hélicoïdaux, pergolas et auvents. Chaque pièce est fabriquée avec précision dans notre atelier de Cotonou et installée par nos équipes qualifiées.",
    fullDescriptionEn: "Our metal joinery workshop custom manufactures all steel and aluminum works: doors, windows, sliding and swing gates, railings, balustrades, straight and spiral stairs, pergolas and canopies. Each piece is precision-manufactured in our Cotonou workshop and installed by our qualified teams.",
    benefitsFr: [
      'Portes et portails coulissants ou battants',
      'Fenêtres et baies vitrées en aluminium',
      'Garde-corps et balustrades design',
      'Escaliers métalliques droits et hélicoïdaux',
      'Pergolas, auvents et marquises',
      'Finitions peinture époxy ou thermolaquage',
    ],
    benefitsEn: [
      'Sliding or swing doors and gates',
      'Aluminum windows and bay windows',
      'Designer railings and balustrades',
      'Straight and spiral metal stairs',
      'Pergolas, canopies and marquees',
      'Epoxy paint or powder coating finishes',
    ],
    applicationsFr: ['Résidences et villas', 'Immeubles de bureaux', 'Hôtels et restaurants', 'Bâtiments publics'],
    applicationsEn: ['Residences and villas', 'Office buildings', 'Hotels and restaurants', 'Public buildings'],
    faqFr: [
      { q: 'Quel type de portail métallique choisir ?', a: "Le choix dépend de votre espace et budget. Un portail coulissant est idéal pour les espaces restreints, tandis qu'un portail battant convient aux grandes entrées. NOCOMETAB BTP vous conseille et fabrique sur mesure." },
      { q: 'La menuiserie métallique résiste-t-elle au climat tropical ?', a: "Oui, nos ouvrages sont traités avec des peintures époxy et thermolaqués pour résister à l'humidité, la chaleur et la salinité du climat tropical béninois. Garantie anticorrosion incluse." },
    ],
    faqEn: [
      { q: 'What type of metal gate should I choose?', a: "The choice depends on your space and budget. A sliding gate is ideal for restricted spaces, while a swing gate suits large entrances. NOCOMETAB BTP advises and custom manufactures." },
      { q: 'Does metal joinery withstand tropical climate?', a: "Yes, our works are treated with epoxy paints and powder-coated to resist humidity, heat and salinity of the Beninese tropical climate. Anti-corrosion warranty included." },
    ],
    seoTitleFr: 'Menuiserie Métallique Cotonou | Portes, Fenêtres, Portails | NOCOMETAB BTP',
    seoTitleEn: 'Metal Joinery Cotonou | Doors, Windows, Gates | NOCOMETAB BTP',
    seoDescFr: 'Fabrication menuiserie métallique à Cotonou: portes, fenêtres, portails, garde-corps, escaliers. Sur mesure. NOCOMETAB BTP ☎ +229 01 95 95 47 63',
    seoDescEn: 'Metal joinery fabrication in Cotonou: doors, windows, gates, railings, stairs. Custom made. NOCOMETAB BTP.',
  },
  hangars: {
    icon: Factory,
    titleFr: 'Hangars & Entrepôts',
    titleEn: 'Warehouses & Storage',
    descriptionFr: "Construction de hangars industriels et entrepôts métalliques.",
    descriptionEn: 'Construction of industrial warehouses and metal storage facilities.',
    fullDescriptionFr: "NOCOMETAB BTP conçoit et construit des hangars industriels et entrepôts métalliques de grande portée adaptés aux besoins de stockage, de production et de logistique en Afrique de l'Ouest. Nos solutions clé en main incluent les études de sol, la conception structurelle, la fabrication, le montage et les finitions. Nous avons réalisé des hangars allant de 500 m² à plus de 5 000 m² pour des industries, des ports et des zones franches.",
    fullDescriptionEn: "NOCOMETAB BTP designs and builds large-span industrial warehouses and metal storage facilities adapted to storage, production and logistics needs in West Africa. Our turnkey solutions include soil studies, structural design, fabrication, assembly and finishes. We have completed warehouses from 500 m² to over 5,000 m² for industries, ports and free trade zones.",
    benefitsFr: [
      'Hangars industriels grande portée (jusqu\'à 50m)',
      'Entrepôts de stockage avec quais de chargement',
      'Ateliers de production modulables',
      'Structures agricoles (silos, séchoirs)',
      'Solutions clé en main avec fondations',
      'Ventilation et éclairage naturel intégrés',
    ],
    benefitsEn: [
      'Large-span industrial warehouses (up to 50m)',
      'Storage facilities with loading docks',
      'Modular production workshops',
      'Agricultural structures (silos, dryers)',
      'Turnkey solutions with foundations',
      'Integrated natural ventilation and lighting',
    ],
    applicationsFr: ['Zones industrielles', 'Ports et zones franches', 'Agro-industrie', 'Logistique et transport'],
    applicationsEn: ['Industrial zones', 'Ports and free trade zones', 'Agro-industry', 'Logistics and transport'],
    faqFr: [
      { q: 'Quel est le prix d\'un hangar métallique au Bénin ?', a: "Le prix varie selon la surface, la hauteur et les équipements. NOCOMETAB BTP offre des devis gratuits. Un hangar basique de 500 m² commence à partir de 15 millions FCFA. Contactez-nous pour une estimation précise." },
      { q: 'Peut-on agrandir un hangar métallique existant ?', a: "Oui, l'un des avantages majeurs de la construction métallique est sa modularité. NOCOMETAB BTP peut agrandir votre hangar existant en ajoutant des travées supplémentaires." },
    ],
    faqEn: [
      { q: 'What is the price of a metal warehouse in Benin?', a: "The price varies by surface area, height and equipment. NOCOMETAB BTP offers free quotes. A basic 500 m² warehouse starts from 15 million FCFA. Contact us for a precise estimate." },
      { q: 'Can an existing metal warehouse be expanded?', a: "Yes, one of the major advantages of metal construction is its modularity. NOCOMETAB BTP can expand your existing warehouse by adding extra bays." },
    ],
    seoTitleFr: 'Hangars Industriels & Entrepôts au Bénin | Construction Métallique | NOCOMETAB BTP',
    seoTitleEn: 'Industrial Warehouses & Storage in Benin | Metal Construction | NOCOMETAB BTP',
    seoDescFr: "Construction de hangars industriels et entrepôts métalliques au Bénin. Portées jusqu'à 50m. Solutions clé en main. NOCOMETAB BTP ☎ +229 01 95 95 47 63",
    seoDescEn: 'Construction of industrial warehouses and metal storage in Benin. Spans up to 50m. Turnkey solutions. NOCOMETAB BTP.',
  },
  toiture: {
    icon: Hammer,
    titleFr: 'Toiture & Couverture',
    titleEn: 'Roofing & Coverage',
    descriptionFr: "Installation de toitures métalliques et systèmes de couverture.",
    descriptionEn: 'Installation of metal roofing and coverage systems.',
    fullDescriptionFr: "NOCOMETAB BTP installe des systèmes de couverture métallique performants pour tous types de bâtiments : bac acier, tôles ondulées, panneaux sandwich isolants, et systèmes de gouttières. Nous assurons l'étanchéité, l'isolation thermique et acoustique de vos toitures pour un confort optimal même sous le climat tropical africain.",
    fullDescriptionEn: "NOCOMETAB BTP installs high-performance metal roofing systems for all types of buildings: steel decking, corrugated sheets, insulated sandwich panels, and gutter systems. We ensure waterproofing, thermal and acoustic insulation of your roofs for optimal comfort even in the African tropical climate.",
    benefitsFr: [
      'Bac acier et tôles ondulées',
      'Panneaux sandwich isolants thermiques',
      'Systèmes de gouttières et descentes d\'eau',
      'Isolation thermique et acoustique',
      'Étanchéité garantie contre les intempéries',
      'Pose rapide par équipes expérimentées',
    ],
    benefitsEn: [
      'Steel decking and corrugated sheets',
      'Thermal insulating sandwich panels',
      'Gutter and downspout systems',
      'Thermal and acoustic insulation',
      'Waterproofing guaranteed against weather',
      'Quick installation by experienced teams',
    ],
    applicationsFr: ['Bâtiments industriels', 'Résidences et villas', 'Bâtiments commerciaux', 'Bâtiments publics'],
    applicationsEn: ['Industrial buildings', 'Residences and villas', 'Commercial buildings', 'Public buildings'],
    faqFr: [
      { q: 'Quelle toiture métallique choisir pour le climat tropical ?', a: "Pour le climat tropical, nous recommandons les panneaux sandwich avec isolant polyuréthane qui réduisent la chaleur de 40%. Les tôles prélaquées résistent mieux à la corrosion saline. NOCOMETAB BTP vous conseille selon votre budget." },
      { q: 'Combien de temps dure une toiture métallique ?', a: "Une toiture métallique bien posée et entretenue dure 25 à 50 ans. Les tôles galvanisées NOCOMETAB BTP bénéficient d'un traitement anticorrosion prolongeant leur durée de vie." },
    ],
    faqEn: [
      { q: 'Which metal roofing to choose for tropical climate?', a: "For tropical climate, we recommend sandwich panels with polyurethane insulation that reduce heat by 40%. Pre-painted sheets better resist saline corrosion. NOCOMETAB BTP advises based on your budget." },
      { q: 'How long does a metal roof last?', a: "A well-installed and maintained metal roof lasts 25-50 years. NOCOMETAB BTP galvanized sheets benefit from anti-corrosion treatment extending their lifespan." },
    ],
    seoTitleFr: 'Toiture Métallique au Bénin | Bac Acier & Panneaux Sandwich | NOCOMETAB BTP',
    seoTitleEn: 'Metal Roofing in Benin | Steel Decking & Sandwich Panels | NOCOMETAB BTP',
    seoDescFr: 'Installation toiture métallique au Bénin: bac acier, tôles, panneaux sandwich. Étanchéité garantie. NOCOMETAB BTP ☎ +229 01 95 95 47 63',
    seoDescEn: 'Metal roofing installation in Benin: steel decking, sheets, sandwich panels. Guaranteed waterproofing. NOCOMETAB BTP.',
  },
  renovation: {
    icon: Wrench,
    titleFr: 'Aménagement & Rénovation',
    titleEn: 'Renovation & Refurbishment',
    descriptionFr: 'Rénovation et aménagement de structures métalliques existantes.',
    descriptionEn: 'Renovation and refurbishment of existing metal structures.',
    fullDescriptionFr: "NOCOMETAB BTP propose des services complets de rénovation et renforcement de structures métalliques existantes. Nous réalisons des diagnostics structurels, identifions les faiblesses et proposons des solutions de renforcement, réhabilitation ou extension. Nos interventions prolongent la durée de vie de vos installations et les mettent aux normes actuelles.",
    fullDescriptionEn: "NOCOMETAB BTP offers complete renovation and reinforcement services for existing metal structures. We carry out structural diagnostics, identify weaknesses and propose reinforcement, rehabilitation or extension solutions. Our interventions extend the lifespan of your facilities and bring them up to current standards.",
    benefitsFr: [
      'Diagnostic structurel complet',
      'Renforcement de structures existantes',
      'Réhabilitation et mise aux normes',
      'Extensions et agrandissements',
      'Remplacement de couverture vétuste',
      'Traitement anticorrosion de rénovation',
    ],
    benefitsEn: [
      'Complete structural diagnosis',
      'Reinforcement of existing structures',
      'Rehabilitation and standards compliance',
      'Extensions and expansions',
      'Replacement of deteriorated roofing',
      'Renovation anti-corrosion treatment',
    ],
    applicationsFr: ['Usines vieillissantes', 'Bâtiments industriels anciens', 'Hangars endommagés', 'Structures corrodées'],
    applicationsEn: ['Aging factories', 'Old industrial buildings', 'Damaged warehouses', 'Corroded structures'],
    faqFr: [
      { q: 'Comment savoir si ma structure métallique a besoin de rénovation ?', a: "Les signes incluent : rouille visible, déformations, fissures dans les soudures, infiltrations d'eau. NOCOMETAB BTP offre des diagnostics gratuits pour évaluer l'état de votre structure et recommander les travaux nécessaires." },
      { q: 'Peut-on rénover une structure métallique sans arrêter l\'activité ?', a: "Dans la plupart des cas, oui. NOCOMETAB BTP planifie les travaux pour minimiser les perturbations. Nous travaillons par phases pour maintenir votre activité pendant la rénovation." },
    ],
    faqEn: [
      { q: 'How to know if my metal structure needs renovation?', a: "Signs include: visible rust, deformations, cracks in welds, water infiltration. NOCOMETAB BTP offers free diagnostics to assess your structure's condition and recommend necessary work." },
      { q: 'Can a metal structure be renovated without stopping operations?', a: "In most cases, yes. NOCOMETAB BTP plans work to minimize disruptions. We work in phases to maintain your operations during renovation." },
    ],
    seoTitleFr: 'Rénovation Structures Métalliques au Bénin | Diagnostic & Renforcement | NOCOMETAB BTP',
    seoTitleEn: 'Metal Structure Renovation in Benin | Diagnosis & Reinforcement | NOCOMETAB BTP',
    seoDescFr: 'Rénovation et renforcement de structures métalliques au Bénin. Diagnostic gratuit. NOCOMETAB BTP ☎ +229 01 95 95 47 63',
    seoDescEn: 'Renovation and reinforcement of metal structures in Benin. Free diagnosis. NOCOMETAB BTP.',
  },
};

export const serviceIds = Object.keys(serviceDetails);
