import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { FileText, Download, Search, BookOpen, Wrench, Settings } from 'lucide-react';

const Resources = () => {
  const { t, direction } = useLanguage();

  const resourceCategories = [
    {
      title: t('resources.technicalDocs'),
      icon: FileText,
      count: 24,
      resources: [
        {
          title: direction === 'rtl' ? 'کاتالوگ محصولات ۲۰۲۵' : 'Product Catalog 2025',
          description: direction === 'rtl' ? 'کاتالوگ کامل محصولات با مشخصات فنی' : 'Complete product catalog with technical specifications',
          fileSize: '8.5 MB',
          type: 'PDF',
          language: direction === 'rtl' ? 'فارسی/انگلیسی' : 'Persian/English',
        },
        {
          title: direction === 'rtl' ? 'دیتاشیت تله‌های ترمودینامیک' : 'Thermodynamic Traps Datasheet',
          description: direction === 'rtl' ? 'مشخصات فنی کامل سری HP' : 'Complete technical specifications HP Series',
          fileSize: '2.1 MB',
          type: 'PDF',
          language: direction === 'rtl' ? 'فارسی/انگلیسی' : 'Persian/English',
        },
        {
          title: direction === 'rtl' ? 'راهنمای انتخاب تله بخار' : 'Steam Trap Selection Guide',
          description: direction === 'rtl' ? 'راهنمای جامع انتخاب تله مناسب' : 'Comprehensive guide for proper trap selection',
          fileSize: '5.3 MB',
          type: 'PDF',
          language: direction === 'rtl' ? 'فارسی/انگلیسی' : 'Persian/English',
        },
      ],
    },
    {
      title: t('resources.troubleshooting'),
      icon: Wrench,
      count: 12,
      resources: [
        {
          title: direction === 'rtl' ? 'چک‌لیست عیب‌یابی' : 'Troubleshooting Checklist',
          description: direction === 'rtl' ? 'راهنمای گام به گام تشخیص مشکلات' : 'Step-by-step problem diagnosis guide',
          fileSize: '1.8 MB',
          type: 'PDF',
          language: direction === 'rtl' ? 'فارسی' : 'Persian',
        },
        {
          title: direction === 'rtl' ? 'راهنمای نصب و راه‌اندازی' : 'Installation & Commissioning Guide',
          description: direction === 'rtl' ? 'دستورالعمل کامل نصب' : 'Complete installation instructions',
          fileSize: '4.2 MB',
          type: 'PDF',
          language: direction === 'rtl' ? 'فارسی/انگلیسی' : 'Persian/English',
        },
      ],
    },
    {
      title: direction === 'rtl' ? 'راهنماهای نگهداری' : 'Maintenance Guides',
      icon: Settings,
      count: 8,
      resources: [
        {
          title: direction === 'rtl' ? 'برنامه نگهداری پیشگیرانه' : 'Preventive Maintenance Program',
          description: direction === 'rtl' ? 'برنامه زمان‌بندی نگهداری' : 'Maintenance scheduling program',
          fileSize: '2.5 MB',
          type: 'PDF',
          language: direction === 'rtl' ? 'فارسی' : 'Persian',
        },
        {
          title: direction === 'rtl' ? 'راهنمای تعمیرات' : 'Repair Manual',
          description: direction === 'rtl' ? 'دستورالعمل تعمیر و تعویض قطعات' : 'Parts repair and replacement instructions',
          fileSize: '6.7 MB',
          type: 'PDF',
          language: direction === 'rtl' ? 'فارسی/انگلیسی' : 'Persian/English',
        },
      ],
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
                {direction === 'rtl' ? 'منابع' : 'Resources'}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                {t('resources.title')}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {t('resources.subtitle')}
              </p>

              {/* Search Bar */}
              <div className="relative">
                <Search className={`absolute ${direction === 'rtl' ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground`} />
                <Input 
                  placeholder={direction === 'rtl' ? 'جستجو در منابع...' : 'Search resources...'}
                  className={`${direction === 'rtl' ? 'pr-12' : 'pl-12'} h-14 bg-background/80 backdrop-blur-sm`}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Resources Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {resourceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16 last:mb-0">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">{category.title}</h2>
                    <p className="text-muted-foreground">
                      {category.count} {direction === 'rtl' ? 'فایل موجود' : 'files available'}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.resources.map((resource, resourceIndex) => (
                    <Card key={resourceIndex} className="group hover:shadow-elegant transition-smooth">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-3">
                          <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center">
                            <FileText className="h-6 w-6 text-primary" />
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {resource.type}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg line-clamp-2">{resource.title}</CardTitle>
                        <CardDescription className="line-clamp-2">
                          {resource.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                          <span>{resource.fileSize}</span>
                          <span>{resource.language}</span>
                        </div>
                        <Button className="w-full group/btn gradient-hero shadow-glow">
                          <Download className="h-4 w-4 group-hover/btn:translate-y-1 transition-smooth" />
                          {t('resources.download')}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-to-br from-primary/5 to-primary-glow/5 border-primary/20">
              <CardContent className="p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  {direction === 'rtl' ? 'نیاز به مستندات بیشتر؟' : 'Need More Documentation?'}
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  {direction === 'rtl' 
                    ? 'اگر به دنبال مستندات خاص یا راهنمای تخصصی هستید، تیم فنی ما آماده کمک به شماست.'
                    : 'If you\'re looking for specific documentation or specialized guides, our technical team is ready to help.'}
                </p>
                <Button size="lg" className="gradient-hero shadow-glow">
                  {t('contact.title')}
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resources;
