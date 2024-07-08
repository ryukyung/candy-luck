type TWeather = {
  weather: { main: string }[];
};

type TFindLocation = () => Promise<GeolocationPosition>;

type TGetLocation = (lat: number, lon: number) => Promise<TWeather>;

type TGetWeather = () => Promise<string | undefined>;

export const findLocation: TFindLocation = () =>
  new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, (error) => {
      reject(error);
      alert(
        '위치 정보를 제공해야 뽑기를 열 수 있습니다. 위치 정보 제공에 동의해주세요.'
      );
    })
  );

const getLocation: TGetLocation = async (lat, lon) => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=ko`;
  const respone = await fetch(API_URL);
  if (!respone.ok) throw new Error('Failed to fetch weather data');
  return await respone.json();
};

export const getWeather: TGetWeather = async () => {
  try {
    const position = await findLocation();
    const { latitude, longitude } = position.coords;
    const weather = await getLocation(latitude, longitude);
    return weather.weather[0].main;
  } catch (error) {
    console.error('Error getting location or weather:', error);
  }
};
