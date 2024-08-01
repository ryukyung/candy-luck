import callAI from './api';
import { makeDateFormat } from './getToday';
import { getStorage, setStorage } from './storage';

export const getLuck = async () => {
  const data = {
    date: makeDateFormat(),
    luck: await callAI(),
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

export const checkTodayLuck = async () => {
  const isExistLuck = getStorage('luck');
  if (!isExistLuck) return await getLuck();
  return isExistLuck.date === makeDateFormat() ? isExistLuck.luck : setLuck();
};
