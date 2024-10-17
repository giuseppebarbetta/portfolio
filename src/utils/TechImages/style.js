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

  @media(max-width: 435px) {
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
