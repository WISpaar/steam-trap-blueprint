import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Eye, Award, Users, TrendingUp, Globe2 } from 'lucide-react';
import industrialImage from '@/assets/industrial-facility.jpg';

const About = () => {
  const { t, direction } = useLanguage();

  const stats = [
    { value: '20+', label: direction === 'rtl' ? 'سال تجربه' : 'Years Experience' },
    { value: '500+', label: direction === 'rtl' ? 'پروژه موفق' : 'Successful Projects' },
    { value: '150+', label: direction === 'rtl' ? 'مشتری فعال' : 'Active Clients' },
    { value: '24/7', label: direction === 'rtl' ? 'پشتیبانی' : 'Support' },
  ];

  const values = [
    {
      icon: Target,
      title: t('about.ourMission'),
      description: direction === 'rtl' 
        ? 'ارائه بهترین راه‌حل‌های تخلیه بخار با کیفیت بین‌المللی، همراه با خدمات فنی تخصصی برای بهینه‌سازی سیستم‌های بخار صنایع.'
        : 'Providing the best steam trap solutions with international quality, along with specialized technical services to optimize industrial steam systems.',
    },
    {
      icon: Eye,
      title: t('about.ourVision'),
      description: direction === 'rtl' 
        ? 'تبدیل شدن به پیشرو منطقه در تأمین تجهیزات سیستم‌های بخار و شریک اول مهندسان برای ارتقای بهره‌وری و صرفه‌جویی انرژی.'
        : 'Becoming the regional leader in steam system equipment supply and the first partner for engineers in improving productivity and energy savings.',
    },
    {
      icon: Award,
      title: t('about.certifications'),
      description: direction === 'rtl' 
        ? 'دارای گواهینامه‌های ISO 9001، تأییدیه‌های فنی از سازمان‌های معتبر بین‌المللی و مجوزهای لازم برای فعالیت در صنایع حساس.'
        : 'Holder of ISO 9001 certificates, technical approvals from reputable international organizations, and necessary licenses for sensitive industries.',
    },
  ];

  const milestones = [
    {
      year: direction === 'rtl' ? '۱۳۸۵' : '2006',
      title: direction === 'rtl' ? 'تأسیس شرکت' : 'Company Founded',
      description: direction === 'rtl' ? 'آغاز فعالیت با تمرکز بر تجهیزات پایپینگ' : 'Started operations focusing on piping equipment',
    },
    {
      year: direction === 'rtl' ? '۱۳۹۰' : '2011',
      title: direction === 'rtl' ? 'توسعه محصولات' : 'Product Expansion',
      description: direction === 'rtl' ? 'ورود به حوزه تخصصی شیرهای تخلیه بخار' : 'Entered specialized steam trap valves sector',
    },
    {
      year: direction === 'rtl' ? '۱۳۹۵' : '2016',
      title: direction === 'rtl' ? 'گواهینامه‌های بین‌المللی' : 'International Certifications',
      description: direction === 'rtl' ? 'اخذ استانداردهای ISO و تأییدیه‌های فنی' : 'Obtained ISO standards and technical approvals',
    },
    {
      year: direction === 'rtl' ? '۱۴۰۰' : '2021',
      title: direction === 'rtl' ? 'توسعه منطقه‌ای' : 'Regional Expansion',
      description: direction === 'rtl' ? 'آغاز فعالیت صادراتی به کشورهای همسایه' : 'Started export activities to neighboring countries',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[400px] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={industrialImage}
              alt="Industrial Facility"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-transparent" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <Badge className="mb-4 bg-primary/20 text-white border-white/20 backdrop-blur-sm">
                {direction === 'rtl' ? 'درباره ما' : 'About Us'}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {t('about.title')}
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                {t('about.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center border-border/50">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Company Description */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t('about.description')}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {direction === 'rtl' 
                  ? 'امروزه، پترو سیال انرژی با ارائه محصولاتی با کیفیت بین‌المللی، مشاوره فنی تخصصی، و خدمات پس از فروش قوی، به یکی از شرکت‌های پیشرو در صنعت تبدیل شده است. ما متعهد به ارتقای مستمر فناوری، بهبود کیفیت محصولات، و ارائه راه‌حل‌های بهینه برای نیازهای خاص هر مشتری هستیم.'
                  : 'Today, Petro Sial Nafta, by offering international quality products, specialized technical consulting, and strong after-sales services, has become one of the leading companies in the industry. We are committed to continuous technology advancement, product quality improvement, and providing optimal solutions for each customer\'s specific needs.'}
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                {direction === 'rtl' ? 'ارزش‌ها و اهداف' : 'Values & Goals'}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-border/50">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                      <value.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                {direction === 'rtl' ? 'مسیر رشد ما' : 'Our Growth Journey'}
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center font-bold text-primary">
                        {milestone.year}
                      </div>
                      {index < milestones.length - 1 && (
                        <div className="w-0.5 h-full bg-gradient-to-b from-primary to-transparent mt-2" />
                      )}
                    </div>
                    <Card className="flex-1 border-border/50 mb-8">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">
                    {direction === 'rtl' ? 'تیم متخصص' : 'Expert Team'}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {direction === 'rtl' 
                      ? 'مهندسان با تجربه در حوزه سیستم‌های بخار'
                      : 'Experienced engineers in steam systems'}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-6">
                  <TrendingUp className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">
                    {direction === 'rtl' ? 'نوآوری مداوم' : 'Continuous Innovation'}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {direction === 'rtl' 
                      ? 'به‌روزرسانی فناوری و ارتقای محصولات'
                      : 'Technology updates and product improvements'}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-6">
                  <Globe2 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">
                    {direction === 'rtl' ? 'حضور بین‌المللی' : 'International Presence'}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {direction === 'rtl' 
                      ? 'فعالیت در کشورهای منطقه خاورمیانه'
                      : 'Operations in Middle East countries'}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
