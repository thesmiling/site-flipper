import { Header } from '@/components/ui/header';
import { Hero } from '@/components/ui/hero';
import { Card } from '@/components/ui/card';
import { Reviews } from '@/components/ui/reviews';
import { CTA } from '@/components/ui/cta';
import { Shield, Users, Clock, Truck, Package } from 'lucide-react';

export default function Home() {
  return (
    <main className="bg-[#0a0e17] min-h-screen font-sans antialiased">
      <Header
        name="ПРОФ-МУРАВЕЙ"
        phone="+7 (918) 054-55-24"
        maxUrl="https://max.ru/u/f9LHodD0cOJbIjqaXDb7IUxy2w781OXO_QL4YGTzKs42HOQcocLBRGxIcsI"
      />

      <Hero
        badge="ЕЖЕДНЕВНО с 8:00 до 19:00"
        title="Грузоперевозки"
        accent="№1 в Анапе"
        subtitle="Бережно доставим ваш груз точно в срок. Собственный автопарк, свои грузчики, конкурентные цены. Работаем так же с Юридическими лицами."
        phone="79180545524"
        bgImage="/hero.jpg"
        stats={[
          { value: '2016', label: 'год основания' },
          { value: '2300', label: '₽ от, переезд' },
          { value: '5000+', label: 'перевозок' },
        ]}
      />

      {/* Services */}
      <section id="services" className="py-24 px-6 bg-[#131c2e]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-amber-500 text-xs font-bold uppercase tracking-[0.2em] mb-3">Услуги и цены</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Полный спектр услуг по перевозке грузов</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card
              image="/loading.jpg"
              title="Переезды"
              tags={['Домашние', 'Офисные', 'Междугородние']}
              price="2 300"
              ctaUrl="https://max.ru/u/f9LHodD0cOJbIjqaXDb7IUxy2w781OXO_QL4YGTzKs42HOQcocLBRGxIcsI"
            />
            <Card
              image="/cargo.jpg"
              title="Доставка"
              tags={['Техники', 'Мебели', 'Товаров']}
              price="900"
              ctaUrl="https://max.ru/u/f9LHodD0cOJbIjqaXDb7IUxy2w781OXO_QL4YGTzKs42HOQcocLBRGxIcsI"
            />
            <Card
              image="/moving.jpg"
              title="Разгрузка"
              description="В экипаже каждого автомобиля 2 профессиональных грузчика"
              price="700"
              ctaUrl="https://max.ru/u/f9LHodD0cOJbIjqaXDb7IUxy2w781OXO_QL4YGTzKs42HOQcocLBRGxIcsI"
            />
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-amber-500 text-xs font-bold uppercase tracking-[0.2em] mb-3">Почему мы</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Собственный автопарк</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              что гарантирует полную сохранность груза, соблюдение сроков доставки и позволяет нам предлагать конкурентные цены на услуги.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Свои грузчики</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Наша команда опытных грузчиков быстро и аккуратно погрузит и разгрузит ваше имущество. Мы работаем слаженно и эффективно.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Несем ответственность</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Ваш груз — наша главная забота. Мы гарантируем его полную сохранность и несём финансовую ответственность за любой ущерб.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Всегда вовремя</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Соблюдение сроков доставки — наш приоритет. Приезжаем точно в оговорённое время.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Reviews
        items={[
          { stars: 5, text: 'Переезжали офис. Приехали вовремя, всё аккуратно упаковали, ничего не разбили. Настоящие профессионалы!', name: 'Алексей К.', date: '2 недели назад' },
          { stars: 5, text: 'Заказывали доставку крупной бытовой техники. Цена адекватная, приехали быстро, занесли на 5 этаж без лифта.', name: 'Марина С.', date: 'месяц назад' },
          { stars: 5, text: 'Лучшие грузоперевозки в Анапе! Уже третий раз обращаюсь — всегда чётко. Ребята ответственные, цены не кусаются.', name: 'Дмитрий В.', date: '2 месяца назад' },
        ]}
        externalUrl="https://yandex.ru/maps/org/prof_muravey/73565232067/reviews/"
      />

      <CTA
        phones={['+7 (918) 054-55-24', '+7 (918) 053-76-72']}
        subtitle="Работаем <strong class='text-white'>ежедневно с 8:00 до 19:00</strong>"
        maxUrl="https://max.ru/u/f9LHodD0cOJbIjqaXDb7IUxy2w781OXO_QL4YGTzKs42HOQcocLBRGxIcsI"
        email="profmuravei@yandex.ru"
      />

      <footer className="py-8 text-center border-t border-white/[0.06] text-zinc-500 text-sm">
        © 2016–2026 Проф-Муравей. Грузоперевозки №1 в Анапе.{' '}
        <a href="https://yandex.ru/maps/org/prof_muravey/73565232067/" target="_blank" className="text-amber-500 font-semibold hover:underline">Яндекс Карты</a>
      </footer>
    </main>
  );
}
