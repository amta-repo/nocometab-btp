import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, CheckCircle2, Phone, ArrowRight } from 'lucide-react';
import { serviceDetails } from '@/data/serviceDetails';
import PageHeader from '@/components/PageHeader';

import heroImage3 from '@/assets/nocometab-hero-3.jpg';

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const { t, language } = useLanguage();

  const service = serviceDetails[serviceId || ''];

  // Set document title for SEO
  useEffect(() => {
    if (service) {
      document.title = language === 'fr' ? service.seoTitleFr : service.seoTitleEn;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', language === 'fr' ? service.seoDescFr : service.seoDescEn);
    }
    return () => {
      document.title = 'NOCOMETAB BTP | N°1 Construction Métallique au Bénin';
    };
  }, [service, language]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-xl text-muted-foreground">Service not found</p>
        <Link to="/services">
          <Button><ArrowLeft className="h-4 w-4 mr-2" />{language === 'fr' ? 'Retour aux services' : 'Back to services'}</Button>
        </Link>
      </div>
    );
  }

  const title = language === 'fr' ? service.titleFr : service.titleEn;
  const description = language === 'fr' ? service.descriptionFr : service.descriptionEn;
  const fullDescription = language === 'fr' ? service.fullDescriptionFr : service.fullDescriptionEn;
  const benefits = language === 'fr' ? service.benefitsFr : service.benefitsEn;
  const applications = language === 'fr' ? service.applicationsFr : service.applicationsEn;
  const faqs = language === 'fr' ? service.faqFr : service.faqEn;

  // JSON-LD for this service page
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a },
    })),
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": title,
    "description": fullDescription,
    "provider": {
      "@type": "Organization",
      "name": "NOCOMETAB BTP",
      "url": "https://nocometabbtp.com",
    },
    "areaServed": { "@type": "Country", "name": "Benin" },
    "url": `https://nocometabbtp.com/services/${serviceId}`,
  };

  return (
    <div className="min-h-screen bg-secondary/30">
      <PageHeader
        titleFr={service.titleFr}
        titleEn={service.titleEn}
        subtitleFr={service.descriptionFr}
        subtitleEn={service.descriptionEn}
        backgroundImage={heroImage3}
      />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      <div className="container mx-auto px-4 py-12 md:py-16">
        <Link to="/services">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {language === 'fr' ? 'Retour aux services' : 'Back to services'}
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Full Description */}
          <Card className="shadow-soft animate-scale-in">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">{title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{fullDescription}</p>
            </CardContent>
          </Card>

          {/* Benefits */}
          <div className="animate-fade-in-up">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === 'fr' ? 'Nos Prestations' : 'Our Services'}
            </h2>
            <Card className="shadow-soft">
              <CardContent className="pt-6 pb-6">
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Applications */}
          <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === 'fr' ? 'Applications' : 'Applications'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {applications.map((app, index) => (
                <Card key={index} className="shadow-soft hover:shadow-elevated transition-shadow">
                  <CardContent className="pt-4 pb-4">
                    <p className="text-muted-foreground font-medium">{app}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* FAQ Section - optimized for "People also ask" */}
          <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === 'fr' ? 'Questions Fréquentes' : 'Frequently Asked Questions'}
            </h2>
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="bg-background rounded-lg border px-4">
                  <AccordionTrigger className="text-left font-semibold text-foreground">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* CTA */}
          <Card className="bg-gradient-hero text-white shadow-elevated animate-scale-in">
            <CardContent className="pt-8 pb-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                {language === 'fr' ? 'Besoin de ce service ?' : 'Need this service?'}
              </h3>
              <p className="mb-6 text-white/90">
                {language === 'fr'
                  ? 'Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.'
                  : 'Contact us to discuss your project and get a personalized quote.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="accent" size="lg">
                    {t('cta.quoterequest')}
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                  onClick={() => window.location.href = 'tel:+2290195954763'}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  {t('cta.callnow')}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Internal links to other services */}
          <div className="pt-4">
            <h3 className="text-xl font-bold text-foreground mb-4">
              {language === 'fr' ? 'Découvrez nos autres services' : 'Discover our other services'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {Object.entries(serviceDetails)
                .filter(([key]) => key !== serviceId)
                .map(([key, s]) => (
                  <Link key={key} to={`/services/${key}`}>
                    <Card className="hover:border-primary/50 transition-colors cursor-pointer h-full">
                      <CardContent className="pt-4 pb-4 flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm font-medium text-foreground">
                          {language === 'fr' ? s.titleFr : s.titleEn}
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

export default ServiceDetailPage;
