import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Download } from 'lucide-react';
import heroImage from '@/assets/hero-steam-trap.jpg';

const Hero = () => {
  const { t, direction } = useLanguage();

  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Industrial Steam Trap System"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="gradient-hero shadow-glow hover:shadow-elegant transition-smooth group"
            >
              {t('hero.cta')}
              <ArrowRight className={`h-5 w-5 ${direction === 'rtl' ? 'rotate-180' : ''} group-hover:translate-x-1 transition-smooth`} />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm transition-smooth"
            >
              <Download className="h-5 w-5" />
              {t('cta.catalog')}
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap gap-8 items-center">
            <div className="text-white/80">
              <div className="text-3xl font-bold text-gradient">20+</div>
              <div className="text-sm">{direction === 'rtl' ? 'سال تجربه' : 'Years Experience'}</div>
            </div>
            <div className="text-white/80">
              <div className="text-3xl font-bold text-gradient">500+</div>
              <div className="text-sm">{direction === 'rtl' ? 'پروژه موفق' : 'Successful Projects'}</div>
            </div>
            <div className="text-white/80">
              <div className="text-3xl font-bold text-gradient">ISO 9001</div>
              <div className="text-sm">{direction === 'rtl' ? 'گواهینامه کیفیت' : 'Certified Quality'}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
