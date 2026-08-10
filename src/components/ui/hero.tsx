import React from 'react';
import { Phone, ChevronDown } from 'lucide-react';

interface HeroProps {
  title: string;
  accent?: string;
  subtitle: string;
  phone: string;
  stats: { value: string; label: string }[];
  bgImage?: string;
  badge?: string;
}

export function Hero({ title, accent, subtitle, phone, stats, bgImage, badge }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-[#0a0e17]">
      {bgImage && (
        <img src={bgImage} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17] via-transparent to-[#0a0e17]/80" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20">
        <div className="max-w-2xl">
          {badge && (
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-amber-500/10 border border-amber-500/15 rounded-full text-amber-500 text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              {badge}
            </div>
          )}
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
            {title}{' '}
            {accent && <span className="text-amber-500">{accent}</span>}
          </h1>
          <p className="text-lg text-zinc-400 mb-8 max-w-lg leading-relaxed">{subtitle}</p>
          <div className="flex gap-4 flex-wrap mb-12">
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center gap-2 bg-amber-500 text-black font-bold px-8 py-4 rounded-full hover:bg-amber-400 transition-colors text-lg no-underline"
            >
              <Phone className="w-5 h-5" />
              Позвонить
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 border-2 border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/5 transition-colors text-lg no-underline"
            >
              Услуги и цены
              <ChevronDown className="w-5 h-5" />
            </a>
          </div>
          {stats.length > 0 && (
            <div className="flex gap-8">
              {stats.map((s, i) => (
                <div key={i}>
                  <div className="text-2xl font-black text-amber-500">{s.value}</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-widest mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
