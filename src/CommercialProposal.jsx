import React from 'react'
import { motion } from 'framer-motion'

// Коммерческое предложение - лендинг для платформы автобусных рейсов + карпулинг (B2C + B2B)
// Технологии: React + TailwindCSS + Framer Motion
// Как использовать: поместите файл в src/components/CommercialProposalLanding.jsx и подключите в маршруте.

export default function CommercialProposalLanding() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      {/* ---------- NAV ---------- */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <div className="text-2xl font-extrabold text-indigo-600">Bus&Share</div>
              <div className="hidden md:block text-sm text-gray-600">Платформа автобусных рейсов и попуток для пассажиров и перевозчиков</div>
            </div>
            <nav className="flex items-center gap-4">
              <a href="#features" className="text-sm text-gray-700 hover:text-indigo-600">Возможности</a>
              <a href="#how" className="text-sm text-gray-700 hover:text-indigo-600">Как это работает</a>
              <a href="#plans" className="text-sm text-gray-700 hover:text-indigo-600">Пакеты</a>
              <a href="https://t.me/CDI_Agency" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-block rounded-md bg-indigo-600 px-4 py-2 text-white text-sm border-2 border-transparent hover:bg-transparent hover:text-indigo-600 hover:border-indigo-600 transition-all duration-200">Связаться</a>
            </nav>
          </div>
        </div>
      </header>

      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">Единая платформа для автобусов и попуток — B2C + B2B</h1>
              <p className="mt-6 text-gray-600 text-lg sm:text-xl">Поиск, бронирование и оплата официальных автобусных рейсов и карпулинга по модели BlaBlaCar — в одном сервисе. Для пассажиров — удобство и безопасность. Для перевозчиков и партнёров — интеграции, отчётность и рост дохода.</p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#plans" className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-white font-semibold hover:bg-indigo-700">Узнать пакеты</a>
                <a href="#how" className="inline-flex items-center justify-center rounded-md border border-gray-200 px-5 py-3 text-gray-700 hover:bg-gray-100">Демо и roadmap</a>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <StatItem value="MVP 6–8 недель" label="время запуска" />
                <StatItem value="SLA 99.5%+" label="целевая доступность" />
                <StatItem value="Split-pay" label="поддержка оплаты" />
                <StatItem value="API-ready" label="B2B интеграции" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Mockup card - можно заменить на реальные скриншоты */}
              <div className="rounded-2xl bg-white shadow-xl p-6 lg:p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-500">Поиск поездки</div>
                    <div className="mt-2 text-lg font-semibold">Москва → Владимир</div>
                    <div className="text-sm text-gray-400">Дата: 18 янв • 2 места</div>
                  </div>
                  <div className="text-indigo-600 font-bold text-xl">₽500</div>
                </div>

                <div className="mt-4 border-t pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-100 to-indigo-200 flex items-center justify-center text-indigo-700 font-bold">DR</div>
                    <div>
                      <div className="text-sm font-medium">Иван, водитель</div>
                      <div className="text-xs text-gray-400">Рейтинг 4.9 • Машина: Mercedes Sprinter</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="px-4 py-2 rounded-md bg-green-50 text-green-700 text-sm font-semibold border border-green-100">Бронировать</button>
                    <button className="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700">Поделиться</button>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2 text-xs text-gray-500">
                  <div className="text-center">QR ЭПД</div>
                  <div className="text-center">Гарантированный платёж</div>
                  <div className="text-center">Отмена по тарифу</div>
                </div>
              </div>

              <div className="absolute -left-8 -bottom-10 w-60 h-60 rounded-3xl bg-gradient-to-br from-indigo-50 to-indigo-100 opacity-60 blur-xl" aria-hidden />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------- FEATURES ---------- */}
      <section id="features" className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold">Возможности платформы</h2>
            <p className="mt-3 text-gray-600">Полный стек для пассажира и партнёра: от публикации поездки до бухгалтерской отчётности перевозчика.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard title="Поиск & Бронирование" desc="Поиск по маршруту, времени, цене; бронирование мест и split-pay для попутчиков" icon="🔎" />
            <FeatureCard title="Интеграции B2B" desc="API для автобусных операторов, импорты расписаний, выдача электронных билетов" icon="🔗" />
            <FeatureCard title="Доверие и безопасность" desc="Верификация водителей, рейтинг, escrow, страховые опции" icon="🛡️" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <FeatureCard title="Админ-панель" desc="Управление тарифами, сервисными сборами, отчёты и выгрузки CSV/Excel" icon="📊" />
            <FeatureCard title="Онлайн саппорт" desc="Виджет, очередь операторов, SLA для ответов и тикетов" icon="💬" />
            <FeatureCard title="Производительность" desc="Масштабируемая архитектура, кеширование, SLA по запросу" icon="⚙️" />
          </div>
        </div>
      </section>

      {/* ---------- HOW IT WORKS ---------- */}
      <section id="how" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold">Как это работает — кратко</h3>
              <p className="mt-4 text-gray-600">Платформа объединяет официальные автобусные рейсы и поездки попутчиков: пользователь выбирает рейс или публикацию водителя, платит свою часть, получает электронный билет и информацию о поездке.</p>

              <ol className="mt-6 space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-indigo-600 font-bold">1.</div>
                  <div>
                    <div className="font-medium">Поиск и выбор</div>
                    <div className="text-sm text-gray-500">Пользователь ищет маршрут или просматривает попутки и сравнивает предложения.</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-indigo-600 font-bold">2.</div>
                  <div>
                    <div className="font-medium">Бронирование и оплата</div>
                    <div className="text-sm text-gray-500">Split-pay или единый платёж. Деньги на escrow до завершения поездки.</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-indigo-600 font-bold">3.</div>
                  <div>
                    <div className="font-medium">ЭПД и посадка</div>
                    <div className="text-sm text-gray-500">Электронный билет с QR; верификация водителя и пассажиров на посадке.</div>
                  </div>
                </li>
              </ol>

              <div className="mt-6 flex gap-3">
                <a href="#plans" className="rounded-md bg-indigo-600 px-4 py-2 text-white font-semibold">Пакеты и цены</a>
                <a href="#contact" className="rounded-md border border-gray-200 px-4 py-2">Запрос демо</a>
              </div>
            </div>

            <div className="rounded-2xl bg-indigo-50 p-6">
              <h4 className="font-semibold">Роль платформы для партнёров</h4>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>Автоматические расчёты с водителями и операторами</li>
                <li>Экспорт бух. отчётности и интеграция с 1С</li>
                <li>Управление маршрутами, ценами и местами через API</li>
              </ul>

              <div className="mt-4 text-xs text-gray-400">Поддержка white-label и корпоративных аккаунтов по запросу.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- ROADMAP / TIMELINE ---------- */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold">Дорожная карта запуска</h2>
            <p className="mt-3 text-gray-600">Поэтапный план релизов — от MVP до полной платформы с интеграциями и SLA.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <RoadmapCard title="R1 — MVP Попутка" items={["Поиск и публикация поездки","Split-pay","Простые профили и рейтинг","Админ базовый"]} />
            <RoadmapCard title="R2 — Интеграции" items={["Платежи и webhooks","ЭПД и QR","Интеграции с операторами","SMS/email уведомления"]} />
            <RoadmapCard title="R3+ — Масштаб и B2B" items={["SLA и мониторинг","White-label","Аналитика и промокоды","Нагрузочные тесты"]} />
          </div>
        </div>
      </section>

      {/* ---------- PACKAGES / PRICING ---------- */}
      <section id="plans" className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50/30">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Пакеты</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Выберите подходящий пакет для вашего бизнеса</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch">
            <PackageCard 
              title="Базовый"
              price="от ₽XXX"
              description="Для старта и тестирования платформы"
              features={[
                "Базовый функционал",
                "До X пользователей",
                "Email поддержка",
                "Базовые интеграции"
              ]}
              buttonText="Связаться"
              isPopular={false}
            />
            <PackageCard 
              title="Стандарт"
              price="от ₽XXX"
              description="Для растущего бизнеса"
              features={[
                "Все функции Базового",
                "До X пользователей",
                "Приоритетная поддержка",
                "Расширенные интеграции",
                "Аналитика и отчёты"
              ]}
              buttonText="Связаться"
              isPopular={true}
            />
            <PackageCard 
              title="Премиум"
              price="от ₽XXX"
              description="Для крупных операторов"
              features={[
                "Все функции Стандарт",
                "Неограниченное количество пользователей",
                "Персональный менеджер",
                "White-label решение",
                "Кастомные интеграции",
                "SLA 99.5%+"
              ]}
              buttonText="Связаться"
              isPopular={false}
            />
          </div>
        </div>
      </section>

      {/* ---------- CONTACT / CTA ---------- */}
      <section id="contact" className="bg-indigo-600 py-16 text-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Готовы запустить платформу?</h3>
            <p className="mt-3 text-indigo-100 text-lg mb-6">Оставьте заявку — проведём бесплатную 20-минутную стратегическую сессию: оценим маршрутный рынок, партнёров и предложим техстек.</p>

            <ul className="mt-6 space-y-2 text-sm text-indigo-100 mb-8">
              <li>• Обсуждение сценариев монетизации</li>
              <li>• Подбор технического стека</li>
              <li>• План запуска пилота на 6–8 недель</li>
            </ul>

            <a href="https://t.me/CDI_Agency" target="_blank" rel="noopener noreferrer" className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 inline-block hover:bg-white/20 transition-all duration-200 cursor-pointer">
              <p className="text-lg font-semibold text-white">
                Готовы сотрудничать или посмотреть демо? Напишите в Telegram
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* ---------- REQUISITES ---------- */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Реквизиты</h2>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <dt className="text-sm font-medium text-gray-500 mb-1">Название организации</dt>
                <dd className="text-sm text-gray-900 font-medium">ИНДИВИДУАЛЬНЫЙ ПРЕДПРИНИМАТЕЛЬ ДЕМЬЯНОВА ЕЛЕНА НИКОЛАЕВНА</dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-gray-500 mb-1">ИНН</dt>
                <dd className="text-sm text-gray-900 font-medium">310263445438</dd>
              </div>

              <div className="md:col-span-2">
                <dt className="text-sm font-medium text-gray-500 mb-1">Юридический адрес организации</dt>
                <dd className="text-sm text-gray-900">308598, РОССИЯ, БЕЛГОРОДСКАЯ ОБЛ, БЕЛГОРОДСКИЙ Р-Н, С ЧЕРЕМОШНОЕ, УЛ НАГОРНАЯ, Д 55</dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-gray-500 mb-1">ОГРН/ОГРНИП</dt>
                <dd className="text-sm text-gray-900 font-medium">325310000001892</dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-gray-500 mb-1">Расчетный счет</dt>
                <dd className="text-sm text-gray-900 font-medium">40802810800007744407</dd>
              </div>

              <div className="md:col-span-2">
                <dt className="text-sm font-medium text-gray-500 mb-1">Банк</dt>
                <dd className="text-sm text-gray-900 font-medium">АО «ТБанк»</dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-gray-500 mb-1">БИК банка</dt>
                <dd className="text-sm text-gray-900 font-medium">044525974</dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-gray-500 mb-1">ИНН банка</dt>
                <dd className="text-sm text-gray-900 font-medium">7710140679</dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-gray-500 mb-1">Корреспондентский счет банка</dt>
                <dd className="text-sm text-gray-900 font-medium">30101810145250000974</dd>
              </div>

              <div className="md:col-span-2">
                <dt className="text-sm font-medium text-gray-500 mb-1">Юридический адрес банка</dt>
                <dd className="text-sm text-gray-900">127287, г. Москва, ул. Хуторская 2-я, д. 38А, стр. 26</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-600">© {new Date().getFullYear()} Bus&Share. Все права защищены.</div>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <a href="#" className="hover:text-indigo-600">Политика конфиденциальности</a>
            <a href="#" className="hover:text-indigo-600">Контакты</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

