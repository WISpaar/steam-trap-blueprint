import { useLanguage } from '@/contexts/LanguageContext';
import { AlertTriangle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const WhyMatters = () => {
  const { t } = useLanguage();

  const issues = [
    'whyMatters.poorHeat',
    'whyMatters.damage',
    'whyMatters.waste',
  ];

  return (
    <section className="py-20 gradient-industrial">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              {t('whyMatters.title')}
            </h2>
          </div>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {issues.map((issue, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-smooth"
                  >
                    <AlertTriangle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-white/90 font-medium">{t(issue)}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyMatters;
