import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Clock, User, Share2, BookOpen } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const ArticleDetail = () => {
  const { t, direction } = useLanguage();
  const { id } = useParams();

  // Sample article data
  const article = {
    title: direction === 'rtl' ? 'اصول کار شیرهای تخلیه بخار' : 'Steam Trap Basics: How They Work',
    category: direction === 'rtl' ? 'آموزش پایه' : 'Basics',
    readTime: '8 min',
    author: direction === 'rtl' ? 'تیم فنی پترو سیال' : 'Petro Sial Technical Team',
    date: direction === 'rtl' ? '۱۵ دی ۱۴۰۳' : 'Jan 5, 2025',
    image: '/placeholder.svg',
    content: direction === 'rtl' ? `
      <h2>مقدمه</h2>
      <p>شیرهای تخلیه بخار (Steam Traps) یکی از اجزای حیاتی سیستم‌های بخار هستند که نقش اساسی در حفظ کارایی و بهره‌وری دارند. این شیرها به طور خودکار کندانس (آب حاصل از تراکم بخار) را تخلیه می‌کنند و در عین حال از اتلاف بخار زنده جلوگیری می‌کنند.</p>

      <h2>چرا شیرهای تخلیه بخار ضروری هستند؟</h2>
      <p>در سیستم‌های بخار، وقتی بخار انرژی خود را منتقل می‌کند، به کندانس تبدیل می‌شود. اگر این کندانس به موقع تخلیه نشود، می‌تواند به مشکلات زیر منجر شود:</p>
      <ul>
        <li><strong>کاهش راندمان انتقال حرارت:</strong> کندانس مانع انتقال حرارت موثر می‌شود.</li>
        <li><strong>ضربه قوچ (Water Hammer):</strong> می‌تواند به لوله‌ها و تجهیزات آسیب برساند.</li>
        <li><strong>خوردگی:</strong> کندانس اسیدی می‌تواند تجهیزات را از بین ببرد.</li>
      </ul>

      <h2>انواع شیرهای تخلیه بخار</h2>
      
      <h3>۱. تله‌های ترمودینامیک (Disc Traps)</h3>
      <p>این نوع با استفاده از اختلاف سرعت و فشار بین بخار و کندانس کار می‌کنند. ساختار ساده و مقاومت بالا در برابر شرایط سخت از ویژگی‌های آن‌هاست.</p>

      <h3>۲. تله‌های مکانیکی (Float Traps)</h3>
      <p>این تله‌ها با استفاده از یک شناور (Float) کندانس را به صورت مداوم تخلیه می‌کنند و برای کاربردهای فرآیندی ایده‌آل هستند.</p>

      <h3>۳. تله‌های ترموستاتیک</h3>
      <p>بر اساس اختلاف دما بین بخار و کندانس عمل می‌کنند و می‌توانند هوا را نیز تخلیه کنند.</p>

      <h2>نحوه انتخاب تله مناسب</h2>
      <p>برای انتخاب تله بخار مناسب باید موارد زیر را در نظر بگیرید:</p>
      <ul>
        <li>فشار و دمای کاری سیستم</li>
        <li>نوع کاربرد (خط اصلی، فرآیندی، ترسینگ)</li>
        <li>میزان کندانس تولیدی</li>
        <li>شرایط محیطی (خارجی، خورنده، و غیره)</li>
      </ul>

      <h2>نتیجه‌گیری</h2>
      <p>انتخاب و نگهداری صحیح شیرهای تخلیه بخار می‌تواند به طور چشمگیری هزینه‌های انرژی را کاهش داده و عمر تجهیزات را افزایش دهد. مشاوره با متخصصان برای انتخاب بهینه‌ترین نوع توصیه می‌شود.</p>
    ` : `
      <h2>Introduction</h2>
      <p>Steam traps are critical components of steam systems that play an essential role in maintaining efficiency and productivity. These valves automatically discharge condensate (water formed from steam condensation) while preventing live steam loss.</p>

      <h2>Why Are Steam Traps Necessary?</h2>
      <p>In steam systems, when steam transfers its energy, it condenses into water. If this condensate is not discharged promptly, it can lead to the following problems:</p>
      <ul>
        <li><strong>Reduced heat transfer efficiency:</strong> Condensate prevents effective heat transfer.</li>
        <li><strong>Water hammer:</strong> Can damage pipes and equipment.</li>
        <li><strong>Corrosion:</strong> Acidic condensate can destroy equipment.</li>
      </ul>

      <h2>Types of Steam Traps</h2>
      
      <h3>1. Thermodynamic (Disc) Traps</h3>
      <p>These work using the difference in velocity and pressure between steam and condensate. Simple structure and high resistance to tough conditions are their features.</p>

      <h3>2. Mechanical (Float) Traps</h3>
      <p>These traps use a float to continuously discharge condensate and are ideal for process applications.</p>

      <h3>3. Thermostatic Traps</h3>
      <p>They operate based on temperature difference between steam and condensate and can also vent air.</p>

      <h2>How to Select the Right Trap</h2>
      <p>To select the appropriate steam trap, consider the following:</p>
      <ul>
        <li>System working pressure and temperature</li>
        <li>Type of application (main line, process, tracing)</li>
        <li>Amount of condensate produced</li>
        <li>Environmental conditions (outdoor, corrosive, etc.)</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Proper selection and maintenance of steam traps can significantly reduce energy costs and extend equipment life. Consultation with specialists for optimal selection is recommended.</p>
    `
  };

  const relatedArticles = [
    {
      id: 'condensate-management',
      title: direction === 'rtl' ? 'مدیریت کندانس و اهمیت آن' : 'Condensate Management Importance',
      image: '/placeholder.svg',
    },
    {
      id: 'troubleshooting-guide',
      title: direction === 'rtl' ? 'راهنمای عیب‌یابی تله بخار' : 'Steam Trap Troubleshooting',
      image: '/placeholder.svg',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link to="/articles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth">
              <ArrowLeft className={`h-4 w-4 ${direction === 'rtl' ? 'rotate-180' : ''}`} />
              <span>{t('articles.title')}</span>
            </Link>
          </div>

          {/* Article Header */}
          <div className="mb-8">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              {article.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{article.title}</h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
              <span>{article.date}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-12">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none mb-12
              prose-headings:font-bold prose-headings:text-foreground
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
              prose-ul:text-muted-foreground prose-ul:my-6
              prose-li:my-2
              prose-strong:text-foreground prose-strong:font-semibold"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Share Section */}
          <Separator className="my-12" />
          
          <div className="flex items-center justify-between mb-12">
            <div>
              <h3 className="font-semibold text-lg mb-2">
                {direction === 'rtl' ? 'این مقاله مفید بود؟' : 'Was this article helpful?'}
              </h3>
              <p className="text-muted-foreground text-sm">
                {direction === 'rtl' ? 'با دوستان خود به اشتراک بگذارید' : 'Share it with your colleagues'}
              </p>
            </div>
            <Button variant="outline" size="lg">
              <Share2 className="h-5 w-5" />
              {direction === 'rtl' ? 'اشتراک‌گذاری' : 'Share'}
            </Button>
          </div>

          {/* Related Articles */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              {t('articles.relatedArticles')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.map((related) => (
                <Link key={related.id} to={`/articles/${related.id}`}>
                  <Card className="group hover:shadow-elegant transition-smooth overflow-hidden">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <img 
                        src={related.image} 
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg group-hover:text-primary transition-smooth">
                        {related.title}
                      </h4>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ArticleDetail;
