import React from 'react';
import { H2, H3 } from './ui/Heading';
import Block from './ui/Block';

export default () => (
  <Block>
    <H2>Формат</H2>
    <div className="paragraph-text">
      <div className="description">
        <p>
          Курс делится на 4 этапа по неделе.
          В день нужно уделять 3-4 часа.
        </p>
        <p>
          В понедельник в 12:00 я даю задание и объясняю как его делать.
        </p>
        <p>
          Дедлайн — суббота, 23:59:59. Я проверяю задание дважды в сутки.
        </p>
        <p>
          Не сделал — вылетаешь. Сделал на отъебись — вылетаешь. Без исключений.
          Считайте меня приёбистым заказчиком (которых у вас будет очень много).
        </p>

        <section className="stage">
          <H3>Нулевой этап: подготовка (до 12 июня)</H3>
          <div className="list">
            <p>
              Познакомимся друг с другом, поставим редактор для кода,
              настроим Гит и заведём приветственный проект на Гитхабе,
              почитаем ресурсы по тематике.
            </p>
          </div>
        </section>
        <section className="stage">
          <H3>Первый: вёрстка (12 — 18 июня)</H3>
          <div className="list">
            <p>
              Наш сайт будет полностью свёрстан (мобильная и планшетная версии тоже!)
            </p>
            <p>Научимся работать с:</p>
            <ul>
              <li>HTML и CSS,</li>
              <li>модульной сеткой,</li>
              <li>адаптивностью.</li>
            </ul>
          </div>
        </section>
        <section className="stage">
          <H3>Второй: Реакт (19 — 25 июня)</H3>
          <p>
            Мы разобьём нашу вёрстку на компоненты в Реакте,
            сделаем роутинг через реакт-роутер и перенесём стили в стайлед-компонентс.
          </p>
          <p>
            <i>
              Реакт — библиотека от Фейсбука для работы с интерфейсами,
              на Реакте пишут 99% современного фронтэнда.
              Короче, у нас тут самые последние модные технологии.
            </i>
          </p>
        </section>
        <section className="stage">
          <H3>Третий: данные (26 июня — 2 июля)</H3>
          <p>
            Данные о жилых комплексах должны откуда-то приходить,
            мы же не будем их в вёрстке хранить?
            Для этого мы будем запрашивать данные с сервера по HTTP.
          </p>
        </section>
        <section className="stage">
          <H3>Четвёртый: джаваскрипт (3 — 9 июля)</H3>
          <div className="list">
            <p>Этот этап самый сложный — здесь мы научимся:</p>
            <ul>
              <li>фильтровать и сортировать список жилых комплексов,</li>
              <li>
                сделаем работу с формой заявки: отправляем уведомление в Телеграм
                когда пользователь оставляет заявку на звонок.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </Block>
);
