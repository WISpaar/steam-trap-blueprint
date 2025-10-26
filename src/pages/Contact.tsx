import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const { t, direction, language } = useLanguage();

  const industries = [
    direction === 'rtl' ? 'نفت و گاز' : 'Oil & Gas',
    direction === 'rtl' ? 'پتروشیمی' : 'Petrochemical',
    direction === 'rtl' ? 'نیروگاه' : 'Power Plant',
    direction === 'rtl' ? 'صنایع غذایی' : 'Food Industry',
    direction === 'rtl' ? 'فارماسوتیکال' : 'Pharmaceutical',
    direction === 'rtl' ? 'سایر' : 'Other',
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-secondary via-secondary/95 to-background py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                {direction === 'rtl' ? 'تماس' : 'Contact'}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                {t('contact.title')}
              </h1>
              <p className="text-xl text-muted-foreground">
                {t('contact.subtitle')}
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      {direction === 'rtl' ? 'فرم تماس' : 'Contact Form'}
                    </CardTitle>
                    <CardDescription>
                      {direction === 'rtl' 
                        ? 'اطلاعات خود و نیازهای فنی را وارد کنید تا متخصصان ما در اسرع وقت با شما تماس بگیرند.'
                        : 'Enter your information and technical needs so our specialists can contact you as soon as possible.'}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">{t('contact.form.name')}</Label>
                          <Input id="name" placeholder={direction === 'rtl' ? 'علی احمدی' : 'John Smith'} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">{t('contact.form.company')}</Label>
                          <Input id="company" placeholder={direction === 'rtl' ? 'نام شرکت' : 'Company Name'} />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email">{t('contact.form.email')}</Label>
                          <Input id="email" type="email" placeholder="info@example.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">{t('contact.form.phone')}</Label>
                          <Input id="phone" type="tel" placeholder="+98 21 1234 5678" dir="ltr" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="industry">{t('contact.form.industry')}</Label>
                        <Select>
                          <SelectTrigger id="industry">
                            <SelectValue placeholder={direction === 'rtl' ? 'انتخاب صنعت' : 'Select Industry'} />
                          </SelectTrigger>
                          <SelectContent>
                            {industries.map((industry, index) => (
                              <SelectItem key={index} value={industry.toLowerCase()}>
                                {industry}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">{t('contact.form.message')}</Label>
                        <Textarea 
                          id="message" 
                          rows={6} 
                          placeholder={direction === 'rtl' 
                            ? 'لطفاً نیاز یا مشکل سیستم بخار خود را شرح دهید...'
                            : 'Please describe your steam system needs or issues...'}
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full gradient-hero shadow-glow group">
                        {t('contact.form.submit')}
                        <Send className="h-5 w-5 group-hover:translate-x-1 transition-smooth" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle>{direction === 'rtl' ? 'اطلاعات تماس' : 'Contact Information'}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{direction === 'rtl' ? 'ایمیل' : 'Email'}</h4>
                        <p className="text-sm text-muted-foreground">
                          {language === 'fa' ? 'info@petrosial.ir' : 'info@petrosial.com'}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{direction === 'rtl' ? 'تلفن' : 'Phone'}</h4>
                        <p className="text-sm text-muted-foreground" dir="ltr">
                          +98 21 1234 5678
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{direction === 'rtl' ? 'آدرس' : 'Address'}</h4>
                        <p className="text-sm text-muted-foreground">
                          {language === 'fa' ? 'تهران، ایران' : 'Tehran, Iran'}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-primary/5 to-primary-glow/5 border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3">
                      {direction === 'rtl' ? 'ساعات کاری' : 'Business Hours'}
                    </h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>{direction === 'rtl' ? 'شنبه - چهارشنبه' : 'Saturday - Wednesday'}</span>
                        <span dir="ltr">8:00 - 17:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{direction === 'rtl' ? 'پنجشنبه' : 'Thursday'}</span>
                        <span dir="ltr">8:00 - 13:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{direction === 'rtl' ? 'جمعه' : 'Friday'}</span>
                        <span>{direction === 'rtl' ? 'تعطیل' : 'Closed'}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3">
                      {direction === 'rtl' ? 'پشتیبانی اضطراری' : 'Emergency Support'}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {direction === 'rtl' 
                        ? 'برای مشکلات فوری و اضطراری سیستم بخار، ۲۴ ساعته در دسترس هستیم.'
                        : 'For urgent steam system emergencies, we are available 24/7.'}
                    </p>
                    <Button variant="outline" className="w-full border-accent/30">
                      {direction === 'rtl' ? 'تماس اضطراری' : 'Emergency Contact'}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
