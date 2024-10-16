import styled, { keyframes } from 'styled-components'

const animationLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`

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

export const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75vh;
  width: 100%;
  max-width: 100%;
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
    font-size: 1.25rem;
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
  align-items: start;
  gap: 10px;

  h2 {
    font-size: 7.813rem;
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
  align-items: center;

  margin-bottom: 8px;
  width: 100%;

  a {
    cursor: pointer;
  }

  h2 {
    font-size: 7.813rem;
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
  box-shadow: 1px 1px 34px 2px rgba(152, 232, 159, 0.7);
  -webkit-box-shadow: 1px 1px 34px 2px rgba(152, 232, 159, 0.7);
  -moz-box-shadow: 1px 1px 34px 2px rgba(152, 232, 159, 0.7);

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

    font-size: 1.625rem;
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
