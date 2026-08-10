import React from 'react';
import { Phone, MessageSquare, Mail } from 'lucide-react';

interface CTAProps {
  title?: string;
  subtitle?: string;
  phones: string[];
  maxUrl?: string;
  email?: string;
}

export function CTA({ title = 'Готовы к переезду?', subtitle, phones, maxUrl, email }: CTAProps) {
  return (
    <section className="py-24 px-6 bg-[#131c2e] text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">{title}</h2>
        {subtitle && (
          <p className="text-zinc-400 text-lg mb-8" dangerouslySetInnerHTML={{ __html: subtitle }} />
        )}
        <div className="flex gap-4 justify-center flex-wrap mb-6">
          {phones.map((p, i) => (
            <a
              key={i}
              href={`tel:${p.replace(/\D/g, '')}`}
              className={`inline-flex items-center gap-2 font-bold px-8 py-4 rounded-full text-lg no-underline transition-colors ${
                i === 0
                  ? 'bg-amber-500 text-black hover:bg-amber-400'
                  : 'border-2 border-white/10 text-white hover:bg-white/5'
              }`}
            >
              <Phone className="w-5 h-5" />
              {p}
            </a>
          ))}
        </div>
        <div className="flex gap-6 justify-center">
          {maxUrl && (
            <a href={maxUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-amber-500 font-semibold text-sm no-underline hover:underline">
              <MessageSquare className="w-4 h-4" />
              Написать в MAX
            </a>
          )}
          {email && (
            <a href={`mailto:${email}`} className="flex items-center gap-1 text-zinc-500 text-sm no-underline hover:text-amber-500 transition-colors">
              <Mail className="w-4 h-4" />
              {email}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
