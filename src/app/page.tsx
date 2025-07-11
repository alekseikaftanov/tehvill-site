import { Hero } from '@/components/organisms/Hero';
import { WidgetCard } from '@/components/molecules/WidgetCard';

export default function Home() {
  return (
    <>
      <Hero />
      <main className="flex justify-start items-start gap-8 py-20 px-4 max-w-7xl mx-auto">
        {/* Слева — фиолетовая карточка */}
        <WidgetCard
          bgColor="bg-[#6C1EFF]"
          textColor="text-white"
          icon={<img src="/mobile.svg" alt="Мобильные приложения" width={20} height={20} />}
          title="Разработка мобильных приложений"
          text="Создаем уникальные приложения для крупного и среднего бизнеса, интегрированные с вашими IT-системами."
          bottomImage="/pictures/mobile-picture.svg"
          className="flex flex-col items-start p-[30px] gap-4 w-[400px] h-[500px] rounded-[40px]"
        />
        {/* По центру — белая над чёрной */}
        <div className="flex flex-col gap-4">
          <WidgetCard
            bgColor="bg-white"
            textColor="text-[#333]"
            iconBorderColor="black"
            icon={<img src="/support.svg" alt="Поддержка" width={22} height={22} />}
            title="Поддержка и развитие мобильных приложений"
            text="Делаем ваше приложение идеальным для любых гаджетов"
            className="flex flex-col items-start p-[30px] gap-4 w-[400px] h-[240px] rounded-[40px]"
          />
          <WidgetCard
            bgColor="bg-[#333333]"
            textColor="text-white"
            icon={<img src="/sites.svg" alt="Веб-приложения и сайты" width={20} height={20} />}
            title="Веб-приложения и сайты"
            text="Создаем современные сайты и веб-сервисы для бизнеса любого масштаба, с уникальным дизайном и высокой производительностью."
            bottomImage="/pictures/web-picture.svg"
            className="flex flex-col items-start p-[30px] gap-4 w-[400px] h-[500px] rounded-[40px]"
          />
        </div>
        {/* Справа — жёлто-зелёная карточка */}
        <WidgetCard
          bgColor="bg-[#A5F04B]"
          textColor="text-[#333]"
          iconBorderColor="white"
          icon={<img src="/design.svg" alt="Дизайн" width={22} height={22} />}
          title={<span className="text-[#333]">Дизайн и проектирование</span>}
          text="UI/UX дизайн. Создаем и улучшаем дизайн мобильных и web–приложений, сайтов, сервисов."
          className="flex flex-col items-start p-[30px] gap-4 w-[400px] h-[500px] rounded-[40px]"
          children={<img src="/pictures/ux-ui-picture.svg" alt="UI/UX" style={{ width: '120%', maxHeight: 300, position: 'absolute', bottom: 0, right: 0, zIndex: 0 }} />}
        />
      </main>
    </>
  );
}
