import styled from 'styled-components'

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

export const ProjectCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 17px;

  width: 620px;
  height: 220px;
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
    height: 190px;
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

export const ButtonProject = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;
  background-color: rgba(255, 255, 255, 0.9);

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
    background-color: #fefefe;
  }
`
