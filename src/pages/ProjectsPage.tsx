import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Calendar, Ruler, Building2, Users, TrendingUp } from 'lucide-react';

const ProjectsPage = () => {
  const { t } = useLanguage();

  const achievements = [
    { icon: Ruler, value: '+500', label: t('achievements.hectares'), color: 'text-blue-600' },
    { icon: Building2, value: '20', label: t('achievements.communes'), color: 'text-green-600' },
    { icon: Users, value: '100+', label: t('achievements.clients'), color: 'text-purple-600' },
    { icon: TrendingUp, value: '99.9%', label: t('achievements.accuracy'), color: 'text-amber-600' },
  ];

  const projects = [
    {
      title: t('language') === 'fr' ? 'Lotissement Résidentiel Akpakpa' : 'Akpakpa Residential Subdivision',
      location: 'Akpakpa, Cotonou',
      date: '2024',
      type: t('language') === 'fr' ? 'Bornage & Urbanisme' : 'Delimitation & Urbanism',
      description:
        t('language') === 'fr'
          ? "Aménagement et bornage d'un lotissement de 150 parcelles résidentielles avec études VRD complètes."
          : 'Development and delimitation of a 150-plot residential subdivision with complete civil works studies.',
      stats: [
        { label: t('language') === 'fr' ? 'Surface' : 'Area', value: '75 hectares' },
        { label: t('language') === 'fr' ? 'Parcelles' : 'Plots', value: '150' },
      ],
    },
    {
      title: t('language') === 'fr' ? 'Cartographie Drone - Zone Agricole' : 'Drone Mapping - Agricultural Zone',
      location: 'Abomey-Calavi',
      date: '2024',
      type: t('language') === 'fr' ? 'Levé par Drone' : 'Drone Survey',
      description:
        t('language') === 'fr'
          ? "Cartographie aérienne par drone d'une vaste zone agricole pour optimisation de l'irrigation."
          : 'Aerial drone mapping of a large agricultural area for irrigation optimization.',
      stats: [
        { label: t('language') === 'fr' ? 'Surface' : 'Area', value: '200 hectares' },
        { label: t('language') === 'fr' ? 'Résolution' : 'Resolution', value: '2 cm/pixel' },
      ],
    },
    {
      title: t('language') === 'fr' ? 'Infrastructure Routière - RN2' : 'Road Infrastructure - RN2',
      location: 'Porto-Novo - Cotonou',
      date: '2023',
      type: t('language') === 'fr' ? 'Topographie & VRD' : 'Surveying & Civil Works',
      description:
        t('language') === 'fr'
          ? "Levés topographiques et études techniques pour la réhabilitation d'un tronçon routier de 25 km."
          : 'Topographic surveys and technical studies for the rehabilitation of a 25 km road section.',
      stats: [
        { label: t('language') === 'fr' ? 'Longueur' : 'Length', value: '25 km' },
        { label: t('language') === 'fr' ? 'Points levés' : 'Survey Points', value: '5000+' },
      ],
    },
    {
      title:
        t('language') === 'fr'
          ? 'Plan Directeur Urbanistique - Commune'
          : 'Urban Master Plan - Municipality',
      location: 'Sèmè-Kpodji',
      date: '2023',
      type: t('language') === 'fr' ? 'Aménagement du Territoire' : 'Spatial Planning',
      description:
        t('language') === 'fr'
          ? "Élaboration du plan directeur d'urbanisme avec zonage et schéma d'aménagement complet."
          : 'Development of the urban master plan with complete zoning and planning scheme.',
      stats: [
        { label: t('language') === 'fr' ? 'Zone couverte' : 'Covered Area', value: '120 km²' },
        { label: t('language') === 'fr' ? 'Durée' : 'Duration', value: '18 mois' },
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('achievements.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('language') === 'fr'
              ? 'Découvrez nos projets réalisés avec succès à travers le Bénin'
              : 'Discover our successfully completed projects across Benin'}
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-8 pb-8">
                <achievement.icon className={`h-10 w-10 ${achievement.color} mx-auto mb-3`} />
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {achievement.value}
                </div>
                <p className="text-sm text-muted-foreground">{achievement.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 animate-fade-in">
            {t('language') === 'fr' ? 'Projets Récents' : 'Recent Projects'}
          </h2>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="hover:shadow-elevated transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-8 pb-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <Badge variant="secondary">{project.type}</Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {project.date}
                        </Badge>
                      </div>

                      <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>

                      <div className="flex items-center text-muted-foreground mb-4">
                        <MapPin className="h-4 w-4 mr-1 text-primary" />
                        <span className="text-sm">{project.location}</span>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    </div>

                    <div className="lg:border-l lg:pl-6">
                      <h4 className="font-semibold text-foreground mb-4">
                        {t('language') === 'fr' ? 'Données Clés' : 'Key Data'}
                      </h4>
                      <div className="space-y-3">
                        {project.stats.map((stat, idx) => (
                          <div key={idx}>
                            <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
                            <div className="text-xl font-bold text-primary">{stat.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
