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

const animationTech = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`

const animationTitleTech = keyframes`
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

  position: relative;

  video {
    height: 75vh;
    width: 100vw;
    object-fit: cover;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }

  div {
    background-color: rgba(0, 0, 0, 0.71);
    height: 75vh;
    width: 100%;

    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
  }

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
  justify-content: space-around;
  align-items: center;

  max-width: 100vw;

  background-color: transparent;

  h1 {
    background-color: transparent;
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 170px;
  height: 35px;
  color: #fefefe;
  background-color: transparent;

  position: relative;
  overflow: hidden;

  font-size: 17px;
  font-weight: bold;
  cursor: pointer;

  border-radius: 17px;
  border: 2px solid #28a745;

  transition: all 0.3s ease-in-out;
  z-index: 1;

  &:hover {
    color: #fefefe;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #28a745;
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
  z-index: 5;

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
  z-index: 4;

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
    animation: ${animationTech} 1s linear;

    &:hover {
      transform: scale(1.1);
    }
  }

  h2 {
    font-size: 17px;
    animation: ${animationTitleTech} 1s linear;
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

export const Title = styled.h1`
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
  border-bottom: 5px solid #828282;

  background-color: rgba(82, 82, 82, 0.8);
  transition: all ease-in-out;

  &:hover {
    border: none;
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
  justify-content: center;
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
  border-bottom: 3px solid #28a745;

  &:hover {
    border: none;
    background-color: rgba(255, 255, 255, 0.8);
  }
`
