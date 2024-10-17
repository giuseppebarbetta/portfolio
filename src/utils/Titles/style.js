import styled from 'styled-components'

export const TitleStyle = styled.div`
  background-color: #010101;
  width: 100%;
  max-width: 100vw;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 26px;

  @media (max-width: 435px) {
    flex-direction: column;
    width: 300px;
  }

  h1 {
    color: #fefefe;
    font-size: 35px;
    font-weight: bold;
    text-shadow: 5px 3px 2px rgba(40, 167, 69, 0.7);

    width: 620px;

    @media (max-width: 1300px) {
      padding-left: 26px;
    }
    @media (max-width: 435px) {
      width: fit-content;
      padding: 0;
    }
  }

  div {
    width: 620px;

    @media (max-width: 435px) {
      width: 300px;
    }
  }
`
