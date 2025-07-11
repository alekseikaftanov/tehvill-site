'use client';

import Image from 'next/image';

export const Header = () => {
  return (
    <header
      className="absolute left-1/2 top-10 z-20 w-[1240px] h-[82px] flex items-center px-6 py-2 bg-[#333] rounded-[30px]"
      style={{ transform: 'translateX(-50%)' }}
    >
      {/* Логотип */}
      <div className="flex items-center mr-10">
        <Image src="/logo.svg" alt="Техвилл" width={180} height={40} priority />
      </div>
      {/* Меню */}
      <nav className="flex-1 flex items-center gap-10">
        <a href="#services" className="text-white font-bold text-lg flex items-center gap-1 hover:underline">
          Услуги
          <span className="text-base">▼</span>
        </a>
        <a href="#portfolio" className="text-white font-bold text-lg hover:underline">Портфолио</a>
        <a href="#about" className="text-white font-bold text-lg hover:underline">О нас</a>
        <a href="#pricing" className="text-white font-bold text-lg hover:underline">Тарифы</a>
        <a href="#contacts" className="text-white font-bold text-lg hover:underline">Контакты</a>
      </nav>
      {/* Кнопка */}
      <a
        href="/cabinet"
        className="ml-6 bg-white text-[#222] font-medium text-xl rounded-[20px] px-8 py-3 flex items-center shadow hover:bg-gray-100 transition whitespace-nowrap"
        style={{ minWidth: 220, justifyContent: 'center' }}
      >
        Личный кабинет <span className="ml-2">→</span>
      </a>
    </header>
  );
}; 