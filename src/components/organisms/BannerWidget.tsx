import React from 'react';

export const BannerWidget: React.FC = () => {
  return (
    <div style={{
      position: 'relative',
      width: 1240,
      height: 228,
      margin: '120px auto 0',
      background: '#333333',
      borderRadius: '40px 40px 120px 40px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      overflow: 'hidden',
      isolation: 'isolate',
    }}>
      {/* Фоновое изображение */}
      <img
        src="/banner-bg.svg" // замените на актуальный путь к фоновому SVG/PNG
        alt="bg"
        style={{
          position: 'absolute',
          width: 2840.49,
          height: 1598,
          left: 0,
          top: 'calc(50% - 1598px/2 - 370px)',
          mixBlendMode: 'luminosity',
          opacity: 0.2,
          zIndex: 0,
          pointerEvents: 'none',
        }}
        aria-hidden
      />
      {/* Левая часть */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 40,
        gap: 12,
        width: 857,
        height: 228,
        zIndex: 1,
      }}>
        <div style={{ width: 777, height: 112, position: 'relative' }}>
          <span style={{
            fontFamily: 'Montserrat',
            fontWeight: 600,
            fontSize: 56,
            lineHeight: '100%',
            letterSpacing: '-0.04em',
            color: '#fff',
            position: 'absolute',
            left: 0,
            top: 0,
            width: 784,
            height: 112,
          }}>
            Давайте делать технологии дружелюбными
          </span>
          <span style={{
            fontFamily: 'Montserrat',
            fontWeight: 600,
            fontSize: 56,
            lineHeight: '100%',
            letterSpacing: '-0.04em',
            color: '#A5F04B',
            position: 'absolute',
            left: 473,
            top: 56,
            width: 214,
            height: 56,
            textTransform: 'lowercase',
          }}>
            вместе!
          </span>
        </div>
        <div style={{
          width: 777,
          height: 24,
          fontFamily: 'Inter',
          fontWeight: 500,
          fontSize: 18,
          lineHeight: '135%',
          letterSpacing: '-0.01em',
          color: '#fff',
          opacity: 0.5,
        }}>
          Чтобы попасть в команду - отправь свое резюме, и мы с тобой свяжемся
        </div>
      </div>
      {/* Кнопка */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '16px 20px',
        gap: 8,
        width: 383,
        height: 228,
        background: '#A5F04B',
        mixBlendMode: 'color-dodge',
        borderRadius: '0 0 120px 0',
        zIndex: 2,
        cursor: 'pointer',
      }}>
        <span style={{
          fontFamily: 'Inter',
          fontWeight: 500,
          fontSize: 20,
          lineHeight: '150%',
          textAlign: 'center',
          letterSpacing: '-0.04em',
          color: '#333',
        }}>
          Смотреть вакансии
        </span>
        <span style={{
          fontFamily: 'Inter',
          fontWeight: 500,
          fontSize: 20,
          lineHeight: '150%',
          textAlign: 'center',
          letterSpacing: '-0.04em',
          color: '#333',
        }}>
          →
        </span>
      </div>
      {/* Декоративные элементы (заглушки) */}
      {/* Vector/Star — SVG или div с нужным стилем, если SVG нет */}
      <div style={{
        position: 'absolute',
        width: 31,
        height: 40,
        left: 1159,
        top: -23,
        background: '#6C1EFF',
        border: '5px solid #fff',
        boxShadow: '0px 1px 2px rgba(0,0,0,0.1)',
        borderRadius: 8,
        transform: 'rotate(-14.96deg)',
        zIndex: 3,
      }} />
      <div style={{
        position: 'absolute',
        width: 36.43,
        height: 36.43,
        left: 31.22,
        top: 178,
        background: '#6C1EFF',
        border: '3.98px solid #fff',
        boxShadow: '0px 1.14px 4.55px rgba(0,0,0,0.15)',
        borderRadius: 18,
        transform: 'rotate(13.16deg)',
        zIndex: 3,
      }} />
      <div style={{
        position: 'absolute',
        width: 34.69,
        height: 32.99,
        left: 1212.37,
        top: 164,
        background: '#6C1EFF',
        border: '6px solid #fff',
        boxShadow: '0px 1.61px 3.22px rgba(0,0,0,0.15)',
        borderRadius: 16,
        transform: 'matrix(0.99,0.17,-0.17,0.99,0,0)',
        zIndex: 3,
      }} />
      <div style={{
        position: 'absolute',
        width: 34.69,
        height: 32.99,
        left: 37.18,
        top: -23,
        background: '#333',
        border: '6px solid #fff',
        boxShadow: '0px 1.61px 3.22px rgba(0,0,0,0.15)',
        borderRadius: 16,
        transform: 'matrix(-0.99,0.17,0.17,0.99,0,0)',
        zIndex: 3,
      }} />
      <div style={{
        position: 'absolute',
        width: 35.29,
        height: 45.53,
        left: 32.2,
        top: 199.63,
        background: '#A5F04B',
        border: '5.69px solid #fff',
        boxShadow: '0px 1.14px 2.27px rgba(0,0,0,0.1)',
        borderRadius: 12,
        transform: 'rotate(-14.96deg)',
        zIndex: 3,
      }} />
    </div>
  );
}; 