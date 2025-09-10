import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-md bg-slate-900/80">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <Image
              src="/logo/Logo-dark.png"
              alt="Logo"
              width={72}
              height={72}
              priority
              className="transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#0DD3B0] rounded-full opacity-0 blur-md group-hover:opacity-20 transition-opacity" />
          </div>
        </Link>
        
        <nav className="hidden items-center gap-1 text-sm text-white/70 lg:flex animate-fade-up"
          style={{ animationDelay: '200ms' }}>
          <Link href="/" className="rounded-lg px-4 py-2 transition-all hover:bg-white/5 hover:text-white">
            Home
          </Link>
          <Link href="https://elseif-1e88b178.mintlify.app/en/getting-started/elseif-for-education" className="rounded-lg px-4 py-2 transition-all hover:bg-white/5 hover:text-white">
            Docs
          </Link>
          <Link href="/education" className="rounded-lg px-4 py-2 transition-all hover:bg-white/5 hover:text-white">
            Education
          </Link>
          <Link href="/ai-school" className="rounded-lg px-4 py-2 transition-all hover:bg-white/5 hover:text-white">
            AI School
          </Link>
          <Link href="/ai-startups" className="rounded-lg px-4 py-2 transition-all hover:bg-white/5 hover:text-white">
            AI Startups
          </Link>

          <div className="ml-4 flex items-center gap-3">
            <Link
              href="https://playground.elseif.ai/signin"
              className="rounded-lg bg-white px-6 py-2.5 text-sm font-medium text-black transition-all hover:bg-gray-100 hover:shadow-lg hover:shadow-[#0DD3B0]/20"
            >
              Start for free
            </Link>
          </div>
        </nav>

        {/* Mobile menu button */}
        <button className="lg:hidden p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
