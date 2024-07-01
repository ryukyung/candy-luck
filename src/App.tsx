import styled from '@emotion/styled';
import Logo from './components/Logo';
import Button from './components/Button';
import Modal from './components/Modal';
import { useRef, useState } from 'react';
import { findLocation } from './utils/getWeather';
const App = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const logoRef = useRef(null);
  const clickHandler = async () => {
    try {
      await findLocation();
      if (logoRef.current) logoRef.current(() => setIsOpenModal(true));
    } catch (error) {
      console.error(`Error getting location: ${error}`);
    }
  };

  return (
    <>
      <MainStyled id="download">
        {isOpenModal && <Modal />}
        {isOpenModal && <ModalBg />}
        <MainContentStyled>
          <h1>Candy Luck</h1>
          <Logo ref={logoRef} />
          <Button target="main" clickHandler={clickHandler}>
            뽑기
          </Button>
        </MainContentStyled>
      </MainStyled>
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
  background-color: var(--ivory);
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
