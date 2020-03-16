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
    current: 20,
    max: 100,
  },
  {
    name: 'ach2',
  },
  {
    name: 'ach3',
    current: 'one',
    max: 'two',
  },
]

export const friends: Array<Friend> = [
  {
    name: 'fr1',
  },
  {
    name: 'fr2',
  },
]
