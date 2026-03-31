import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import Icon from "@/components/ui/icon";

const TREES = [
  {
    id: 1,
    code: "T-001",
    name: "Гинкго двухлопастный",
    latin: "Ginkgo biloba",
    family: "Гинкговые (Ginkgoaceae)",
    image: "https://cdn.poehali.dev/projects/2bc6a15c-ff0f-4708-b5c4-e8b70fa95cfb/files/535b593f-b509-423a-8188-397cd6145b66.jpg",
    emoji: "🌿",
    color: "#4a7c59",
    description:
      "Гинкго двухлопастный — живое ископаемое, единственный выживший представитель класса Гинкговые. Это реликтовое растение существовало ещё во времена динозавров и практически не изменилось за 270 миллионов лет. Листья имеют характерную веерообразную форму с выемкой посередине, что и дало название виду.",
    history:
      "Гинкго появился в Пермском периоде около 270 млн лет назад. В Мезозойскую эру распространился по всему северному полушарию. После массового вымирания в ледниковый период сохранился лишь в Китае, где монахи буддийских монастырей тысячелетиями культивировали это священное дерево. В 1691 году немецкий натуралист Энгельберт Кемпфер описал его в Японии, а Карл Линней дал ему латинское название в 1771 году.",
    stats: {
      height: { label: "Высота", value: "до 40 м", bar: 80 },
      age: { label: "Возраст", value: "до 4000 лет", bar: 95 },
      spread: { label: "Крона", value: "до 15 м", bar: 60 },
      hardiness: { label: "Морозостойкость", value: "до −30°C", bar: 75 },
    },
    features: ["Двудомное растение", "Листопадное", "Реликт триасового периода", "Лекарственные свойства"],
    habitat: "Восточная Азия (Китай)",
    status: "Декоративное, лекарственное",
  },
  {
    id: 2,
    code: "T-002",
    name: "Бундук двудомный",
    latin: "Gymnocladus dioicus",
    family: "Бобовые (Fabaceae)",
    image: "https://cdn.poehali.dev/projects/2bc6a15c-ff0f-4708-b5c4-e8b70fa95cfb/files/2ce4e49b-818c-4b33-a322-26b4bdf21787.jpg",
    emoji: "🌳",
    color: "#6b5a3e",
    description:
      "Бундук двудомный — редкое листопадное дерево с крупными дважды-перистосложными листьями. Название рода происходит от греческих слов gymnos (голый) и klados (ветвь) — в безлистный период дерево выглядит очень голым. Плоды — крупные кожистые бобы длиной до 25 см, содержащие токсичные семена.",
    history:
      "Бундук был описан ботаниками в XVIII веке и получил широкое распространение в декоративном садоводстве Северной Америки и Европы. Коренные народы Северной Америки использовали семена (после длительной термической обработки) в пищу и для изготовления украшений. Дерево обладает очень прочной и красивой древесиной, ценившейся в столярном деле.",
    stats: {
      height: { label: "Высота", value: "до 30 м", bar: 65 },
      age: { label: "Возраст", value: "до 400 лет", bar: 45 },
      spread: { label: "Крона", value: "до 12 м", bar: 55 },
      hardiness: { label: "Морозостойкость", value: "до −35°C", bar: 85 },
    },
    features: ["Двудомное растение", "Листопадное", "Ядовитые семена", "Ценная древесина"],
    habitat: "Центральная и Восточная Северная Америка",
    status: "Декоративное, редкое",
  },
  {
    id: 3,
    code: "T-003",
    name: "Магнолия обратнояйцевидная",
    latin: "Magnolia obovata",
    family: "Магнолиевые (Magnoliaceae)",
    image: "https://cdn.poehali.dev/projects/2bc6a15c-ff0f-4708-b5c4-e8b70fa95cfb/files/2ce4e49b-818c-4b33-a322-26b4bdf21787.jpg",
    emoji: "🌸",
    color: "#a05a8a",
    description:
      "Магнолия обратнояйцевидная — одна из древнейших цветковых растений планеты. Крупнолистное листопадное дерево с огромными листьями длиной до 50 см и крупными белыми ароматными цветками диаметром 15–20 см. Цветки появляются в начале лета — до или одновременно с раскрытием листьев.",
    history:
      "Магнолии — одни из первых цветковых растений на Земле, появившихся около 95 млн лет назад. Их опылителями были жуки, а не пчёлы, которые появились позже. Род назван в честь французского ботаника Пьера Маньоля в 1703 году. Магнолия обратнояйцевидная широко используется в японской культуре: её древесина высоко ценится для изготовления ножен самурайских мечей.",
    stats: {
      height: { label: "Высота", value: "до 30 м", bar: 65 },
      age: { label: "Возраст", value: "до 300 лет", bar: 40 },
      spread: { label: "Крона", value: "до 10 м", bar: 50 },
      hardiness: { label: "Морозостойкость", value: "до −25°C", bar: 60 },
    },
    features: ["Листопадное", "Цветёт в мае–июне", "Листья до 50 см", "Реликт мелового периода"],
    habitat: "Япония, Китай, Корея",
    status: "Декоративное, охраняемое",
  },
  {
    id: 4,
    code: "T-004",
    name: "Дуб болотный",
    latin: "Quercus palustris",
    family: "Буковые (Fagaceae)",
    image: "https://cdn.poehali.dev/projects/2bc6a15c-ff0f-4708-b5c4-e8b70fa95cfb/files/31d0b08d-8910-4256-9c4c-a321a61f859f.jpg",
    emoji: "🍂",
    color: "#8b4513",
    description:
      "Дуб болотный — стройное листопадное дерево с пирамидальной кроной и глубоко разрезанными листьями. Особую декоративность придаёт яркая красно-багряная осенняя окраска листвы. Название связано с предпочтением влажных, периодически затопляемых мест обитания. Жёлуди небольшие, почти шаровидные, с блюдцеобразной шапочкой.",
    history:
      "Дубы — символические деревья многих европейских культур, священные у кельтов, германцев и славян. Дуб болотный был завезён в Европу из Северной Америки в XVII веке и быстро стал любимым парковым деревом. В осенний период его листва даёт один из самых впечатляющих цветовых дисплеев среди всех листопадных деревьев умеренного климата.",
    stats: {
      height: { label: "Высота", value: "до 25 м", bar: 55 },
      age: { label: "Возраст", value: "до 600 лет", bar: 70 },
      spread: { label: "Крона", value: "до 12 м", bar: 55 },
      hardiness: { label: "Морозостойкость", value: "до −30°C", bar: 75 },
    },
    features: ["Листопадное", "Осенняя окраска — красная", "Переносит заболачивание", "Быстрорастущее"],
    habitat: "Восток Северной Америки",
    status: "Декоративное, лесное",
  },
  {
    id: 5,
    code: "T-005",
    name: "Лещина древовидная",
    latin: "Corylus colurna",
    family: "Берёзовые (Betulaceae)",
    image: "https://cdn.poehali.dev/projects/2bc6a15c-ff0f-4708-b5c4-e8b70fa95cfb/files/535b593f-b509-423a-8188-397cd6145b66.jpg",
    emoji: "🌰",
    color: "#5c7a3e",
    description:
      "Лещина древовидная, или медвежий орех — самый крупный представитель рода Corylus. В отличие от обычного кустарникового лесного ореха, это настоящее дерево с правильной пирамидальной кроной. Плоды — орехи в густо разрезанной обёртке, значительно крупнее, чем у лесного ореха. Дерево отличается исключительной декоративностью во все сезоны.",
    history:
      "Лещина известна человеку с древних времён — её орехи были важным источником пищи для первобытных людей. Лещина древовидная широко распространена на Балканах и в Малой Азии, где её орехи собирают уже тысячелетиями. В Европу как декоративное дерево была завезена в XVI веке и высоко оценена как аллейное и парковое растение благодаря своей долговечности и красивой форме кроны.",
    stats: {
      height: { label: "Высота", value: "до 25 м", bar: 55 },
      age: { label: "Возраст", value: "до 200 лет", bar: 30 },
      spread: { label: "Крона", value: "до 10 м", bar: 50 },
      hardiness: { label: "Морозостойкость", value: "до −25°C", bar: 60 },
    },
    features: ["Листопадное", "Пирамидальная крона", "Съедобные орехи", "Аллейное дерево"],
    habitat: "Балканы, Малая Азия, Гималаи",
    status: "Декоративное, орехоплодное",
  },
  {
    id: 6,
    code: "T-006",
    name: "Бархат сахалинский",
    latin: "Phellodendron sachalinense",
    family: "Рутовые (Rutaceae)",
    image: "https://cdn.poehali.dev/projects/2bc6a15c-ff0f-4708-b5c4-e8b70fa95cfb/files/31d0b08d-8910-4256-9c4c-a321a61f859f.jpg",
    emoji: "🌲",
    color: "#2d6a4f",
    description:
      "Бархат сахалинский — дальневосточный реликт с характерной пробковой корой, напоминающей на ощупь бархат — отсюда и название. Листья перистосложные, при растирании издают специфический смолистый запах. Плоды — чёрные блестящие костянки с резким запахом и вкусом. Дерево является ценным медоносом и источником пробки.",
    history:
      "Бархат сахалинский — реликтовый вид третичного периода, сохранившийся в рефугиумах Дальнего Востока после оледенения. Был описан ботаниками в XIX веке при освоении Сахалина и Курильских островов. В традиционной дальневосточной медицине кора применялась для лечения заболеваний желудочно-кишечного тракта. Пробковый слой коры использовался для изготовления рыболовных принадлежностей.",
    stats: {
      height: { label: "Высота", value: "до 25 м", bar: 55 },
      age: { label: "Возраст", value: "до 300 лет", bar: 40 },
      spread: { label: "Крона", value: "до 15 м", bar: 65 },
      hardiness: { label: "Морозостойкость", value: "до −35°C", bar: 85 },
    },
    features: ["Листопадное", "Пробковая кора", "Медонос", "Реликт третичного периода"],
    habitat: "Сахалин, Курилы, Хоккайдо",
    status: "Охраняемое, лекарственное",
  },
];

