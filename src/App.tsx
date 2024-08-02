import { useRef, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Layout from './components/Layout';
import Logo from './components/Logo';
import Button from './components/Button';
import Modal from './components/Modal';
import { findLocation, getWeather } from './utils/getWeather';
import { weatherList } from './utils/weatherList';
import { checkTodayLuck } from './utils/todayLuck';
import { isBrowser } from 'react-device-detect';

const App = () => {
  const logoRef = useRef<(callback: () => void) => void>(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    src: '',
    desc: '',
    luck: '',
  });

  const clickHandler = async () => {
    try {
      await findLocation();
      if (logoRef.current) logoRef?.current(() => setIsOpenModal(true));
    } catch (error) {
      console.error(`Error getting location: ${error}`);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const weather = ((await getWeather()) as string).toLowerCase();
      const luck = await checkTodayLuck();
      const { src, desc } = weatherList[weather] || {};
      setModalInfo({
        src: src || '',
        desc: desc || '',
        luck: luck || '',
      });
    };
    fetchData();
  }, []);

  return (
    <>
      <MainStyled id="download">
        {isOpenModal && <Modal {...modalInfo} />}
        {isOpenModal && <ModalBg onClick={() => setIsOpenModal(false)} />}
        <MainContentStyled>
          <h1 lang="en">Candy Luck</h1>
          <Logo ref={logoRef} />
          <Button target="main" clickHandler={clickHandler}>
            뽑기
          </Button>
        </MainContentStyled>
      </MainStyled>
      {isBrowser ? <Layout /> : null}
    </>
  );
};

export default App;

const ModalBg = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const MainStyled = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainContentStyled = styled.section`
  width: 390px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 80px;
  background-color: var(--red);
  h1 {
    font-family: var(--title);
    font-size: 40px;
    color: var(--ivory);
  }
`;
