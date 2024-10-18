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

  @media(max-width: 915px) {
    ${({ size }) =>
      size &&
      css`
        height: calc(${size}px * 1.6);
      `}
  }

  @media (max-width: 745px) {
    ${({ size }) =>
      size &&
      css`
        height: calc(${size}px * 1.3);
      `}
  }

  @media (max-width: 625px) {
    ${({ size }) =>
      size &&
      css`
        height: calc(${size}px * 1);
      `}
  }

  @media (max-width: 455px) {
    ${({ size }) =>
      size &&
      css`
        height: calc(${size}px * 0.8);
      `}
  }

  border-radius: 17px;
  transition: all 0.3s ease;
  ${({ animation }) =>
    animation &&
    css`
      animation: ${animationLeft} 1s linear;
    `};

  &:hover {
    ${({ animation }) =>
      animation &&
      css`
        transform: scale(1.1);
      `}
  }
`
