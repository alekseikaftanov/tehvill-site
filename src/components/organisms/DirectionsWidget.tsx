'use client';

import React, { useState } from 'react';

const directions = [
  {
    key: 'mobile',
    label: 'Мобильная разработка',
    color: '#FFFFFF',
    content: [
      {
        title: 'Мобильная разработка',
        text: [
          'Создаём мобильные приложения для iOS и Android, которые решают бизнес-задачи клиентов.',
          'Проектируем архитектуру, разрабатываем backend и frontend, обеспечиваем адаптивность под любые устройства.',
          'Внедряем современные фреймворки и подходы, чтобы гарантировать производительность, безопасность и масштабируемость решений.'
        ]
      }
    ]
  },
  {
    key: 'web',
    label: 'Веб-разработка',
    color: '#A5F04B',
    content: [
      {
        title: 'Веб-разработка',
        text: [
          'Создаём высоконагруженные веб-приложения, корпоративные порталы и сайты, которые решают бизнес-задачи клиентов.',
          'Проектируем архитектуру, разрабатываем backend и frontend, обеспечиваем адаптивность под любые устройства.',
          'Внедряем современные фреймворки и подходы, чтобы гарантировать производительность, безопасность и масштабируемость решений, а также удобство поддержки и развития продуктов в будущем.'
        ]
      }
    ]
  },
  {
    key: 'frontend',
    label: 'Frontend-разработка',
    color: '#FFFFFF',
    content: [
      {
        title: 'Frontend-разработка',
        text: [
          'Разрабатываем современные интерфейсы для web и мобильных приложений, используя React, Vue, Angular и другие технологии.',
          'Обеспечиваем высокую производительность, адаптивность и удобство для пользователя.'
        ]
      }
    ]
  },
  {
    key: 'backend',
    label: 'Backend-разработка',
    color: '#FFFFFF',
    content: [
      {
        title: 'Backend-разработка',
        text: [
          'Проектируем и реализуем надёжные серверные решения, API, интеграции с внешними сервисами.',
          'Используем современные языки и фреймворки: Node.js, Go, Python, Java, PHP.'
        ]
      }
    ]
  },
  {
    key: 'integration',
    label: 'Системная интеграция',
    color: '#FFFFFF',
    content: [
      {
        title: 'Системная интеграция',
        text: [
          'Интегрируем различные IT-системы, обеспечиваем обмен данными между сервисами, автоматизируем бизнес-процессы.'
        ]
      }
    ]
  },
  {
    key: 'corporate',
    label: 'Разработка корпоративных систем',
    color: '#FFFFFF',
    content: [
      {
        title: 'Разработка корпоративных систем',
        text: [
          'Создаём ERP, CRM, WMS, документооборот и другие корпоративные решения под задачи клиента.'
        ]
      }
    ]
  },
  {
    key: 'erp',
    label: 'Внедрение ERP',
    color: '#FFFFFF',
    content: [
      {
        title: 'Внедрение ERP',
        text: [
          'Внедряем и дорабатываем ERP-системы для автоматизации учёта, управления ресурсами и бизнес-процессами.'
        ]
      }
    ]
  },
  {
    key: 'wms',
    label: 'Внедрение WMS',
    color: '#FFFFFF',
    content: [
      {
        title: 'Внедрение WMS',
        text: [
          'Автоматизируем складские процессы, внедряем WMS-системы для управления логистикой и запасами.'
        ]
      }
    ]
  },
  {
    key: 'crm',
    label: 'Внедрение CRM',
    color: '#FFFFFF',
    content: [
      {
        title: 'Внедрение CRM',
        text: [
          'Внедряем CRM-системы для управления продажами, клиентскими отношениями и маркетингом.'
        ]
      }
    ]
  },
  {
    key: '1c',
    label: 'Интеграция 1С',
    color: '#FFFFFF',
    content: [
      {
        title: 'Интеграция 1С',
        text: [
          'Интегрируем 1С с другими системами, автоматизируем обмен данными, настраиваем учёт.'
        ]
      }
    ]
  },
  {
    key: 'docflow',
    label: 'Документооборот',
    color: '#FFFFFF',
    content: [
      {
        title: 'Документооборот',
        text: [
          'Автоматизируем электронный документооборот, интегрируем с внешними и внутренними системами.'
        ]
      }
    ]
  },
  {
    key: 'devops',
    label: 'DevOps и поддержка инфраструктуры',
    color: '#FFFFFF',
    content: [
      {
        title: 'DevOps и поддержка инфраструктуры',
        text: [
          'Внедряем CI/CD, автоматизируем инфраструктуру, обеспечиваем стабильную работу сервисов.'
        ]
      }
    ]
  },
  {
    key: 'ai',
    label: 'Искусственный интеллект и Data Science',
    color: '#FFFFFF',
    content: [
      {
        title: 'Искусственный интеллект и Data Science',
        text: [
          'Разрабатываем ML/AI-решения, внедряем Data Science для анализа данных и автоматизации.'
        ]
      }
    ]
  },
  {
    key: 'predictive',
    label: 'Предиктивная аналитика',
    color: '#FFFFFF',
    content: [
      {
        title: 'Предиктивная аналитика',
        text: [
          'Строим модели прогнозирования спроса, поведения клиентов, оптимизации бизнес-процессов.'
        ]
      }
    ]
  },
  {
    key: 'nlp',
    label: 'Обработка текстов и LLM/NLP',
    color: '#FFFFFF',
    content: [
      {
        title: 'Обработка текстов и LLM/NLP',
        text: [
          'Внедряем LLM, автоматизируем обработку текстов, анализируем отзывы, реализуем чат-боты.'
        ]
      }
    ]
  },
  {
    key: 'search',
    label: 'Интеллектуальные поисковые системы',
    color: '#FFFFFF',
    content: [
      {
        title: 'Интеллектуальные поисковые системы',
        text: [
          'Разрабатываем интеллектуальные поисковые системы с поддержкой естественного языка и AI.'
        ]
      }
    ]
  },
  {
    key: 'fraud',
    label: 'AI-антифрод системы',
    color: '#FFFFFF',
    content: [
      {
        title: 'AI-антифрод системы',
        text: [
          'Внедряем системы обнаружения мошенничества на основе искусственного интеллекта.'
        ]
      }
    ]
  },
  {
    key: 'bi',
    label: 'Инфраструктура данных и BI',
    color: '#FFFFFF',
    content: [
      {
        title: 'Инфраструктура данных и BI',
        text: [
          'Строим инфраструктуру для хранения, обработки и визуализации данных, внедряем BI-решения.'
        ]
      }
    ]
  },
];

