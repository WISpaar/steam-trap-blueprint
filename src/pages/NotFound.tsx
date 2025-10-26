import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const { t, direction } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", window.location.pathname);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="inline-block mb-8">
              <div className="text-9xl font-bold text-gradient">404</div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {direction === 'rtl' ? 'صفحه مورد نظر یافت نشد' : 'Page Not Found'}
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              {direction === 'rtl' 
                ? 'متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد یا منتقل شده است.'
                : 'Sorry, the page you are looking for does not exist or has been moved.'
              }
            </p>
            
            <Link to="/">
              <Button size="lg" className="gradient-hero shadow-glow hover:shadow-elegant transition-smooth group">
                <Home className="h-5 w-5" />
                {direction === 'rtl' ? 'بازگشت به صفحه اصلی' : 'Back to Home'}
                <ArrowRight className={`h-5 w-5 ${direction === 'rtl' ? 'rotate-180' : ''} group-hover:translate-x-1 transition-smooth`} />
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
