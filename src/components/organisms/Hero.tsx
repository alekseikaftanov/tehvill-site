'use client';
import { Section } from '@/components/atoms/Section';
import { Button } from '@/components/atoms/Button';
import { Header } from './Header';
import Image from 'next/image';

export const Hero = () => {
  return (
    <Section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#7B3FF2] to-[#6C2BD7] min-h-[80vh]">
      <Header />
      {/* Волны фоном */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path fillOpacity="0.1" d="M0,160L60,154.7C120,149,240,139,360,154.7C480,171,600,213,720,229.3C840,245,960,235,1080,218.7C1200,203,1320,181,1380,170.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" fill="#fff" />
        <path fillOpacity="0.07" d="M0,320L60,293.3C120,267,240,213,360,197.3C480,181,600,203,720,224C840,245,960,267,1080,250.7C1200,235,1320,181,1380,154.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" fill="#fff" />
      </svg>
      {/* Frame 1948758894: Контейнер текста и кнопок */}
      <div
        className="absolute flex flex-col items-center p-0 gap-[24px] w-[719px] h-[330px] left-1/2 top-1/2"
        style={{
          transform: 'translate(-50%, calc(-50% - 3px))',
        }}
      >
        {/* Hero-иллюстрация */}
        <div className="flex justify-center mb-4">
          <Image src="/hero.svg" alt="Hero" width={80} height={80} />
        </div>
        {/* Тексты */}
        <div className="flex flex-col items-center justify-center w-[719px] h-[156px] p-0">
          <h1
            className="w-[649px] h-[86px] text-center font-montserrat font-medium text-[72px] leading-[86px] tracking-[-0.06em] text-white/50 mt-[-16px] mb-0"
            style={{ letterSpacing: '-0.06em' }}
          >
            Закрываем задачи
          </h1>
          <h2
            className="w-[719px] h-[86px] text-center font-montserrat font-medium text-[72px] leading-[86px] tracking-[-0.06em] text-white mb-0"
            style={{ letterSpacing: '-0.06em' }}
          >
            Открываем будущее
          </h2>
        </div>
        {/* Frame 1948758893: Кнопки */}
        <div className="flex flex-row items-center p-0 gap-2 w-[421px] h-[62px]">
          <Button variant="outline" size="lg" className="backdrop-blur bg-white/10 border-white/40 text-white hover:bg-white/20 h-[62px]" onClick={() => window.location.hash = 'about'}>
            Кто мы такие <span className="ml-2">→</span>
          </Button>
          <Button variant="primary" size="lg" className="bg-white text-gray-900 hover:bg-gray-100 border-2 border-white shadow-md h-[62px]" onClick={() => window.location.href = '/cabinet'}>
            Личный кабинет <span className="ml-2">→</span>
          </Button>
        </div>
      </div>
      {/* Фоновое изображение */}
      <img
        src="/hero-image.svg"
        alt="Hero background"
        className="pointer-events-none select-none"
        style={{
          position: 'absolute',
          width: '2840.49px',
          height: '1598px',
          left: '-800px',
          top: '-719px',
          objectFit: 'cover',
          mixBlendMode: 'luminosity',
          opacity: 0.2,
          zIndex: 1,
        }}
        aria-hidden
      />
    </Section>
  );
}; 