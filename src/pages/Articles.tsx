import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Articles = () => {
  const { t, direction } = useLanguage();

  const articles = [
    {
      id: 'steam-trap-basics',
      title: direction === 'rtl' ? 'اصول کار شیرهای تخلیه بخار' : 'Steam Trap Basics: How They Work',
      excerpt: direction === 'rtl' 
        ? 'در این مقاله با اصول عملکرد شیرهای تخلیه بخار، انواع مختلف آن‌ها و نحوه انتخاب مناسب‌ترین نوع برای کاربردهای مختلف آشنا می‌شوید.'
        : 'Learn the fundamental principles of steam trap operation, different types, and how to select the right one for various applications.',
      category: direction === 'rtl' ? 'آموزش پایه' : 'Basics',
      readTime: '8 min',
      author: direction === 'rtl' ? 'تیم فنی پترو سیال' : 'Petro Sial Technical Team',
      image: '/placeholder.svg',
      date: direction === 'rtl' ? '۱۵ دی ۱۴۰۳' : 'Jan 5, 2025',
    },
    {
      id: 'condensate-management',
      title: direction === 'rtl' ? 'مدیریت کندانس و اهمیت آن در سیستم‌های بخار' : 'Condensate Management and Its Importance',
      excerpt: direction === 'rtl' 
        ? 'کندانس نادرست می‌تواند منجر به کاهش راندمان، آسیب به تجهیزات و افزایش هزینه‌های نگهداری شود. در این مقاله راهکارهای مدیریت صحیح را بررسی می‌کنیم.'
        : 'Poor condensate management can lead to reduced efficiency, equipment damage, and increased maintenance costs. Learn proper management solutions.',
      category: direction === 'rtl' ? 'بهینه‌سازی' : 'Optimization',
      readTime: '12 min',
      author: direction === 'rtl' ? 'دکتر احمد محمدی' : 'Dr. Ahmad Mohammadi',
      image: '/placeholder.svg',
      date: direction === 'rtl' ? '۲۲ دی ۱۴۰۳' : 'Jan 12, 2025',
    },
    {
      id: 'life-cycle-cost',
      title: direction === 'rtl' ? 'تحلیل هزینه چرخه عمر (LCC) در انتخاب تله بخار' : 'Life Cycle Cost Analysis in Steam Trap Selection',
      excerpt: direction === 'rtl' 
        ? 'انتخاب تله بخار تنها بر اساس قیمت اولیه می‌تواند گران‌تمام شود. یاد بگیرید چگونه هزینه کل چرخه عمر را محاسبه کنید.'
        : 'Selecting steam traps based only on initial price can be costly. Learn how to calculate total life cycle costs.',
      category: direction === 'rtl' ? 'اقتصادی' : 'Economics',
      readTime: '10 min',
      author: direction === 'rtl' ? 'مهندس سارا احمدی' : 'Eng. Sara Ahmadi',
      image: '/placeholder.svg',
      date: direction === 'rtl' ? '۲۹ دی ۱۴۰۳' : 'Jan 19, 2025',
    },
    {
      id: 'troubleshooting-guide',
      title: direction === 'rtl' ? 'راهنمای عیب‌یابی شیرهای تخلیه بخار' : 'Steam Trap Troubleshooting Guide',
      excerpt: direction === 'rtl' 
        ? 'مشکلات رایج شیرهای تخلیه بخار را شناسایی کنید و یاد بگیرید چگونه آن‌ها را برطرف کنید. شامل چک‌لیست عیب‌یابی گام به گام.'
        : 'Identify common steam trap problems and learn how to fix them. Includes step-by-step troubleshooting checklist.',
      category: direction === 'rtl' ? 'نگهداری' : 'Maintenance',
      readTime: '15 min',
      author: direction === 'rtl' ? 'تیم فنی پترو سیال' : 'Petro Sial Technical Team',
      image: '/placeholder.svg',
      date: direction === 'rtl' ? '۵ بهمن ۱۴۰۳' : 'Jan 25, 2025',
    },
    {
      id: 'energy-saving',
      title: direction === 'rtl' ? 'صرفه‌جویی انرژی با مدیریت صحیح تله بخار' : 'Energy Savings Through Proper Steam Trap Management',
      excerpt: direction === 'rtl' 
        ? 'تله‌های بخار معیوب می‌توانند باعث اتلاف بخار و افزایش هزینه‌های انرژی شوند. راهکارهای عملی برای کاهش مصرف انرژی.'
        : 'Faulty steam traps can cause steam loss and increased energy costs. Practical solutions to reduce energy consumption.',
      category: direction === 'rtl' ? 'انرژی' : 'Energy',
      readTime: '9 min',
      author: direction === 'rtl' ? 'مهندس رضا کریمی' : 'Eng. Reza Karimi',
      image: '/placeholder.svg',
      date: direction === 'rtl' ? '۱۲ بهمن ۱۴۰۳' : 'Feb 1, 2025',
    },
    {
      id: 'air-venting',
      title: direction === 'rtl' ? 'اهمیت هواگیری در سیستم‌های بخار' : 'The Importance of Air Venting in Steam Systems',
      excerpt: direction === 'rtl' 
        ? 'هوای محبوس در سیستم بخار می‌تواند کارایی را تا ۵۰٪ کاهش دهد. نحوه طراحی سیستم هواگیری موثر را یاد بگیرید.'
        : 'Trapped air in steam systems can reduce efficiency by up to 50%. Learn how to design effective air venting systems.',
      category: direction === 'rtl' ? 'طراحی' : 'Design',
      readTime: '11 min',
      author: direction === 'rtl' ? 'دکتر مهدی رضایی' : 'Dr. Mahdi Rezaei',
      image: '/placeholder.svg',
      date: direction === 'rtl' ? '۱۹ بهمن ۱۴۰۳' : 'Feb 8, 2025',
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
                {direction === 'rtl' ? 'مقالات' : 'Articles'}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                {t('articles.title')}
              </h1>
              <p className="text-xl text-muted-foreground">
                {t('articles.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <Card key={article.id} className="group hover:shadow-elegant transition-smooth overflow-hidden flex flex-col">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                    />
                    <Badge className="absolute top-4 right-4 bg-primary/90 text-primary-foreground backdrop-blur-sm">
                      {article.category}
                    </Badge>
                  </div>
                  
                  <CardHeader className="flex-1">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{article.readTime}</span>
                      </div>
                      <span>{article.date}</span>
                    </div>
                    <CardTitle className="text-xl line-clamp-2 leading-tight">{article.title}</CardTitle>
                    <CardDescription className="line-clamp-3">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardFooter className="flex items-center justify-between border-t pt-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      <span className="line-clamp-1">{article.author}</span>
                    </div>
                    <Link to={`/articles/${article.id}`}>
                      <Button variant="ghost" size="sm" className="group/btn">
                        {t('articles.readMore')}
                        <ArrowRight className={`h-4 w-4 ${direction === 'rtl' ? 'rotate-180' : ''} group-hover/btn:translate-x-1 transition-smooth`} />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-to-br from-primary/5 to-primary-glow/5 border-primary/20">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold mb-4">
                  {direction === 'rtl' ? 'از آخرین مقالات باخبر شوید' : 'Stay Updated with Latest Articles'}
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  {direction === 'rtl' 
                    ? 'مقالات آموزشی و تخصصی را مستقیماً در ایمیل خود دریافت کنید.'
                    : 'Receive educational and technical articles directly in your inbox.'}
                </p>
                <Link to="/contact">
                  <Button size="lg" className="gradient-hero shadow-glow">
                    {direction === 'rtl' ? 'عضویت در خبرنامه' : 'Subscribe to Newsletter'}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Articles;
