import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Zap, TrendingUp, Wrench } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Features = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Shield,
      titleKey: 'features.longLife.title',
      descKey: 'features.longLife.desc',
      color: 'text-primary',
    },
    {
      icon: Zap,
      titleKey: 'features.energySaving.title',
      descKey: 'features.energySaving.desc',
      color: 'text-primary',
    },
    {
      icon: TrendingUp,
      titleKey: 'features.productivity.title',
      descKey: 'features.productivity.desc',
      color: 'text-primary',
    },
    {
      icon: Wrench,
      titleKey: 'features.maintenance.title',
      descKey: 'features.maintenance.desc',
      color: 'text-primary',
    },
  ];

  return (
    <section className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            {t('features.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('about.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="border-border/50 hover:border-primary/50 transition-smooth hover:shadow-elegant group"
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg gradient-hero flex items-center justify-center mb-4 shadow-glow group-hover:scale-110 transition-bounce">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{t(feature.titleKey)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {t(feature.descKey)}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
