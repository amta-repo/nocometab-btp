import { useEffect, useRef, useState } from 'react';
import { Quote, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

interface Testimonial {
  company: string;
  quote: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    company: 'CIMBENIN S.A.',
    quote:
      "Nous avons confié à SOCIETE NOCOMETAB BTP plusieurs travaux techniques, notamment la fabrication d’un ballon d’air avec mise à l’épreuve, le raccordement du circuit d’air de l’ensacheuse, la réalisation d’un tank à gasoil de 20 000 litres ainsi que la réfection de notre hangar d’ensachage. L’ensemble des prestations a été réalisé avec sérieux, professionnalisme et dans le respect des exigences techniques. Nous sommes pleinement satisfaits de la qualité des travaux exécutés et recommandons vivement SOCIETE NOCOMETAB BTP pour tout projet similaire.",
    author: 'Ann-Kristin Askegren',
    role: 'Directeur Technique, CIMBENIN S.A.',
  },
  {
    company: 'Paroisse Saint Louis de Gbèdègbè',
    quote:
      "Nous avons fait appel à SOCIETE NOCOMETAB BTP pour la réalisation de plusieurs travaux au sein de notre paroisse, notamment la fabrication et le montage de la charpente métallique de la toiture de l’église, la fourniture et la pose de tôles bac-alu, ainsi que la fabrication et l’installation des troncs de quête. Les travaux ont été exécutés dans le respect des normes techniques, avec sérieux et professionnalisme. Nous avons particulièrement apprécié la qualité des finitions ainsi que le respect des engagements pris. Nous exprimons notre entière satisfaction et recommandons vivement SOCIETE NOCOMETAB BTP pour tout projet de construction métallique et travaux similaires.",
    author: 'Père Akenonne Ponce',
    role: 'Curé émérite, Paroisse Saint Louis de Gbèdègbè',
  },
  {
    company: 'CIMBENIN S.A.',
    quote:
      "Nous avons confié à SOCIETE NOCOMETAB BTP des travaux de chaudronnerie, notamment la fabrication d’un ballon d’air avec mise à l’épreuve, le raccordement du circuit d’air de notre ensacheuse ainsi que la réalisation d’un tank à gasoil de 10 000 litres. L’ensemble des prestations a été exécuté dans les règles de l’art, avec rigueur et professionnalisme. Nous sommes satisfaits de la qualité des travaux réalisés et recommandons SOCIETE NOCOMETAB BTP pour tout projet similaire.",
    author: 'Ann-Kristin Askegren',
    role: 'Directeur Technique, CIMBENIN S.A.',
  },
  {
    company: 'Communauté Électrique du Bénin (CEB)',
    quote:
      "Nous avons confié à SOCIETE NOCOMETAB BTP la réalisation de plusieurs travaux d’envergure, notamment des travaux de génie civil, de peinture et de toiture, ainsi que des opérations techniques de démontage, montage et renforcement de pylônes. L’entreprise a également assuré la fourniture de matériaux métalliques conformes aux spécifications requises. L’ensemble des prestations, d’un montant global de 168 926 900 F CFA, a été exécuté dans les règles de l’art, avec rigueur et professionnalisme. Nous sommes pleinement satisfaits de la qualité des travaux réalisés et recommandons SOCIETE NOCOMETAB BTP pour tout projet de construction et d’infrastructures techniques.",
    author: 'Agbénowossi Tsogbé',
    role: 'Chef de Division Régionale, Communauté Électrique du Bénin (CEB)',
  },
  {
    company: 'CIMBENIN S.A. (HeidelbergCement)',
    quote:
      "Nous avons confié à SOCIETE NOCOMETAB BTP la réalisation de plusieurs travaux au sein de notre site industriel, notamment la construction d’infrastructures (salles de classes, bureau, magasin et sanitaires), la mise en place d’un hangar métallique pour le parking des chargeuses, ainsi que l’aménagement et le pavage de la voie d’accès à CIMBENIN. L’entreprise est également intervenue sur des travaux techniques de montage mécanique, exécutés avec rigueur et maîtrise. L’ensemble des prestations a été réalisé avec professionnalisme, dans le respect des exigences de qualité et des délais. Nous sommes pleinement satisfaits des résultats obtenus et recommandons SOCIETE NOCOMETAB BTP pour tout projet de construction et d’ouvrages industriels.",
    author: 'Alfonso Velez',
    role: 'Directeur Général, CIMBENIN S.A. (HeidelbergCement)',
  },
  {
    company: 'CIMBENIN S.A. – Groupe HeidelbergCement',
    quote:
      "Dans le cadre de la construction du bâtiment dénommé « maison de l’ouvrier » destiné aux travailleurs de CIMBENIN, SOCIETE NOCOMETAB BTP a une nouvelle fois démontré un savoir-faire remarquable. Nous avons particulièrement apprécié la qualité d’exécution ainsi que le professionnalisme dont l’entreprise a fait preuve tout au long du projet. Nous adressons nos félicitations à SOCIETE NOCOMETAB BTP et lui souhaitons plein succès dans la poursuite de ses activités.",
    author: 'Alfonso Rodriguez',
    role: 'Directeur Général, CIMBENIN S.A. – Groupe HeidelbergCement',
  },
  {
    company: 'MR International – Énergie et Télécommunications (MRI SA)',
    quote:
      "Dans le cadre de l’aménagement de la salle technique de la direction d’ETISALAT Bénin, nous avons confié à NOCOMETAB – JUNIOR, en sous-traitance, la réalisation de plusieurs travaux techniques, notamment la fabrication d’une cuve de 5 000 litres avec barémage, son transport et sa mise en place, le prolongement de l’échappement ainsi que la connexion au réservoir de deux groupes. L’ensemble des prestations a été exécuté dans les règles de l’art, avec rigueur et professionnalisme. Nous sommes satisfaits de la qualité des travaux réalisés et recommandons NOCOMETAB pour tout projet technique similaire.",
    author: 'Maurice Thomas',
    role: 'Administrateur Général, Groupe MRI SA',
  },
];

