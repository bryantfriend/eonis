/* ==============================================
main.js for eONIS Landing Page
- Mobile menu, form submission
- Language splash, i18n (text + attributes)
============================================== */

// ----------------------
// Mobile Menu + Signup
// ----------------------
document.addEventListener('DOMContentLoaded', () => {
  // --- Mobile Menu ---
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // --- Email Signup Form ---
  const signupForm = document.getElementById('signup-form');
  const emailInput = document.getElementById('email-input');
  const formMessage = document.getElementById('form-message');

  if (signupForm && emailInput && formMessage) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      formMessage.textContent = t('form.success'); // localized
      formMessage.style.color = '#34D399';
      emailInput.value = '';
      setTimeout(() => { formMessage.textContent = ''; }, 3000);
    });
  }
});

// ----------------------
// i18n Setup
// ----------------------
const LANG_STORAGE_KEY = 'eonis_lang';
const FLAGS = { zh: '🇨🇳', en: '🇺🇸', ru: '🇷🇺', ky: '🇰🇬', ko: '🇰🇷', ja: '🇯🇵' };

let currentLang = 'en';

const I18N = {
  en: {
    // Header & Splash
    'lang.splash.title': 'Select your language',
    'header.lang': 'Language',

    // Nav
    'nav.problem': 'The Problem',
    'nav.tech': 'Technology',
    'nav.usecases': 'Use Cases',
    'nav.team': 'Team',
    'nav.investors': 'For Investors',

    // Hero
    'hero.title': 'Instant Clarity. Quantum Certainty.',
    'hero.subtitle': 'eONIS delivers real-time, lab-grade contaminant detection in the palm of your hand. Secure your supply chain, ensure product safety, and invest in the future of diagnostics.',
    'hero.cta.seed': 'Explore Seed Round',
    'hero.cta.tech': 'See The Tech',
    'hero.image.alt': 'EONIS Device Concept',
    'hero.video.fallback': 'Your browser does not support the video tag.',

    // Problem
    'problem.title': 'The High Cost of the Unknown',
    'problem.subtitle': 'Click on the icons below to explore the risks of traditional testing versus the benefits of the eONIS real-time solution.',
    'problem.supplychain': 'Supply Chain: Farm to Final Product',
    'problem.column.title': 'The Problem: Contamination Blindspots',

    'problem.slow.label': 'Slow Labs',
    'problem.slow.title': 'Slow & Expensive',
    'problem.slow.body': 'Centralized labs create bottlenecks, delaying results for weeks and adding significant costs for essential safety testing.',

    'problem.late.label': 'Late Testing',
    'problem.late.title': 'Reactive Approach',
    'problem.late.body': 'Testing occurs late in the supply chain, often after products have already been distributed. Risks are only caught after the public is exposed.',

    'problem.risk.label': 'Massive Risk',
    'problem.risk.title': 'Severe Consequences',
    'problem.risk.body': 'This flawed system leads to costly product recalls, brand-destroying lawsuits, and a permanent loss of consumer trust that can bankrupt a business.',

    'problem.image.alt': 'Multi-Sample Strip',

    // Solution
    'solution.title': 'The Solution: eONIS Real-Time Detection',
    'solution.instant.label': 'Instant Results',
    'solution.instant.title': 'Instant & On-Site',
    'solution.instant.body': 'Get immediate ‘pass/fail’ results for heavy metals, pesticides, mycotoxins, and more—right where you are.',
    'solution.early.label': 'Early Detection',
    'solution.early.title': 'Proactive & Accurate',
    'solution.early.body': 'Test at every critical point in the supply chain—and get accurate THC/CBD potency analysis on the spot.',
    'solution.control.label': 'Total Control',
    'solution.control.title': 'Empowered Decisions',
    'solution.control.body': 'Instantly verify product safety, protect consumers, and shield your business from catastrophic unknowns.',

    // Modal / aria
    'modal.close': 'Close',

    // Tech
    'tech.title': 'Our Breakthrough Technology Stack',
    'tech.subtitle': 'We merge four key technologies into a single, powerful diagnostic platform.',
    'tech.nano.title': 'Nano-Silica Matrix',
    'tech.nano.body': 'A proprietary, porous silica substrate that isolates and stabilizes target molecules for analysis.',
    'tech.nano.alt': 'Nano Silica Icon',
    'tech.qd.title': 'Quantum Dot Probes',
    'tech.qd.body': 'Semiconductor nanocrystals that fluoresce at specific frequencies when bound to a target molecule, acting as a light-up signal.',
    'tech.qd.alt': 'Quantum Dots Icon',
    'tech.microfluidic.title': 'Microfluidic Chip',
    'tech.microfluidic.body': 'Precisely controls the sample flow over the sensor array, ensuring repeatable and accurate measurements.',
    'tech.microfluidic.alt': 'Microfluidic Chip Diagram',
    'tech.app.title': 'AI-Powered App',
    'tech.app.body': 'Our mobile app interprets the optical data, providing a clear, actionable result and cloud-based data tracking.',
    'tech.app.alt': 'App Feedback Icon',

    // Inside device
    'inside.title': 'What’s Inside the Device?',
    'inside.body': 'Beneath the sleek exterior lies a powerful integration of quantum photonics, microfluidics, and AI-ready processing.',
    'inside.image.alt': 'EONIS Exploded View',

    // Use cases
    'usecases.title': 'Transforming Industries, Globally',
    'usecases.subtitle': 'Our first-mover advantage extends to multiple high-growth markets requiring on-the-spot quality control.',
    'usecases.cannabis.title': 'Medical Cannabis',
    'usecases.cannabis.body': 'Ensure patient safety and product consistency by testing for THC/CBD potency, pesticides, and heavy metals at every stage from cultivation to dispensary.',
    'usecases.cannabis.alt': 'Medical Cannabis',
    'usecases.food.title': 'Food Safety',
    'usecases.food.body': 'Screen produce, grain, and processed foods for mycotoxins, allergens, and chemical contaminants directly at the processing plant or import checkpoint.',
    'usecases.food.alt': 'Food Safety',
    'usecases.diagnostics.title': 'Field Diagnostics',
    'usecases.diagnostics.body': 'Enable rapid, low-cost health screening in remote areas by adapting the sensor for biomarkers in water, soil, or biological samples.',
    'usecases.diagnostics.alt': 'Field Diagnostics',
    'usecases.environment.title': 'Environmental Labs',
    'usecases.environment.body': 'Equip field agents to test water sources for heavy metals and industrial pollutants in real-time, accelerating cleanup and enforcement.',
    'usecases.environment.alt': 'Environmental Labs',

    // Team
    'team.jack.alt': 'Photo of Jack Jeong',
    'team.jack.role': 'Head of Global Partnerships',
    'team.jack.bio': 'Leader in global business development and operational scaling.',
    'team.bryant.alt': 'Photo of Bryant Friend',
    'team.bryant.role': 'Strategy Lead and IT Specialist',
    'team.bryant.bio': 'Maintains all IT systems and innovations.',
    'team.ilja.alt': 'Photo of Ilja Shnaider',
    'team.ilja.role': 'CTO',
    'team.ilja.bio': 'Pioneer in quantum dot technology. His innovations form the backbone of eONIS’s detection system.',
    'team.tarek.alt': 'Photo of Tarek Mashreki',
    'team.tarek.role': 'Lead Chemist',
    'team.tarek.bio': 'Neuroscience and biosensor expert guiding core Research and Development. Advises on biomarker detection and system accuracy.',

    // Investors
    'invest.title': 'Join Us in Defining the Future of Diagnostics',
    'invest.body': 'We are currently raising our seed round to finalize prototype development, secure key patents, and onboard pilot partners. We are seeking partners who share our vision for a safer, more transparent world.',
    'invest.cta': 'Request Investor Deck',

    // Footer
    'footer.motto': 'Quantum Certainty. In Real Time.',
    'footer.quicklinks': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.stay': 'Stay Updated',
    'footer.stay.body': 'Get the latest news on our progress and launch.',
    'footer.email.placeholder': 'Enter your email',
    'footer.signup': 'Sign Up',
    'footer.link.problem': 'Problem & Solution',
    'footer.link.tech': 'Technology',
    'footer.link.usecases': 'Use Cases',
    'footer.link.team': 'Our Team',

    // Form
    'form.success': 'Thank you for signing up!'
  },

  zh: {
    'lang.splash.title': '选择你的语言',
    'header.lang': '语言',
    'nav.problem': '问题',
    'nav.tech': '技术',
    'nav.usecases': '应用场景',
    'nav.team': '团队',
    'nav.investors': '投资者专区',
    'hero.title': '即时清晰，量子级确定性。',
    'hero.subtitle': 'eONIS 将实时、实验室级别的污染物检测带到您手中。保障供应链、确保产品安全，并投资诊断的未来。',
    'hero.cta.seed': '了解种子轮',
    'hero.cta.tech': '查看技术',
    'hero.image.alt': 'EONIS 设备概念图',
    'hero.video.fallback': '您的浏览器不支持 video 标签。',
    'problem.title': '未知的高成本',
    'problem.subtitle': '点击下方图标，了解传统检测的风险与 eONIS 实时方案的优势。',
    'problem.supplychain': '供应链：从农场到成品',
    'problem.column.title': '问题：污染盲区',
    'problem.slow.label': '实验室缓慢',
    'problem.slow.title': '缓慢且昂贵',
    'problem.slow.body': '中心化实验室造成瓶颈，结果需数周且安全检测成本高昂。',
    'problem.late.label': '测试滞后',
    'problem.late.title': '被动式方法',
    'problem.late.body': '测试发生在供应链后端，产品常已分发，风险在公众暴露后才被发现。',
    'problem.risk.label': '巨大风险',
    'problem.risk.title': '严重后果',
    'problem.risk.body': '这套模式导致昂贵召回、诉讼及品牌信任流失，甚至拖垮企业。',
    'solution.title': '解决方案：eONIS 实时检测',
    'solution.instant.label': '即时结果',
    'solution.instant.title': '即时与现场',
    'solution.instant.body': '在现场即可获得重金属、农残、真菌毒素等项目的即时“合格/不合格”结果。',
    'solution.early.label': '早期检测',
    'solution.early.title': '主动且准确',
    'solution.early.body': '在供应链各关键点进行检测，并即时获得准确的 THC/CBD 含量分析。',
    'solution.control.label': '完全掌控',
    'solution.control.title': '赋能决策',
    'solution.control.body': '立即验证产品安全，保护消费者，避免灾难性未知。',
    'problem.image.alt': '多样本测试条',
    'modal.close': '关闭',
    'tech.title': '我们的突破性技术栈',
    'tech.subtitle': '将四项关键技术融合为一个强大的诊断平台。',
    'tech.nano.title': '纳米二氧化硅矩阵',
    'tech.nano.body': '专有多孔硅基质，用于分离并稳定目标分子以进行分析。',
    'tech.nano.alt': '纳米二氧化硅图标',
    'tech.qd.title': '量子点探针',
    'tech.qd.body': '当与目标分子结合时按特定频率发光的半导体纳米晶，用作光学信号。',
    'tech.qd.alt': '量子点图标',
    'tech.microfluidic.title': '微流控芯片',
    'tech.microfluidic.body': '精确控制样品在传感阵列上的流动，保证重复性与准确性。',
    'tech.microfluidic.alt': '微流控芯片示意图',
    'tech.app.title': 'AI 驱动应用',
    'tech.app.body': '移动应用解析光学数据，给出清晰可行动结果，并提供云端数据追踪。',
    'tech.app.alt': '应用反馈图标',
    'inside.title': '设备内部有什么？',
    'inside.body': '在优雅外观下，集成了量子光子学、微流控与面向 AI 的处理能力。',
    'inside.image.alt': 'EONIS 爆炸图',
    'usecases.title': '赋能全球各行业',
    'usecases.subtitle': '我们的先发优势覆盖多个需要现场质控的高增长市场。',
    'usecases.cannabis.title': '医用大麻',
    'usecases.cannabis.body': '在从种植到药房的每一环节检测 THC/CBD 含量、农残与重金属，确保安全与一致性。',
    'usecases.cannabis.alt': '医用大麻',
    'usecases.food.title': '食品安全',
    'usecases.food.body': '在加工厂或进口关口直接筛查农产品、粮食与加工食品的真菌毒素、过敏原和化学污染物。',
    'usecases.food.alt': '食品安全',
    'usecases.diagnostics.title': '现场诊断',
    'usecases.diagnostics.body': '通过适配传感器用于水、土壤或生物样本的生物标志物，实现偏远地区快速低成本筛查。',
    'usecases.diagnostics.alt': '现场诊断',
    'usecases.environment.title': '环境实验',
    'usecases.environment.body': '让现场人员实时检测水源中的重金属和工业污染物，加速整治与执法。',
    'usecases.environment.alt': '环境实验室',
    'team.jack.alt': 'Jack Jeong 照片',
    'team.jack.role': '全球合作伙伴负责人',
    'team.jack.bio': '专注全球业务拓展与运营规模化。',
    'team.bryant.alt': 'Bryant Friend 照片',
    'team.bryant.role': '战略负责人与 IT 专家',
    'team.bryant.bio': '维护全部 IT 系统与创新。',
    'team.ilja.alt': 'Ilja Shnaider 照片',
    'team.ilja.role': '首席技术官（CTO）',
    'team.ilja.bio': '量子点技术先驱，其创新构成 eONIS 检测系统的核心。',
    'team.tarek.alt': 'Tarek Mashreki 照片',
    'team.tarek.role': '首席化学师',
    'team.tarek.bio': '神经科学与生物传感专家，主导核心研发，并为生物标志物检测与系统准确性提供指导。',
    'invest.title': '一起定义诊断的未来',
    'invest.body': '我们正在进行种子轮融资，以完成原型开发、获得核心专利并引入试点合作伙伴。欢迎与我们共享更安全、更透明世界愿景的伙伴。',
    'invest.cta': '索取投资者资料',
    'footer.motto': '量子级确定性。实时呈现。',
    'footer.quicklinks': '快速链接',
    'footer.contact': '联系方式',
    'footer.stay': '订阅更新',
    'footer.stay.body': '获取我们的最新进展与发布信息。',
    'footer.email.placeholder': '请输入邮箱',
    'footer.signup': '订阅',
    'footer.link.problem': '问题与解决方案',
    'footer.link.tech': '技术',
    'footer.link.usecases': '应用场景',
    'footer.link.team': '我们的团队',
    'form.success': '感谢订阅！'
  },

  ru: {
    'lang.splash.title': 'Выберите язык',
    'header.lang': 'Язык',
    'nav.problem': 'Проблема',
    'nav.tech': 'Технологии',
    'nav.usecases': 'Сценарии применения',
    'nav.team': 'Команда',
    'nav.investors': 'Для инвесторов',
    'hero.title': 'Мгновенная ясность. Квантовая уверенность.',
    'hero.subtitle': 'eONIS обеспечивает результаты лабораторного уровня в реальном времени прямо у вас в руках. Защитите цепочку поставок, обеспечьте безопасность продукта и инвестируйте в будущее диагностики.',
    'hero.cta.seed': 'Изучить раунд Seed',
    'hero.cta.tech': 'Посмотреть технологию',
    'hero.image.alt': 'Концепт-изображение устройства EONIS',
    'hero.video.fallback': 'Ваш браузер не поддерживает тег video.',
    'problem.title': 'Высокая цена неопределённости',
    'problem.subtitle': 'Нажмите на иконки ниже, чтобы сравнить риски традиционного тестирования с преимуществами решения eONIS в реальном времени.',
    'problem.supplychain': 'Цепочка поставок: от фермы до готового продукта',
    'problem.column.title': 'Проблема: слепые зоны загрязнения',
    'problem.slow.label': 'Медленные лаборатории',
    'problem.slow.title': 'Медленно и дорого',
    'problem.slow.body': 'Централизованные лаборатории создают узкие места: ожидание результатов неделями и значительные затраты на критически важные проверки.',
    'problem.late.label': 'Позднее тестирование',
    'problem.late.title': 'Реактивный подход',
    'problem.late.body': 'Тестирование проводится на поздних этапах цепочки поставок — часто уже после распределения продукции. Риски выявляются, когда потребители уже подверглись воздействию.',
    'problem.risk.label': 'Огромные риски',
    'problem.risk.title': 'Тяжёлые последствия',
    'problem.risk.body': 'Такая система приводит к дорогим отзывам продукции, разрушительным искам и утрате доверия к бренду, что может обанкротить бизнес.',
    'solution.title': 'Решение: eONIS — обнаружение в реальном времени',
    'solution.instant.label': 'Мгновенные результаты',
    'solution.instant.title': 'Моментально и на месте',
    'solution.instant.body': 'Получайте «годен/негоден» по тяжёлым металлам, пестицидам, микотоксинам и др. прямо там, где вы находитесь.',
    'solution.early.label': 'Раннее выявление',
    'solution.early.title': 'Проактивно и точно',
    'solution.early.body': 'Тестируйте в каждой критической точке цепочки поставок и получайте точный анализ THC/CBD на месте.',
    'solution.control.label': 'Полный контроль',
    'solution.control.title': 'Уполномоченные решения',
    'solution.control.body': 'Немедленно подтверждайте безопасность продукта, защищайте потребителей и бизнес от катастрофической неопределённости.',
    'problem.image.alt': 'Мульти-образцовые тест-полоски',
    'modal.close': 'Закрыть',
    'tech.title': 'Наш прорывной технологический стек',
    'tech.subtitle': 'Мы объединяем четыре ключевые технологии в единую мощную диагностическую платформу.',
    'tech.nano.title': 'Матрица из нано-кремния',
    'tech.nano.body': 'Собственная пористая кремниевая подложка изолирует и стабилизирует целевые молекулы для анализа.',
    'tech.nano.alt': 'Иконка нано-кремния',
    'tech.qd.title': 'Зонды на квантовых точках',
    'tech.qd.body': 'Полупроводниковые нанокристаллы, которые светятся на определённых частотах при связывании с целевой молекулой.',
    'tech.qd.alt': 'Иконка квантовых точек',
    'tech.microfluidic.title': 'Микрофлюидный чип',
    'tech.microfluidic.body': 'Точно управляет потоком образца по сенсорному массиву, обеспечивая воспроизводимость и точность.',
    'tech.microfluidic.alt': 'Схема микрофлюидного чипа',
    'tech.app.title': 'Приложение на базе ИИ',
    'tech.app.body': 'Мобильное приложение интерпретирует оптические данные, выдаёт понятный результат и ведёт облачный учёт.',
    'tech.app.alt': 'Иконка обратной связи приложения',
    'inside.title': 'Что внутри устройства?',
    'inside.body': 'Под элегантным корпусом — интеграция квантовой фотоники, микрофлюидики и обработки, готовой к ИИ.',
    'inside.image.alt': 'Взрыв-схема EONIS',
    'usecases.title': 'Трансформация отраслей по всему миру',
    'usecases.subtitle': 'Наше преимущество первопроходца распространяется на рынки с высоким ростом, где требуется контроль качества на месте.',
    'usecases.cannabis.title': 'Медицинская каннабис-продукция',
    'usecases.cannabis.body': 'Обеспечьте безопасность и стабильность продукта: тестируйте содержание THC/CBD, пестициды и тяжёлые металлы на каждом этапе — от выращивания до аптеки.',
    'usecases.cannabis.alt': 'Медицинская каннабис-продукция',
    'usecases.food.title': 'Пищевая безопасность',
    'usecases.food.body': 'Проводите скрининг сельхозпродукции, зерна и готовых продуктов на микотоксины, аллергены и химические загрязнители прямо на заводе или в пункте ввоза.',
    'usecases.food.alt': 'Пищевая безопасность',
    'usecases.diagnostics.title': 'Полевые диагностики',
    'usecases.diagnostics.body': 'Быстрый и недорогой скрининг в удалённых районах благодаря адаптации сенсора для биомаркеров в воде, почве или биообразцах.',
    'usecases.diagnostics.alt': 'Полевые диагностики',
    'usecases.environment.title': 'Экологические лаборатории',
    'usecases.environment.body': 'Оснастите сотрудников для оперативного анализа тяжёлых металлов и промышленных загрязнителей в воде — ускоряйте очистку и контроль.',
    'usecases.environment.alt': 'Экологические лаборатории',
    'team.jack.alt': 'Фото Jack Jeong',
    'team.jack.role': 'Руководитель глобальных партнёрств',
    'team.jack.bio': 'Лидер в области глобального развития бизнеса и масштабирования операций.',
    'team.bryant.alt': 'Фото Bryant Friend',
    'team.bryant.role': 'Руководитель стратегии и IT-специалист',
    'team.bryant.bio': 'Обеспечивает работу всех IT-систем и инноваций.',
    'team.ilja.alt': 'Фото Ilja Shnaider',
    'team.ilja.role': 'Технический директор (CTO)',
    'team.ilja.bio': 'Пионер технологий квантовых точек; его разработки — основа системы обнаружения eONIS.',
    'team.tarek.alt': 'Фото Tarek Mashreki',
    'team.tarek.role': 'Ведущий химик',
    'team.tarek.bio': 'Эксперт по нейронауке и биосенсорам; курирует R&D и точность системы.',
    'invest.title': 'Присоединяйтесь к формированию будущего диагностики',
    'invest.body': 'Мы привлекаем сид-раунд для завершения прототипа, защиты ключевых патентов и запуска пилотов. Ищем партнёров, разделяющих наше видение более безопасного и прозрачного мира.',
    'invest.cta': 'Запросить материалы для инвесторов',
    'footer.motto': 'Квантовая уверенность. В реальном времени.',
    'footer.quicklinks': 'Быстрые ссылки',
    'footer.contact': 'Контакты',
    'footer.stay': 'Будьте в курсе',
    'footer.stay.body': 'Получайте новости о нашем прогрессе и запуске.',
    'footer.email.placeholder': 'Введите ваш e-mail',
    'footer.signup': 'Подписаться',
    'footer.link.problem': 'Проблема и решение',
    'footer.link.tech': 'Технологии',
    'footer.link.usecases': 'Сценарии применения',
    'footer.link.team': 'Наша команда',
    'form.success': 'Спасибо за подписку!'
  },

  ky: {
    'lang.splash.title': 'Тилди тандаңыз',
    'header.lang': 'Тил',
    'nav.problem': 'Маселе',
    'nav.tech': 'Технология',
    'nav.usecases': 'Колдонуу тармактары',
    'nav.team': 'Команда',
    'nav.investors': 'Инвесторлор үчүн',
    'hero.title': 'Дароо тактык. Кванттык ишеним.',
    'hero.subtitle': 'eONIS реал убакытта лаборатория деңгээлинде анализ жасайт. Жеткирүү чынжырын коргоңуз, коопсуздукту камсыз кылыңыз жана диагностиканын келечегине инвестиция салыңыз.',
    'hero.cta.seed': 'Seed раундун карап чыгуу',
    'hero.cta.tech': 'Технологияны көрүү',
    'hero.image.alt': 'EONIS түзмөгүнүн концепти',
    'hero.video.fallback': 'Браузериңиз video тегин колдобойт.',
    'problem.title': 'Белгисиздиктин жогорку баасы',
    'problem.subtitle': 'Төмөндөгү иконкаларды басып, салттуу тесттердин коркунучтарын жана eONIS реал убакыт чечиминин артыкчылыктарын көрүңүз.',
    'problem.supplychain': 'Жеткирүү чынжыры: фермадан акыркы продуктка чейин',
    'problem.column.title': 'Маселе: булгануунун сокур чекиттери',
    'problem.slow.label': 'Жай лабораториялар',
    'problem.slow.title': 'Жай жана кымбат',
    'problem.slow.body': 'Борборлоштурулган лабораториялар тыгын жаратат: жыйынтыктар жумалап күтүлөт жана коопсуздук текшерүүлөрү кымбатка түшөт.',
    'problem.late.label': 'Кеч тестирлөө',
    'problem.late.title': 'Реактивдүү ыкма',
    'problem.late.body': 'Тестирлөө чынжырдын аягында жүргүзүлөт — көбүнчө продукция тарагандан кийин. Коркунучтар коом ачыкка чыккандан кийин гана табылат.',
    'problem.risk.label': 'Чоң тобокелдик',
    'problem.risk.title': 'Оор кесепеттер',
    'problem.risk.body': 'Бул система кымбат кайтарууларга, сот иштерине жана брендге ишенимдин жоголушуна алып келип, бизнести кыйратып коюшу мүмкүн.',
    'solution.title': 'Чечим: eONIS — реал убакыттагы аныктоо',
    'solution.instant.label': 'Дароо жыйынтык',
    'solution.instant.title': 'Дароо жана жерде',
    'solution.instant.body': 'Оор металлдар, пестициддер, микотоксиндер ж.б. боюнча «өттү/өтпөдү» жыйынтыгын ошол жерде эле алыңыз.',
    'solution.early.label': 'Эрте аныктоо',
    'solution.early.title': 'Проактивдүү жана так',
    'solution.early.body': 'Жеткирүү чынжырынын ар бир маанилүү чекитинде тест жасап, THC/CBD курамын так анализдеңиз.',
    'solution.control.label': 'Толук көзөмөл',
    'solution.control.title': 'Ыкчам чечимдер',
    'solution.control.body': 'Продукт коопсуздугун заматта ырастаңыз, керектөөчүлөрдү жана бизнесиңизди белгисиздиктен коргоңуз.',
    'problem.image.alt': 'Көп үлгүлүү тест тилке',
    'modal.close': 'Жабуу',
    'tech.title': 'Бузуп кирген технологиялык стек',
    'tech.subtitle': 'Төрт негизги технологияны бир күчтүү диагностикалык платформага бириктиребиз.',
    'tech.nano.title': 'Нано-кремний матрицасы',
    'tech.nano.body': 'Максаттуу молекулаларды бөлүп, турукташтыруучу менчик тешикчелүү кремний субстраты.',
    'tech.nano.alt': 'Нано-кремний иконкасы',
    'tech.qd.title': 'Кванттык чекит зонддору',
    'tech.qd.body': 'Максаттуу молекула менен байланышка киргенде белгилүү жыштыктарда жаркылдаган жарым өткөргүч нанокристаллдар.',
    'tech.qd.alt': 'Кванттык чекит иконкасы',
    'tech.microfluidic.title': 'Микрофлюиддик чип',
    'tech.microfluidic.body': 'Үлгүнүн агымын сенсор массивинин үстүнөн так башкарат, кайталоону жана тактыкты камсыздайт.',
    'tech.microfluidic.alt': 'Микрофлюиддик чип схемасы',
    'tech.app.title': 'ЖИ негизиндеги колдонмо',
    'tech.app.body': 'Мобилдик колдонмо оптикалык маалыматты чечмелеп, так натыйжа берет жана булуттагы маалыматтарды жүргүзөт.',
    'tech.app.alt': 'Колдонмо иконкасы',
    'inside.title': 'Түзмөктүн ичинде эмне бар?',
    'inside.body': 'Суюк дизайн ичинде кванттык фотоника, микрофлюидика жана ЖИга даяр иштетүү бириктирилген.',
    'inside.image.alt': 'EONISтин жарылмалы көрүнүшү',
    'usecases.title': 'Тармактарды дүйнө жүзү боюнча өзгөртүү',
    'usecases.subtitle': 'Жеринде сапатты көзөмөлдөөнү талап кылган жогорку өсүү рыногунда биринчи болуп кирүү артыкчылыгыбыз бар.',
    'usecases.cannabis.title': 'Медициналык каннабис',
    'usecases.cannabis.body': 'Өсүмдүктөн дарыканага чейинки ар бир этапта THC/CBD курамын, пестициддерди жана оор металлдарды текшериңиз.',
    'usecases.cannabis.alt': 'Медициналык каннабис',
    'usecases.food.title': 'Тамак-аш коопсуздугу',
    'usecases.food.body': 'Иштетүүчү заводдо же импорт пунктунда айыл чарба продукциясын, данды жана азыктарды микотоксиндерге, аллергендерге жана химиялык булгоочуларга текшериңиз.',
    'usecases.food.alt': 'Тамак-аш коопсуздугу',
    'usecases.diagnostics.title': 'Талаа диагностикасы',
    'usecases.diagnostics.body': 'Сенсорду сууга, топуракка же биологиялык үлгүлөргө ылайыкташтырып, алыскы аймактарда ылдам жана арзан скрининг жасаңыз.',
    'usecases.diagnostics.alt': 'Талаа диагностикасы',
    'usecases.environment.title': 'Экологиялык лабораториялар',
    'usecases.environment.body': 'Агенттерди суу булактарындагы оор металлдарды жана өнөр жай булгоочуларын реал убакытта аныктоого жабдыктаңыз.',
    'usecases.environment.alt': 'Экологиялык лабораториялар',
    'team.jack.alt': 'Jack Jeong сүрөтү',
    'team.jack.role': 'Глобалдык өнөктөштүктөр башчысы',
    'team.jack.bio': 'Глобалдык бизнесди өнүктүрүү жана операцияларды масштабдоо боюнча лидер.',
    'team.bryant.alt': 'Bryant Friend сүрөтү',
    'team.bryant.role': 'Стратегия жетекчиси жана IT адиси',
    'team.bryant.bio': 'Бардык IT системаларын жана инновацияларын колдойт.',
    'team.ilja.alt': 'Ilja Shnaider сүрөтү',
    'team.ilja.role': 'Техникалык директор (CTO)',
    'team.ilja.bio': 'Кванттык чекит технологиясынын пионери; анын жаңылыктары eONIS системасынын өзөгүн түзөт.',
    'team.tarek.alt': 'Tarek Mashreki сүрөтү',
    'team.tarek.role': 'Башкы химик',
    'team.tarek.bio': 'Нейроилим жана биосенсор адиси; негизги R&Dни жетектейт жана тактык боюнча кеңеш берет.',
    'invest.title': 'Диагностиканын келечегин бирге аныктайлы',
    'invest.body': 'Прототипти бүтүрүү, негизги патенттерди бекемдөө жана пилот өнөктөштөрдү кошуу үчүн seed раунду жүрүүдө.',
    'invest.cta': 'Инвестор материалын сураңыз',
    'footer.motto': 'Кванттык ишеним. Реал убакытта.',
    'footer.quicklinks': 'Ыкчам шилтемелер',
    'footer.contact': 'Байланыш',
    'footer.stay': 'Жаңылыктарды алыңыз',
    'footer.stay.body': 'Прогресс жана ишке киргизүү боюнча акыркы жаңылыктар.',
    'footer.email.placeholder': 'Электрондук почтаңызды киргизиңиз',
    'footer.signup': 'Жазылуу',
    'footer.link.problem': 'Маселе & Чечим',
    'footer.link.tech': 'Технология',
    'footer.link.usecases': 'Колдонуу тармактары',
    'footer.link.team': 'Командабыз',
    'form.success': 'Жазылганыңыз үчүн рахмат!'
  },

  ko: {
    'lang.splash.title': '언어를 선택하세요',
    'header.lang': '언어',
    'nav.problem': '문제',
    'nav.tech': '기술',
    'nav.usecases': '활용 사례',
    'nav.team': '팀',
    'nav.investors': '투자자용',
    'hero.title': '즉각적 명확성. 양자급 확실성.',
    'hero.subtitle': 'eONIS는 손안에서 실시간, 실험실급 오염 물질 검출을 제공합니다. 공급망을 보호하고 제품 안전을 보장하며 진단의 미래에 투자하세요.',
    'hero.cta.seed': '시드 라운드 보기',
    'hero.cta.tech': '기술 보기',
    'hero.image.alt': 'EONIS 장치 컨셉 이미지',
    'hero.video.fallback': '브라우저가 video 태그를 지원하지 않습니다.',
    'problem.title': '알 수 없음의 높은 비용',
    'problem.subtitle': '아래 아이콘을 눌러 전통적 검사 위험과 eONIS 실시간 솔루션의 장점을 비교해 보세요.',
    'problem.supplychain': '공급망: 농장부터 최종 제품까지',
    'problem.column.title': '문제: 오염의 블라인드 스폿',
    'problem.slow.label': '느린 검사실',
    'problem.slow.title': '느리고 비용이 큼',
    'problem.slow.body': '중앙화된 검사실은 병목을 만들고 결과를 수주간 지연시키며 필수 안전 검사 비용을 높입니다.',
    'problem.late.label': '지연된 테스트',
    'problem.late.title': '사후 대응 접근',
    'problem.late.body': '테스트가 공급망 후반부에서 이뤄져 제품 유통 후에야 위험이 발견되는 경우가 많습니다.',
    'problem.risk.label': '막대한 위험',
    'problem.risk.title': '심각한 결과',
    'problem.risk.body': '이 체계는 고비용 리콜과 소송, 브랜드 신뢰 상실을 초래해 사업을 위태롭게 할 수 있습니다.',
    'solution.title': '해결책: eONIS 실시간 검출',
    'solution.instant.label': '즉시 결과',
    'solution.instant.title': '즉시·현장',
    'solution.instant.body': '중금속, 농약, 마이코톡신 등에 대해 현장에서 곧바로 “합격/불합격”을 제공합니다.',
    'solution.early.label': '조기 검출',
    'solution.early.title': '선제적이고 정확함',
    'solution.early.body': '공급망의 핵심 지점마다 검사하고, 현장에서 정확한 THC/CBD 함량 분석을 수행합니다.',
    'solution.control.label': '완전한 통제',
    'solution.control.title': '판단에 힘을',
    'solution.control.body': '제품 안전을 즉시 검증하고 소비자와 비즈니스를 불확실성으로부터 보호하세요.',
    'problem.image.alt': '다중 샘플 스트립',
    'modal.close': '닫기',
    'tech.title': '혁신적 기술 스택',
    'tech.subtitle': '네 가지 핵심 기술을 하나의 강력한 진단 플랫폼으로 통합합니다.',
    'tech.nano.title': '나노 실리카 매트릭스',
    'tech.nano.body': '분석을 위해 표적 분자를 분리·안정화하는 독자적 다공성 실리카 기판.',
    'tech.nano.alt': '나노 실리카 아이콘',
    'tech.qd.title': '양자점 프로브',
    'tech.qd.body': '표적 분자에 결합하면 특정 파장에서 발광하는 반도체 나노결정.',
    'tech.qd.alt': '양자점 아이콘',
    'tech.microfluidic.title': '마이크로플루이딕 칩',
    'tech.microfluidic.body': '센서 배열 위 샘플 흐름을 정밀 제어해 재현성과 정확성을 확보합니다.',
    'tech.microfluidic.alt': '마이크로플루이딕 칩 도해',
    'tech.app.title': 'AI 기반 앱',
    'tech.app.body': '광학 데이터를 해석해 명확한 결과를 제공하고, 클라우드로 데이터를 추적합니다.',
    'tech.app.alt': '앱 피드백 아이콘',
    'inside.title': '장치 내부는?',
    'inside.body': '세련된 외형 아래, 양자 광자학·마이크ро플루이딕스·AI 준비 처리가 통합되어 있습니다.',
    'inside.image.alt': 'EONIS 분해도',
    'usecases.title': '전 세계 산업을 혁신',
    'usecases.subtitle': '현장 품질관리가 필요한 고성장 시장 전반에서 선도적 우위를 보유합니다.',
    'usecases.cannabis.title': '의료용 대마',
    'usecases.cannabis.body': '재배부터 판매까지 모든 단계에서 THC/CBD 함량, 농약, 중금속을 검사해 안전성과 일관성을 보장하세요.',
    'usecases.cannabis.alt': '의료용 대마',
    'usecases.food.title': '식품 안전',
    'usecases.food.body': '가공공장이나 수입 통관 지점에서 곧바로 곰팡이독소, 알레르겐, 화학 오염을 스크리닝합니다.',
    'usecases.food.alt': '식품 안전',
    'usecases.diagnostics.title': '현장 진단',
    'usecases.diagnostics.body': '센서를 수질·토양·생물 샘플의 바이오마커에 맞게 적용해, 외딴 지역에서도 빠르고 저렴한 스크리닝을 구현합니다.',
    'usecases.diagnostics.alt': '현장 진단',
    'usecases.environment.title': '환경 분석',
    'usecases.environment.body': '현장 요원이 수중 중금属과 산업 오염원을 실시간으로 검사해 정화와 집행을 가속합니다.',
    'usecases.environment.alt': '환경 연구실',
    'team.jack.alt': 'Jack Jeong 사진',
    'team.jack.role': '글로벌 파트너십 총괄',
    'team.jack.bio': '글로벌 사업 개발과 운영 스케일업을 이끕니다.',
    'team.bryant.alt': 'Bryant Friend 사진',
    'team.bryant.role': '전략 리드 & IT 전문가',
    'team.bryant.bio': '모든 IT 시스템과 혁신을 관리합니다.',
    'team.ilja.alt': 'Ilja Shnaider 사진',
    'team.ilja.role': 'CTO',
    'team.ilja.bio': '양자점 기술의 개척자. 그의 혁신은 eONIS 검출 시스템의 근간입니다.',
    'team.tarek.alt': 'Tarek Mashreki 사진',
    'team.tarek.role': '수석 화학자',
    'team.tarek.bio': '신경과학·바이오센서 전문가로 핵심 R&D를 이끌며 바이오마커 검출과 정확성을 자문합니다.',
    'invest.title': '진단의 미래를 함께 정의하세요',
    'invest.body': '프로토타입 완성, 핵심 특허 확보, 파일럿 파트너 온보딩을 위해 시드 라운드를 진행 중입니다.',
    'invest.cta': '투자 자료 요청',
    'footer.motto': '양자급 확실성. 실시간.',
    'footer.quicklinks': '빠른 링크',
    'footer.contact': '연락처',
    'footer.stay': '최신 소식 받기',
    'footer.stay.body': '진행 상황과 출시 소식을 받아보세요.',
    'footer.email.placeholder': '이메일을 입력하세요',
    'footer.signup': '가입',
    'footer.link.problem': '문제 & 해결',
    'footer.link.tech': '기술',
    'footer.link.usecases': '활용 사례',
    'footer.link.team': '팀 소개',
    'form.success': '가입해 주셔서 감사합니다!'
  },

  ja: {
    'lang.splash.title': '言語を選択してください',
    'header.lang': '言語',
    'nav.problem': '課題',
    'nav.tech': '技術',
    'nav.usecases': 'ユースケース',
    'nav.team': 'チーム',
    'nav.investors': '投資家向け',
    'hero.title': '即時の明瞭さ。量子レベルの確実性。',
    'hero.subtitle': 'eONIS は手のひらサイズで、実験室レベルのリアルタイム検出を実現します。サプライチェーンを守り、製品の安全を確保し、診断の未来に投資しましょう。',
    'hero.cta.seed': 'シードラウンドを見る',
    'hero.cta.tech': '技術を見る',
    'hero.image.alt': 'EONIS デバイスのコンセプト画像',
    'hero.video.fallback': 'お使いのブラウザは video タグに対応していません。',
    'problem.title': '不確実性の高い代償',
    'problem.subtitle': '下のアイコンをクリックすると、従来型検査のリスクと eONIS のリアルタイムソリューションの利点を比較できます。',
    'problem.supplychain': 'サプライチェーン：農場から最終製品まで',
    'problem.column.title': '課題：汚染のブラインドスポット',
    'problem.slow.label': '遅いラボ',
    'problem.slow.title': '遅くて高コスト',
    'problem.slow.body': '集中型ラボはボトルネックとなり、結果は数週間遅れ、重要な安全検査のコストを押し上げます。',
    'problem.late.label': '遅い検査',
    'problem.late.title': '事後対応型アプローチ',
    'problem.late.body': '供給網の後工程で検査が行われるため、製品流通後にリスクが判明することが多いのです。',
    'problem.risk.label': '甚大なリスク',
    'problem.risk.title': '深刻な結果',
    'problem.risk.body': 'この仕組みは高額なリコールや訴訟、ブランド信頼の喪失を招き、事業を破綻に追い込む可能性があります。',
    'solution.title': '解決策：eONIS リアルタイム検出',
    'solution.instant.label': '即時結果',
    'solution.instant.title': '即時・現場',
    'solution.instant.body': '重金属、農薬、マイコトキシンなどを現場でその場で「合否」判定します。',
    'solution.early.label': '早期検出',
    'solution.early.title': '先回りで正確',
    'solution.early.body': 'サプライチェーンの各要所で検査し、その場で正確な THC/CBD 含有量を分析します。',
    'solution.control.label': '完全なコントロール',
    'solution.control.title': '判断に力を',
    'solution.control.body': '製品の安全性を即座に検証し、消費者と事業を不確実性から守ります。',
    'problem.image.alt': '複数サンプル用ストリップ',
    'modal.close': '閉じる',
    'tech.title': '画期的なテクノロジースタック',
    'tech.subtitle': '4 つの中核技術を一つの強力な診断プラットフォームに統合します。',
    'tech.nano.title': 'ナノシリカマトリクス',
    'tech.nano.body': '解析のために標的分子を分離・安定化する独自の多孔質シリカ基材。',
    'tech.nano.alt': 'ナノシリカのアイコン',
    'tech.qd.title': '量子ドットプローブ',
    'tech.qd.body': '標的分子に結合すると特定の周波数で発光する半導体ナノ結晶。',
    'tech.qd.alt': '量子ドットのアイコン',
    'tech.microfluidic.title': 'マイクロ流体チップ',
    'tech.microfluidic.body': 'センサー配列上のサンプル流れを精密制御し、再現性と精度を確保します。',
    'tech.microfluidic.alt': 'マイクロ流体チップの図',
    'tech.app.title': 'AI 搭載アプリ',
    'tech.app.body': '光学データを解釈して明確で実行可能な結果を提示し、クラウドでデータを追跡します。',
    'tech.app.alt': 'アプリのフィードバックアイコン',
    'inside.title': 'デバイスの中身は？',
    'inside.body': '洗練された外装の内側に、量子フォトニクス・マイクロ流体・AI 対応処理が統合されています。',
    'inside.image.alt': 'EONIS の分解図',
    'usecases.title': '産業を世界規模で変革',
    'usecases.subtitle': '現場での品質管理が求められる成長市場全般で、先行者優位を発揮します。',
    'usecases.cannabis.title': '医療用カンナビス',
    'usecases.cannabis.body': '栽培から薬局までの各工程で、THC/CBD 含有量・農薬・重金属を検査し、安全性と一貫性を確保します。',
    'usecases.cannabis.alt': '医療用カンナビス',
    'usecases.food.title': '食品安全',
    'usecases.food.body': '加工工場や輸入検査地点で、マイコトキシン・アレルゲン・化学汚染をその場でスクリーニングします。',
    'usecases.food.alt': '食品安全',
    'usecases.diagnostics.title': '現地診断',
    'usecases.diagnostics.body': 'センサーを水・土壌・生体試料のバイオマーカーに適合させ、遠隔地でも迅速かつ低コストのスクリーニングを実現します。',
    'usecases.diagnostics.alt': '現地診断',
    'usecases.environment.title': '環境ラボ',
    'usecases.environment.body': '現場要員が水中の重金属や工業汚染物質をリアルタイムに検査し、浄化と規制執行を加速します。',
    'usecases.environment.alt': '環境ラボ',
    'team.jack.alt': 'Jack Jeong の写真',
    'team.jack.role': 'グローバルパートナーシップ責任者',
    'team.jack.bio': 'グローバル事業開発と運用スケール化のリーダー。',
    'team.bryant.alt': 'Bryant Friend の写真',
    'team.bryant.role': '戦略リード／IT スペシャリスト',
    'team.bryant.bio': 'すべての IT システムとイノベーションを維持管理。',
    'team.ilja.alt': 'Ilja Shnaider の写真',
    'team.ilja.role': 'CTO',
    'team.ilja.bio': '量子ドット技術の先駆者。その革新は eONIS 検出システムの中核です。',
    'team.tarek.alt': 'Tarek Mashreki の写真',
    'team.tarek.role': '主管化学者',
    'team.tarek.bio': '神経科学とバイオセンサーの専門家として中核 R&D を主導し、バイオマーカー検出と精度を助言。',
    'invest.title': '診断の未来を共に形に',
    'invest.body': 'プロトタイプ完成、主要特許の確保、パイロット導入のためシードラウンドを実施中です。私たちのビジョンを共有できるパートナーを募集しています。',
    'invest.cta': '投資家資料を請求',
    'footer.motto': '量子レベルの確実性。リアルタイム。',
    'footer.quicklinks': 'クイックリンク',
    'footer.contact': 'お問い合わせ',
    'footer.stay': '最新情報を受け取る',
    'footer.stay.body': '進捗やローンチの最新ニュースをお届けします。',
    'footer.email.placeholder': 'メールアドレスを入力',
    'footer.signup': '登録',
    'footer.link.problem': '課題と解決',
    'footer.link.tech': '技術',
    'footer.link.usecases': 'ユースケース',
    'footer.link.team': 'チーム',
    'form.success': 'ご登録ありがとうございます！'
  }
};

