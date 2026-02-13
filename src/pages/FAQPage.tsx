import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, ArrowRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import heroImage3 from '@/assets/nocometab-hero-3.jpg';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const FAQPage = () => {
  const { language, t } = useLanguage();

  const faqsFr: FAQ[] = [
    // Construction métallique générale
    { category: 'Construction Métallique', question: 'Qu\'est-ce que la construction métallique et quels sont ses avantages ?', answer: "La construction métallique utilise l'acier comme matériau principal pour créer des structures portantes. Ses avantages incluent : une résistance supérieure au béton pour un poids moindre, une rapidité de montage (2 à 3 fois plus rapide que le béton), une durée de vie de 50+ ans, une recyclabilité à 100%, et une grande flexibilité architecturale. NOCOMETAB BTP est le leader de la construction métallique au Bénin depuis plus de 15 ans." },
    { category: 'Construction Métallique', question: 'Pourquoi choisir l\'acier plutôt que le béton pour construire en Afrique ?', answer: "L'acier offre plusieurs avantages en Afrique : résistance aux termites (contrairement au bois), rapidité de construction malgré les saisons des pluies, portées plus grandes sans piliers intermédiaires, facilité de transport et montage même en zones éloignées, et possibilité d'extension future. NOCOMETAB BTP construit des structures métalliques dans tout le Bénin et l'Afrique de l'Ouest." },
    { category: 'Construction Métallique', question: 'Comment choisir une entreprise de construction métallique fiable au Bénin ?', answer: "Vérifiez l'expérience (minimum 10 ans), les réalisations passées (demandez des photos et références), les certifications des soudeurs, la qualité des matériaux utilisés (acier certifié), et les garanties offertes. NOCOMETAB BTP cumule plus de 15 ans d'expérience, 100+ clients satisfaits, et fournit des attestations de bonne fin pour chaque projet." },

    // Prix et devis
    { category: 'Prix & Devis', question: 'Combien coûte une construction métallique au Bénin en 2026 ?', answer: "Le prix varie selon le type d'ouvrage : charpente métallique simple à partir de 35 000 FCFA/m², hangar industriel de 45 000 à 80 000 FCFA/m², structure complète de 60 000 à 120 000 FCFA/m². Ces prix incluent études, fabrication et montage. NOCOMETAB BTP offre des devis gratuits et détaillés. Appelez le +229 95 95 47 63." },
    { category: 'Prix & Devis', question: 'Comment obtenir un devis gratuit pour mon projet de construction métallique ?', answer: "Contactez NOCOMETAB BTP par téléphone (+229 95 95 47 63), WhatsApp (+229 95 95 47 63), ou email (nocometabbtp@gmail.com). Décrivez votre projet (surface, type de bâtiment, localisation) et nous vous envoyons un devis détaillé sous 48h. Les visites de terrain sont gratuites à Cotonou et environs." },

    // Charpentes
    { category: 'Charpentes Métalliques', question: 'Quelle est la portée maximale d\'une charpente métallique sans poteau intermédiaire ?', answer: "Avec les techniques modernes, NOCOMETAB BTP réalise des charpentes métalliques avec des portées allant jusqu'à 40 mètres sans poteau intermédiaire. Pour des portées supérieures, nous utilisons des poutres treillis qui permettent d'atteindre 60 mètres et plus. Cela offre un espace libre maximal pour les usines, entrepôts et salles polyvalentes." },
    { category: 'Charpentes Métalliques', question: 'Charpente métallique ou charpente en bois : que choisir en Afrique de l\'Ouest ?', answer: "La charpente métallique est supérieure en Afrique de l'Ouest pour plusieurs raisons : immunité contre les termites (problème majeur avec le bois), durée de vie 3x supérieure, portées plus grandes, résistance au feu, recyclabilité. Le seul avantage du bois est son coût initial parfois inférieur, mais le coût total sur 30 ans favorise nettement le métal." },

    // Hangars
    { category: 'Hangars & Entrepôts', question: 'Combien de temps faut-il pour construire un hangar métallique ?', answer: "Un hangar métallique standard de 500 m² prend en moyenne 6-8 semaines (2-3 semaines d'études et fabrication, 2-3 semaines de fondations, 2 semaines de montage). NOCOMETAB BTP s'engage sur des délais précis et pénalités de retard dans chaque contrat. Les hangars plus grands de 2000+ m² prennent 3-4 mois." },
    { category: 'Hangars & Entrepôts', question: 'Peut-on construire un hangar métallique sans fondation en béton ?', answer: "Non, les fondations en béton sont indispensables pour ancrer la structure et répartir les charges. Cependant, les fondations d'un hangar métallique sont plus légères que celles d'un bâtiment en béton (platines boulonnées au lieu de murs porteurs), ce qui réduit le coût et le temps de construction." },

    // Toiture
    { category: 'Toiture Métallique', question: 'Comment isoler un bâtiment métallique contre la chaleur en climat tropical ?', answer: "Plusieurs solutions existent : panneaux sandwich avec isolant polyuréthane (réduction de 40% de la chaleur), faux-plafond avec laine de roche, double peau avec lame d'air ventilée, peinture réfléchissante sur les tôles. NOCOMETAB BTP recommande les panneaux sandwich pour le meilleur rapport qualité/prix en climat tropical." },
    { category: 'Toiture Métallique', question: 'Quelle épaisseur de tôle choisir pour une toiture métallique ?', answer: "L'épaisseur dépend de la portée et des charges : 0,4 mm pour les petites surfaces résidentielles, 0,5-0,6 mm pour les bâtiments commerciaux, 0,7-1,0 mm pour les bâtiments industriels. NOCOMETAB BTP utilise des tôles prélaquées galvanisées de haute qualité pour une durabilité maximale." },

    // Menuiserie
    { category: 'Menuiserie Métallique', question: 'Combien coûte un portail métallique coulissant au Bénin ?', answer: "Le prix d'un portail métallique coulissant dépend de la largeur et du design. En moyenne : portail simple à partir de 350 000 FCFA, portail design de 500 000 à 1 500 000 FCFA, portail motorisé à partir de 800 000 FCFA. NOCOMETAB BTP fabrique des portails sur mesure avec garantie anticorrosion." },

    // Entretien
    { category: 'Entretien & Rénovation', question: 'Comment entretenir une structure métallique pour éviter la corrosion ?', answer: "L'entretien préventif comprend : inspection visuelle annuelle, nettoyage des gouttières, retouche de peinture sur les zones abîmées, vérification des boulons et soudures, traitement anticorrosion tous les 5-7 ans. NOCOMETAB BTP propose des contrats de maintenance pour prolonger la durée de vie de vos ouvrages." },
    { category: 'Entretien & Rénovation', question: 'Ma structure métallique rouille : que faire ?', answer: "La rouille doit être traitée rapidement pour éviter l'affaiblissement structurel. NOCOMETAB BTP réalise des diagnostics gratuits : sablage des zones rouillées, application de peinture antirouille époxy, et couche de finition. Pour les cas graves, nous réalisons des renforcements par ajout de plaques ou remplacement d'éléments." },
  ];

  const faqsEn: FAQ[] = [
    { category: 'Metal Construction', question: 'What is metal construction and what are its advantages?', answer: "Metal construction uses steel as the primary material for load-bearing structures. Advantages include: superior strength-to-weight ratio vs concrete, faster assembly (2-3x faster than concrete), 50+ year lifespan, 100% recyclability, and architectural flexibility. NOCOMETAB BTP has been the leader in metal construction in Benin for over 15 years." },
    { category: 'Metal Construction', question: 'Why choose steel over concrete for building in Africa?', answer: "Steel offers several advantages in Africa: termite immunity (unlike wood), faster construction despite rainy seasons, larger spans without intermediate columns, easy transport to remote areas, and future expandability. NOCOMETAB BTP builds metal structures throughout Benin and West Africa." },
    { category: 'Metal Construction', question: 'How to choose a reliable metal construction company in Benin?', answer: "Check experience (minimum 10 years), past achievements (ask for photos and references), welder certifications, material quality (certified steel), and warranties. NOCOMETAB BTP has 15+ years experience, 100+ satisfied clients, and provides completion certificates for every project." },
    { category: 'Pricing & Quotes', question: 'How much does metal construction cost in Benin in 2026?', answer: "Prices vary by structure type: simple metal framework from 35,000 FCFA/m², industrial warehouse 45,000-80,000 FCFA/m², complete structure 60,000-120,000 FCFA/m². Prices include studies, fabrication and assembly. NOCOMETAB BTP offers free detailed quotes. Call +229 95 95 47 63." },
    { category: 'Pricing & Quotes', question: 'How to get a free quote for my metal construction project?', answer: "Contact NOCOMETAB BTP by phone (+229 95 95 47 63), WhatsApp (+229 95 95 47 63), or email (nocometabbtp@gmail.com). Describe your project (surface area, building type, location) and we'll send a detailed quote within 48 hours. Site visits are free in Cotonou and surroundings." },
    { category: 'Metal Frameworks', question: 'What is the maximum span for a metal framework without columns?', answer: "With modern techniques, NOCOMETAB BTP builds metal frameworks with spans up to 40 meters without intermediate columns. For larger spans, we use lattice beams reaching 60 meters and more, providing maximum free space for factories, warehouses and multipurpose halls." },
    { category: 'Metal Frameworks', question: 'Metal framework vs wood framework: which to choose in West Africa?', answer: "Metal frameworks are superior in West Africa: termite immunity (major issue with wood), 3x longer lifespan, larger spans, fire resistance, recyclability. Wood's only advantage is sometimes lower initial cost, but total cost over 30 years clearly favors metal." },
    { category: 'Warehouses & Storage', question: 'How long does it take to build a metal warehouse?', answer: "A standard 500 m² metal warehouse takes 6-8 weeks average (2-3 weeks studies and fabrication, 2-3 weeks foundations, 2 weeks assembly). NOCOMETAB BTP commits to precise deadlines with delay penalties in each contract. Larger 2000+ m² warehouses take 3-4 months." },
    { category: 'Metal Roofing', question: 'How to insulate a metal building against heat in tropical climate?', answer: "Solutions include: sandwich panels with polyurethane insulation (40% heat reduction), false ceiling with rock wool, double skin with ventilated air gap, reflective paint on sheets. NOCOMETAB BTP recommends sandwich panels for the best value in tropical climates." },
    { category: 'Metal Joinery', question: 'How much does a sliding metal gate cost in Benin?', answer: "Sliding metal gate prices depend on width and design. Average: simple gate from 350,000 FCFA, designer gate 500,000-1,500,000 FCFA, motorized gate from 800,000 FCFA. NOCOMETAB BTP manufactures custom gates with anti-corrosion warranty." },
    { category: 'Maintenance', question: 'How to maintain a metal structure to prevent corrosion?', answer: "Preventive maintenance includes: annual visual inspection, gutter cleaning, paint touch-ups on damaged areas, bolt and weld verification, anti-corrosion treatment every 5-7 years. NOCOMETAB BTP offers maintenance contracts to extend your structure's lifespan." },
    { category: 'Maintenance', question: 'My metal structure is rusting: what to do?', answer: "Rust must be treated quickly to prevent structural weakening. NOCOMETAB BTP provides free diagnostics: sandblasting rusted areas, epoxy anti-rust paint application, and finish coat. For severe cases, we reinforce with added plates or element replacement." },
  ];

  const faqs = language === 'fr' ? faqsFr : faqsEn;

  // Group by category
  const grouped = faqs.reduce<Record<string, FAQ[]>>((acc, faq) => {
    if (!acc[faq.category]) acc[faq.category] = [];
    acc[faq.category].push(faq);
    return acc;
  }, {});

  // JSON-LD structured data
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
    })),
  };

  useEffect(() => {
    document.title = language === 'fr'
      ? 'FAQ Construction Métallique Bénin | Questions & Réponses | NOCOMETAB BTP'
      : 'Metal Construction FAQ Benin | Questions & Answers | NOCOMETAB BTP';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', language === 'fr'
        ? "Réponses à toutes vos questions sur la construction métallique au Bénin : prix, délais, charpentes, hangars, toiture. Expert NOCOMETAB BTP."
        : "Answers to all your questions about metal construction in Benin: prices, deadlines, frameworks, warehouses, roofing. Expert NOCOMETAB BTP.");
    }
    return () => {
      document.title = 'NOCOMETAB BTP | N°1 Construction Métallique au Bénin';
    };
  }, [language]);

  return (
    <div className="min-h-screen bg-secondary/30">
      <PageHeader
        titleFr="Questions Fréquentes"
        titleEn="Frequently Asked Questions"
        subtitleFr="Tout ce que vous devez savoir sur la construction métallique au Bénin"
        subtitleEn="Everything you need to know about metal construction in Benin"
        backgroundImage={heroImage3}
      />

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Intro paragraph for SEO */}
          <div className="mb-10">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {language === 'fr'
                ? "Vous avez des questions sur la construction métallique au Bénin ? NOCOMETAB BTP, leader en charpentes métalliques, hangars industriels et structures acier en Afrique de l'Ouest, répond à toutes vos interrogations. Trouvez ci-dessous les réponses aux questions les plus posées par nos clients."
                : "Have questions about metal construction in Benin? NOCOMETAB BTP, leader in metal frameworks, industrial warehouses and steel structures in West Africa, answers all your questions. Find below answers to the most frequently asked questions by our clients."}
            </p>
          </div>

          {/* FAQ sections by category */}
          {Object.entries(grouped).map(([category, categoryFaqs]) => (
            <div key={category} className="mb-10">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-primary rounded-full" />
                {category}
              </h2>
              <Accordion type="single" collapsible className="space-y-2">
                {categoryFaqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`${category}-${index}`}
                    className="bg-background rounded-lg border px-4"
                  >
                    <AccordionTrigger className="text-left font-semibold text-foreground text-sm md:text-base">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}

          {/* CTA Section */}
          <Card className="bg-gradient-hero text-white shadow-elevated mt-12">
            <CardContent className="pt-8 pb-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                {language === 'fr'
                  ? 'Vous ne trouvez pas la réponse à votre question ?'
                  : "Can't find the answer to your question?"}
              </h3>
              <p className="mb-6 text-white/90">
                {language === 'fr'
                  ? 'Nos experts sont disponibles pour répondre à toutes vos questions et vous accompagner dans votre projet.'
                  : 'Our experts are available to answer all your questions and support you in your project.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="accent" size="lg">
                    {t('cta.quoterequest')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                  onClick={() => window.open('https://wa.me/+22995954763', '_blank')}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Internal links */}
          <div className="mt-10">
            <h3 className="text-xl font-bold text-foreground mb-4">
              {language === 'fr' ? 'Découvrez nos services' : 'Discover our services'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { path: '/services/structures', labelFr: 'Structures Métalliques', labelEn: 'Metal Structures' },
                { path: '/services/charpentes', labelFr: 'Charpentes Métalliques', labelEn: 'Metal Frameworks' },
                { path: '/services/menuiserie', labelFr: 'Menuiserie Métallique', labelEn: 'Metal Joinery' },
                { path: '/services/hangars', labelFr: 'Hangars & Entrepôts', labelEn: 'Warehouses & Storage' },
                { path: '/services/toiture', labelFr: 'Toiture & Couverture', labelEn: 'Roofing & Coverage' },
                { path: '/services/renovation', labelFr: 'Rénovation', labelEn: 'Renovation' },
              ].map(link => (
                <Link key={link.path} to={link.path}>
                  <Card className="hover:border-primary/50 transition-colors cursor-pointer h-full">
                    <CardContent className="pt-4 pb-4 flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">
                        {language === 'fr' ? link.labelFr : link.labelEn}
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
