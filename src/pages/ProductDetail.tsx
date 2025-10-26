import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Download, FileText, CheckCircle2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { t, direction } = useLanguage();
  const { id } = useParams();

  // Sample product data - در واقعیت از API یا database می‌آید
  const product = {
    name: direction === 'rtl' ? 'تله بخار ترمودینامیک پاوردین HP-28' : 'PowerDyne HP-28 Thermodynamic Trap',
    category: direction === 'rtl' ? 'ترمودینامیک' : 'Thermodynamic',
    image: '/placeholder.svg',
    description: direction === 'rtl' 
      ? 'تله بخار ترمودینامیک HP-28 با فناوری Air Jacketing و دیسک سخت‌شده، راه‌حلی ایده‌آل برای خطوط اصلی بخار و کاربردهای با فشار بالا است. این محصول با طراحی ماژولار، نگهداری آسان و طول عمر بالا را تضمین می‌کند.'
      : 'The HP-28 Thermodynamic Trap with Air Jacketing technology and hardened disc provides an ideal solution for steam mains and high-pressure applications. With its modular design, it ensures easy maintenance and long service life.',
    specs: [
      { label: direction === 'rtl' ? 'فشار کاری' : 'Working Pressure', value: '0-45 bar' },
      { label: direction === 'rtl' ? 'دمای کاری' : 'Working Temperature', value: 'Up to 550°C' },
      { label: direction === 'rtl' ? 'متریال بدنه' : 'Body Material', value: 'SCS13A / A105 Forged Steel' },
      { label: direction === 'rtl' ? 'متریال دیسک' : 'Disc Material', value: 'Hardened Stainless Steel' },
      { label: direction === 'rtl' ? 'اتصال' : 'Connection', value: 'Screwed / Flanged' },
      { label: direction === 'rtl' ? 'سایز' : 'Size', value: '1/2" - 2"' },
    ],
    features: [
      direction === 'rtl' ? 'ساختار Air Jacketing برای مقاومت در برابر فریز شدن' : 'Air Jacketing structure for freeze resistance',
      direction === 'rtl' ? 'دیسک آینه‌ای پولیش شده برای آب‌بندی محکم' : 'Mirror-polished disc for tight sealing',
      direction === 'rtl' ? 'طراحی ترموستاتیک هواگیری خودکار' : 'Thermostatic automatic air venting design',
      direction === 'rtl' ? 'طراحی ماژولار برای تعمیر آنلاین' : 'Modular design for online repair',
      direction === 'rtl' ? 'مقاوم در برابر ضربه قوچ' : 'Resistant to waterhammer',
      direction === 'rtl' ? 'مناسب برای محیط‌های خورنده' : 'Suitable for corrosive environments',
    ],
    applications: [
      direction === 'rtl' ? 'خطوط اصلی بخار (Steam Mains)' : 'Steam Mains',
      direction === 'rtl' ? 'فرآیندهای با فشار بالا' : 'High Pressure Processes',
      direction === 'rtl' ? 'محیط‌های خارجی و سرد' : 'Outdoor and Cold Environments',
      direction === 'rtl' ? 'صنایع نفت و گاز' : 'Oil & Gas Industries',
      direction === 'rtl' ? 'پتروشیمی' : 'Petrochemical',
      direction === 'rtl' ? 'نیروگاه‌ها' : 'Power Plants',
    ],
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link to="/products" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth">
              <ArrowLeft className={`h-4 w-4 ${direction === 'rtl' ? 'rotate-180' : ''}`} />
              <span>{t('products.title')}</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div>
              <div className="aspect-square bg-muted rounded-lg overflow-hidden sticky top-24">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                  {product.category}
                </Badge>
                <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="flex gap-4">
                <Button size="lg" className="gradient-hero shadow-glow flex-1">
                  {t('products.requestQuote')}
                </Button>
                <Button size="lg" variant="outline">
                  <Download className="h-5 w-5" />
                  {t('products.downloadCatalog')}
                </Button>
              </div>

              <Tabs defaultValue="specs" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="specs">{t('products.specifications')}</TabsTrigger>
                  <TabsTrigger value="features">{direction === 'rtl' ? 'ویژگی‌ها' : 'Features'}</TabsTrigger>
                  <TabsTrigger value="applications">{t('products.applications')}</TabsTrigger>
                </TabsList>
                
                <TabsContent value="specs" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>{t('products.specifications')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {product.specs.map((spec, index) => (
                          <div key={index} className="flex justify-between items-center py-3 border-b border-border/50 last:border-0">
                            <span className="text-muted-foreground">{spec.label}</span>
                            <span className="font-medium">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="features" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>{direction === 'rtl' ? 'ویژگی‌های کلیدی' : 'Key Features'}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="applications" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>{t('products.applications')}</CardTitle>
                      <CardDescription>
                        {direction === 'rtl' 
                          ? 'کاربردهای صنعتی و موارد استفاده پیشنهادی'
                          : 'Industrial applications and recommended uses'}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {product.applications.map((app, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                            <span className="text-sm">{app}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              {/* Technical Support CTA */}
              <Card className="bg-gradient-to-br from-primary/5 to-primary-glow/5 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">
                        {direction === 'rtl' ? 'نیاز به مشاوره فنی؟' : 'Need Technical Consultation?'}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {direction === 'rtl' 
                          ? 'تیم مهندسی ما آماده است تا در انتخاب محصول مناسب و بهینه‌سازی سیستم بخار شما کمک کند.'
                          : 'Our engineering team is ready to help you select the right product and optimize your steam system.'}
                      </p>
                      <Link to="/contact">
                        <Button variant="outline" className="border-primary/30 hover:bg-primary/10">
                          {t('contact.title')}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
