import React from 'react';

interface Review {
  stars: number;
  text: string;
  name: string;
  date: string;
}

interface ReviewsProps {
  title?: string;
  accent?: string;
  items: Review[];
  externalUrl: string;
  externalText?: string;
}

export function Reviews({ title = 'Что говорят', accent = 'клиенты', items, externalUrl, externalText = 'Читать все отзывы на Яндексе' }: ReviewsProps) {
  return (
    <section className="py-24 px-6 bg-[#111827]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-amber-500 text-xs font-bold uppercase tracking-[0.2em] mb-3">Отзывы</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            {title} <span className="text-amber-500">{accent}</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {items.map((r, i) => (
            <div key={i} className="bg-[#0a0e17] border border-white/[0.05] rounded-2xl p-6">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: r.stars }).map((_, j) => (
                  <span key={j} className="text-amber-500">★</span>
                ))}
              </div>
              <p className="text-zinc-400 italic text-sm leading-relaxed mb-4">"{r.text}"</p>
              <div className="text-sm font-semibold text-white">{r.name}</div>
              <div className="text-xs text-zinc-500">{r.date}</div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-white/10 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/5 transition-colors text-sm no-underline"
          >
            {externalText}
          </a>
        </div>
      </div>
    </section>
  );
}
