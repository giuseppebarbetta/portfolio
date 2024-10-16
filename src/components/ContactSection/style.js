import styled from 'styled-components'

export const ContactSectionStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  height: 100%;
  background-color: #010101;
  padding: 17px 0 53px 0;
  gap: 10px;
`

export const ContainerContact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 70vw;
  height: 530px;
  margin: 26px 0;
  padding: 53px 20px;

  border: 1px solid #828282;
  border-radius: 8px;

  @media (max-width: 880px) {
    width: 85vw;
  }

  h4 {
    font-size: 35px;
    margin-bottom: 26px;
  }

  .topBackground {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 17px;

    height: 26px;
    width: 100%;
    background-color: #35fb00;
    border-radius: 8px 8px 0 0;
    position: absolute;
    top: 0;
    left: 0;

    p {
      color: #010101;
      font-weight: 700;
    }
  }
`

export const BackgroundInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  position: relative;

  width: 25vw;
  height: 100%;

  border: 1px solid #828282;
  border-radius: 8px;

  @media (max-width: 1025px) {
    width: 40vw;
  }

  h4 {
    font-size: 20px;
  }

  .middleBackground {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 17px;

    height: 30px;
    width: 100%;
    background-color: #20a3f9;
    border-radius: 8px 8px 0 0;
    position: absolute;
    top: 0;
    left: 0;

    p {
      line-height: 10px;
      color: #010101;
      font-weight: 700;
    }
  }

  button {
    background-color: transparent;
    cursor: pointer;
    border: none;
    border-radius: 8px;

    font-size: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: translateX(8px);
    }

    @media (max-width: 1350px) {
      font-size: 15px;
    }
  }

  p {
    color: #99fb00;
    height: 8px;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 17px;
`

export const ContactIcons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-left: 26px;

  gap: 15px;
`

export const ContactButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;

  background-color: transparent;
  border: none;

  gap: 10px;

  width: fit-content;
  height: 60px;

  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translate(10px, -10px);
  }
`
