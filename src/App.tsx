import styled from '@emotion/styled';
import Logo from './components/Logo';
import Button from './components/Button';

const App = () => {
  const clickHandler = () => console.log('뽑기');
  return (
    <>
      <MainStyled>
        <MainContentStyled>
          <h1>Candy Luck</h1>
          <Logo />
          <Button clickHandler={clickHandler}>뽑기</Button>
        </MainContentStyled>
      </MainStyled>
    </>
  );
};

export default App;

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