/* ----------------- ВСПОМОГАТЕЛЬНЫЕ КОМПОНЕНТЫ ----------------- */

function StatItem({ value, label }) {
  return (
    <div className="bg-white/60 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
      <div className="text-sm text-gray-600">{label}</div>
      <div className="mt-1 font-semibold text-gray-900">{value}</div>
    </div>
  )
}

function FeatureCard({ title, desc, icon }) {
  return (
    <motion.div whileHover={{ y: -6 }} className="rounded-xl p-6 bg-white shadow-sm border border-gray-100">
      <div className="text-3xl mb-3">{icon}</div>
      <div className="font-semibold text-lg">{title}</div>
      <p className="mt-2 text-gray-600 text-sm">{desc}</p>
    </motion.div>
  )
}

function RoadmapCard({ title, items }) {
  return (
    <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-white border border-gray-100">
      <div className="font-semibold text-lg mb-3">{title}</div>
      <ul className="text-sm text-gray-700 space-y-2">
        {items.map((it, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <div className="mt-1 text-indigo-600 font-bold">•</div>
            <div>{it}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

function PackageCard({ title, price, period, description, features, buttonText, isPopular }) {
  return (
    <motion.div 
      whileHover={{ y: -12, scale: 1.03 }}
      className={`relative flex flex-col h-full rounded-3xl p-8 lg:p-10 border transition-all duration-300 overflow-hidden ${
        isPopular 
          ? 'border-indigo-300 bg-gradient-to-br from-white to-indigo-50/50 shadow-2xl shadow-indigo-500/10 ring-2 ring-indigo-200/50' 
          : 'border-gray-200 bg-white shadow-xl shadow-gray-900/5 hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-200'
      }`}
    >
      {/* Decorative gradient overlay */}
      <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20 ${
        isPopular ? 'bg-indigo-400' : 'bg-indigo-300'
      }`} aria-hidden="true"></div>
      
      <div className="relative text-center mb-8">
        <h3 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-3">{title}</h3>
        <div className="flex items-baseline justify-center gap-2 mb-4">
          <span className="text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent">{price}</span>
          {period && <span className="text-gray-500 text-sm">{period}</span>}
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>

      <div className="relative h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8"></div>

      <ul className="space-y-4 flex-grow mb-8">
        {features.map((feature, idx) => (
          <motion.li 
            key={idx} 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-start gap-3"
          >
            <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
              <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-sm text-gray-700 leading-relaxed pt-0.5">{feature}</span>
          </motion.li>
        ))}
      </ul>

      <button 
        className={`w-full min-h-[56px] py-4 rounded-xl font-semibold text-base transition-all duration-300 transform flex items-center justify-center mt-auto ${
          isPopular
            ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white hover:from-indigo-700 hover:to-indigo-800 shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 hover:scale-105'
            : 'bg-gray-900 text-white hover:bg-indigo-600 shadow-md hover:shadow-lg hover:scale-105'
        }`}
      >
        {buttonText}
      </button>
    </motion.div>
  )
}

function TrustLogo({ name }) {
  return (
    <div className="px-6 py-4 rounded-lg bg-white border border-gray-100 shadow-sm text-sm text-gray-700">{name}</div>
  )
}

function ContactForm() {
  return (
    <form className="bg-white rounded-xl p-6 shadow-sm text-gray-900">
      <div className="grid grid-cols-1 gap-3">
        <label className="text-sm">Имя</label>
        <input className="border border-gray-200 rounded-md px-3 py-2" placeholder="Иван Иванов" />

        <label className="text-sm">Email или Телефон</label>
        <input className="border border-gray-200 rounded-md px-3 py-2" placeholder="name@mail.ru или +7 999 000 00 00" />

        <label className="text-sm">Комментарий (маршруты / сроки / вопросы)</label>
        <textarea className="border border-gray-200 rounded-md px-3 py-2 h-24" placeholder="Коротко опишите задачу" />

        <button type="button" className="mt-2 rounded-md bg-indigo-600 text-white px-4 py-2 font-semibold">Запросить демо</button>
        <div className="text-xs text-gray-400 mt-2">Мы свяжемся в течение рабочего дня. Никаких спам-рассылок.</div>
      </div>
    </form>
  )
}