// ----------------------
// i18n Helpers
// ----------------------
function t(key) {
  const langTable = I18N[currentLang] || I18N.en;
  return langTable[key] || I18N.en[key] || key;
}

function applyTranslations(lang) {
  const dict = I18N[lang] || I18N.en;
  document.documentElement.setAttribute('lang', lang);

  // 1) Text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = dict[key] || I18N.en[key];
    if (val !== undefined) el.textContent = val;
  });

  // 2) Attributes (placeholder/title/aria/alt) + data-* for modal
  const attrBindings = [
    { sel: '[data-i18n-placeholder]', attr: 'placeholder', dataKey: 'i18nPlaceholder' },
    { sel: '[data-i18n-title]',       attr: 'title',       dataKey: 'i18nTitle' },
    { sel: '[data-i18n-aria-label]',  attr: 'aria-label',  dataKey: 'i18nAriaLabel' },
    { sel: '[data-i18n-alt]',         attr: 'alt',         dataKey: 'i18nAlt' },
    { sel: '[data-i18n-data-title]',   attr: 'data-title',   dataKey: 'i18nDataTitle' },
    { sel: '[data-i18n-data-content]', attr: 'data-content', dataKey: 'i18nDataContent' },
  ];

  attrBindings.forEach(({sel, attr, dataKey}) => {
    document.querySelectorAll(sel).forEach(el => {
      const key = el.dataset[dataKey];
      const val = dict[key] || I18N.en[key];
      if (val !== undefined) el.setAttribute(attr, val);
    });
  });
}

