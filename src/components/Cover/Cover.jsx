import {
  BackBelt,
  Background,
  Belt,
  Button,
  Container,
  ContainerIcons,
  FirstLine,
  SecondLine,
  ThirdLine
} from './style'

import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'

import { useState } from 'react'

import { CvIcon, GitHubIcon, LinkedInIcon } from '../ContactIcons/ContactIcons'

export function Cover() {
  const techArray = Array(20).fill('<Tecnologias />')

  const [buttonText, setButtonText] = useState('CONTRATE')

  return (
    <>
      {/* Componente principal que é a capa */}
      <Button
        onMouseEnter={() =>
          setButtonText(
            <span>
              Fale Comigo
              <LocalPhoneOutlinedIcon />
            </span>
          )
        }
        onMouseLeave={() => setButtonText('CONTRATE')}
      >
        {buttonText}
      </Button>

      <Background>
        <Container>
          <h1>Olá mundo 👋 Eu sou o Giuseppe</h1>
          <FirstLine>
            <h2>DESENVOLVEDOR</h2>
          </FirstLine>
          <SecondLine>
            <ContainerIcons>
              <GitHubIcon animation size={100} responsive />
              <LinkedInIcon animation size={100} responsive />
              <CvIcon animation size={100} responsive />
            </ContainerIcons>
            <h2>FRONTEND</h2>
          </SecondLine>
          <ThirdLine>
            <p>Tenho 29 anos e estou como desenvolvedor frontend freelancer</p>
            <p>
              com experiência de 10 meses desenvolvendo projetos e resolvendo
              problemas
            </p>
            <p>através da tecnologia</p>
          </ThirdLine>
        </Container>
      </Background>

      <Belt>
        {techArray &&
          techArray.map((item, index) => <h2 key={index}>{item}</h2>)}
      </Belt>
      <BackBelt>
        {techArray &&
          techArray.map((item, index) => <h2 key={index}>{item}</h2>)}
      </BackBelt>

      {/* Componente seção tecnologia */}

      {/* Componentizar e finalizar seção de projetos */}

      {/* Componentizar e finalizar seção de sobre */}

      {/* Componentizar seção de contatos */}
    </>
  )
}
