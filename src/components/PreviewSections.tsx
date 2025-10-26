import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Package, BookOpen, FileText, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const PreviewSections = () => {
  const { t, direction } = useLanguage();

  const sections = [
    {
      icon: Package,
      title: t('preview.products.title'),
      description: t('preview.products.desc'),
      link: '/products',
      cta: t('products.viewAll'),
      gradient: 'from-primary/20 to-primary-glow/20',
    },
    {
      icon: BookOpen,
      title: t('preview.articles.title'),
      description: t('preview.articles.desc'),
      link: '/articles',
      cta: t('articles.viewAll'),
      gradient: 'from-accent/20 to-accent/10',
    },
    {
      icon: FileText,
      title: t('preview.resources.title'),
      description: t('preview.resources.desc'),
      link: '/resources',
      cta: t('resources.title'),
      gradient: 'from-secondary/20 to-secondary/10',
    },
    {
      icon: Phone,
      title: t('preview.contact.title'),
      description: t('preview.contact.desc'),
      link: '/contact',
      cta: t('contact.title'),
      gradient: 'from-primary-glow/20 to-primary/20',
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections.map((section, index) => (
            <Card
              key={index}
              className="group hover:shadow-elegant transition-smooth border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-0 group-hover:opacity-100 transition-smooth`} />
              
              <CardHeader className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                  <section.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{section.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {section.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <Link to={section.link}>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between group/btn hover:bg-primary/10 transition-smooth"
                  >
                    <span>{section.cta}</span>
                    <ArrowRight className={`h-4 w-4 ${direction === 'rtl' ? 'rotate-180' : ''} group-hover/btn:translate-x-1 transition-smooth`} />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreviewSections;
