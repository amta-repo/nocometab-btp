import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Award, Target, Users, TrendingUp, CheckCircle2, Building2, Shield } from 'lucide-react';

const AboutPage = () => {
  const { t } = useLanguage();

  const values = [
    { key: 'integrity', icon: Shield, color: 'text-blue-600' },
    { key: 'accuracy', icon: CheckCircle2, color: 'text-green-600' },
    { key: 'innovation', icon: TrendingUp, color: 'text-purple-600' },
    { key: 'sustainability', icon: Building2, color: 'text-emerald-600' },
  ];

  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('about.title')}
          </h1>
          <p className="text-2xl text-primary font-semibold mb-6 italic max-w-3xl mx-auto">
            {t('about.mission')}
          </p>
        </div>

        {/* Company Description */}
        <Card className="max-w-4xl mx-auto mb-16 shadow-elevated animate-scale-in">
          <CardContent className="pt-12 pb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t('about.description')}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('language') === 'fr'
                  ? "Forts de notre expérience et de nos équipements de pointe, nous accompagnons les particuliers, les entreprises et les institutions dans la réalisation de leurs projets fonciers, d'aménagement et d'infrastructure."
                  : 'With our experience and state-of-the-art equipment, we support individuals, companies and institutions in carrying out their land, development and infrastructure projects.'}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 animate-fade-in">
            {t('about.values')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={value.key}
                className="hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="h-16 w-16 rounded-full bg-gradient-hero flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {t(`about.value.${value.key}`)}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.key === 'integrity' &&
                      (t('language') === 'fr'
                        ? "Nous agissons avec transparence et éthique dans tous nos projets."
                        : 'We act with transparency and ethics in all our projects.')}
                    {value.key === 'accuracy' &&
                      (t('language') === 'fr'
                        ? 'La précision est au cœur de notre métier et de nos engagements.'
                        : 'Precision is at the heart of our profession and commitments.')}
                    {value.key === 'innovation' &&
                      (t('language') === 'fr'
                        ? "Nous utilisons les technologies les plus avancées du secteur."
                        : 'We use the most advanced technologies in the sector.')}
                    {value.key === 'sustainability' &&
                      (t('language') === 'fr'
                        ? 'Nous intégrons la durabilité dans nos solutions et conseils.'
                        : 'We integrate sustainability into our solutions and advice.')}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 animate-fade-in">
            {t('language') === 'fr' ? 'Pourquoi Nous Choisir ?' : 'Why Choose Us?'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: t('language') === 'fr' ? 'Expertise Certifiée' : 'Certified Expertise',
                desc:
                  t('language') === 'fr'
                    ? "Géomètres-experts qualifiés et membres de l'Ordre professionnel."
                    : 'Qualified expert surveyors and members of the professional Order.',
              },
              {
                icon: Target,
                title: t('language') === 'fr' ? 'Solutions Sur-Mesure' : 'Tailored Solutions',
                desc:
                  t('language') === 'fr'
                    ? 'Approche personnalisée adaptée à chaque projet et client.'
                    : 'Personalized approach adapted to each project and client.',
              },
              {
                icon: Users,
                title: t('language') === 'fr' ? 'Service Client' : 'Customer Service',
                desc:
                  t('language') === 'fr'
                    ? 'Accompagnement continu et conseil expert tout au long du projet.'
                    : 'Ongoing support and expert advice throughout the project.',
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-soft transition-shadow duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="pt-8 pb-8">
                  <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