function setCurrentFlag(lang) {
  const flagEl = document.getElementById('current-lang-flag');
  if (flagEl) flagEl.textContent = FLAGS[lang] || '🌐';
}

function setLanguage(lang, persist = true) {
  currentLang = I18N[lang] ? lang : 'en';
  applyTranslations(currentLang);
  setCurrentFlag(currentLang);
  if (persist) localStorage.setItem(LANG_STORAGE_KEY, currentLang);
}

function showSplash(show) {
  const splash = document.getElementById('lang-splash');
  if (!splash) return;
  splash.classList.toggle('hidden', !show);
}

// ----------------------
// Init + Events
// ----------------------
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem(LANG_STORAGE_KEY);
  setLanguage(saved || 'en', false);
  if (!saved) showSplash(true);

  // Language picks (splash + header + mobile quick picks)
  document.querySelectorAll('.lang-pick').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang, true);
      showSplash(false);
      const dd = document.getElementById('lang-dropdown');
      if (dd) dd.classList.add('hidden');
    });
  });

  // Header dropdown toggle + outside click close
  const currentBtn = document.getElementById('current-lang-btn');
  const dropdown = document.getElementById('lang-dropdown');
  if (currentBtn && dropdown) {
    currentBtn.addEventListener('click', () => {
      dropdown.classList.toggle('hidden');
    });
    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target) && !currentBtn.contains(e.target)) {
        dropdown.classList.add('hidden');
      }
    });
  }

  // ESC closes splash
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') showSplash(false);
  });
});
