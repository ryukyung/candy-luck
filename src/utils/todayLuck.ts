import { luckList } from '../data/luckList.json';
import { makeDateFormat } from './getToday';
import { getStorage, setStorage } from './storage';

export const getLuck = () => {
  const randomNumber = Math.floor(Math.random() * 100);
  const data = {
    date: makeDateFormat(),
    luck: luckList[randomNumber],
  };
  setStorage('luck', data);
  return data.luck;
};

export const setLuck = () => {
  const data = {
    date: makeDateFormat(),
    luck: getLuck(),
  };
  setStorage('luck', data);
};

export const checkTodayLuck = () => {
  const isExistLuck = getStorage('luck');
  if (!isExistLuck) return setLuck();

  return isExistLuck.date === makeDateFormat() ? isExistLuck.luck : setLuck();
};
