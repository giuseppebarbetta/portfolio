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
  height: ${(props) => props.size}px;
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
