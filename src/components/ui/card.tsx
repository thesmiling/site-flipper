import React from 'react';

interface CardProps {
  image?: string;
  title: string;
  tags?: string[];
  price: string;
  description?: string;
  ctaUrl: string;
  ctaText?: string;
}

export function Card({ image, title, tags, price, description, ctaUrl, ctaText = 'Заказать' }: CardProps) {
  return (
    <div className="bg-[#111827] border border-white/[0.05] rounded-2xl overflow-hidden flex flex-col h-full hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
      {image && (
        <img src={image} alt={title} className="w-full h-40 object-cover" />
      )}
      <div className="p-6 flex-1 flex flex-col items-center text-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
          {tags && (
            <div className="flex justify-center gap-1.5 mb-4 flex-wrap">
              {tags.map((t, i) => (
                <span key={i} className="bg-white/[0.04] px-3 py-1 rounded-full text-xs text-zinc-400">
                  {t}
                </span>
              ))}
            </div>
          )}
          {description && (
            <p className="text-sm text-zinc-400 mb-4">{description}</p>
          )}
        </div>
        <div>
          <div className="flex items-baseline justify-center gap-1.5 mb-3">
            <span className="text-sm font-semibold text-zinc-300">от</span>
            <span className="text-3xl font-black text-amber-500">{price} ₽</span>
          </div>
          <a
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full bg-amber-500 text-black font-bold py-3 rounded-full hover:bg-amber-400 transition-colors text-sm no-underline"
          >
            {ctaText}
          </a>
        </div>
      </div>
    </div>
  );
}
