import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const facts = [
  { icon: 'Plane', text: 'Поставки напрямую из Таиланда' },
  { icon: 'Award', text: '6+ лет на рынке' },
  { icon: 'MapPin', text: 'Владивосток, ДФО' },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(43_74%_52%/0.12),transparent_55%)]" />
        <div className="container relative grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
          {/* Text */}
          <div className="space-y-7 animate-fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/40 text-primary text-sm font-semibold tracking-wide">
              <Icon name="Leaf" size={16} /> Прямо с фермы, без посредников
            </span>
            <h1 className="font-display font-bold text-5xl md:text-6xl xl:text-7xl leading-[1.05]">
              Тайские фрукты во&nbsp;Владивостоке —{' '}
              <span className="text-primary">прямо&nbsp;с&nbsp;фермы</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Авиадоставка из Таиланда 2 раза в неделю. Манго, маракуйя, питахайя,
              мангостин — всё приходит свежим, не через месяц.
            </p>
            <Button
              size="lg"
              className="h-16 px-10 text-lg font-bold rounded-full shadow-[0_10px_40px_-10px_hsl(43_74%_52%/0.6)] hover:scale-[1.03] transition-transform gap-3"
            >
              Посмотреть ассортимент и цены
              <Icon name="ArrowRight" size={22} />
            </Button>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-4">
              {facts.map((f, i) => (
                <div key={f.text} className="flex items-center gap-2 text-sm md:text-base text-muted-foreground">
                  <Icon name={f.icon} size={18} className="text-primary" />
                  <span>{f.text}</span>
                  {i < facts.length - 1 && <span className="hidden md:inline mx-1 text-primary/40">•</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.15s' }}>
            <div className="absolute -inset-6 bg-primary/20 rounded-[3rem] blur-3xl" />
            <img
              src="https://cdn.poehali.dev/projects/84f58809-53c0-4552-ab21-736701cf7ab5/files/4e046845-216b-428d-8d32-4c7c6d136816.jpg"
              alt="Разрезанные тропические фрукты"
              className="relative rounded-[2rem] shadow-2xl w-full object-cover aspect-[4/5] lg:aspect-square ring-1 ring-primary/20"
            />
            <div className="absolute -bottom-5 left-6 bg-card/90 backdrop-blur border border-primary/20 rounded-2xl px-5 py-3 shadow-xl">
              <p className="text-primary font-bold text-lg leading-none">2 раза в неделю</p>
              <p className="text-xs text-muted-foreground mt-1">свежие авиапоставки</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
