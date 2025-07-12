"use client";

import { FC, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { WidgetCard } from '../molecules/WidgetCard';
import type { Swiper as SwiperType } from 'swiper';

interface Widget {
  key: string;
  title: string;
  text: string;
  bgColor: string;
  textColor: string;
  icon: React.ReactNode;
}

interface ServicesSliderProps {
  widgets: Widget[];
}

export const ServicesSlider: FC<ServicesSliderProps> = ({ widgets }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <div style={{ width: 1240, height: 380 }}>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        style={{ width: '100%', height: 360, cursor: 'grab' }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {widgets.map((w) => (
          <SwiperSlide key={w.key} style={{ width: 400, height: 360, display: 'flex', justifyContent: 'center' }}>
            <WidgetCard
              bgColor={w.bgColor}
              textColor={w.textColor}
              icon={w.icon}
              title={w.title}
              text={w.text}
              className="w-[400px] h-[360px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Кастомная пагинация */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 12 }}>
        {widgets.map((_, idx) => (
          <div
            key={idx}
            style={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              background: idx === activeIndex ? '#fff' : '#F5F7FA',
              transition: 'background 0.2s',
              cursor: 'grab',
              // border и boxShadow убраны
            }}
            onClick={() => {
              swiperRef.current?.slideTo(idx);
            }}
            onMouseEnter={e => (e.currentTarget.style.cursor = 'grab')}
          />
        ))}
      </div>
    </div>
  );
};

interface SimpleImageSliderProps {
  images: string[];
}

export const SimpleImageSlider: FC<SimpleImageSliderProps> = ({ images }) => {
  return (
    <div style={{ width: 1240, height: 600, marginTop: 40 }}>
      <Swiper
        spaceBetween={20}
        slidesPerView={'auto'}
        style={{ width: '100%', height: 600 }}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 'auto', spaceBetween: 20 },
        }}
      >
        {images.map((src, i) => (
          <SwiperSlide
            key={i}
            className="min-w-[1040px] max-w-[1040px] flex-none flex justify-center items-center"
            style={{ height: 600 }}
          >
            <img
              src={src}
              alt={src}
              style={{ width: 1040, height: 600, borderRadius: 40, objectFit: 'cover', display: 'block' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}; 