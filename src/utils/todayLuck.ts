import { luckList } from '../data/luckList.json';

export const getLuck = () => {
  const randomNumber = Math.floor(Math.random() * 100);
  return luckList[randomNumber];
};
