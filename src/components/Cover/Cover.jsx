import {
  BackBelt,
  Background,
  Belt,
  Button,
  Container,
  TechMain
} from './style'

import cover from '../../assets/cover.mp4'
import { useState } from 'react'

import CssIcon from '../../assets/CssIcon.png'
import DockerIcon from '../../assets/docker-icon.png'
import GitIcon from '../../assets/git-icon.png'
import GitHubIcon from '../../assets/github-icon.png'
import HtmlIcon from '../../assets/html-icon.png'
import JsIcon from '../../assets/js-icon.png'
import MongoIcon from '../../assets/mongo-icon.png'
import NodeIcon from '../../assets/node-icon.png'
import ReactIcon from '../../assets/react-icon.png'
import TsIcon from '../../assets/ts-icon.png'

export function Cover() {
  const [buttonText, setButtonText] = useState('CONTRATE')
  const techImages = [
    { image: HtmlIcon, name: 'HTML' },
    { image: CssIcon, name: 'CSS' },
    { image: JsIcon, name: 'Java Script' },
    { image: ReactIcon, name: 'React' },
    { image: TsIcon, name: 'Type Script' },
    { image: GitIcon, name: 'Git' },
    { image: GitHubIcon, name: 'GitHub' },
    { image: NodeIcon, name: 'Node JS' },
    { image: DockerIcon, name: 'Docker' },
    { image: MongoIcon, name: 'Mongo' }
  ]

  return (
    <>
      <Background>
        <video autoPlay muted loop src={cover} />
        <div></div>
        <Container>
          <h1>Aqui é a capa</h1>
          <span>Aqui vai uma foto</span>
          <Button
            onMouseEnter={() => setButtonText('Fale comigo 📞')}
            onMouseLeave={() => setButtonText('CONTRATE')}
          >
            {buttonText}
          </Button>
        </Container>
      </Background>

      <Belt>
        <h2>Tecnologias •</h2>
        <h2>Tecnologias •</h2>
        <h2>Tecnologias •</h2>
        <h2>Tecnologias •</h2>
        <h2>Tecnologias •</h2>
        <h2>Tecnologias •</h2>
        <h2>Tecnologias •</h2>
        <h2>Tecnologias •</h2>
        <h2>Tecnologias •</h2>
        <h2>Tecnologias •</h2>
        <h2>Tecnologias •</h2>
        <h2>Tecnologias •</h2>
        <h2>Tecnologias •</h2>
        <h2>Tecnologias •</h2>
        <h2>Tecnologias •</h2>
        <h2>Tecnologias •</h2>
        <h2>Tecnologias •</h2>
        <h2>Tecnologias •</h2>
        <h2>Tecnologias •</h2>
        <h2>Tecnologias •</h2>
      </Belt>
      <BackBelt>
        <h2>Tecnologias •</h2>
        <h2>Tecnologias •</h2>
        <h2>Tecnologias •</h2>
        <h2>Tecnologias •</h2>
        <h2>Tecnologias •</h2>
        <h2>Tecnologias •</h2>
        <h2>Tecnologias •</h2>
        <h2>Tecnologias •</h2>
        <h2>Tecnologias •</h2>
        <h2>Tecnologias •</h2>
        <h2>Tecnologias •</h2>
        <h2>Tecnologias •</h2>
        <h2>Tecnologias •</h2>
        <h2>Tecnologias •</h2>
        <h2>Tecnologias •</h2>
        <h2>Tecnologias •</h2>
        <h2>Tecnologias •</h2>
        <h2>Tecnologias •</h2>
        <h2>Tecnologias •</h2>
        <h2>Tecnologias •</h2>
        <h2>Tecnologias •</h2>
        <h2>Tecnologias •</h2>
      </BackBelt>

      <TechMain>
        {techImages &&
          techImages.map((item, index) => (
            <div key={index}>
              <img src={item?.image} alt={`${item?.name} icone`} />
              <h2>{item?.name}</h2>
            </div>
          ))}
      </TechMain>
    </>
  )
}
