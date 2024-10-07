import {
  About,
  AboutContainer,
  BackBelt,
  Background,
  Belt,
  Button,
  ButtonProject,
  ButtonSection,
  Container,
  ContainerProjects,
  DetailsSection,
  ImageSection,
  ProjectCard,
  TechMain,
  TextSection,
  Title
} from './style'

import cover from '../../assets/cover.mp4'
import Avatar from '../../assets/avatar.png'
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
import ContactsCover from '../../assets/projects/contacts.png'

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
  const projects = [
    {
      title: 'Agenda da contatos',
      cover: ContactsCover,
      description:
        'Este projeto é um CRUD básico que simula uma agenda telefônica, onde é possível cadastrar um novo contato, editar, deletar e visualizar todos os contatos.'
    },
    {
      title: 'Agenda da contatos',
      cover: ContactsCover,
      description:
        'Este projeto é um CRUD básico que simula uma agenda telefônica, onde é possível cadastrar um novo contato, editar, deletar e visualizar todos os contatos.'
    },
    {
      title: 'Agenda da contatos',
      cover: ContactsCover,
      description:
        'Este projeto é um CRUD básico que simula uma agenda telefônica, onde é possível cadastrar um novo contato, editar, deletar e visualizar todos os contatos.'
    },
    {
      title: 'Agenda da contatos',
      cover: ContactsCover,
      description:
        'Este projeto é um CRUD básico que simula uma agenda telefônica, onde é possível cadastrar um novo contato, editar, deletar e visualizar todos os contatos.'
    }
  ]

  return (
    <>
      <Button
        onMouseEnter={() => setButtonText('Fale comigo 📞')}
        onMouseLeave={() => setButtonText('CONTRATE')}
      >
        {buttonText}
      </Button>
      <Background>
        <video autoPlay muted loop src={cover} />
        <div></div>
        <Container>
          <h1>Aqui é a capa</h1>
          <span>Aqui vai uma foto</span>
        </Container>
      </Background>

      <Belt>
        <h2>{'< Tecnologias />'}</h2>
        <h2>{'< Tecnologias />'}</h2>
        <h2>{'< Tecnologias />'}</h2>
        <h2>{'< Tecnologias />'}</h2>
        <h2>{'< Tecnologias />'}</h2>
        <h2>{'< Tecnologias />'}</h2>
        <h2>{'< Tecnologias />'}</h2>
        <h2>{'< Tecnologias />'}</h2>
        <h2>{'< Tecnologias />'}</h2>
        <h2>{'< Tecnologias />'}</h2>
        <h2>{'< Tecnologias />'}</h2>
        <h2>{'< Tecnologias />'}</h2>
        <h2>{'< Tecnologias />'}</h2>
        <h2>{'< Tecnologias />'}</h2>
        <h2>{'< Tecnologias />'}</h2>
        <h2>{'< Tecnologias />'}</h2>
        <h2>{'< Tecnologias />'}</h2>
        <h2>{'< Tecnologias />'}</h2>
        <h2>{'< Tecnologias />'}</h2>
        <h2>{'< Tecnologias />'}</h2>
      </Belt>
      <BackBelt>
        <h2>{'< Tecnologias />'}</h2>
        <h2>{'< Tecnologias />'}</h2>
        <h2>{'< Tecnologias />'}</h2>
        <h2>{'< Tecnologias />'}</h2>
        <h2>{'< Tecnologias />'}</h2>
        <h2>{'< Tecnologias />'}</h2>
        <h2>{'< Tecnologias />'}</h2>
        <h2>{'< Tecnologias />'}</h2>
        <h2>{'< Tecnologias />'}</h2>
        <h2>{'< Tecnologias />'}</h2>
        <h2>{'< Tecnologias />'}</h2>
        <h2>{'< Tecnologias />'}</h2>
        <h2>{'< Tecnologias />'}</h2>
        <h2>{'< Tecnologias />'}</h2>
        <h2>{'< Tecnologias />'}</h2>
        <h2>{'< Tecnologias />'}</h2>
        <h2>{'< Tecnologias />'}</h2>
        <h2>{'< Tecnologias />'}</h2>
        <h2>{'< Tecnologias />'}</h2>
        <h2>{'< Tecnologias />'}</h2>
        <h2>{'< Tecnologias />'}</h2>
        <h2>{'< Tecnologias />'}</h2>
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

      <ContainerProjects>
        <Title>
          <h1>{'< Projetos />'}</h1>
          <div></div>
        </Title>
        {projects &&
          projects.map((item, index) => (
            <ProjectCard key={index}>
              <ImageSection>
                <img src={item.cover} />
              </ImageSection>
              <DetailsSection>
                <TextSection>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </TextSection>
                <ButtonSection>
                  <ButtonProject>Deploy</ButtonProject>
                  <ButtonProject>Repositório</ButtonProject>
                </ButtonSection>
              </DetailsSection>
            </ProjectCard>
          ))}
      </ContainerProjects>

      <AboutContainer>
        <Title>
          <h1>{'< Sobre mim />'}</h1>
          <div></div>
        </Title>
        <About>
          <p>
            Me chamo Giuseppe e estou migrando da área Contábil para área de
            Tecnologia, como Desenvolvedor Full Stack, em constante
            aprimoramento com a criação de projetos acadêmicos e freelancers.
            Tenho expertise no uso das principais tecnologias como HTML, CSS,
            versionamento no GIT, JavaScript, React, Node.js. Sou um
            profissional determinado, persistente e sempre em busca de novos
            aprendizados, para manter-me atualizado nas melhores práticas do
            mercado.
          </p>
          <div>
            <img src={Avatar} alt="foto de perfil" />
            <button>Contrate</button>
          </div>
        </About>
      </AboutContainer>
    </>
  )
}
