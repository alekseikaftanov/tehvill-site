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
      overflow: 'visible',
      isolation: 'isolate',
    }}>
      {/* Фоновое изображение */}
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
          <span
            className="font-montserrat font-normal"
            style={{
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
            }}
          >
            Давайте делать технологии дружелюбными
          </span>
          <span
            className="font-montserrat font-semibold"
            style={{
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
            }}
          >
            вместе!
          </span>
        </div>
        <div
          className="font-inter font-medium"
          style={{
            width: 777,
            height: 24,
            fontWeight: 500,
            fontSize: 18,
            lineHeight: '135%',
            letterSpacing: '-0.01em',
            color: '#fff',
            opacity: 0.5,
          }}
        >
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
        <span
          className="font-inter font-medium"
          style={{
            fontWeight: 500,
            fontSize: 20,
            lineHeight: '150%',
            textAlign: 'center',
            letterSpacing: '-0.04em',
            color: '#333',
          }}
        >
          Смотреть вакансии
        </span>
        <span
          className="font-inter font-medium"
          style={{
            fontWeight: 500,
            fontSize: 20,
            lineHeight: '150%',
            textAlign: 'center',
            letterSpacing: '-0.04em',
            color: '#333',
          }}
        >
          →
        </span>
      </div>
      {/* Декоративные элементы (SVG-иконки) */}
      <img
        src="/pictures/vacancy/star_purple_icon.svg"
        alt="star purple"
        style={{
          position: 'absolute',
          width: 43.4,
          height: 56,
          left: 1159,
          top: -23,
          zIndex: 3,
        }}
      />
      <img
        src="/pictures/vacancy/robot_purple_icon.svg"
        alt="robot purple"
        style={{
          position: 'absolute',
          width: 77.7056,
          height: 73.8976,
          left: 1167.37,
          top: 164,
          zIndex: 3,
        }}
      />
      <img
        src="/pictures/vacancy/robot_green_icon.svg"
        alt="robot green"
        style={{
          position: 'absolute',
          width: 48.566,
          height: 46.186,
          left: 37.18,
          top: -23,
          zIndex: 3,
        }}
      />
      <img
        src="/pictures/vacancy/globe_icon.svg"
        alt="globe"
        style={{
          position: 'absolute',
          width: 49.406,
          height: 63.742,
          left: 32.2,
          top: 199.63,
          zIndex: 3,
        }}
      />
      <img
        src="/pictures/vacancy/star_black_icon.svg"
        alt="star black"
        style={{
          position: 'absolute',
          width: 51,
          height: 51,
          left: 11.22,
          top: 178,
          zIndex: 3,
        }}
      />
    </div>
  );
}; 