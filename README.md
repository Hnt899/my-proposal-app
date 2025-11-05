# Bus&Share - Коммерческое предложение

Лендинг для платформы автобусных рейсов и карпулинга (B2C + B2B).

## Технологии

- React + Vite
- TailwindCSS
- Framer Motion

## Локальная разработка

```bash
# Установка зависимостей
npm install

# Запуск dev-сервера
npm run dev
```

## Деплой на GitHub Pages

### Шаг 1: Подготовка

1. Установите пакет `gh-pages`:
```bash
npm install --save-dev gh-pages
```

2. **Важно**: Обновите `base` в `vite.config.js`:
   - Если ваш репозиторий называется `my-proposal-app`, оставьте как есть
   - Если репозиторий называется `username.github.io`, измените на `base: '/'`
   - Если репозиторий называется по-другому, замените `'my-proposal-app'` на имя вашего репозитория

### Шаг 2: Создание репозитория на GitHub

1. Создайте новый репозиторий на GitHub (не инициализируйте с README)

2. Инициализируйте git в проекте (если еще не сделано):
```bash
git init
git add .
git commit -m "Initial commit"
```

3. Подключите удаленный репозиторий:
```bash
git remote add origin https://github.com/ВАШ_USERNAME/ВАШ_РЕПОЗИТОРИЙ.git
git branch -M main
git push -u origin main
```

### Шаг 3: Деплой

Запустите команду деплоя:
```bash
npm run deploy
```

Эта команда:
1. Соберет проект (`npm run build`)
2. Загрузит папку `dist` в ветку `gh-pages` на GitHub

### Шаг 4: Включение GitHub Pages

1. Перейдите в настройки репозитория: `Settings` → `Pages`
2. В разделе `Source` выберите:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
3. Нажмите `Save`

Ваш сайт будет доступен по адресу:
- `https://ВАШ_USERNAME.github.io/ВАШ_РЕПОЗИТОРИЙ/`

### Важно

- После каждого изменения запускайте `npm run deploy` для обновления сайта
- Если изменили название репозитория, не забудьте обновить `base` в `vite.config.js`