const TestimonialsCarousel = () => {
  const { language } = useLanguage();
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 2000);
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, []);

  const pause = () => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
  };
  const resume = () => {
    intervalRef.current = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 2000);
  };

  return (
    <section className="py-16 md:py-20 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center mb-8 md:mb-12 animate-fade-in">
          <div className="inline-block px-3 py-1 mb-3 bg-primary/10 rounded-full">
            <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider">
              {language === 'fr' ? 'Témoignages Clients' : 'Client Testimonials'}
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground">
            {language === 'fr'
              ? 'Ce que nos partenaires disent de nous'
              : 'What our partners say about us'}
          </h2>
        </div>

        <div
          className="relative overflow-hidden"
          onMouseEnter={pause}
          onMouseLeave={resume}
          onTouchStart={pause}
          onTouchEnd={resume}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((tst, i) => (
              <div key={i} className="w-full flex-shrink-0 px-2 md:px-4">
                <Card className="mx-auto max-w-3xl shadow-elevated border border-accent/20 bg-card">
                  <CardContent className="py-8 md:py-10 px-5 md:px-10 text-left relative">
                    <Quote className="absolute top-4 right-4 md:top-6 md:right-6 h-10 w-10 md:h-14 md:w-14 text-primary/15" />
                    <div className="flex items-center gap-1 mb-3">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} className="h-4 w-4 md:h-5 md:w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-primary font-semibold text-sm md:text-base mb-3">
                      {tst.company}
                    </p>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed italic mb-5 md:mb-6">
                      “{tst.quote}”
                    </p>
                    <div className="border-t border-border pt-4">
                      <p className="font-bold text-foreground text-sm md:text-base">{tst.author}</p>
                      <p className="text-xs md:text-sm text-muted-foreground">{tst.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === i ? 'bg-primary w-8' : 'bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
