import React from 'react';
import styled from '@emotion/styled';

type TButtonProps = {
  target: 'main' | 'modal';
  children: React.ReactNode;
  clickHandler: () => void;
} & React.ComponentPropsWithoutRef<'button'>;

const colorSet = {
  main: ['--ivory', '--black'],
  modal: ['--red', '--ivory'],
};

const Button = ({ target, children, clickHandler }: TButtonProps) => {
  const colorType = colorSet[target];

  return (
    <ButtonStyled colorType={colorType} onClick={clickHandler}>
      {children}
    </ButtonStyled>
  );
};

export default Button;

const ButtonStyled = styled.button<{ colorType: string[] }>`
  background-color: ${(props) => `var(${props.colorType[0]})`};
  outline: 1px solid ${(props) => `var(${props.colorType[0]})`};
  border: 2px solid ${(props) => `var(${props.colorType[0]})`};
  padding: 10px 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-family: var(--font);
  transition: box-shadow 0.3s;
  &:hover {
    border: 2px dashed ${(props) => `var(${props.colorType[1]})`};
  }
`;
