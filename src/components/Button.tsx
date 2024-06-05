import React from 'react';
import styled from '@emotion/styled';

type TButtonProps = React.ComponentProps<'button'> & {
  children: React.ReactNode;
  clickHandler: () => void;
};
const Button = (props: TButtonProps) => {
  const { children, clickHandler } = props;
  return (
    <>
      <ButtonStyled onClick={clickHandler}>{children}</ButtonStyled>
    </>
  );
};

export default Button;

const ButtonStyled = styled.button`
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  background-color: var(--ivory);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 14px;
  font-family: var(--font);
`;
