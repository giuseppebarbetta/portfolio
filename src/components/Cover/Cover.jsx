import {
  About,
  AboutContainer,
  AboutSkillSection,
  AvatarSection,
  BackBelt,
  Background,
  Belt,
  Button,
  ButtonProject,
  ButtonSection,
  Container,
  ContainerProjects,
  DetailsSection,
  FirstLine,
  GitButton,
  ImageSection,
  ProjectCard,
  SecondLine,
  SkillCard,
  SkillSection,
  StarSection,
  TechMain,
  TextSection,
  Title
} from './style'

import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'
import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import StarHalfIcon from '@mui/icons-material/StarHalf'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import ArticleIcon from '@mui/icons-material/Article'

import Avatar from '../../assets/avatar.png'
import { useState } from 'react'

import CssIcon from '../../assets/CssIcon.png'
import DockerIcon from '../../assets/docker-icon.png'
import GitIcon from '../../assets/git-icon.png'
import GithubIcon from '../../assets/github-icon.png'
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
    { image: GithubIcon, name: 'GitHub' },
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
            <h2>REACT</h2>
            <GitHubIcon sx={{ fontSize: 100 }} />
            <LinkedInIcon sx={{ fontSize: 100 }} />
            <ArticleIcon sx={{ fontSize: 100 }} />
          </FirstLine>
          <SecondLine>
            <h2>DEVELOPER</h2>
          </SecondLine>
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
        <GitButton>
          Todos projetos
          <OpenInNewIcon />
        </GitButton>
      </ContainerProjects>

      <AboutContainer>
        <Title>
          <h1>{'< Sobre mim />'}</h1>
          <div></div>
        </Title>
        <About>
          <AboutSkillSection>
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

            <SkillSection>
              <SkillCard>
                <h4>Comunicação</h4>
                <h5>Objetividade e Clareza</h5>
                <StarSection>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarHalfIcon />
                  <StarBorderIcon />
                </StarSection>
              </SkillCard>

              <SkillCard>
                <h4>Trabalho em equipe</h4>
                <h5>Proatividade e Empatia</h5>
                <StarSection>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarHalfIcon />
                </StarSection>
              </SkillCard>

              <SkillCard>
                <h4>Resiliência</h4>
                <h5>Adaptação e Responsabilidade</h5>
                <StarSection>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </StarSection>
              </SkillCard>

              <SkillCard>
                <h4>Aprendizado</h4>
                <h5>Rápido e Continuo</h5>
                <StarSection>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarHalfIcon />
                  <StarBorderIcon />
                </StarSection>
              </SkillCard>
            </SkillSection>
          </AboutSkillSection>
          <AvatarSection>
            <img src={Avatar} alt="foto de perfil" />
            <button>Contrate</button>
          </AvatarSection>
        </About>
      </AboutContainer>
    </>
  )
}
