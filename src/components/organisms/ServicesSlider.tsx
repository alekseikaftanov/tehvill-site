"use client";

import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { WidgetCard } from '../molecules/WidgetCard';

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
  return (
    <div style={{ width: 1240, height: 360 }}>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        style={{ width: '100%', height: 360 }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
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
    </div>
  );
}; 