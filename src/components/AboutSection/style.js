import styled from 'styled-components'

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: none;

  background-color: #010101;
  padding: 26px 0;
`

export const About = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  padding: 35px 0 62px 0;

  @media (max-width: 435px) {
    flex-direction: column;
  }
`

export const AvatarSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  img {
    width: 260px;
    border-radius: 100%;

    @media (max-width: 825px) {
      width: 220px;
    }
    @media (max-width: 675px) {
      width: 190px;
    }
    @media (max-width: 435px) {
      width: 170px;
    }
  }

  button {
    background-color: transparent;
    color: #fefefe;
    font-size: 20px;
    cursor: pointer;
    padding: 8px 35px;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 150px;

    border: 3px solid #828282;
    border-radius: 50%;

    position: absolute;
    margin: 0 0 -280px -150px;

    transition: all 0.3s ease-in-out;

    @media (max-width: 1635px) {
      margin: 0 0 -290px -120px;
    }
    @media (max-width: 1250px) {
      margin: 0 0 -290px -100px;
    }
    @media (max-width: 925px) {
      margin: 0 0 -320px -50px;
    }
    @media (max-width: 675px) {
      height: 120px;
      width: 120px;
      margin: 0 0 -260px -62px;
      align-self: center;
    }
    @media (max-width: 435px) {
      width: 90px;
      height: 90px;
      margin: 0 0 -215px -53px;
      font-size: 17px;
    }

    &:hover {
      background-color: #828282;
      border-radius: 17px;
      font-weight: bold;
      border: none;
    }
  }
`

export const AboutSkillSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  width: 60vw;

  p {
    width: 80%;
    font-size: 19px;
    line-height: 22px;

    @media (max-width: 825px) {
      font-size: 17px;
    }
    @media (max-width: 435px) {
      text-align: center;
    }
    @media (max-width: 435px) {
      font-size: 15px;
      width: 80vw;
    }
  }
`

export const SkillSection = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  gap: 17px;
  padding: 35px 0 26px 0;

  @media (max-width: 435px) {
    width: 90vw;
    max-width: 100vw;
    padding: 35px 7px;
  }
`

export const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 220px;
  height: 125px;

  background-color: rgba(82, 82, 82, 0.8);
  border-radius: 8px;
  border: none;

  color: #fefefe;

  @media (max-width: 825px) {
    width: 170px;
    height: 100px;
    gap: 5px;
  }
  @media (max-width: 435px) {
    width: 140px;
  }

  h4 {
    font-size: 22px;
    font-weight: bold;

    @media (max-width: 825px) {
      font-size: 17px;
    }
    @media (max-width: 435px) {
      font-size: 14px;
    }
  }

  h5 {
    @media (max-width: 435px) {
      font-size: 11px;
    }
  }
`

export const StarSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 8px;
`
