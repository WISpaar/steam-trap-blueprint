import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t, direction } = useLanguage();

  const navItems = [
    { key: 'nav.home', href: '/' },
    { key: 'nav.products', href: '/products' },
    { key: 'nav.articles', href: '/articles' },
    { key: 'nav.resources', href: '/resources' },
    { key: 'nav.contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 space-x-reverse">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center shadow-glow">
                <span className="text-primary-foreground font-bold text-xl">PS</span>
              </div>
              <div className={`flex flex-col ${direction === 'rtl' ? 'items-end' : 'items-start'}`}>
                <span className="font-bold text-lg leading-none text-foreground">
                  {language === 'fa' ? 'پترو سیال انرژی' : 'Petro Sial Nafta'}
                </span>
                <span className="text-xs text-muted-foreground leading-none mt-1">
                  {t('company.tagline')}
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth"
              >
                {t(item.key)}
              </Link>
            ))}
            
            {/* Language Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="gap-2"
            >
              <Globe className="h-4 w-4" />
              <span>{language === 'fa' ? 'EN' : 'فا'}</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-smooth"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t py-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {t(item.key)}
                </Link>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  toggleLanguage();
                  setIsOpen(false);
                }}
                className="gap-2 w-full"
              >
                <Globe className="h-4 w-4" />
                <span>{language === 'fa' ? 'English' : 'فارسی'}</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
