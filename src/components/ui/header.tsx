'use client';

import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import Link from 'next/link';

interface HeaderProps {
  logo?: string;
  name: string;
  phone: string;
  maxUrl?: string;
}

export function Header({ logo, name, phone, maxUrl }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e17]/90 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 no-underline">
          {logo && <img src={logo} alt="" className="h-8 w-auto" />}
          <span className="text-lg font-extrabold text-white tracking-tight">{name}</span>
        </a>
        <div className="flex items-center gap-3">
          {maxUrl && (
            <a
              href={maxUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-amber-500 text-xs font-semibold px-3 py-1.5 border border-amber-500/20 rounded-full hover:border-amber-500/40 transition-colors no-underline"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              MAX
            </a>
          )}
          <a
            href={`tel:${phone}`}
            className="inline-flex items-center gap-1.5 bg-amber-500 text-black font-bold px-4 py-2 rounded-full hover:bg-amber-400 transition-colors text-sm no-underline"
          >
            <Phone className="w-3.5 h-3.5" />
            {phone}
          </a>
        </div>
      </div>
    </header>
  );
}
