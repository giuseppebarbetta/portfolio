import styled, { css, keyframes } from 'styled-components'

const animationLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`

export const TechImg = styled.img`
  ${({ size }) =>
    size &&
    css`
      height: ${size}px;
    `}
  border-radius: 17px;
  transition: all 0.3s ease;
  ${({ animation }) =>
    animation &&
    css`
      animation: ${animationLeft} 1s linear;
    `};

  @media (max-width: 915px) {
    height: calc(${(props) => props.size}px * 0.8);
  }

  &:hover {
    ${({ animation }) =>
      animation &&
      css`
        transform: scale(1.1);
      `}
  }
`
