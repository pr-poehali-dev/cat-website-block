import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const products = [
  { name: 'Лежанка "Облачко"', price: '1 290 ₽', emoji: '🛏️', tag: 'Хит', color: 'bg-primary' },
  { name: 'Игрушка-удочка', price: '390 ₽', emoji: '🎣', tag: 'New', color: 'bg-accent' },
  { name: 'Корм премиум', price: '890 ₽', emoji: '🍗', tag: '-15%', color: 'bg-primary' },
  { name: 'Когтеточка-домик', price: '2 490 ₽', emoji: '🏠', tag: 'Топ', color: 'bg-accent' },
];

const categories = [
  { name: 'Игрушки', icon: 'Gamepad2' },
  { name: 'Корма', icon: 'Drumstick' },
  { name: 'Лежанки', icon: 'BedDouble' },
  { name: 'Уход', icon: 'Sparkles' },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <span className="text-3xl animate-wiggle inline-block">🐱</span>
            <span className="font-display text-2xl text-primary">МуррМаркет</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {categories.map((c) => (
              <a key={c.name} href="#shop" className="hover:text-primary transition-colors">{c.name}</a>
            ))}
          </nav>
          <Button className="rounded-full gap-2">
            <Icon name="ShoppingCart" size={18} />
            <span className="hidden sm:inline">Корзина</span>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative container grid md:grid-cols-2 gap-10 items-center py-12 md:py-20">
        <div className="space-y-6 animate-fade-in">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
            <Icon name="Heart" size={16} className="text-primary" /> Всё для счастливых котиков
          </span>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.1] text-foreground">
            Магазин для <span className="text-primary">пушистых</span> друзей
          </h1>
          <p className="text-lg text-muted-foreground max-w-md">
            Игрушки, корма, лежанки и аксессуары, от которых ваш котик замурчит ещё громче.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="rounded-full text-base gap-2 h-14 px-8">
              За покупками <Icon name="ArrowRight" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full text-base h-14 px-8">
              Подборки
            </Button>
          </div>
          <div className="flex items-center gap-6 pt-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><Icon name="Truck" size={18} className="text-accent" /> Доставка за 1 день</span>
            <span className="flex items-center gap-2"><Icon name="ShieldCheck" size={18} className="text-accent" /> Гарантия качества</span>
          </div>
        </div>

        <div className="relative animate-fade-in" style={{ animationDelay: '0.15s' }}>
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-[3rem] blur-2xl" />
          <img
            src="https://cdn.poehali.dev/projects/84f58809-53c0-4552-ab21-736701cf7ab5/files/2e60aec9-74ce-4be4-95b7-5cf0ad1b31e7.jpg"
            alt="Котик с товарами"
            className="relative rounded-[2.5rem] shadow-2xl w-full object-cover aspect-square"
          />
          <div className="absolute -bottom-5 -left-5 bg-card rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3 animate-float">
            <span className="text-3xl">⭐</span>
            <div>
              <p className="font-bold leading-tight">4.9 / 5</p>
              <p className="text-xs text-muted-foreground">12 000+ отзывов</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((c, i) => (
            <div
              key={c.name}
              className="group bg-card rounded-3xl p-6 flex flex-col items-center gap-3 border border-border hover:border-primary hover:-translate-y-1 transition-all cursor-pointer animate-fade-in"
              style={{ animationDelay: `${0.05 * i}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon name={c.icon} size={26} />
              </div>
              <span className="font-semibold">{c.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="shop" className="container py-12 md:py-16">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-display text-4xl md:text-5xl text-foreground">Популярное 🐾</h2>
          <a href="#shop" className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all">
            Все товары <Icon name="ChevronRight" size={18} />
          </a>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p, i) => (
            <div
              key={p.name}
              className="group bg-card rounded-3xl p-5 border border-border hover:shadow-2xl hover:-translate-y-2 transition-all animate-fade-in"
              style={{ animationDelay: `${0.06 * i}s` }}
            >
              <div className="relative aspect-square rounded-2xl bg-secondary flex items-center justify-center mb-4 overflow-hidden">
                <span className="text-6xl group-hover:scale-110 transition-transform">{p.emoji}</span>
                <span className={`absolute top-3 left-3 ${p.color} text-white text-xs font-bold px-3 py-1 rounded-full`}>{p.tag}</span>
              </div>
              <h3 className="font-semibold mb-1 leading-tight">{p.name}</h3>
              <div className="flex items-center justify-between mt-3">
                <span className="text-lg font-bold text-primary">{p.price}</span>
                <Button size="icon" className="rounded-full h-10 w-10">
                  <Icon name="Plus" size={18} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-20">
        <div className="relative rounded-[2.5rem] bg-primary text-primary-foreground p-10 md:p-16 overflow-hidden">
          <div className="absolute -right-8 -top-8 text-[12rem] opacity-15 select-none">🐈</div>
          <div className="relative max-w-lg space-y-4">
            <h2 className="font-display text-4xl md:text-5xl">Скидка 10% на первый заказ</h2>
            <p className="text-primary-foreground/90 text-lg">Подпишитесь на рассылку и получите промокод для любимого котика.</p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 rounded-full px-6 py-4 text-foreground outline-none"
              />
              <Button size="lg" variant="secondary" className="rounded-full h-14 px-8 text-base font-semibold">
                Получить скидку
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🐱</span>
            <span className="font-display text-lg text-primary">МуррМаркет</span>
          </div>
          <p>© 2026 МуррМаркет. Сделано с любовью к котикам.</p>
          <div className="flex gap-4">
            <Icon name="Instagram" size={20} className="hover:text-primary transition-colors cursor-pointer" />
            <Icon name="Send" size={20} className="hover:text-primary transition-colors cursor-pointer" />
            <Icon name="Phone" size={20} className="hover:text-primary transition-colors cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
