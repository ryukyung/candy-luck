import styled from '@emotion/styled';
import { getDate } from '../utils/getToday';

type THeaderProps = {
  imageSrc: string;
  imageAlt: string;
};

const Header = (props: THeaderProps) => {
  const { imageSrc, imageAlt } = props;
  const dateData = getDate();

  return (
    <HeaderStyled>
      <ul>
        <li>{dateData.year}년</li>
        <li>{dateData.month}월</li>
        <li>{dateData.date}일</li>
        <li>{dateData.day}요일</li>
        <li>
          <img src={imageSrc} alt={imageAlt} />
        </li>
      </ul>
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.h2`
  ul {
    width: 100%;
    display: flex;
    gap: 4px;
    padding-top: 8px;
    font-size: 24px;
  }
  img {
    height: 24px;
  }
`;
