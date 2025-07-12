import { Hero } from '@/components/organisms/Hero';
import { WidgetCard } from '@/components/molecules/WidgetCard';
import { ServicesSlider, SimpleImageSlider } from '@/components/organisms/ServicesSlider';
import { BannerWidget } from '@/components/organisms/BannerWidget';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="w-full flex justify-center" style={{ marginTop: 60, marginBottom: 40 }}>
        <div className="flex flex-col items-start gap-[10px]" style={{ width: 1240, height: 107 }}>
          <div
            className="font-montserrat font-semibold"
            style={{ fontSize: 56, lineHeight: '120%', letterSpacing: '-0.04em', color: '#333', height: 67, width: 1240 }}
          >
            Создаем цифровые продукты
          </div>
          <div
            className="font-inter"
            style={{ fontWeight: 400, fontSize: 20, lineHeight: '150%', letterSpacing: '-0.04em', color: '#5C5C5C', opacity: 0.8, height: 30, width: 1240 }}
          >
            И делаем это круче и качественнее, чем вы ожидаете
          </div>
        </div>
      </div>
      {/* Основная секция с карточками/виджетами */}
      <div className="w-full max-w-[1240px] mx-auto flex flex-col items-start px-4">
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
      {/* Новый отдельный белый блок с заголовком и звездой */}
      <div className="w-full max-w-[1240px] min-h-[478px] mt-10 bg-white rounded-[40px] flex flex-col p-[30px] gap-6 mx-auto shadow-sm" style={{ gap: 24 }}>
        <div className="flex flex-col w-full mb-6">
          <div className="flex items-center">
            <h3
              className="font-montserrat font-semibold text-[28px] leading-[120%] text-[#333]"
              style={{ letterSpacing: '-0.04em', zIndex: 0 }}
            >
              А также, детали, которые имеют значение:
            </h3>
            <img
              src="/pictures/starStroke.svg"
              alt="Star"
              className="ml-4 w-[48px] h-[48px] select-none pointer-events-none"
              style={{ zIndex: 1, marginTop: -15 }}
            />
          </div>
          <img
            src="/pictures/underline.svg"
            alt="Underline"
            className="mt-2 w-[420px] h-[12px] select-none pointer-events-none"
            style={{ zIndex: 0, marginLeft: 150, marginTop: -5 }}
          />
        </div>
        <ServicesSlider
          widgets={[
            {
              key: 'rec',
              title: 'Рекомендательные системы',
              text: 'Разрабатываем персонализированные рекомендации для ваших пользователей на основе их поведения и предпочтений',
              bgColor: 'bg-[#333]',
              textColor: 'text-white',
              icon: '/star_icon.svg',
            },
            {
              key: 'fraud',
              title: 'AI‑Антифрод система',
              text: 'Алгоритмы на основе ИИ автоматически выявляют мошеннические операции, минимизируя финансовые риски и защищая ваш бизнес от fraudulent-активности',
              bgColor: 'bg-[#333]',
              textColor: 'text-white',
              icon: '/robot_icon.svg',
            },
            {
              key: 'reviews',
              title: 'AI‑Нейроанализ отзывов',
              text: 'Анализируем отзывы с помощью AI, определяя тональность и ключевые темы. Это поможет вам улучшать сервис на основе реальной обратной связи клиентов',
              bgColor: 'bg-[#333]',
              textColor: 'text-white',
              icon: '/text_icon.svg',
            },
            {
              key: 'data',
              title: 'Корпоративные хранилища данных',
              text: 'Создаем надежные и безопасные хранилища для ваших данных с удобным доступом',
              bgColor: 'bg-[#333]',
              textColor: 'text-white',
              icon: '/db_icon.svg',
            },
            {
              key: 'analytics',
              title: 'Клиентская аналитика',
              text: 'Проводим глубокий анализ поведения ваших клиентов: от воронки продаж до прогнозирования LTV',
              bgColor: 'bg-[#333]',
              textColor: 'text-white',
              icon: '/analitics_icon.svg',
            },
            {
              key: 'search',
              title: 'Умный поиск',
              text: 'Внедряем интеллектуальный поиск с ИИ, который понимает естественный язык и выдает релевантные результаты, улучшая пользовательский опыт',
              bgColor: 'bg-[#333]',
              textColor: 'text-white',
              icon: '/search_icon.svg',
            },
            {
              key: 'demand',
              title: 'Предсказание спроса',
              text: 'Прогнозируем спрос на ваши товары и услуги с учетом сезонности, трендов и внешних факторов',
              bgColor: 'bg-[#333]',
              textColor: 'text-white',
              icon: '/predective_icon.svg',
            },
          ]}
        />
      </div>
      <div className="w-full flex justify-center" style={{ marginTop: 120 }}>
        <div
          className="font-montserrat font-semibold"
          style={{ width: 1240, height: 112, fontSize: 56, lineHeight: '100%', letterSpacing: '-0.04em', color: '#333' }}
        >
          Разрабатываем экосистему ВкусВилл, которую вы так любите
        </div>
      </div>
      <div style={{ marginTop: 40, marginBottom: 0, width: '100%', display: 'flex', justifyContent: 'center' }}>
        <SimpleImageSlider
          images={[
            '/slider/vkusvill.svg',
            '/slider/courier.svg',
            '/slider/parthner.svg',
            '/slider/suplier.svg',
            '/slider/terminals.svg',
          ]}
        />
      </div>
      <BannerWidget />
      <div className="w-full flex justify-center" style={{ marginTop: 120 }}>
        <div
          className="font-montserrat font-semibold"
          style={{ width: 1240, height: 112, fontSize: 56, lineHeight: '100%', letterSpacing: '-0.04em', color: '#333' }}
        >
          Хороши в том что делаем
        </div>
      </div>
      {/* Группа карточек: Чистый код + High Digital Services */}
      <div className="w-full max-w-[1240px] mx-auto flex flex-row gap-5 px-4" style={{ marginTop: 0 }}>
        <WidgetCard
          bgColor="bg-white"
          textColor="text-[#333]"
          iconBorderColor="black"
          className="flex flex-col items-start p-[30px] gap-4 w-[388px] h-[292px] rounded-[40px]"
          icon={
            <div style={{ width: 40, height: 40, border: '2px solid rgba(51,51,51,0.25)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <img src="/clean_code_icon.svg" alt="Чистый код" width={22} height={22} style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} />
            </div>
          }
          title={<span className="font-montserrat" style={{ fontWeight: 600, fontSize: 28, lineHeight: '120%', letterSpacing: '-0.04em', color: '#333', height: 34 }}>Чистый код</span>}
          text={<span className="font-inter" style={{ fontWeight: 500, fontSize: 18, lineHeight: '135%', letterSpacing: '-0.01em', color: '#5C5C5C', opacity: 0.8, height: 72, display: 'block' }}>Отвечаем за качество кода, используем только лучшие технические решения.</span>}
        />
        <WidgetCard
          bgColor="bg-white"
          textColor="text-[#333]"
          iconBorderColor="black"
          className="flex flex-col items-start p-[30px] gap-4 w-[388px] h-[292px] rounded-[40px]"
          icon={
            <div style={{ width: 40, height: 40, border: '2px solid rgba(51,51,51,0.25)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <img src="/services_icon.svg" alt="High Digital Services" width={22} height={22} style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} />
            </div>
          }
          title={<span className="font-montserrat" style={{ fontWeight: 600, fontSize: 28, lineHeight: '120%', letterSpacing: '-0.04em', color: '#333', height: 34 }}>High Digital Services</span>}
          text={<span className="font-inter" style={{ fontWeight: 500, fontSize: 18, lineHeight: '135%', letterSpacing: '-0.01em', color: '#5C5C5C', opacity: 0.8, height: 72, display: 'block' }}>Входит в состав ГК Автомакон — системный интегратор передовых и наукоемких технологий</span>}
        />
        {/* Сдвоенный вертикальный виджет */}
        <div style={{ width: 424, height: 604, background: '#fff', borderRadius: 40, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: 0, flex: 'none', order: 1, flexGrow: 0 }}>
          {/* Верхняя секция */}
          <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: 30, gap: 16, width: 424, height: 290, borderBottom: '1px solid rgba(51,51,51,0.1)', borderRadius: '40px 40px 0 0', flex: 'none', order: 0, alignSelf: 'stretch', flexGrow: 0 }}>
            <div style={{ width: 40, height: 40, border: '2px solid rgba(51,51,51,0.25)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <img src="/quantity_icon.svg" alt="Quantity" width={22} height={22} style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: 0, gap: 10, width: 364, height: 174 }}>
              <span className="font-montserrat" style={{ fontWeight: 600, fontSize: 28, lineHeight: '120%', letterSpacing: '-0.04em', color: '#333', height: 68, display: 'block' }}>1000+ крутых специалистов</span>
              <span className="font-inter" style={{ fontWeight: 500, fontSize: 18, lineHeight: '135%', letterSpacing: '-0.01em', color: '#5C5C5C', opacity: 0.8, height: 96, display: 'block' }}>Команда HighStack специализируется в разработке веб-сервисов и мобильных приложений – от логики и дизайна до программирования.</span>
            </div>
          </div>
          {/* Нижняя секция */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: 30, gap: 16, width: 424, height: 314, borderRadius: '0 0 40px 40px', flex: 'none', order: 1, alignSelf: 'stretch', flexGrow: 0 }}>
            <div style={{ width: 40, height: 40, border: '2px solid rgba(51,51,51,0.25)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <img src="/team_icon.svg" alt="Team" width={22} height={22} style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: 0, gap: 10, width: 364, height: 198 }}>
              <span className="font-montserrat" style={{ fontWeight: 600, fontSize: 28, lineHeight: '120%', letterSpacing: '-0.04em', color: '#333', height: 68, display: 'block' }}>Профессиональная команда</span>
              <span className="font-inter" style={{ fontWeight: 500, fontSize: 18, lineHeight: '135%', letterSpacing: '-0.01em', color: '#5C5C5C', opacity: 0.8, height: 120, display: 'block' }}>Мы умеем работать с разными технологиями и решениями, реализовываем как локальные, так и международные проекты на одинаково высоком уровне.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



