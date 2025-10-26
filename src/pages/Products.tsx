import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Download, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const { t, direction } = useLanguage();

  const products = [
    {
      id: 'thermodynamic-disc',
      name: direction === 'rtl' ? 'تله بخار ترمودینامیک (دیسکی)' : 'Thermodynamic Disc Trap',
      category: direction === 'rtl' ? 'ترمودینامیک' : 'Thermodynamic',
      image: '/placeholder.svg',
      shortDesc: t('trapTypes.thermodynamic.desc'),
      pressure: '0-45 bar',
      temp: 'Up to 550°C',
      applications: direction === 'rtl' ? ['خطوط اصلی بخار', 'فرآیندهای با فشار بالا', 'محیط‌های خورنده'] : ['Steam mains', 'High pressure processes', 'Corrosive environments'],
    },
    {
      id: 'mechanical-float',
      name: direction === 'rtl' ? 'تله بخار مکانیکی (سطلی)' : 'Mechanical Float Trap',
      category: direction === 'rtl' ? 'مکانیکی' : 'Mechanical',
      image: '/placeholder.svg',
      shortDesc: t('trapTypes.mechanical.desc'),
      pressure: '0-21 bar',
      temp: 'Up to 350°C',
      applications: direction === 'rtl' ? ['فرآیندهای تولیدی', 'هیت اکسچنجرها', 'راکتورها'] : ['Production processes', 'Heat exchangers', 'Reactors'],
    },
    {
      id: 'thermostatic-balanced',
      name: direction === 'rtl' ? 'تله بخار ترموستاتیک' : 'Thermostatic Balanced Trap',
      category: direction === 'rtl' ? 'ترموستاتیک' : 'Thermostatic',
      image: '/placeholder.svg',
      shortDesc: t('trapTypes.thermostatic.desc'),
      pressure: '0-30 bar',
      temp: 'Up to 350°C',
      applications: direction === 'rtl' ? ['گرم‌کن‌های هوا', 'خشک‌کن‌ها', 'پریهیترها'] : ['Air heaters', 'Dryers', 'Preheaters'],
    },
    {
      id: 'bimetallic-thermostatic',
      name: direction === 'rtl' ? 'تله بخار بای‌متال' : 'Bimetallic Thermostatic Trap',
      category: direction === 'rtl' ? 'ترموستاتیک' : 'Thermostatic',
      image: '/placeholder.svg',
      shortDesc: direction === 'rtl' ? 'مناسب برای کاربردهای سبک و فشار پایین' : 'Ideal for light duty and low pressure applications',
      pressure: '0-17 bar',
      temp: 'Up to 250°C',
      applications: direction === 'rtl' ? ['ترسینگ', 'فضاهای گرمایشی', 'کاربردهای سبک'] : ['Tracing', 'Space heating', 'Light duty applications'],
    },
    {
      id: 'inverted-bucket',
      name: direction === 'rtl' ? 'تله بخار سطل معکوس' : 'Inverted Bucket Trap',
      category: direction === 'rtl' ? 'مکانیکی' : 'Mechanical',
      image: '/placeholder.svg',
      shortDesc: direction === 'rtl' ? 'مقاوم در برابر ضربه قوچ و شرایط سخت' : 'Resistant to waterhammer and tough conditions',
      pressure: '0-45 bar',
      temp: 'Up to 450°C',
      applications: direction === 'rtl' ? ['تجهیزات سنگین', 'راه‌اندازی سیستم', 'محیط‌های خورنده'] : ['Heavy equipment', 'System startup', 'Corrosive environments'],
    },
    {
      id: 'free-float',
      name: direction === 'rtl' ? 'تله بخار شناور آزاد' : 'Free Float Trap',
      category: direction === 'rtl' ? 'مکانیکی' : 'Mechanical',
      image: '/placeholder.svg',
      shortDesc: direction === 'rtl' ? 'تخلیه مداوم کندانس با راندمان بالا' : 'Continuous condensate discharge with high efficiency',
      pressure: '0-21 bar',
      temp: 'Up to 300°C',
      applications: direction === 'rtl' ? ['کنترل دقیق دما', 'فرآیندهای حساس', 'تجهیزات پزشکی'] : ['Precise temperature control', 'Sensitive processes', 'Medical equipment'],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-secondary via-secondary/95 to-background py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                {direction === 'rtl' ? 'محصولات' : 'Products'}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                {t('products.title')}
              </h1>
              <p className="text-xl text-muted-foreground">
                {t('products.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="group hover:shadow-elegant transition-smooth overflow-hidden">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                    />
                    <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                      {product.category}
                    </Badge>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl line-clamp-2">{product.name}</CardTitle>
                    <CardDescription className="line-clamp-3">
                      {product.shortDesc}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>{direction === 'rtl' ? 'فشار کاری:' : 'Pressure:'}</span>
                        <span className="font-medium text-foreground">{product.pressure}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{direction === 'rtl' ? 'دمای کاری:' : 'Temperature:'}</span>
                        <span className="font-medium text-foreground">{product.temp}</span>
                      </div>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="flex gap-2">
                    <Link to={`/products/${product.id}`} className="flex-1">
                      <Button variant="default" className="w-full group/btn">
                        {t('products.viewDetails')}
                        <ArrowRight className={`h-4 w-4 ${direction === 'rtl' ? 'rotate-180' : ''} group-hover/btn:translate-x-1 transition-smooth`} />
                      </Button>
                    </Link>
                    <Button variant="outline" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-to-br from-primary/5 to-primary-glow/5 border-primary/20">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold mb-4">
                  {direction === 'rtl' ? 'محصول مناسب را پیدا نکردید؟' : 'Can\'t find the right product?'}
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  {direction === 'rtl' 
                    ? 'تیم فنی ما آماده است تا بهترین راه‌حل را برای نیازهای خاص شما پیشنهاد دهد.'
                    : 'Our technical team is ready to recommend the best solution for your specific needs.'}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button size="lg" className="gradient-hero shadow-glow">
                      {t('hero.cta')}
                      <ArrowRight className={`h-5 w-5 ${direction === 'rtl' ? 'rotate-180' : ''}`} />
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline">
                    <FileText className="h-5 w-5" />
                    {t('cta.catalog')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
