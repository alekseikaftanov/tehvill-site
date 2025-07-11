"use client";

import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      style={{ paddingBottom: 40 }}
    >
      {widgets.map((w) => (
        <SwiperSlide key={w.key}>
          <WidgetCard
            bgColor={w.bgColor}
            textColor={w.textColor}
            icon={w.icon}
            title={w.title}
            text={w.text}
            className="w-full h-full"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}; 