import styled from '@emotion/styled';

type THiddenComponentProps = {
  imageSrc: string;
  imageAlt: string;
  figcaption: string;
};

const HiddenComponent = (props: THiddenComponentProps) => {
  const { imageSrc, imageAlt, figcaption } = props;

  return (
    <figure>
      <img src={imageSrc} alt={imageAlt} />
      <A11yStyled>{figcaption}</A11yStyled>
    </figure>
  );
};

export default HiddenComponent;

const A11yStyled = styled.figcaption`
  overflow: hidden;
  position: absolute;
  clip: rect(0, 0, 0, 0);
  clip-path: circle(0);
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
`;
