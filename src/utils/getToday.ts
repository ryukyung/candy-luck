export const getDate = () => {
  const today = new Date();
  const dayList = ['일', '월', '화', '수', '목', '금', '토'];
  const dateInfo = {
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    date: today.getDate(),
    day: dayList[today.getDay()],
  };
  return dateInfo;
};

export const makeDateFormat = () => {
  const date = getDate();
  return `${date.year}-${date.month}-${date.date}`;
};
