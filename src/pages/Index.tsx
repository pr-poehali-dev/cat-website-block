import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const facts = [
  { icon: 'Plane', text: 'Поставки напрямую из Таиланда' },
  { icon: 'Award', text: '6+ лет на рынке' },
  { icon: 'MapPin', text: 'Владивосток, ДФО' },
];

const navLinks = [
  { label: 'О нас', href: '#about' },
  { label: 'Преимущества', href: '#why' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'Вопросы', href: '#faq' },
  { label: 'Контакты', href: '#order' },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Навигация */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/80 border-b border-foreground/10">
        <div className="container max-w-6xl mx-auto flex items-center justify-between h-16 md:h-18 py-3">
          <a href="#top" className="flex items-center gap-2">
            <span className="text-2xl">🥭</span>
            <span className="font-display font-bold text-2xl text-primary">Ягода</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <a href="#order" className="hidden md:block">
            <Button className="rounded-full font-bold gap-2">
              <Icon name="Phone" size={16} /> Заказать
            </Button>
          </a>

          <button
            className="md:hidden text-foreground p-2 -mr-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Открыть меню"
          >
            <Icon name="Menu" size={28} />
          </button>
        </div>
      </header>

      {/* Бургер-меню */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
        <div
          className={`absolute right-0 top-0 h-full w-72 max-w-[80%] bg-card border-l border-foreground/10 p-6 flex flex-col transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex items-center justify-between mb-10">
            <span className="font-display font-bold text-2xl text-primary">Ягода</span>
            <button onClick={() => setMenuOpen(false)} aria-label="Закрыть меню" className="p-2 -mr-2">
              <Icon name="X" size={26} />
            </button>
          </div>
          <nav className="flex flex-col gap-2">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg font-medium py-3 border-b border-foreground/10 hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a href="#order" onClick={() => setMenuOpen(false)} className="mt-8">
            <Button className="w-full h-14 rounded-full font-bold gap-2">
              <Icon name="Phone" size={18} /> Заказать фрукты
            </Button>
          </a>
        </div>
      </div>

      <section id="top" className="relative min-h-screen flex items-center pt-16 md:pt-18">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(43_74%_52%/0.12),transparent_55%)]" />
        <div className="container relative grid lg:grid-cols-2 gap-10 lg:gap-12 items-center py-16 lg:py-24">
          {/* Text */}
          <div className="space-y-6 md:space-y-7 animate-fade-in order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/40 text-primary text-xs sm:text-sm font-semibold tracking-wide">
              <Icon name="Leaf" size={16} /> Прямо с фермы, без посредников
            </span>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.08]">
              Тайские фрукты во&nbsp;Владивостоке —{' '}
              <span className="text-primary">прямо&nbsp;с&nbsp;фермы</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Авиадоставка из Таиланда 2 раза в неделю. Манго, маракуйя, питахайя,
              мангостин — всё приходит свежим, не через месяц.
            </p>
            <Button
              size="lg"
              className="w-full sm:w-auto h-14 md:h-16 px-8 md:px-10 text-base md:text-lg font-bold rounded-full shadow-[0_10px_40px_-10px_hsl(43_74%_52%/0.6)] hover:scale-[1.03] transition-transform gap-3"
            >
              Посмотреть ассортимент и цены
              <Icon name="ArrowRight" size={22} />
            </Button>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-2 md:pt-4">
              {facts.map((f, i) => (
                <div key={f.text} className="flex items-center gap-2 text-sm md:text-base text-muted-foreground">
                  <Icon name={f.icon} size={18} className="text-primary shrink-0" />
                  <span>{f.text}</span>
                  {i < facts.length - 1 && <span className="hidden md:inline mx-1 text-primary/40">•</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in order-1 lg:order-2" style={{ animationDelay: '0.15s' }}>
            <div className="absolute -inset-6 bg-primary/20 rounded-[3rem] blur-3xl" />
            <img
              src="https://cdn.poehali.dev/projects/84f58809-53c0-4552-ab21-736701cf7ab5/files/4e046845-216b-428d-8d32-4c7c6d136816.jpg"
              alt="Разрезанные тропические фрукты"
              className="relative rounded-[2rem] shadow-2xl w-full object-cover aspect-[4/3] sm:aspect-[4/5] lg:aspect-square ring-1 ring-primary/20"
            />
            <div className="absolute -bottom-4 left-4 sm:left-6 bg-card/90 backdrop-blur border border-primary/20 rounded-2xl px-4 sm:px-5 py-3 shadow-xl">
              <p className="text-primary font-bold text-base sm:text-lg leading-none">2 раза в неделю</p>
              <p className="text-xs text-muted-foreground mt-1">свежие авиапоставки</p>
            </div>
          </div>
        </div>
      </section>

      {/* Block 2 — Знакомо? */}
      <section id="about" className="bg-card/60 py-16 md:py-28 scroll-mt-16">
        <div className="container max-w-4xl mx-auto space-y-10 md:space-y-12">
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-center">Знакомо?</h2>

          <div className="grid sm:grid-cols-3 gap-4 md:gap-5">
            {[
              { emoji: '😟', text: '«В супермаркете манго лежит неделями — пластиковое, безвкусное»' },
              { emoji: '😤', text: '«Заказал с маркетплейса — пришло недозрелое, ещё и помятое»' },
              { emoji: '😕', text: '«Хотел подарить корзину с экзотикой, но нигде нет хорошего выбора»' },
            ].map((card) => (
              <div
                key={card.emoji}
                className="bg-background/50 border border-foreground/10 rounded-3xl p-6 md:p-7 flex flex-col gap-4"
              >
                <span className="text-4xl md:text-5xl">{card.emoji}</span>
                <p className="text-muted-foreground text-base md:text-lg leading-snug">{card.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center space-y-2">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground leading-snug">
              Мы решаем эти три проблемы одновременно.
            </p>
            <p className="text-base md:text-lg text-muted-foreground">
              Потому что возим сами — напрямую, самолётом, дважды в неделю.
            </p>
          </div>
        </div>
      </section>

      {/* Block 3 — Почему Ягода */}
      <section id="why" className="py-16 md:py-28 scroll-mt-16">
        <div className="container max-w-6xl mx-auto space-y-12 md:space-y-14">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-center max-w-4xl mx-auto leading-tight">
            «Ягода» — это когда фрукт успевает дозреть в&nbsp;тепле,
            а&nbsp;не&nbsp;в&nbsp;контейнере
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {[
              { emoji: '✈️', title: 'Авиадоставка 2 раза в неделю', text: 'Bangkok → Vladivostok. Фрукты у нас через 48 часов после сбора.' },
              { emoji: '🌿', title: 'Прямой импортёр без посредников', text: 'Покупаем у фермеров напрямую — поэтому и качество, и цена честные.' },
              { emoji: '📦', title: 'Розница и опт', text: 'Один килограмм или несколько ящиков — для частных покупателей и бизнеса.' },
              { emoji: '🎁', title: 'Подарочные наборы и букеты', text: 'Фруктовые корзины и боксы — на заказ с оформлением под ваш повод.' },
              { emoji: '🤝', title: 'B2B для ресторанов и кафе', text: 'Постоянные поставки для кухонь паназиатской и фьюжн-кухни Владивостока.' },
            ].map((b) => (
              <div
                key={b.title}
                className="group bg-card border border-foreground/10 rounded-3xl p-6 md:p-7 hover:border-primary/50 hover:-translate-y-1 transition-all"
              >
                <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform">{b.emoji}</span>
                <h3 className="text-lg md:text-xl font-bold mb-2">{b.title}</h3>
                <p className="text-muted-foreground leading-snug">{b.text}</p>
              </div>
            ))}
            <div className="bg-primary text-primary-foreground rounded-3xl p-6 md:p-7 flex flex-col justify-center">
              <p className="font-display font-bold text-3xl leading-tight">48 часов</p>
              <p className="font-semibold mt-1">от сбора до вашего стола</p>
            </div>
          </div>

          {/* Ассортимент */}
          <div className="text-center space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold">Наш ассортимент</p>
            <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 md:gap-y-3 text-base sm:text-lg md:text-xl font-medium max-w-4xl mx-auto">
              {['Манго', 'Маракуйя', 'Питахайя', 'Мангостин', 'Папайя', 'Авокадо', 'Ананас', 'Гуава', 'Лонган', 'Рамбутан'].map((fruit, i, arr) => (
                <span key={fruit} className="flex items-center gap-3">
                  {fruit}
                  {i < arr.length - 1 && <span className="text-primary">·</span>}
                </span>
              ))}
            </div>
            <p className="text-muted-foreground">+ сезонные позиции</p>
          </div>
        </div>
      </section>

      {/* Block 4 — Доверие */}
      <section id="reviews" className="bg-card/60 py-16 md:py-28 scroll-mt-16">
        <div className="container max-w-6xl mx-auto space-y-12 md:space-y-14">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-center">
            Нам доверяют уже 6 лет
          </h2>

          {/* Цифры */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-3xl mx-auto text-center">
            {[
              { num: '2×', label: 'поставки в неделю' },
              { num: '6+', label: 'года на рынке' },
              { num: '487+', label: 'заказов в этом году' },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display font-bold text-4xl sm:text-5xl md:text-7xl text-primary leading-none">{s.num}</p>
                <p className="text-muted-foreground mt-2 md:mt-3 text-xs sm:text-sm md:text-base">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Отзывы */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {[
              {
                name: 'Дарья Ч.',
                city: 'Владивосток',
                text: 'Покупаем здесь фрукты постоянно, магазин «Ягода» — наша любовь! Огромное спасибо, что возите настоящие тайские фрукты. Отдельно про манго: это просто бомба! Очень вкусные, сочные, ароматные — прямо будто в отпуске. Теперь только к вам 🙏',
              },
              {
                name: 'Татьяна К.',
                city: 'Владивосток',
                text: 'Самые вкусные свежие экзотические фрукты ☺🤑 Часто хожу в этот магазин, товар наилучшего качества, продавцы приветливые, всегда заботливые 🤗 Советую всем ходить сюда 🤗',
              },
              {
                name: 'Ангелина К.',
                city: 'Владивосток',
                text: 'Всё как всегда шикарно, фрукты самые вкусные и спелые. Качество на высоте. Очень рекомендую попробовать их замороженную продукцию, очень радует что в магазине большой ассортимент.',
              },
            ].map((r) => (
              <div
                key={r.name}
                className="bg-background border border-primary/30 rounded-3xl p-6 md:p-7 flex flex-col gap-4 last:sm:col-span-2 last:lg:col-span-1"
              >
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon key={i} name="Star" size={18} className="fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed flex-1">{r.text}</p>
                <div className="flex items-center gap-3 pt-2 border-t border-foreground/10">
                  <div className="w-11 h-11 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-lg">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold leading-none">{r.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{r.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Block 4.5 — Видео */}
      <section className="py-16 md:py-28">
        <div className="container max-w-5xl mx-auto space-y-8 md:space-y-10">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-center">
            Как это выглядит вживую
          </h2>
          <div className="relative rounded-[2rem] overflow-hidden ring-1 ring-primary/20 shadow-2xl">
            <div className="absolute -inset-6 bg-primary/15 blur-3xl -z-10" />
            <video
              src="https://cdn.poehali.dev/projects/84f58809-53c0-4552-ab21-736701cf7ab5/bucket/3b349a5d-8d6b-49a2-b775-574042f3ec28.mp4"
              className="w-full aspect-video object-cover bg-card"
              autoPlay
              muted
              loop
              playsInline
              controls
            />
          </div>
        </div>
      </section>

      {/* Block 5 — FAQ */}
      <section id="faq" className="bg-[hsl(151_51%_8%)] py-16 md:py-28 scroll-mt-16">
        <div className="container max-w-3xl mx-auto space-y-10 md:space-y-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-center">
            Частые вопросы
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: 'Как часто бывают поставки?',
                a: 'Два раза в неделю — четверг и пятница. В день поставки фрукты доступны с утра. Следите за обновлениями в нашем Telegram-канале.',
              },
              {
                q: 'Можно ли заказать незрелые фрукты — чтобы дозрели дома?',
                a: 'Да, мы отмечаем степень зрелости для каждой позиции. Укажите при заказе — подберём нужную спелость.',
              },
              {
                q: 'Есть ли минимальный заказ?',
                a: 'Для розницы — нет. Для оптовых покупателей (рестораны, магазины) минимальный заказ от 5 кг по позиции.',
              },
              {
                q: 'Как долго хранятся фрукты после получения?',
                a: 'Манго, авокадо — 3–5 дней. Маракуйя, питахайя — 5–7 дней. Рамбутан, лонган — до 10 дней в холодильнике.',
              },
              {
                q: 'Делаете ли доставку по Владивостоку?',
                a: 'Да, курьерская доставка по Владивостоку. Самовывоз также доступен — г. Владивосток, ул. Жигура, д. 30.',
              },
            ].map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card border border-foreground/10 rounded-2xl px-5 md:px-6 data-[state=open]:border-primary/40"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-bold text-foreground hover:no-underline py-4 md:py-5">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Block 6 — CTA форма */}
      <section id="order" className="relative py-16 md:py-28 border-t-2 border-primary/60 scroll-mt-16">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(43_74%_52%/0.1),transparent_60%)]" />
        <div className="container relative max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl xl:text-6xl leading-tight">
              Закажите свежие тайские фрукты прямо сейчас
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Следующая поставка — четверг и пятница. Оставьте заявку — перезвоним
              в течение 15 минут и поможем с выбором.
            </p>
          </div>

          <form className="bg-card border border-primary/20 rounded-3xl p-6 md:p-8 space-y-4 text-left">
            <Input placeholder="Ваше имя" className="h-14 bg-background border-foreground/15 text-base rounded-xl" />
            <Input placeholder="Телефон" type="tel" className="h-14 bg-background border-foreground/15 text-base rounded-xl" />
            <Textarea
              placeholder="Комментарий: что интересует — розница, опт, подарок?"
              className="min-h-[100px] bg-background border-foreground/15 text-base rounded-xl resize-none"
            />
            <Button
              type="submit"
              size="lg"
              className="w-full h-16 text-base md:text-lg font-bold rounded-xl gap-2 shadow-[0_10px_40px_-10px_hsl(43_74%_52%/0.6)]"
            >
              ПОЛУЧИТЬ ПРАЙС И ЗАПИСАТЬСЯ
              <Icon name="ArrowRight" size={20} />
            </Button>
            <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-2">
              <Icon name="Lock" size={14} /> Данные защищены. Не звоним без причины.
            </p>
          </form>

          <div className="grid sm:grid-cols-2 gap-4">
            <Button variant="outline" size="lg" className="h-14 rounded-xl border-foreground/25 text-base gap-2 hover:bg-foreground/5">
              <Icon name="Send" size={18} /> Написать в Telegram
            </Button>
            <Button variant="outline" size="lg" className="h-14 rounded-xl border-foreground/25 text-base gap-2 hover:bg-foreground/5">
              <Icon name="Phone" size={18} /> Позвонить сейчас
            </Button>
          </div>

          <p className="text-muted-foreground italic max-w-lg mx-auto leading-relaxed">
            Если сомневаетесь — просто спросите в Telegram. Мы живые люди, отвечаем
            быстро и честно подскажем, что стоит брать в эту поставку.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-foreground/10 py-10">
        <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🥭</span>
            <span className="font-display font-bold text-2xl text-primary">Ягода</span>
          </div>
          <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
            <Icon name="Send" size={18} /> Наш Telegram-канал
          </div>
          <p>© Ягода Владивосток 2026</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;