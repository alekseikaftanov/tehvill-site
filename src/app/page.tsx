import { Hero } from '@/components/organisms/Hero';
import { WidgetCard } from '@/components/molecules/WidgetCard';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="w-full max-w-[1240px] mx-auto flex flex-col items-start px-4">
        {/* Секционный заголовок */}
        <div className="flex flex-col items-start gap-5 mb-5 w-full">
          <h2
            className="font-montserrat font-semibold text-[56px] leading-[120%] tracking-[-0.04em] text-[#333] w-full md:text-[44px] sm:text-[32px]"
            style={{ letterSpacing: '-0.04em', lineHeight: '120%' }}
          >
            Создаем цифровые продукты
          </h2>
          <div
            className="font-inter font-normal text-[20px] leading-[150%] tracking-[-0.04em] text-[#5C5C5C] opacity-80 w-full md:text-[16px] sm:text-[14px]"
            style={{ letterSpacing: '-0.04em', lineHeight: '150%' }}
          >
            И делаем это круче и качественнее, чем вы ожидаете
          </div>
        </div>
        <main className="flex justify-start items-start gap-5 py-5 w-full">
        {/* Слева — фиолетовая карточка */}
        <div className="flex flex-col items-start gap-5">
          <WidgetCard
            bgColor="bg-[#6C1EFF]"
            textColor="text-white"
            icon={<img src="/mobile.svg" alt="Мобильные приложения" width={20} height={20} />}
            title="Разработка мобильных приложений"
            text="Создаем уникальные приложения для крупного и среднего бизнеса, интегрированные с вашими IT-системами."
            bottomImage="/pictures/mobile-picture.svg"
            className="flex flex-col items-start p-[30px] gap-4 w-[400px] h-[500px] rounded-[40px]"
          />
          {/* Новый блок строго под фиолетовой карточкой */}
          <div
            className="bg-white rounded-[40px] w-[400px] h-[270px] flex flex-col items-start p-[30px] shadow-sm relative gap-4"
            style={{ minHeight: 270 }}
          >
            <div
              className="flex items-center justify-center border-2"
              style={{
                width: 40,
                height: 40,
                borderRadius: 12,
                border: '2px solid rgba(51,51,51,0.25)'
              }}
            >
              <img src="/1С.svg" alt="1C Icon" style={{ width: 20, height: 20 }} />
            </div>
            {/* Текстовый блок */}
            <div className="font-semibold text-2xl leading-tight text-[#333]">1C-интеграция</div>
            <div className="font-medium text-lg text-[#333] opacity-80">Интеграция бизнес-процессов и автоматизация учёта с помощью 1C.</div>
          </div>
        </div>
        {/* По центру — белая над чёрной */}
        <div className="flex flex-col gap-5">
          <WidgetCard
            bgColor="bg-white"
            textColor="text-[#333]"
            iconBorderColor="black"
            icon={<img src="/support.svg" alt="Поддержка" width={22} height={22} />}
            title="Поддержка и развитие мобильных приложений"
            text="Делаем ваше приложение идеальным для любых гаджетов"
            className="flex flex-col items-start p-[30px] gap-4 w-[400px] h-[270px] rounded-[40px]"
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
        <div className="flex flex-col items-start gap-5">
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
          {/* Новый виджет под зелёной карточкой через WidgetCard */}
          <WidgetCard
            bgColor="bg-white"
            textColor="text-[#333]"
            iconBorderColor="black"
            icon={<img src="/devops.svg" alt="Devops Icon" width={22} height={22} />}
            title="Devops"
            text="Непрерывная интеграция и непрерывная поставка программного обеспечения, автоматизация DevOps."
            className="flex flex-col items-start p-[30px] gap-4 w-[400px] h-[270px] rounded-[40px]"
          />
        </div>
      </main>
      {/* Нижние два виджета */}
      <div className="flex flex-row gap-5 w-full max-w-[1240px] mt-5">
        <WidgetCard
          bgColor="bg-white"
          textColor="text-[#333]"
          iconBorderColor="black"
          icon={<img src="/auromatization.svg" alt="Автоматизация" width={22} height={22} />}
          title="Автоматизация бизнес-процессов"
          text="Документооборот, отраслевые учетные системы, банковские системы, риск-менеджмент, CRM и многое другое"
          className="flex flex-col items-start p-[30px] gap-4 w-[610px] h-[258px] rounded-[40px]"
        />
        <WidgetCard
          bgColor="bg-white"
          textColor="text-[#333]"
          iconBorderColor="black"
          icon={<img src="/consulting.svg" alt="Консалтинг и обучение" width={22} height={22} />}
          title="Консалтинг и обучение"
          text="Консультации в области разработки программного обеспечения, проектирование архитектуры, анализ существующего кода, организация эффективной работы по Agile"
          className="flex flex-col items-start p-[30px] gap-4 w-[610px] h-[258px] rounded-[40px]"
        />
      </div>
    </div>
    </>
  );
}
