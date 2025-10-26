import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'fa' | 'en';
type Direction = 'rtl' | 'ltr';

interface LanguageContextType {
  language: Language;
  direction: Direction;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  fa: {
    // Navigation
    'nav.home': 'صفحه اصلی',
    'nav.products': 'محصولات',
    'nav.articles': 'مقالات آموزشی',
    'nav.resources': 'منابع و کاتالوگ',
    'nav.contact': 'تماس با ما',
    'nav.about': 'درباره ما',
    
    // Hero Section
    'hero.title': 'به حداکثر رساندن راندمان سیستم بخار',
    'hero.subtitle': 'کاهش هزینه‌های عملیاتی با شیرهای تخلیه بخار تخصصی',
    'hero.cta': 'درخواست مشاوره رایگان',
    'hero.cta.secondary': 'مشاهده محصولات',
    
    // Features
    'features.title': 'چرا پترو سیال انرژی؟',
    'features.longLife.title': 'طول عمر بالا',
    'features.longLife.desc': 'ساختار Air Jacketing و سطح دیسک سخت شده برای مقاومت در برابر شرایط محیطی',
    'features.energySaving.title': 'صرفه‌جویی در انرژی',
    'features.energySaving.desc': 'دیسک آینه‌ای پولیش شده برای آب‌بندی محکم حتی در شرایط سوپرهیت شدید',
    'features.productivity.title': 'افزایش بهره‌وری',
    'features.productivity.desc': 'طراحی ترموستاتیک هواگیری برای تخلیه خودکار هوای اولیه و کاهش زمان راه‌اندازی',
    'features.maintenance.title': 'نگهداری آسان',
    'features.maintenance.desc': 'طراحی ماژولار برای تعمیر سریع آنلاین و کاهش هزینه‌های نگهداری',
    
    // Trap Types
    'trapTypes.title': 'انواع شیرهای تخلیه بخار',
    'trapTypes.thermodynamic.title': 'ترمودینامیک (Disc)',
    'trapTypes.thermodynamic.desc': 'ایده‌آل برای خطوط اصلی بخار - ساختار ساده، عمر طولانی و مقاوم',
    'trapTypes.mechanical.title': 'مکانیکی (Float)',
    'trapTypes.mechanical.desc': 'برای کاربردهای فرآیندی - تخلیه فوری کندانس برای جلوگیری از نوسانات دما',
    'trapTypes.thermostatic.title': 'ترموستاتیک',
    'trapTypes.thermostatic.desc': 'استفاده از انرژی گرمایی کندانس - صرفه‌جویی در انرژی و کاهش فلش بخار',
    
    // Company Info
    'company.name': 'پترو سیال انرژی',
    'company.tagline': 'تخصص در شیرهای تخلیه بخار',
    'company.registration': 'شماره ثبت: ۶۰۳۶۳۷ | سهامی خاص | محل ثبت: تهران، ایران',
    
    // CTA
    'cta.consultation': 'درخواست مشاوره فنی',
    'cta.catalog': 'دانلود کاتالوگ',
    'cta.quote': 'استعلام قیمت',
    
    // Footer
    'footer.quickLinks': 'دسترسی سریع',
    'footer.products': 'محصولات',
    'footer.support': 'پشتیبانی',
    'footer.contact': 'تماس با ما',
    'footer.rights': 'تمامی حقوق محفوظ است',
    
    // About
    'about.title': 'درباره پترو سیال انرژی',
    'about.description': 'شرکت پترو سیال انرژی با بیش از دو دهه تجربه در صنعت، تولیدکننده و تأمین‌کننده انواع شیرهای تخلیه بخار، اتصالات و تجهیزات پایپینگ برای صنایع نفت، گاز و پتروشیمی است. ما با تمرکز بر کیفیت، نوآوری و خدمات پس از فروش، به شریک قابل اعتماد مهندسان و مدیران فنی در سراسر منطقه تبدیل شده‌ایم.',
    
    // Why Condensate Management Matters
    'whyMatters.title': 'چرا مدیریت کندانس اهمیت دارد؟',
    'whyMatters.poorHeat': 'انتقال حرارت ضعیف',
    'whyMatters.damage': 'آسیب به تجهیزات سیستم',
    'whyMatters.waste': 'اتلاف محصول و کیفیت پایین',
    
    // Products
    'products.title': 'محصولات ما',
    'products.subtitle': 'طیف کامل شیرهای تخلیه بخار برای هر کاربردی',
    'products.viewAll': 'مشاهده همه محصولات',
    'products.viewDetails': 'جزئیات محصول',
    'products.requestQuote': 'استعلام قیمت',
    'products.specifications': 'مشخصات فنی',
    'products.applications': 'کاربردها',
    'products.downloadCatalog': 'دانلود کاتالوگ',
    
    // Articles
    'articles.title': 'مقالات آموزشی',
    'articles.subtitle': 'دانش فنی و راهنماهای تخصصی سیستم‌های بخار',
    'articles.readMore': 'ادامه مطلب',
    'articles.latestArticles': 'آخرین مقالات',
    'articles.viewAll': 'مشاهده همه مقالات',
    'articles.relatedArticles': 'مقالات مرتبط',
    
    // Resources
    'resources.title': 'منابع و کاتالوگ',
    'resources.subtitle': 'دسترسی به کاتالوگ‌ها، دیتاشیت‌ها و راهنماهای فنی',
    'resources.download': 'دانلود',
    'resources.technicalDocs': 'مستندات فنی',
    'resources.troubleshooting': 'راهنمای عیب‌یابی',
    
    // Contact
    'contact.title': 'تماس با ما',
    'contact.subtitle': 'مشاوره رایگان با متخصصان ما',
    'contact.form.name': 'نام و نام خانوادگی',
    'contact.form.email': 'ایمیل',
    'contact.form.phone': 'تلفن',
    'contact.form.company': 'نام شرکت',
    'contact.form.industry': 'صنعت',
    'contact.form.message': 'توضیحات نیاز یا مشکل سیستم بخار',
    'contact.form.submit': 'ارسال درخواست',
    'contact.form.success': 'پیام شما با موفقیت ارسال شد',
    
    // About
    'about.subtitle': 'بیش از دو دهه تخصص در صنعت',
    'about.ourMission': 'ماموریت ما',
    'about.ourVision': 'چشم‌انداز ما',
    'about.certifications': 'گواهینامه‌ها',
    
    // Preview Sections
    'preview.products.title': 'محصولات تخصصی',
    'preview.products.desc': 'طیف کامل شیرهای تخلیه بخار برای صنایع مختلف',
    'preview.articles.title': 'دانش فنی',
    'preview.articles.desc': 'مقالات و راهنماهای تخصصی سیستم‌های بخار',
    'preview.resources.title': 'منابع فنی',
    'preview.resources.desc': 'دسترسی به کاتالوگ‌ها و مستندات',
    'preview.contact.title': 'مشاوره رایگان',
    'preview.contact.desc': 'ارزیابی سیستم بخار و انتخاب محصول مناسب',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.articles': 'Articles',
    'nav.resources': 'Resources',
    'nav.contact': 'Contact',
    'nav.about': 'About Us',
    
    // Hero Section
    'hero.title': 'Maximize Your Steam System Efficiency',
    'hero.subtitle': 'Reduce operational costs with specialized steam trap valves',
    'hero.cta': 'Request Free Consultation',
    'hero.cta.secondary': 'View Products',
    
    // Features
    'features.title': 'Why Petro Sial Nafta?',
    'features.longLife.title': 'Long Service Life',
    'features.longLife.desc': 'Air jacketing and hardened disc surface for resistance to environmental conditions',
    'features.energySaving.title': 'Energy Conservation',
    'features.energySaving.desc': 'Mirror-polished disc for tight sealing even under severe superheat conditions',
    'features.productivity.title': 'Increased Productivity',
    'features.productivity.desc': 'Thermostatic air venting design for automatic initial air discharge',
    'features.maintenance.title': 'Easy Maintenance',
    'features.maintenance.desc': 'Modular replacement design enables quick inline repair',
    
    // Trap Types
    'trapTypes.title': 'Steam Trap Types',
    'trapTypes.thermodynamic.title': 'Thermodynamic (Disc)',
    'trapTypes.thermodynamic.desc': 'Ideal for steam mains - simple, long life, and robust construction',
    'trapTypes.mechanical.title': 'Mechanical (Float)',
    'trapTypes.mechanical.desc': 'For process applications - instantaneous condensate removal',
    'trapTypes.thermostatic.title': 'Thermostatic',
    'trapTypes.thermostatic.desc': 'Utilizing heat energy in condensate - energy saving and reduced flash steam',
    
    // Company Info
    'company.name': 'Petro Sial Nafta Co.',
    'company.tagline': 'Specialists in Steam Trap Valves',
    'company.registration': 'Registration No: 603637 | Private Joint Stock | Tehran, Iran',
    
    // CTA
    'cta.consultation': 'Request Technical Consultation',
    'cta.catalog': 'Download Catalog',
    'cta.quote': 'Request Quote',
    
    // Footer
    'footer.quickLinks': 'Quick Links',
    'footer.products': 'Products',
    'footer.support': 'Support',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved',
    
    // About
    'about.title': 'About Petro Sial Nafta',
    'about.description': 'Petro Sial Nafta Company, with over two decades of experience in the industry, is a manufacturer and supplier of various steam trap valves, fittings, and piping equipment for oil, gas, and petrochemical industries. Focusing on quality, innovation, and after-sales service, we have become a trusted partner for engineers and technical managers throughout the region.',
    
    // Why Condensate Management Matters
    'whyMatters.title': 'Why Condensate Management Matters?',
    'whyMatters.poorHeat': 'Poor heat transfer',
    'whyMatters.damage': 'Damage to system equipment',
    'whyMatters.waste': 'Poor quality or wasted product',
    
    // Products
    'products.title': 'Our Products',
    'products.subtitle': 'Complete range of steam traps for every application',
    'products.viewAll': 'View All Products',
    'products.viewDetails': 'View Details',
    'products.requestQuote': 'Request Quote',
    'products.specifications': 'Technical Specifications',
    'products.applications': 'Applications',
    'products.downloadCatalog': 'Download Catalog',
    
    // Articles
    'articles.title': 'Technical Articles',
    'articles.subtitle': 'Technical knowledge and specialized guides for steam systems',
    'articles.readMore': 'Read More',
    'articles.latestArticles': 'Latest Articles',
    'articles.viewAll': 'View All Articles',
    'articles.relatedArticles': 'Related Articles',
    
    // Resources
    'resources.title': 'Resources & Catalogs',
    'resources.subtitle': 'Access to catalogs, datasheets and technical guides',
    'resources.download': 'Download',
    'resources.technicalDocs': 'Technical Documentation',
    'resources.troubleshooting': 'Troubleshooting Guide',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Free consultation with our specialists',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.company': 'Company Name',
    'contact.form.industry': 'Industry',
    'contact.form.message': 'Describe your steam system needs or issues',
    'contact.form.submit': 'Submit Request',
    'contact.form.success': 'Your message has been sent successfully',
    
    // About
    'about.subtitle': 'Over two decades of industry expertise',
    'about.ourMission': 'Our Mission',
    'about.ourVision': 'Our Vision',
    'about.certifications': 'Certifications',
    
    // Preview Sections
    'preview.products.title': 'Specialized Products',
    'preview.products.desc': 'Complete range of steam traps for various industries',
    'preview.articles.title': 'Technical Knowledge',
    'preview.articles.desc': 'Articles and specialized guides for steam systems',
    'preview.resources.title': 'Technical Resources',
    'preview.resources.desc': 'Access to catalogs and documentation',
    'preview.contact.title': 'Free Consultation',
    'preview.contact.desc': 'Steam system evaluation and product selection',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fa');
  const direction: Direction = language === 'fa' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
  }, [language, direction]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'fa' ? 'en' : 'fa');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fa] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, direction, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
