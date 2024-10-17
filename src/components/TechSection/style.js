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
  padding: 117px 5px 53px 5px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 915px) {
    flex-wrap: wrap;
    gap: 26px;
    padding: 120px 10px 53px 10px;
  }
  @media (max-width: 675px) {
    gap: 35px;
  }
  @media (max-width: 435px) {
    gap: 8px;
  }

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

    @media (max-width: 915px) {
      font-size: 15px;
    }
  }
`
