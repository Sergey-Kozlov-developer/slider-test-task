export type IntervalSliders = {
  sort: number;
  name: string;
  interval: {
    start: number;
    end: number;
  };
  slides: {
    name: string;
    description: string;
  }[];
}[];

export const data = [
  {
    sort: 0,
    name: "Физика",
    interval: {
      start: 1687,
      end: 1905,
    },
    slides: [
      {
        name: "1687",
        description: "Ньютон опубликовал свои законы движения и гравитации.",
      },
      {
        name: "1831",
        description: "Фарадей открыл электромагнитную индукцию.",
      },
      {
        name: "1895",
        description: "Вильгельм Рентген открыл рентгеновское излучение.",
      },
      {
        name: "1905",
        description: "Эйнштейн опубликовал свою теорию относительности.",
      },
    ],
  },
  {
    sort: 1,
    name: "Литература",
    interval: {
      start: 1831,
      end: 1847,
    },
    slides: [
      {
        name: "1831",
        description:
          "Выход в свет «Вечеров на хуторе близ Диканьки» Н.В. Гоголя",
      },
      {
        name: "1840",
        description: "Публикация романа М.Ю. Лермонтова «Герой нашего времени»",
      },
      {
        name: "1847",
        description: "Начало публикации романа «Кто виноват?» А.И. Герцена",
      },
    ],
  },
  {
    sort: 2,
    name: "Открытия и исследования",
    interval: {
      start: 1820,
      end: 1846,
    },
    slides: [
      {
        name: "1820",
        description: "Открытие Антарктиды",
      },
      {
        name: "1831",
        description: "Открытие электромагнитной индукции",
      },
      {
        name: "1839",
        description: "Изобретение фотографии (дагеротипии)",
      },
      {
        name: "1846",
        description: "Открытие планеты Нептун",
      },
    ],
  },
  {
    sort: 3,
    name: "Музыка",
    interval: {
      start: 1965,
      end: 1990,
    },
    slides: [
      {
        name: "1967",
        description:
          "Выход альбома The Beatles «Sgt. Pepper's Lonely Hearts Club Band»",
      },
      {
        name: "1976",
        description: "Возникновение панк-рока (Sex Pistols, Ramones)",
      },
      {
        name: "1996",
        description: "Расцвет стиля «брит-поп» и битва Oasis и Blur",
      },
    ],
  },
  {
    sort: 4,
    name: "Игры",
    interval: {
      start: 1972,
      end: 2017,
    },
    slides: [
      {
        name: "1972",
        description: "Выпуск Pong — первой коммерчески успешной видеоигры",
      },
      {
        name: "1985",
        description: "Выход Super Mario Bros. для Nintendo (NES)",
      },
      {
        name: "2004",
        description: "Запуск World of Warcraft (WoW)",
      },
      {
        name: "2006",
        description: "Выход консоли Nintendo Wii",
      },
    ],
  },
  {
    sort: 5,
    name: "Энтомологии",
    interval: {
      start: 1852,
      end: 1881,
    },
    slides: [
      {
        name: "1852",
        description: "Начало издания «Exotic Butterflies» У. Гевитсона",
      },
      {
        name: "1861",
        description: "Издание первого «Каталога бабочек» О. Штаудингера",
      },
      {
        name: "1857",
        description:
          "Завершение труда А. Гене «Species général des Lépidoptères»",
      },
    ],
  },
];
