import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useLanguage } from '@/contexts/LanguageContext';

// Single source of truth for the leadership team.
// Update names/titles here and they propagate to both Homepage (simplified)
// and About page (detailed) automatically.
export interface OrgMember {
  name: string;
  titleFr: string;
  titleEn: string;
  /** Tailwind background classes for the colored band/ring */
  colorClass: string;
  /** Tailwind text color for the title accent */
  textClass: string;
  /** Tailwind ring color for the avatar */
  ringClass: string;
  /** Optional avatar image */
  image?: string;
  /** Initials shown when no image */
  initials: string;
}

export const orgTeam: OrgMember[] = [
  {
    name: 'Angelo GBETIE',
    titleFr: 'Directeur',
    titleEn: 'Director',
    colorClass: 'bg-emerald-700/90',
    textClass: 'text-emerald-700 dark:text-emerald-400',
    ringClass: 'ring-emerald-700',
    initials: 'AG',
  },
  {
    name: 'Bertin AHANDESSI',
    titleFr: 'Directeur Technique',
    titleEn: 'Technical Director',
    colorClass: 'bg-blue-800/90',
    textClass: 'text-blue-800 dark:text-blue-400',
    ringClass: 'ring-blue-800',
    initials: 'BA',
  },
  {
    name: 'Noël DA-SILVA',
    titleFr: 'Chef Atelier',
    titleEn: 'Shop Manager',
    colorClass: 'bg-fuchsia-700/90',
    textClass: 'text-fuchsia-700 dark:text-fuchsia-400',
    ringClass: 'ring-fuchsia-700',
    initials: 'ND',
  },
];

interface OrganogramProps {
  variant?: 'simple' | 'detailed';
}

const Organogram = ({ variant = 'simple' }: OrganogramProps) => {
  const { language } = useLanguage();
  const [director, ...reports] = orgTeam;

  const isDetailed = variant === 'detailed';

  return (
    <div className="w-full">
      {/* Director (top of tree) */}
      <div className="flex justify-center">
        <MemberCard member={director} language={language} detailed={isDetailed} />
      </div>

      {/* SVG Connector lines */}
      <div className="relative h-10 md:h-14 w-full max-w-3xl mx-auto" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Vertical line down from director */}
          <line x1="50" y1="0" x2="50" y2="50" stroke="hsl(var(--border))" strokeWidth="0.6" />
          {/* Horizontal bus */}
          <line x1="20" y1="50" x2="80" y2="50" stroke="hsl(var(--border))" strokeWidth="0.6" />
          {/* Drops to each report */}
          <line x1="20" y1="50" x2="20" y2="100" stroke="hsl(var(--border))" strokeWidth="0.6" />
          <line x1="80" y1="50" x2="80" y2="100" stroke="hsl(var(--border))" strokeWidth="0.6" />
        </svg>
      </div>

      {/* Reports row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 max-w-3xl mx-auto">
        {reports.map((m) => (
          <div key={m.name} className="flex justify-center">
            <MemberCard member={m} language={language} detailed={isDetailed} />
          </div>
        ))}
      </div>
    </div>
  );
};

const MemberCard = ({
  member,
  language,
  detailed,
}: {
  member: OrgMember;
  language: 'fr' | 'en';
  detailed: boolean;
}) => {
  const title = language === 'fr' ? member.titleFr : member.titleEn;

  return (
    <div
      className={`group relative w-full max-w-xs rounded-2xl border border-white/30 dark:border-white/10 bg-white/60 dark:bg-card/60 backdrop-blur-md shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
    >
      {/* Color band on top */}
      <div className={`h-1.5 w-full ${member.colorClass}`} />

      <div className={`p-4 ${detailed ? 'md:p-6' : 'md:p-5'} text-center`}>
        {detailed && (
          <div className="flex justify-center mb-3 md:mb-4">
            <Avatar
              className={`h-20 w-20 md:h-24 md:w-24 ring-4 ${member.ringClass} ring-offset-2 ring-offset-background`}
            >
              {member.image && <AvatarImage src={member.image} alt={member.name} />}
              <AvatarFallback className={`${member.colorClass} text-white text-lg font-bold`}>
                {member.initials}
              </AvatarFallback>
            </Avatar>
          </div>
        )}

        <h3
          className={`font-bold text-foreground ${
            detailed ? 'text-base md:text-lg' : 'text-sm md:text-base'
          } leading-tight`}
        >
          {member.name}
        </h3>
        <p className={`mt-1 font-semibold ${member.textClass} ${detailed ? 'text-sm md:text-base' : 'text-xs md:text-sm'}`}>
          {title}
        </p>
      </div>
    </div>
  );
};

export default Organogram;
