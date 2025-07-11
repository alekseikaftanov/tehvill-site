'use client';

import React from 'react';
import { cn } from '@/utils/cn';

interface WidgetCardProps {
  bgColor?: string;
  icon?: React.ReactNode;
  title: string;
  text: string;
  textColor?: string;
  className?: string;
  children?: React.ReactNode;
  bottomImage?: string; // путь к нижней картинке
}

const IconBox: React.FC<{children: React.ReactNode; textColor?: string}> = ({ children, textColor }) => {
  // Белый border для цветных карточек, чёрный — для белых
  const border = textColor === 'text-white'
    ? 'border-white/25'
    : 'border-[#333333]/25';
  return (
    <div
      className={cn(
        'w-10 h-10 flex items-center justify-center rounded-xl border-2',
        border
      )}
      style={{ borderRadius: 12 }}
    >
      {children}
    </div>
  );
};

export const WidgetCard: React.FC<WidgetCardProps> = ({
  bgColor = 'bg-white',
  icon,
  title,
  text,
  textColor = 'text-white',
  className,
  children,
  bottomImage,
}) => {
  return (
    <div
      className={cn(
        'relative rounded-[40px] p-[30px] flex flex-col gap-4 min-h-[176px] min-w-[280px] max-w-full shadow-sm overflow-hidden',
        bgColor,
        className
      )}
      style={{ isolation: 'isolate' }}
    >
      {/* Иконка в контейнере */}
      {icon && (
        <div
          className="w-10 h-10 flex items-center justify-center border rounded-[12px] mb-4"
          style={{
            border: '2px solid rgba(255,255,255,0.25)',
            borderRadius: 12,
            flex: 'none',
            order: 0,
            flexGrow: 0,
            zIndex: 0,
          }}
        >
          {/* Render icon as <img> if it's a string (src), else as ReactNode */}
          {typeof icon === 'string' ? (
            <img src={icon} alt="icon" width={20} height={20} />
          ) : icon}
        </div>
      )}
      <div className={cn('font-semibold text-2xl leading-tight', textColor)}>{title}</div>
      <div
        className="font-medium text-lg"
        style={{ color: '#FFFFFF', opacity: 0.8 }}
      >
        {text}
      </div>
      {children}
      {/* Нижняя картинка, если есть */}
      {bottomImage && (
        <img
          src={bottomImage}
          alt=""
          className="mt-auto object-contain"
          style={{ maxHeight: 200, position: 'absolute', right: 0, bottom: 0, width: 'calc(70% + 30px)', zIndex: 0 }}
        />
      )}
    </div>
  );
}; 