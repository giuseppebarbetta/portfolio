import styled, { keyframes } from 'styled-components'

const animationBelt = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`

const animationBackBelt = keyframes`
  to {
    transform: translateX(100%);
  }
  from {
    transform: translate(0);
  }
`

const animationLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`

const animationRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`

export const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75vh;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;

  background: rgb(84, 212, 32);
  background: radial-gradient(
    circle,
    rgba(84, 212, 32, 0.8015581232492998) 0%,
    rgba(130, 130, 130, 1) 53%
  );
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 260px;

    background-image: linear-gradient(to top, #000000, rgba(0, 0, 0, 0));
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  position: relative;

  h1 {
    font-size: 20px;
    padding-left: 10px;
    animation: ${animationLeft} 0.8s linear;
  }
`

export const ContainerIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const FirstLine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space;
  gap: 10px;

  h2 {
    font-size: 125px;
    line-height: 90px;
    font-weight: bold;
    font-family: 'Archivo Black', sans-serif;
    font-weight: 400;

    margin-right: 17px;
  }
`

export const SecondLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  align-self: flex-end;

  width: 72vw;

  margin-bottom: 8px;

  a {
    cursor: pointer;
  }

  h2 {
    font-size: 125px;
    line-height: 100px;
    font-weight: bold;
    font-family: 'Archivo Black', sans-serif;
    font-weight: 400;
  }
`

export const ThirdLine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  color: #fefefe;

  width: 100%;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 35px;
  color: #010101;
  background-color: #35fb00;

  position: fixed;
  top: 0;
  right: 0;
  margin: 35px 35px 0 0;
  z-index: 3;
  overflow: hidden;

  font-size: 15px;
  font-weight: bold;
  cursor: pointer;

  border-radius: 7px;
  border: 3px solid #35fb00;

  transition: all 0.3s ease-in-out;
  z-index: 5;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    font-size: 15px;
  }

  &:hover {
    color: #fefefe;
    border: 3px solid rgba(82, 82, 82, 0.7);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: rgba(82, 82, 82, 0.7);
    transition: width 0.4s ease;
    z-index: -1;
  }

  &:hover::before {
    width: 100%;
  }
`

export const Belt = styled.div`
  display: flex;
  align-items: center;

  width: max-content;
  max-width: 99vw;
  height: 40px;
  overflow: hidden;

  background-color: rgba(82, 82, 82, 0.5);
  backdrop-filter: blur(10px);
  filter: blur(1px);

  white-space: nowrap;
  transform: rotate(-1.5deg);
  transform-origin: left center;
  margin-top: 26px;
  position: absolute;
  z-index: 4;

  h2 {
    animation: ${animationBelt} 2s infinite linear;
    transition: all 0.5s ease;
    padding-left: 35px;

    font-size: 26px;
  }
`

export const BackBelt = styled.div`
  display: flex;
  align-items: center;

  width: max-content;
  max-width: 99vw;
  height: 35px;
  overflow: hidden;

  background-color: rgba(82, 82, 82, 0.5);
  backdrop-filter: blur(35px);
  filter: blur(2px);
  opacity: 70%;
  border: none;

  white-space: nowrap;
  transform: rotate(1.5deg);
  transform-origin: right center;
  margin-top: 53px;
  position: absolute;
  z-index: 3;

  h2 {
    animation: ${animationBackBelt} 4s infinite linear;
    transition: all 0.5s ease;
    padding-left: 17px;

    font-size: 22px;
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

  img {
    height: 71px;
    border-radius: 17px;

    transform: scale(1);
    transition: all 0.5 ease-in-out;
    animation: ${animationLeft} 1s linear;

    &:hover {
      transform: scale(1.1);
    }
  }

  h2 {
    font-size: 17px;
    animation: ${animationRight} 1s linear;
  }
`

export const ContainerProjects = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 26px;

  height: 100%;
  width: 100%;
  max-width: 100vw;
  padding: 26px 0;

  background-color: #010101;
  border: none;
`

export const GitButton = styled.a`
  width: 70%;
  height: 53px;
  margin: 26px 0 35px 0;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  background-color: transparent;
  border: 3px solid rgba(82, 82, 82, 0.8);
  border-radius: 5px;
  color: #fefefe;
  font-size: 20px;

  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: rgba(82, 82, 82, 0.8);
  }
`

export const Title = styled.div`
  background-color: #010101;
  width: 100%;
  max-width: 100vw;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 26px;

  h1 {
    color: #fefefe;
    font-size: 35px;
    font-weight: bold;
    text-shadow: 5px 3px 2px rgba(40, 167, 69, 0.7);

    width: 620px;
  }

  div {
    width: 620px;
  }
`

export const ProjectCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 17px;

  width: 620px;
  padding: 17px;
  border-radius: 17px;

  background-color: rgba(82, 82, 82, 0.8);
  transition: all ease-in-out;

  &:hover {
    box-shadow: 10px 12px 16px -4px rgba(225, 225, 225, 0.75);
    -webkit-box-shadow: 10px 10px 16px -4px rgba(225, 225, 225, 0.75);
    -moz-box-shadow: 10px 10px 16px -4px rgba(225, 225, 225, 0.75);
    transform: translateX(10px);
  }
`

export const ImageSection = styled.div`
  display: flex;

  img {
    width: 280px;
    border-radius: 17px;
  }
`

export const DetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: baseline;
  gap: 17px;

  h3 {
    font-size: 22px;
  }
`

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  gap: 10px;

  width: 100%;
`

export const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 17px;
`

export const ButtonProject = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 110px;
  padding: 8px 0;
  border: none;
  border-radius: 8px;
  color: #010101;
  font-size: 14px;
  font-weight: bold;

  cursor: pointer;
  border-bottom: 3px solid #35fb00;

  &:hover {
    border: none;
    background-color: rgba(255, 255, 255, 0.8);
  }
`

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #010101;
  padding: 26px;
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
    margin: 0 0 -350px 125px;

    transition: all 0.3s ease-in-out;

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

export const ContactSection = styled.div`
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

  h4 {
    font-size: 20px;
  }

  .middleBackground {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 0 17px;

    height: 26px;
    width: 100%;
    background-color: #20a3f9;
    border-radius: 8px 8px 0 0;
    position: absolute;
    top: 0;
    left: 0;

    p {
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
  }

  p {
    color: #99fb00;
    height: 8px;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
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

export const ContactButton = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;

  gap: 10px;

  width: 170px;
  height: 60px;

  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translate(10px, -10px);
  }
`
