export const getStorage = (target: string) => {
  const data = localStorage.getItem(target);
  return data ? JSON.parse(data) : null;
};

export const setStorage = (target: string, storagedData: object) => {
  localStorage.setItem(target, JSON.stringify(storagedData));
};
