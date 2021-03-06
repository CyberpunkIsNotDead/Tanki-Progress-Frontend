export interface Achievement {
  name: string,
  imgUrl?: string,
  current?: number | string,
  max?: number | string,
};

export interface Friend {
  name: string,
  imgUrl?: string,
};

export const achievements: Array<Achievement> = [
  {
    name: 'ach1',
    imgUrl: process.env.PUBLIC_URL + '/test_achievement.png',
    current: 20,
    max: 100,
  },
  {
    name: 'ach2',
    imgUrl: process.env.PUBLIC_URL + '/test_achievement.png',
  },
  {
    name: 'ach3',
    imgUrl: process.env.PUBLIC_URL + '/test_achievement.png',
    current: 'one',
    max: 'two',
  },
  {
    name: 'ach1',
    imgUrl: process.env.PUBLIC_URL + '/test_achievement.png',
    current: 20,
    max: 100,
  },
  {
    name: 'ach2',
    imgUrl: process.env.PUBLIC_URL + '/test_achievement.png',
  },
  {
    name: 'ach3',
    imgUrl: process.env.PUBLIC_URL + '/test_achievement.png',
    current: 'one',
    max: 'two',
  },
  {
    name: 'ach1',
    imgUrl: process.env.PUBLIC_URL + '/test_achievement.png',
    current: 20,
    max: 100,
  },
  {
    name: 'ach2',
    imgUrl: process.env.PUBLIC_URL + '/test_achievement.png',
  },
  {
    name: 'ach3',
    imgUrl: process.env.PUBLIC_URL + '/test_achievement.png',
    current: 'one',
    max: 'two',
  },
  {
    name: 'ach1',
    imgUrl: process.env.PUBLIC_URL + '/test_achievement.png',
    current: 20,
    max: 100,
  },
  {
    name: 'ach2',
    imgUrl: process.env.PUBLIC_URL + '/test_achievement.png',
  },
  {
    name: 'ach3',
    imgUrl: process.env.PUBLIC_URL + '/test_achievement.png',
    current: 'one',
    max: 'two',
  },
]

export const friends: Array<Friend> = [
  {
    name: 'rm-rf',
    imgUrl: process.env.PUBLIC_URL + '/test_avatar.png',
  },
  {
    name: 'Fizzika',
    imgUrl: process.env.PUBLIC_URL + '/test_avatar.png',
  },
  {
    name: 'somereallylongname',
    imgUrl: process.env.PUBLIC_URL + '/test_avatar.png',
  },
  {
    name: 'fr2',
    imgUrl: process.env.PUBLIC_URL + '/test_avatar.png',
  },
  {
    name: 'fr1',
    imgUrl: process.env.PUBLIC_URL + '/test_avatar.png',
  },
  {
    name: 'fr2',
    imgUrl: process.env.PUBLIC_URL + '/test_avatar.png',
  },
  {
    name: 'fr1',
    imgUrl: process.env.PUBLIC_URL + '/test_avatar.png',
  },
  {
    name: 'fr2',
    imgUrl: process.env.PUBLIC_URL + '/test_avatar.png',
  },
  {
    name: 'fr1',
    imgUrl: process.env.PUBLIC_URL + '/test_avatar.png',
  },
  {
    name: 'fr2',
    imgUrl: process.env.PUBLIC_URL + '/test_avatar.png',
  },
]

export const obj =                 {
  "name" : "Total",
  "role" : "Total",
  "score" : 3007217,
  "time" : 4347227
}

export const chartData = [
  {'day': 'mon', 'kills': 19},
  {'day': 'tue', 'kills': 0},
  {'day': 'wed', 'kills': 23},
  {'day': 'thu', 'kills': 38},
  {'day': 'fri', 'kills': 0},
  {'day': 'sat', 'kills': 0},
  {'day': 'sun', 'kills': 19},
]

export const base = {
  "login": "rm-rf",
  "daily": [
    {
      "timestamp": "2020-04-27T00:00:00.000Z",
      "kills": 19,
      "deaths": 7,
      "cry": 583,
      "score": 573,
      "time": 391,
      "hasPremium": false
    },
    {
      "timestamp": "2020-04-28T00:00:00.000Z",
      "hasPremium": false
    },
    {
      "timestamp": "2020-04-29T00:00:00.000Z",
      "score": 985,
      "time": 1236,
      "kills": 39,
      "deaths": 31,
      "cry": 1381,
      "hasPremium": false
    },
    {
      "timestamp": "2020-04-30T00:00:00.000Z",
      "score": 1779,
      "time": 1982,
      "kills": 64,
      "deaths": 39,
      "cry": 3254,
      "hasPremium": false
    },
    {
      "timestamp": "2020-05-01T00:00:00.000Z",
      "score": 900,
      "time": 1770,
      "kills": 63,
      "deaths": 32,
      "cry": 1878,
      "hasPremium": false
    },
    {
      "timestamp": "2020-05-02T00:00:00.000Z",
      "score": 3565,
      "time": 6776,
      "kills": 311,
      "deaths": 147,
      "cry": 9303,
      "hasPremium": false
    },
    {
      "timestamp": "2020-05-03T00:00:00.000Z",
      "score": 910,
      "time": 1586,
      "kills": 73,
      "deaths": 29,
      "cry": 2464,
      "hasPremium": false
    }
  ],
  "weekly": [
    {
      "timestamp": "2020-04-27T00:00:00.000Z",
      "score": 8712,
      "time": 13741,
      "kills": 569,
      "deaths": 285,
      "cry": 18863,
      "hasPremium": false
    }
  ],
  "monthly": []
}

export const base2 = {
  "login": "Fizzika",
  "daily": [
    {
      "timestamp": "2020-04-27T00:00:00.000Z",
      "kills": 110,
      "deaths": 63,
      "cry": 3908,
      "score": 2729,
      "time": 2784,
      "hasPremium": false
    },
    {
      "timestamp": "2020-04-28T00:00:00.000Z",
      "hasPremium": false
    },
    {
      "timestamp": "2020-04-29T00:00:00.000Z",
      "hasPremium": false
    },
    {
      "timestamp": "2020-04-30T00:00:00.000Z",
      "score": 4874,
      "time": 4294,
      "kills": 182,
      "deaths": 91,
      "cry": 6134,
      "hasPremium": false
    },
    {
      "timestamp": "2020-05-01T00:00:00.000Z",
      "score": 1021,
      "time": 1588,
      "kills": 76,
      "deaths": 29,
      "cry": 3285,
      "hasPremium": false
    },
    {
      "timestamp": "2020-05-02T00:00:00.000Z",
      "score": 3441,
      "time": 5624,
      "golds": 1,
      "kills": 255,
      "deaths": 124,
      "cry": 9026,
      "hasPremium": false
    },
    {
      "timestamp": "2020-05-03T00:00:00.000Z",
      "score": 1800,
      "time": 2808,
      "kills": 133,
      "deaths": 49,
      "cry": 5327,
      "hasPremium": false
    }
  ],
  "weekly": [
    {
      "timestamp": "2020-04-27T00:00:00.000Z",
      "score": 13865,
      "time": 17098,
      "golds": 1,
      "kills": 756,
      "deaths": 356,
      "cry": 27680,
      "hasPremium": false
    }
  ],
  "monthly": []
}
