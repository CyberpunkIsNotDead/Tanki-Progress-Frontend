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
