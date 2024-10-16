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
  }

  button {
    background-color: transparent;
    color: #fefefe;
    font-size: 20px;
    cursor: pointer;
    padding: 8px 35px;

    height: 150px;

    border: 3px solid #828282;
    border-radius: 50%;

    position: absolute;
    margin: 0 0 -280px -150px;

    transition: all 0.3s ease-in-out;

    @media (max-width: 1250px) {
      margin: 0 0 -290px -120px;
    }
    @media (max-width: 925px) {
      margin: 0 0 -320px -70px;
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

  h4 {
    font-size: 22px;
    font-weight: bold;
  }
`

export const StarSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 8px;
`