const SECTIONS = ["Описание", "История", "Характеристики", "Галерея"];

export default function Index() {
  const [activeTree, setActiveTree] = useState(0);
  const [activeSection, setActiveSection] = useState("Описание");

  const tree = TREES[activeTree];

  return (
    <div className="min-h-screen bg-paper">
      {/* HEADER */}
      <header className="border-b border-border bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="https://cdn.poehali.dev/projects/2bc6a15c-ff0f-4708-b5c4-e8b70fa95cfb/bucket/50b375c1-c394-46a3-b44a-787bfc4747c1.png"
                alt="Патриарший сад — СЮН г. Владимир"
                className="h-14 w-14 object-contain flex-shrink-0"
              />
              <div>
                <h1 className="text-2xl font-bold text-foreground" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem" }}>
                  Реликтовые деревья
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 bg-secondary rounded px-3 py-1.5">
                <Icon name="Leaf" size={14} className="text-primary" />
                <span className="text-xs text-secondary-foreground font-medium">6 видов</span>
              </div>
              <div className="hidden md:flex items-center gap-2 bg-secondary rounded px-3 py-1.5">
                <Icon name="Globe" size={14} className="text-primary" />
                <span className="text-xs text-secondary-foreground font-medium">4 континента</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* ЛЕВАЯ ПАНЕЛЬ — навигация по деревьям */}
          <aside className="lg:col-span-3">
            <div className="sticky top-24">
              <p className="tree-number text-muted-foreground mb-3 uppercase tracking-widest">Виды</p>
              <nav className="space-y-0.5">
                {TREES.map((t, i) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTree(i)}
                    className={`tree-nav-item w-full text-left px-4 py-3 rounded-r transition-all ${
                      activeTree === i ? "active bg-secondary border-l-2 border-l-primary" : ""
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{t.emoji}</span>
                      <div>
                        <p className={`text-sm font-medium leading-tight ${activeTree === i ? "text-primary" : "text-foreground"}`}>
                          {t.name}
                        </p>
                        <p className="text-xs text-muted-foreground italic">{t.latin}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </nav>

              <div className="mt-6 p-4 bg-white border border-border rounded">
                <p className="tree-number text-muted-foreground uppercase tracking-widest mb-3">Шкала</p>
                <div className="space-y-2">
                  {[
                    { label: "Высота", hex: "#4a7c59" },
                    { label: "Возраст", hex: "#059669" },
                    { label: "Ширина кроны", hex: "#d97706" },
                    { label: "Морозостойкость", hex: "#1d4ed8" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2">
                      <div className="w-3 h-1.5 rounded-sm" style={{ backgroundColor: item.hex }} />
                      <span className="text-xs text-muted-foreground">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* ОСНОВНОЙ КОНТЕНТ */}
          <main className="lg:col-span-9">
            <div className="mb-6" key={tree.id}>
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-14 h-14 rounded flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ backgroundColor: tree.color + "20", border: `1px solid ${tree.color}40` }}
                >
                  {tree.emoji}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="tree-number text-muted-foreground">{tree.code}</span>
                    <span className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded">{tree.family}</span>
                  </div>
                  <h2
                    className="text-3xl md:text-4xl font-semibold text-foreground leading-tight"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {tree.name}
                  </h2>
                  <p className="text-lg italic text-muted-foreground mt-0.5" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {tree.latin}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-white border border-border px-3 py-1.5 rounded">
                  <Icon name="MapPin" size={12} />
                  {tree.habitat}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-white border border-border px-3 py-1.5 rounded">
                  <Icon name="Tag" size={12} />
                  {tree.status}
                </div>
                {tree.features.slice(0, 2).map((f) => (
                  <div key={f} className="flex items-center gap-1.5 text-xs text-muted-foreground bg-white border border-border px-3 py-1.5 rounded">
                    <Icon name="CheckCircle" size={12} />
                    {f}
                  </div>
                ))}
              </div>

              <div className="scientific-rule mb-6" />
            </div>

            {/* Вкладки */}
            <div className="flex gap-0 mb-6 border-b border-border">
              {SECTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => setActiveSection(s)}
                  className={`px-5 py-2.5 text-sm font-medium transition-all border-b-2 -mb-px ${
                    activeSection === s
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>

            {/* ОПИСАНИЕ */}
            {activeSection === "Описание" && (
              <div className="animate-fade-up">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 space-y-4">
                    <p className="text-foreground leading-relaxed text-lg">{tree.description}</p>
                    <div className="mt-6">
                      <p className="tree-number text-muted-foreground uppercase tracking-widest mb-3">Особенности вида</p>
                      <ul className="space-y-2">
                        {tree.features.map((f) => (
                          <li key={f} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            <span className="text-sm text-foreground">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <img src={tree.image} alt={tree.name} className="w-full aspect-[3/4] object-cover rounded border border-border" />
                    <div className="bg-white border border-border rounded p-4">
                      <p className="tree-number text-muted-foreground uppercase tracking-widest mb-2">Ареал</p>
                      <p className="text-sm font-medium text-foreground">{tree.habitat}</p>
                      <p className="tree-number text-muted-foreground mt-2 uppercase tracking-widest mb-1">Семейство</p>
                      <p className="text-sm text-foreground">{tree.family}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ИСТОРИЯ */}
            {activeSection === "История" && (
              <div className="animate-fade-up">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon name="BookOpen" size={16} className="text-primary" />
                      </div>
                      <p className="tree-number text-muted-foreground uppercase tracking-widest">Историческая справка</p>
                    </div>
                    <p className="text-foreground leading-relaxed text-base">{tree.history}</p>
                    <div className="mt-8">
                      <p className="tree-number text-muted-foreground uppercase tracking-widest mb-4">Ключевые факты</p>
                      <div className="space-y-3">
                        {[
                          { icon: "Globe", text: `Ареал произрастания: ${tree.habitat}` },
                          { icon: "Leaf", text: `Семейство: ${tree.family}` },
                          { icon: "Clock", text: `Максимальный возраст: ${tree.stats.age.value}` },
                          { icon: "Ruler", text: `Максимальная высота: ${tree.stats.height.value}` },
                        ].map((item) => (
                          <div key={item.text} className="flex items-start gap-3 p-3 bg-white border border-border rounded">
                            <Icon name={item.icon} size={16} className="text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-foreground">{item.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <img src={tree.image} alt={tree.name} className="w-full aspect-square object-cover rounded border border-border" />
                  </div>
                </div>
              </div>
            )}

            {/* ХАРАКТЕРИСТИКИ */}
            {activeSection === "Характеристики" && (
              <div className="animate-fade-up">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border border-border rounded p-6">
                    <p className="tree-number text-muted-foreground uppercase tracking-widest mb-5">Биометрические показатели</p>
                    <div className="space-y-6">
                      {Object.entries(tree.stats).map(([key, stat]) => (
                        <div key={key}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-foreground">{stat.label}</span>
                            <span className="tree-number text-primary font-medium">{stat.value}</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-1.5">
                            <div
                              className="h-1.5 rounded-full transition-all duration-700"
                              style={{ width: `${stat.bar}%`, background: `linear-gradient(90deg, ${tree.color}, ${tree.color}88)` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white border border-border rounded p-5">
                      <p className="tree-number text-muted-foreground uppercase tracking-widest mb-4">Систематика</p>
                      <table className="w-full text-sm">
                        <tbody className="divide-y divide-border">
                          {[
                            { rank: "Отдел", value: "Покрытосеменные" },
                            { rank: "Класс", value: "Двудольные" },
                            { rank: "Семейство", value: tree.family },
                            { rank: "Вид", value: tree.latin },
                          ].map((row) => (
                            <tr key={row.rank}>
                              <td className="py-2 pr-4 tree-number text-muted-foreground uppercase">{row.rank}</td>
                              <td className="py-2 text-foreground">{row.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="bg-white border border-border rounded p-5">
                      <p className="tree-number text-muted-foreground uppercase tracking-widest mb-4">Ареал и статус</p>
                      <div className="flex items-start gap-3 mb-3">
                        <Icon name="MapPin" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-muted-foreground">Природный ареал</p>
                          <p className="text-sm font-medium text-foreground">{tree.habitat}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Shield" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-muted-foreground">Хозяйственный статус</p>
                          <p className="text-sm font-medium text-foreground">{tree.status}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-border rounded p-5">
                      <p className="tree-number text-muted-foreground uppercase tracking-widest mb-3">Особенности</p>
                      <div className="flex flex-wrap gap-2">
                        {tree.features.map((f) => (
                          <span
                            key={f}
                            className="text-xs px-2.5 py-1 rounded border"
                            style={{ borderColor: tree.color + "50", color: tree.color, backgroundColor: tree.color + "08" }}
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ГАЛЕРЕЯ */}
            {activeSection === "Галерея" && (
              <div className="animate-fade-up">
                <p className="tree-number text-muted-foreground uppercase tracking-widest mb-5">Фотогалерея</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {TREES.map((t, i) => (
                    <div
                      key={t.id}
                      className="gallery-card cursor-pointer bg-white border border-border rounded overflow-hidden"
                      onClick={() => setActiveTree(i)}
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={t.image}
                          alt={t.name}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="tree-number text-muted-foreground">{t.code}</span>
                          <span className="text-lg">{t.emoji}</span>
                        </div>
                        <p className="text-sm font-medium text-foreground leading-tight">{t.name}</p>
                        <p className="text-xs italic text-muted-foreground">{t.latin}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="scientific-rule mb-6" />
                <p className="tree-number text-muted-foreground uppercase tracking-widest mb-4">Выбранный вид: {tree.name}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <img
                    src={tree.image}
                    alt={`${tree.name} — общий вид`}
                    className="w-full aspect-[4/3] object-cover rounded border border-border"
                  />
                  <div className="bg-white border border-border rounded p-4 flex flex-col justify-center">
                    <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">Краткое описание</p>
                    <p className="text-sm text-foreground leading-relaxed">{tree.description.slice(0, 250)}...</p>
                    <button
                      onClick={() => setActiveSection("Описание")}
                      className="mt-4 flex items-center gap-2 text-sm text-primary font-medium hover:underline"
                    >
                      Читать полностью
                      <Icon name="ArrowRight" size={14} />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="mt-16 border-t border-border bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="tree-number text-muted-foreground uppercase tracking-widest mb-1">Ботанический доклад</p>
              <p className="text-sm text-muted-foreground">Реликтовые деревья — 6 видов · {new Date().getFullYear()}</p>
              <p className="text-xs text-muted-foreground mt-1">Проект Кирилла · Биология</p>
            </div>
            <div className="flex items-center gap-6">
              {TREES.map((t, i) => (
                <button
                  key={t.id}
                  title={t.name}
                  onClick={() => { setActiveTree(i); setActiveSection("Описание"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  className="text-xl hover:scale-125 transition-transform"
                >
                  {t.emoji}
                </button>
              ))}
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="bg-white p-3 rounded border border-border shadow-sm">
                <QRCodeSVG
                  value="https://biologia-ginkgo-magnolia--preview.poehali.dev/"
                  size={100}
                  fgColor="#2d5a3d"
                  bgColor="#ffffff"
                  level="M"
                  imageSettings={{
                    src: "https://cdn.poehali.dev/projects/2bc6a15c-ff0f-4708-b5c4-e8b70fa95cfb/bucket/50b375c1-c394-46a3-b44a-787bfc4747c1.png",
                    x: undefined,
                    y: undefined,
                    height: 22,
                    width: 22,
                    excavate: true,
                  }}
                />
              </div>
              <p className="tree-number text-muted-foreground uppercase tracking-widest text-center">Открыть сайт</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}