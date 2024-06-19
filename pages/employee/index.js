import { register, query } from "@/utils";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Employee() {
  const [partTime, showPartTime] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    const data = [...e.target].map((element) => ({
      name: element.name,
      value: element.value,
    }));
    console.log(data, query(data));
    // todo: add validations for data
    // see https://github.com/orgs/vercel/discussions/2301
    register(query(data));
  };
  return (
    <>
      <main className={`${inter.className}`}>
        <h1>Анкета для соискателя</h1>
        <form onSubmit={onSubmit} style={{ display: "grid", gridGap: "24px" }}>
          <label>
            <div>Ваши имя и фамилия</div>
            <input name="name" />
          </label>
          <label>
            <div>
              Логин в телеграм
              <br />
              <small>по нему мы сохраним вашу анкету</small>
            </div>
            <input name="telegram" />
          </label>
          <label>
            <div>Дата рождения</div>
            <input type="date" name="calendar" />
          </label>
          <label>
            <div>Город проживания</div>
            <input name="city" />
          </label>
          <label>
            <div>Часовой пояс</div>
            <select name="timezone" id="timezone">
              <option value="-12:00">(GMT -12:00) Eniwetok, Kwajalein</option>
              <option value="-11:00">(GMT -11:00) Midway Island, Samoa</option>
              <option value="-10:00">(GMT -10:00) Hawaii</option>
              <option value="-09:50">(GMT -9:30) Taiohae</option>
              <option value="-09:00">(GMT -9:00) Alaska</option>
              <option value="-08:00">
                (GMT -8:00) Pacific Time (US &amp; Canada)
              </option>
              <option value="-07:00">
                (GMT -7:00) Mountain Time (US &amp; Canada)
              </option>
              <option value="-06:00">
                (GMT -6:00) Central Time (US &amp; Canada), Mexico City
              </option>
              <option value="-05:00">
                (GMT -5:00) Eastern Time (US &amp; Canada), Bogota, Lima
              </option>
              <option value="-04:50">(GMT -4:30) Caracas</option>
              <option value="-04:00">
                (GMT -4:00) Atlantic Time (Canada), Caracas, La Paz
              </option>
              <option value="-03:50">(GMT -3:30) Newfoundland</option>
              <option value="-03:00">
                (GMT -3:00) Brazil, Buenos Aires, Georgetown
              </option>
              <option value="-02:00">(GMT -2:00) Mid-Atlantic</option>
              <option value="-01:00">
                (GMT -1:00) Azores, Cape Verde Islands
              </option>
              <option value="+00:00" selected="selected">
                (GMT) Western Europe Time, London, Lisbon, Casablanca
              </option>
              <option value="+01:00">
                (GMT +1:00) Brussels, Copenhagen, Madrid, Paris
              </option>
              <option value="+02:00">
                (GMT +2:00) Kaliningrad, South Africa
              </option>
              <option value="+03:00">
                (GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg
              </option>
              <option value="+03:50">(GMT +3:30) Tehran</option>
              <option value="+04:00">
                (GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi
              </option>
              <option value="+04:50">(GMT +4:30) Kabul</option>
              <option value="+05:00">
                (GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent
              </option>
              <option value="+05:50">
                (GMT +5:30) Bombay, Calcutta, Madras, New Delhi
              </option>
              <option value="+05:75">(GMT +5:45) Kathmandu, Pokhara</option>
              <option value="+06:00">(GMT +6:00) Almaty, Dhaka, Colombo</option>
              <option value="+06:50">(GMT +6:30) Yangon, Mandalay</option>
              <option value="+07:00">
                (GMT +7:00) Bangkok, Hanoi, Jakarta
              </option>
              <option value="+08:00">
                (GMT +8:00) Beijing, Perth, Singapore, Hong Kong
              </option>
              <option value="+08:75">(GMT +8:45) Eucla</option>
              <option value="+09:00">
                (GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk
              </option>
              <option value="+09:50">(GMT +9:30) Adelaide, Darwin</option>
              <option value="+10:00">
                (GMT +10:00) Eastern Australia, Guam, Vladivostok
              </option>
              <option value="+10:50">(GMT +10:30) Lord Howe Island</option>
              <option value="+11:00">
                (GMT +11:00) Magadan, Solomon Islands, New Caledonia
              </option>
              <option value="+11:50">(GMT +11:30) Norfolk Island</option>
              <option value="+12:00">
                (GMT +12:00) Auckland, Wellington, Fiji, Kamchatka
              </option>
              <option value="+12:75">(GMT +12:45) Chatham Islands</option>
              <option value="+13:00">(GMT +13:00) Apia, Nukualofa</option>
              <option value="+14:00">(GMT +14:00) Line Islands, Tokelau</option>
            </select>
          </label>
          <label>
            <div>Рабочий график</div>
            <small>
              Удерживайте кнопку Ctrl (Windows) или Command (Mac), чтобы выбрать
              несколько вариантов.
            </small>
            <br />
            <select name="fulltime" multiple id="fulltime">
              <option value="">выберите значение</option>
              <option value="full" onClick={() => showPartTime(false)}>
                фулл-тайм
              </option>
              <option value="part" onClick={() => showPartTime(true)}>
                парт-тайм
              </option>
            </select>
          </label>
          {partTime ? (
            <label>
              <div>Сколько часов в день готовы работать</div>
              {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                <div key={item}>
                  <input type="radio" id={item} name="hours" value={item} />
                  <label htmlFor={item}>{item} часов</label>
                </div>
              ))}
            </label>
          ) : null}
          <label>
            <div>Выберите желаемую роль</div>
            <small>
              Удерживайте кнопку Ctrl (Windows) или Command (Mac), чтобы выбрать
              несколько вариантов.
            </small>
            <select multiple>
              {["менеджер", "личный ассистент", "менеджер по закупкам"].map(
                (item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                )
              )}
            </select>
          </label>
          <label>
            <div>Сколько у вас лет опыта</div>
            {["0-1", "1-3", "3-5", "5-7", "7-10", "больше 10"].map((item) => (
              <div key={item}>
                <input type="radio" id={item} name="exp" value={item} />
                <label htmlFor={item}>{item} лет</label>
              </div>
            ))}
          </label>
          <label>
            <div>Загрузите CV</div>
            <small>Ссылка на что-то, например, гугл-драйв</small>
            <input name="cv" />
          </label>
          <label>
            <div>Загрузите видео-визитку</div>
            <small>Ссылка на что-то, например, ютуб</small>
            <input name="video" />
          </label>
          <button>отправить</button>
        </form>
      </main>
    </>
  );
}
