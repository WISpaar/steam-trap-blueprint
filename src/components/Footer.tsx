import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center shadow-glow">
                <span className="text-primary-foreground font-bold text-xl">PS</span>
              </div>
              <span className="font-bold text-xl text-secondary-foreground">
                {t('company.name')}
              </span>
            </div>
            <p className="text-sm text-secondary-foreground/80 mb-4 max-w-md">
              {t('about.description')}
            </p>
            <p className="text-xs text-secondary-foreground/60">
              {t('company.registration')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-secondary-foreground/80 hover:text-primary transition-smooth">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-secondary-foreground/80 hover:text-primary transition-smooth">
                  {t('nav.products')}
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-sm text-secondary-foreground/80 hover:text-primary transition-smooth">
                  {t('nav.articles')}
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-sm text-secondary-foreground/80 hover:text-primary transition-smooth">
                  {t('nav.resources')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-primary" />
                <span className="text-sm text-secondary-foreground/80">
                  {language === 'fa' ? 'info@petrosial.ir' : 'info@petrosial.com'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-primary" />
                <span className="text-sm text-secondary-foreground/80 text-left" dir="ltr">
                  +98 21 1234 5678
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <span className="text-sm text-secondary-foreground/80">
                  {language === 'fa' ? 'تهران، ایران' : 'Tehran, Iran'}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-8 pt-8 text-center">
          <p className="text-sm text-secondary-foreground/60">
            © {currentYear} {t('company.name')}. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
