import styled from '@emotion/styled';
import Header from './Header';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faShare } from '@fortawesome/free-solid-svg-icons';
import { getWeather } from '../utils/getWeather';
import { weatherList } from '../utils/weatherList';
import { checkTodayLuck } from '../utils/todayLuck';
import copyUrl from '../utils/copyUrl';
import saveImage from '../utils/saveImage';

const weather = ((await getWeather()) as string).toLowerCase();

const Modal = () => {
  const { description, ...restProps } = weatherList[weather] || {};
  const luck = checkTodayLuck();

  return (
    <ModalStyled>
      <Header {...restProps} />
      <p>
        <span>[오늘의 날씨]</span>
        <span className="description">{description}</span>
      </p>
      <p>
        <span>[오늘의 운세]</span>
        <span className="description">{luck}</span>
      </p>
      <div className="button-cover">
        <Button target="modal" clickHandler={copyUrl}>
          <FontAwesomeIcon icon={faShare} />
          공유하기
        </Button>
        <Button target="modal" clickHandler={saveImage}>
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
