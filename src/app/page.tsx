import { Hero } from '@/components/organisms/Hero';
import { WidgetCard } from '@/components/molecules/WidgetCard';

const widgets = [
  {
    key: 'mobile-dev',
    title: 'Разработка мобильных приложений',
    text: 'Создаем уникальные приложения для крупного и среднего бизнеса, интегрированные с вашими IT-системами.',
    bgColor: 'bg-[#6C1EFF]',
    textColor: 'text-white',
    icon: <img src="/mobile.svg" alt="Мобильные приложения" width={20} height={20} />, 
    bottomImage: '/pictures/mobile-picture.svg',
    className: 'flex flex-col items-start p-[30px] gap-4 w-[400px] h-[500px] rounded-[40px]',
  },
];

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="max-w-6xl mx-auto py-16 px-4">
        {/* Заголовок секции */}
        <div className="mb-10">
          <h2 className="text-5xl font-semibold text-[#333333] leading-[120%] tracking-[-0.04em] mb-2">
            Создаем цифровые продукты
          </h2>
          <p className="text-xl text-[#5C5C5C] leading-[150%] tracking-[-0.04em] opacity-80">
            И делаем это круче и качественнее, чем вы ожидаете
          </p>
        </div>
        {/* Сетка карточек 3 в ряд с поддержкой row-span для masonry */}
        <div className="mb-[50px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[1fr] md:auto-rows-[270px]">
            {widgets.map((w) => (
              <WidgetCard
                key={w.key}
                bgColor={w.bgColor}
                textColor={w.textColor}
                icon={w.icon}
                title={w.title}
                text={w.text}
                className={w.className}
                bottomImage={w.bottomImage}
              />
            ))}
          </div>
        </div>
        {/* Детали, которые имеют значение */}
        {/* Удалён блок detailsWidgets */}
      </div>
    </div>
  );
}
