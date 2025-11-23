import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [calcService, setCalcService] = useState('');
  const [calcArea, setCalcArea] = useState('');
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      icon: 'Droplet',
      title: 'Сантехника',
      description: 'Установка и ремонт сантехники любой сложности',
      price: 'от 1500 ₽'
    },
    {
      icon: 'Zap',
      title: 'Электрика',
      description: 'Монтаж проводки, установка розеток и выключателей',
      price: 'от 2000 ₽'
    },
    {
      icon: 'Layers',
      title: 'Натяжные потолки',
      description: 'Установка современных натяжных потолков',
      price: 'от 350 ₽/м²'
    },
    {
      icon: 'Wind',
      title: 'Кондиционеры',
      description: 'Установка и обслуживание систем кондиционирования',
      price: 'от 3500 ₽'
    },
    {
      icon: 'Home',
      title: 'Ремонт квартир',
      description: 'Комплексный ремонт квартир под ключ',
      price: 'от 5000 ₽/м²'
    }
  ];

  const portfolio = [
    {
      image: 'https://cdn.poehali.dev/projects/f3f851a4-4600-4cc7-96ba-722eeb5d0ffb/files/3aa87474-726f-46b7-9223-1b3a13a4824d.jpg',
      title: 'Ремонт ванной комнаты',
      category: 'Сантехника'
    },
    {
      image: 'https://cdn.poehali.dev/projects/f3f851a4-4600-4cc7-96ba-722eeb5d0ffb/files/ed1febf7-2113-48d8-9257-8d720681ed18.jpg',
      title: 'Электромонтаж',
      category: 'Электрика'
    },
    {
      image: 'https://cdn.poehali.dev/projects/f3f851a4-4600-4cc7-96ba-722eeb5d0ffb/files/0d33a18e-e6e1-4933-ac89-6a3e18c6fe68.jpg',
      title: 'Натяжной потолок',
      category: 'Потолки'
    }
  ];

  const reviews = [
    {
      name: 'Анна Петрова',
      rating: 5,
      text: 'Отличная работа! Мастера пришли вовремя, все сделали быстро и качественно. Рекомендую!',
      date: '15.11.2024'
    },
    {
      name: 'Дмитрий Соколов',
      rating: 5,
      text: 'Делали ремонт квартиры под ключ. Очень довольны результатом. Все чисто, аккуратно, в срок.',
      date: '08.11.2024'
    },
    {
      name: 'Елена Иванова',
      rating: 5,
      text: 'Устанавливали натяжные потолки. Работа выполнена профессионально, цена адекватная.',
      date: '02.11.2024'
    }
  ];

  const calculatePrice = () => {
    if (!calcService || !calcArea) return;
    
    const pricePerUnit: Record<string, number> = {
      'plumbing': 1500,
      'electric': 2000,
      'ceiling': 350,
      'ac': 3500,
      'renovation': 5000
    };

    const area = parseFloat(calcArea);
    let price = 0;

    if (calcService === 'ceiling') {
      price = pricePerUnit[calcService] * area;
    } else if (calcService === 'renovation') {
      price = pricePerUnit[calcService] * area;
    } else {
      price = pricePerUnit[calcService];
    }

    setCalculatedPrice(price);
  };

  return (
    <div className="min-h-screen">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Wrench" className="text-primary" size={28} />
            <span className="text-2xl font-bold text-primary">МастерСочи</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#prices" className="text-foreground hover:text-primary transition-colors">Цены</a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Портфолио</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <div className="flex items-center gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90 hidden md:flex">
                  <Icon name="Phone" className="mr-2" size={18} />
                  Вызвать мастера
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Вызов мастера</DialogTitle>
                  <DialogDescription>
                    Заполните форму и мы свяжемся с вами в ближайшее время
                  </DialogDescription>
                </DialogHeader>
                <CallMasterForm />
              </DialogContent>
            </Dialog>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2">
                    <Icon name="Wrench" className="text-primary" size={24} />
                    МастерСочи
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 mt-8">
                  <a 
                    href="#services" 
                    className="text-lg text-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Услуги
                  </a>
                  <a 
                    href="#calculator" 
                    className="text-lg text-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Калькулятор
                  </a>
                  <a 
                    href="#portfolio" 
                    className="text-lg text-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Портфолио
                  </a>
                  <a 
                    href="#reviews" 
                    className="text-lg text-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Отзывы
                  </a>
                  <a 
                    href="#contacts" 
                    className="text-lg text-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Контакты
                  </a>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-primary hover:bg-primary/90 w-full" size="lg">
                        <Icon name="Phone" className="mr-2" size={20} />
                        Вызвать мастера
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Вызов мастера</DialogTitle>
                        <DialogDescription>
                          Заполните форму и мы свяжемся с вами в ближайшее время
                        </DialogDescription>
                      </DialogHeader>
                      <CallMasterForm />
                    </DialogContent>
                  </Dialog>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>

      <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Профессиональные мастера в Сочи
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Сантехника • Электрика • Натяжные потолки • Кондиционеры • Ремонт квартир
            </p>
            <div className="flex flex-wrap gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    <Icon name="Phone" className="mr-2" size={20} />
                    Вызвать мастера
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Вызов мастера</DialogTitle>
                    <DialogDescription>
                      Заполните форму и мы свяжемся с вами в ближайшее время
                    </DialogDescription>
                  </DialogHeader>
                  <CallMasterForm />
                </DialogContent>
              </Dialog>
              <Button size="lg" variant="outline" asChild>
                <a href="#calculator">
                  <Icon name="Calculator" className="mr-2" size={20} />
                  Рассчитать стоимость
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-scale-in">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-primary" size={24} />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Калькулятор стоимости</h2>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="service">Выберите услугу</Label>
                  <Select value={calcService} onValueChange={setCalcService}>
                    <SelectTrigger id="service">
                      <SelectValue placeholder="Выберите услугу" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="plumbing">Сантехника</SelectItem>
                      <SelectItem value="electric">Электрика</SelectItem>
                      <SelectItem value="ceiling">Натяжные потолки</SelectItem>
                      <SelectItem value="ac">Установка кондиционера</SelectItem>
                      <SelectItem value="renovation">Ремонт квартиры</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="area">Площадь (м²) или количество точек</Label>
                  <Input
                    id="area"
                    type="number"
                    placeholder="Введите значение"
                    value={calcArea}
                    onChange={(e) => setCalcArea(e.target.value)}
                  />
                </div>
                <Button onClick={calculatePrice} className="w-full">
                  <Icon name="Calculator" className="mr-2" size={18} />
                  Рассчитать
                </Button>
                {calculatedPrice !== null && (
                  <div className="bg-primary/10 p-4 rounded-lg text-center animate-scale-in">
                    <p className="text-sm text-muted-foreground mb-1">Примерная стоимость:</p>
                    <p className="text-3xl font-bold text-primary">{calculatedPrice.toLocaleString('ru-RU')} ₽</p>
                    <p className="text-xs text-muted-foreground mt-2">*Точную стоимость уточняйте у мастера</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="portfolio" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Портфолио работ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((item, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer animate-scale-in">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <span className="text-sm bg-primary px-3 py-1 rounded-full">{item.category}</span>
                      <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Отзывы клиентов</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="animate-fade-in">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-xs">{review.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Контакты</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Свяжитесь с нами</CardTitle>
                <CardDescription>Мы работаем ежедневно с 8:00 до 20:00</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="text-primary" size={20} />
                  <span className="text-lg">+7 (918) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="text-primary" size={20} />
                  <span>info@mastersochi.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" className="text-primary" size={20} />
                  <span>г. Сочи, Адлерский район</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Быстрая связь</CardTitle>
                <CardDescription>Отправьте заявку прямо сейчас</CardDescription>
              </CardHeader>
              <CardContent>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-secondary hover:bg-secondary/90" size="lg">
                      <Icon name="MessageSquare" className="mr-2" size={20} />
                      Написать в WhatsApp
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Вызов мастера</DialogTitle>
                      <DialogDescription>
                        Заполните форму и мы свяжемся с вами в ближайшее время
                      </DialogDescription>
                    </DialogHeader>
                    <CallMasterForm />
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Wrench" size={24} />
            <span className="text-xl font-bold">МастерСочи</span>
          </div>
          <p className="text-sm text-background/70">
            © 2024 МастерСочи. Все права защищены. Профессиональные услуги мастеров в Сочи.
          </p>
        </div>
      </footer>
    </div>
  );
};

const CallMasterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Ваше имя</Label>
        <Input
          id="name"
          placeholder="Введите ваше имя"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>
      <div>
        <Label htmlFor="phone">Телефон</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="+7 (___) ___-__-__"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
        />
      </div>
      <div>
        <Label htmlFor="form-service">Услуга</Label>
        <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
          <SelectTrigger id="form-service">
            <SelectValue placeholder="Выберите услугу" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="plumbing">Сантехника</SelectItem>
            <SelectItem value="electric">Электрика</SelectItem>
            <SelectItem value="ceiling">Натяжные потолки</SelectItem>
            <SelectItem value="ac">Установка кондиционера</SelectItem>
            <SelectItem value="renovation">Ремонт квартиры</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="description">Описание работ</Label>
        <Textarea
          id="description"
          placeholder="Опишите, что нужно сделать"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          rows={3}
        />
      </div>
      <Button type="submit" className="w-full">
        <Icon name="Send" className="mr-2" size={18} />
        Отправить заявку
      </Button>
    </form>
  );
};

export default Index;