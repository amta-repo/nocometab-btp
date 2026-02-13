import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { toast } from 'sonner';
import PageHeader from '@/components/PageHeader';

import heroImage2 from '@/assets/nocometab-hero-2.jpg';

const ContactPage = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Bonjour,\n\nNom: ${formData.name}\nEmail: ${formData.email}\nTéléphone: ${formData.phone}\nType de projet: ${formData.project}\n\nMessage:\n${formData.message}`;
    const whatsappUrl = `https://wa.me/+22995954763?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    toast.success('Redirection vers WhatsApp...');
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', project: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.address'),
      content: 'Kindonou, Cotonou, Bénin',
    },
    {
      icon: Phone,
      title: language === 'fr' ? 'Téléphone' : 'Phone',
      content: '+229 01 95 95 47 63',
      link: 'tel:+2290195954763',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@nocometabbtp.com',
      link: 'mailto:contact@nocometabbtp.com',
    },
    {
      icon: Clock,
      title: t('contact.hours'),
      content: `${t('contact.hours.weekday')}\n${t('contact.hours.saturday')}`,
    },
  ];

  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Page Header */}
      <PageHeader
        titleFr="Contactez-Nous"
        titleEn="Contact Us"
        subtitleFr="Nous sommes là pour répondre à toutes vos questions"
        subtitleEn="We're here to answer all your questions"
        backgroundImage={heroImage2}
      />

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-elevated animate-scale-in border hover:border-primary/50">
            <CardContent className="py-6 md:py-8 px-4 md:px-6">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">
                {language === 'fr' ? 'Envoyez-nous un message' : 'Send us a message'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                <div>
                  <label className="block text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2">
                    {t('contact.form.name')}
                  </label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jean Dupont"
                    className="w-full text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2">
                    {t('contact.form.email')}
                  </label>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jean@example.com"
                    className="w-full text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2">
                    {t('contact.form.phone')}
                  </label>
                  <Input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+229 XX XX XX XX"
                    className="w-full text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2">
                    {t('contact.form.project')}
                  </label>
                  <Input
                    required
                    value={formData.project}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                    placeholder={language === 'fr' ? 'Charpentes, Hangars, Silos, etc.' : 'Frameworks, Warehouses, Silos, etc.'}
                    className="w-full text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2">
                    {t('contact.form.message')}
                  </label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t('contact.form.message')}
                    className="w-full min-h-[120px] md:min-h-[150px] text-sm"
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                  <Send className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                  {t('contact.form.submit')}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Map */}
          <div className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4 animate-fade-in">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="hover:shadow-soft transition-shadow duration-300 border hover:border-primary/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="py-4 md:py-5 px-3 md:px-4">
                    <div className="flex items-start space-x-3 md:space-x-4">
                      <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-gradient-navy flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm md:text-base text-foreground mb-0.5 md:mb-1">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-xs md:text-sm text-muted-foreground whitespace-pre-line">{info.content}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Google Maps */}
            <Card className="shadow-elevated animate-scale-in overflow-hidden border">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7254773896654!2d2.3379877!3d6.4019294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x102357fb7c4804bf%3A0xcf7e390728d7509e!2sNOCOMETAB%20BTP!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="NOCOMETAB BTP Location"
                  className="w-full md:h-[350px]"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
