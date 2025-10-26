import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import trapTypesImage from '@/assets/trap-types.jpg';

const TrapTypes = () => {
  const { t, direction } = useLanguage();

  const trapTypes = [
    {
      titleKey: 'trapTypes.thermodynamic.title',
      descKey: 'trapTypes.thermodynamic.desc',
      gradient: 'from-primary/10 to-primary/5',
    },
    {
      titleKey: 'trapTypes.mechanical.title',
      descKey: 'trapTypes.mechanical.desc',
      gradient: 'from-secondary/10 to-secondary/5',
    },
    {
      titleKey: 'trapTypes.thermostatic.title',
      descKey: 'trapTypes.thermostatic.desc',
      gradient: 'from-accent/10 to-accent/5',
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('trapTypes.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img
              src={trapTypesImage}
              alt="Steam Trap Types"
              className="rounded-lg shadow-industrial w-full"
            />
          </div>

          {/* Trap Type Cards */}
          <div className="space-y-4 order-1 lg:order-2">
            {trapTypes.map((trap, index) => (
              <Card
                key={index}
                className={`border-border/50 hover:border-primary/50 transition-smooth hover:shadow-elegant bg-gradient-to-br ${trap.gradient}`}
              >
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full gradient-hero flex items-center justify-center text-white font-bold text-sm shadow-glow">
                      {index + 1}
                    </div>
                    {t(trap.titleKey)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {t(trap.descKey)}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="gradient-hero shadow-glow hover:shadow-elegant transition-smooth group">
            {t('hero.cta.secondary')}
            <ArrowRight className={`h-5 w-5 ${direction === 'rtl' ? 'rotate-180' : ''} group-hover:translate-x-1 transition-smooth`} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrapTypes;
