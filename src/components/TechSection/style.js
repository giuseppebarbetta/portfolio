import styled, { keyframes } from 'styled-components'

const animationRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`

export const TechMain = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 17px;

  width: 100%;

  background-color: #010101;
  padding: 117px 0 53px 0;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  h2 {
    font-size: 17px;
    animation: ${animationRight} 1s linear;
  }
`
