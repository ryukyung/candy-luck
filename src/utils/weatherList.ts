type Tweather = {
  imageSrc: string;
  imageAlt: string;
  description: string;
};

type TweatherList = {
  [key: string]: Tweather;
};

export const weatherList: TweatherList = {
  clear: {
    imageSrc: '/public/clear.png',
    imageAlt: '',
    description:
      '오늘은 날씨가 맑아 하늘이 아주 깨끗해요. 야외 활동하기에 좋은 날이니, 밖에서 즐거운 시간을 보내세요!',
  },
  clouds: {
    imageSrc: '/public/clouds.png',
    imageAlt: '',
    description:
      '구름이 낀 날씨예요. 너무 덥지는 않아서 활동하기 좋지만, 햇빛이 강하지 않으니 자외선 걱정은 덜어두고 외출하셔도 괜찮아요.',
  },
  drizzle: {
    imageSrc: '/public/drizzle.png',
    imageAlt: '',
    description:
      '가랑비가 내리는 날씨예요. 조금씩 비가 내려서 더운 날씨를 식혀줄 것 같아요. 우산을 챙기고 나가세요!',
  },
  mist: {
    imageSrc: '/public/mist.png',
    imageAlt: '',
    description:
      '안개가 낀 날씨예요. 시야가 흐리니 운전할 때 조심하시고, 습도가 높아서 더 덥게 느껴질 수 있으니 충분한 수분을 섭취하세요.',
  },
  rain: {
    imageSrc: '/public/rain.png',
    imageAlt: '',
    description:
      '비가 오늘 날씨예요. 더운 날씨가 조금 시원해질 것 같아요. 우산을 꼭 챙기고, 비를 맞지 않도록 조심하세요!',
  },
};
