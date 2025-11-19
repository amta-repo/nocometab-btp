import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface Translations {
  [key: string]: {
    fr: string;
    en: string;
  };
}

export const translations: Translations = {
  // Navigation
  'nav.home': { fr: 'Accueil', en: 'Home' },
  'nav.about': { fr: 'À Propos', en: 'About' },
  'nav.services': { fr: 'Services', en: 'Services' },
  'nav.projects': { fr: 'Projets', en: 'Projects' },
  'nav.contact': { fr: 'Contact', en: 'Contact' },
  
  // Hero
  'hero.title': { fr: "L'Expertise Géomatique au Service du Territoire", en: 'Geomatics Expertise Serving Your Land' },
  'hero.subtitle': { fr: 'Précision, Fiabilité, et Innovation pour vos projets fonciers et topographiques.', en: 'Precision, Reliability, and Innovation for your land and surveying projects.' },
  'hero.cta.quote': { fr: 'Demandez un devis', en: 'Request a Quote' },
  'hero.cta.chat': { fr: 'Chattez avec un Expert Maintenant', en: 'Chat with an Expert Now' },
  
  // Trust badges
  'trust.member': { fr: "Membre de l'Ordre des Géomètres-Experts", en: 'Member of the Order of Expert Surveyors' },
  'trust.experience': { fr: "+10 ans d'expérience", en: '+10 Years Experience' },
  'trust.projects': { fr: '100+ projets réussis', en: '100+ Successful Projects' },
  
  // About
  'about.title': { fr: 'À Propos de Nous', en: 'About Us' },
  'about.mission': { fr: 'Notre mission : garantir la précision qui bâtit la confiance.', en: 'Our mission: ensuring precision that builds trust.' },
  'about.description': { fr: "Cabinet Ozone Conseil est un Cabinet Géomètre-Expert basé à Godomey, Bénin. Avec plus de 10 ans d'expertise en géomatique, nous offrons des solutions complètes en topographie, cartographie, bornage et aménagement du territoire.", en: 'Cabinet Ozone Conseil is an Expert Surveying firm based in Godomey, Benin. With over 10 years of expertise in geomatics, we offer comprehensive solutions in surveying, mapping, land delimitation, and spatial planning.' },
  'about.values': { fr: 'Nos Valeurs', en: 'Our Values' },
  'about.value.integrity': { fr: 'Intégrité', en: 'Integrity' },
  'about.value.accuracy': { fr: 'Précision', en: 'Accuracy' },
  'about.value.innovation': { fr: 'Innovation', en: 'Innovation' },
  'about.value.sustainability': { fr: 'Durabilité', en: 'Sustainability' },
  
  // Services
  'services.title': { fr: 'Nos Services', en: 'Our Services' },
  'services.subtitle': { fr: 'Des solutions géomatiques complètes adaptées à vos besoins', en: 'Comprehensive geomatics solutions tailored to your needs' },
  'services.learnmore': { fr: 'En savoir plus', en: 'Learn More' },
  
  'service.topo.title': { fr: 'Topographie & Cartographie', en: 'Surveying & Mapping' },
  'service.topo.desc': { fr: 'Relevés précis, cartographie numérique et modélisation de terrain.', en: 'Precise surveys, digital mapping and terrain modeling.' },
  
  'service.bornage.title': { fr: 'Bornage et Délimitation Foncière', en: 'Land Delimitation' },
  'service.bornage.desc': { fr: 'Délimitation légale des propriétés et mesures foncières certifiées.', en: 'Legal property boundaries and certified land measurements.' },
  
  'service.drone.title': { fr: 'Levés par Drone & Photogrammétrie', en: 'Drone Surveys & Photogrammetry' },
  'service.drone.desc': { fr: 'Solutions de cartographie aérienne modernes et précises.', en: 'Modern and accurate aerial mapping solutions.' },
  
  'service.urbanisme.title': { fr: 'Aménagement du Territoire & Urbanisme', en: 'Spatial Planning & Urbanism' },
  'service.urbanisme.desc': { fr: "Planification spatiale et études d'aménagement.", en: 'Spatial planning and development studies.' },
  
  'service.vrd.title': { fr: 'Études Techniques & VRD', en: 'Technical Studies & Civil Works' },
  'service.vrd.desc': { fr: "Infrastructures routières et réseaux divers.", en: 'Road infrastructure and utility networks.' },
  
  'service.conseil.title': { fr: 'Conseil & Expertise Foncière', en: 'Land Advisory & Expertise' },
  'service.conseil.desc': { fr: 'Conseil juridique, technique et stratégique en matière foncière.', en: 'Legal, technical and strategic land advisory services.' },
  
  // Achievements
  'achievements.title': { fr: 'Nos Réalisations', en: 'Our Achievements' },
  'achievements.hectares': { fr: '+500 hectares mesurés', en: '+500 Hectares Surveyed' },
  'achievements.communes': { fr: '20 communes desservies', en: '20 Municipalities Served' },
  'achievements.clients': { fr: '100+ clients satisfaits', en: '100+ Satisfied Clients' },
  'achievements.accuracy': { fr: '99.9% de précision', en: '99.9% Accuracy' },
  
  // Partners
  'partners.title': { fr: 'Nos Partenaires', en: 'Our Partners' },
  'partners.subtitle': { fr: 'Nous collaborons avec les meilleures entreprises', en: 'We collaborate with the best companies' },
  'partners.cta': { fr: 'Rejoignez notre réseau de partenaires', en: 'Join Our Partner Network' },
  
  // Testimonials
  'testimonials.title': { fr: 'Témoignages Clients', en: 'Client Testimonials' },
  
  // Contact
  'contact.title': { fr: 'Contactez-Nous', en: 'Contact Us' },
  'contact.subtitle': { fr: 'Discutons de votre projet', en: "Let's discuss your project" },
  'contact.form.name': { fr: 'Nom complet', en: 'Full Name' },
  'contact.form.email': { fr: 'Email', en: 'Email' },
  'contact.form.phone': { fr: 'Téléphone', en: 'Phone' },
  'contact.form.project': { fr: 'Type de Projet', en: 'Project Type' },
  'contact.form.message': { fr: 'Message', en: 'Message' },
  'contact.form.submit': { fr: 'Envoyer', en: 'Send' },
  'contact.address': { fr: 'Adresse', en: 'Address' },
  'contact.hours': { fr: "Heures d'ouverture", en: 'Business Hours' },
  'contact.hours.weekday': { fr: 'Lun - Ven: 8h00 - 17h00', en: 'Mon - Fri: 8:00 AM - 5:00 PM' },
  'contact.hours.saturday': { fr: 'Sam: 9h00 - 13h00', en: 'Sat: 9:00 AM - 1:00 PM' },
  
  // Footer
  'footer.about': { fr: 'À Propos', en: 'About' },
  'footer.description': { fr: 'Experts en géomatique et topographie au Bénin', en: 'Geomatics and surveying experts in Benin' },
  'footer.quicklinks': { fr: 'Liens Rapides', en: 'Quick Links' },
  'footer.rights': { fr: 'Tous droits réservés', en: 'All rights reserved' },
  
  // CTA
  'cta.callnow': { fr: 'Appelez Maintenant', en: 'Call Now' },
  'cta.whatsapp': { fr: 'WhatsApp', en: 'WhatsApp' },
  'cta.quoterequest': { fr: 'Demande de Devis', en: 'Quote Request' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
