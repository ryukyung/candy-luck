import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faShare } from '@fortawesome/free-solid-svg-icons';
import { getWeather } from '../utils/getWeather';
import { weatherInfo } from '../utils/weatherInfo';
import getToday from '../utils/getToday';
import copyUrl from '../utils/copyUrl';
import HiddenComponent from './HiddenComponent';
import Button from './Button';
import saveImage from '../utils/saveImage';

const weather = (await getWeather()).toLowerCase();

const Modal = () => {
  const { description, ...restProps } = weatherInfo[weather] || {};
  const dateData = getToday();
  const location = useLocation();

  const clickCopyButton = () => {
    const baseUrl = 'http://localhost:5173';
    copyUrl(`${baseUrl}${location.pathname}`);
  };

  const clickSaveButton = () => {
    saveImage();
  };

  return (
    <ModalStyled>
      <h2>
        <span>{dateData.year}</span>
        <b>년</b>
        <span>{dateData.month}</span>
        <b>월</b>
        <span>{dateData.date}</span>
        <b>일</b>
        <span>{dateData.day}</span>
        <b>요일</b>
        <HiddenComponent {...restProps} />
      </h2>
      <p>
        <span>[오늘의 날씨]</span>
        <span className="description">{description}</span>
      </p>
      <p>
        <span>[오늘의 운세]</span>
        <span className="description">중꺾마..중요한건 꺾이지 않는 마음</span>
      </p>
      <div className="button-cover">
        <Button target="modal" clickHandler={clickCopyButton}>
          <FontAwesomeIcon icon={faShare} />
          공유하기
        </Button>
        <Button target="modal" clickHandler={clickSaveButton}>
          <FontAwesomeIcon icon={faCamera} />
          저장하기
        </Button>
      </div>
    </ModalStyled>
  );
};

export default Modal;

const ModalStyled = styled.dialog`
  box-sizing: border-box;
  width: 350px;
  border-radius: 8px;
  padding: 16px;
  font-family: var(--font);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
  background-color: var(--ivory);
  z-index: 10;
  h2 {
    width: 100%;
    display: flex;
    padding-top: 8px;
    font-size: 26px;
    b {
      margin-right: 4px;
    }
  }
  img {
    height: 24px;
  }
  .description {
    display: block;
    margin-top: 4px;
    font-size: 16px;
    line-height: 150%;
  }
  .button-cover {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 20px;
  }
`;