export const DirectionsWidget: React.FC = () => {
  const [active, setActive] = useState(directions[0].key);
  const activeContent = directions.find((d) => d.key === active)?.content[0];

  return (
    <section
      className="w-[1240px] h-[827px] flex flex-col items-start gap-[40px] relative"
      style={{ isolation: 'isolate' }}
    >
      <div
        className="font-montserrat font-semibold"
        style={{
          width: 1240,
          height: 67,
          fontSize: 56,
          lineHeight: '120%',
          letterSpacing: '-0.04em',
          color: '#333',
        }}
      >
        Обзор направлений разработки
      </div>
      <div
        className="flex flex-row items-start gap-[20px] w-[1240px] h-[720px]"
      >
        {/* Правая панель — список направлений */}
        <div
          className="flex flex-row flex-wrap items-start content-start w-[646px] h-[720px]"
          style={{
            rowGap: 0,
            padding: 0,
            borderTopRightRadius: 40,
            borderBottomLeftRadius: 40,
            borderTopLeftRadius: 40,
            borderBottomRightRadius: 40,
            overflow: 'hidden',
            background: '#fff',
          }}
        >
          {directions.map((dir, idx) => {
            // Определяем позицию ячейки в сетке 2xN
            const rowCount = Math.ceil(directions.length / 2);
            const isLeftCol = idx % 2 === 0;
            const rowIdx = Math.floor(idx / 2);
            const isTopRow = rowIdx === 0;
            const isBottomRow = rowIdx === rowCount - 1;
            const isActive = dir.key === active;
            let borderRadiusStyles = {};
            if (isActive) {
              if (isLeftCol && isTopRow) {
                // Верхняя левая
                borderRadiusStyles = { borderTopLeftRadius: 40 };
              } else if (!isLeftCol && isTopRow) {
                // Верхняя правая
                borderRadiusStyles = { borderTopRightRadius: 40 };
              } else if (isLeftCol && isBottomRow) {
                // Нижняя левая
                borderRadiusStyles = { borderBottomLeftRadius: 40 };
              } else if (!isLeftCol && isBottomRow) {
                // Нижняя правая
                borderRadiusStyles = { borderBottomRightRadius: 40 };
              } else {
                // Все остальные
                borderRadiusStyles = { borderRadius: 0 };
              }
            } else {
              borderRadiusStyles = { borderRadius: 0 };
            }
            return (
              <div
                key={dir.key}
                onClick={() => setActive(dir.key)}
                className="flex flex-col justify-center items-start cursor-pointer"
                style={{
                  width: 323,
                  height: 80,
                  background: isActive ? '#A5F04B' : '#FFFFFF',
                  padding: '16px 30px',
                  gap: 16,
                  fontFamily: 'Montserrat',
                  fontWeight: 600,
                  fontSize: 20,
                  lineHeight: '120%',
                  letterSpacing: '-0.04em',
                  color: '#333',
                  boxShadow: isActive ? '0 0 0 2px #A5F04B' : 'none',
                  transition: 'background 0.2s, box-shadow 0.2s',
                  margin: 0,
                  alignSelf: 'flex-start',
                  ...borderRadiusStyles,
                }}
              >
                <span style={{ width: 263, height: 24, display: 'block' }}>{dir.label}</span>
              </div>
            );
          })}
        </div>
        {/* Левая панель — текст */}
        <div
          className="flex flex-col items-start gap-[16px] bg-[#A5F04B] rounded-[40px]"
          style={{
            width: 574,
            height: 720,
            padding: 40,
            borderRadius: 40,
            isolation: 'isolate',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Декоративные иконки */}
          <img
            src="/robot_black_icon.svg"
            alt="robot"
            style={{ position: 'absolute', top: 10, right: 56, width: 80, height: 80, zIndex: 2 }}
            aria-hidden
          />
          <img
            src="/pictures/vacancy/star_purple_icon.svg"
            alt="star"
            style={{ position: 'absolute', top: 16, right: 16, width: 48, height: 48, zIndex: 2 }}
            aria-hidden
          />
          <div
            className="font-montserrat font-semibold"
            style={{ fontSize: 56, lineHeight: '120%', letterSpacing: '-0.04em', color: '#333', marginBottom: 8 }}
          >
            {activeContent?.title}
          </div>
          {activeContent?.text.map((t, i) => (
            <div
              key={i}
              className="font-inter"
              style={{ fontWeight: 500, fontSize: 18, lineHeight: '140%', letterSpacing: '-0.01em', color: '#333', opacity: 0.8, marginBottom: 8 }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 