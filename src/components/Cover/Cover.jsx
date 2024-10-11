import {
  About,
  AboutContainer,
  AboutSkillSection,
  AvatarSection,
  BackBelt,
  Background,
  BackgroundInfo,
  Belt,
  Button,
  ButtonProject,
  ButtonSection,
  ContactButton,
  ContactIcons,
  ContactSection,
  Container,
  ContainerContact,
  ContainerIcons,
  ContainerProjects,
  DetailsSection,
  FirstLine,
  GitButton,
  ImageSection,
  InfoContainer,
  ProjectCard,
  SecondLine,
  SkillCard,
  SkillSection,
  StarSection,
  TextSection,
  ThirdLine
} from './style'

import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'
import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import StarHalfIcon from '@mui/icons-material/StarHalf'
import TouchAppIcon from '@mui/icons-material/TouchApp'

import Avatar from '../../assets/avatar.png'
import { useState } from 'react'

import ContactsCover from '../../assets/projects/contacts.png'
import { CvIcon, GitHubIcon, LinkedInIcon } from '../ContactIcons/ContactIcons'
import { TitleText } from '../../utils/Titles/TitleText'
import { TechSection } from '../TechSection/TechSection'

export function Cover() {
  const email = 'giuseppebarbetta@outlook.com'
  const [copiedText, setCopiedText] = useState('')
  const [buttonText, setButtonText] = useState('CONTRATE')

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

  const copyToClipBoard = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopiedText('Email Copiado!')

        setTimeout(() => {
          setCopiedText('')
        }, 2000)
      })
      .catch((err) => {
        console.error(`Erro ao copiar o texto:`, err)
      })
  }

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
              <GitHubIcon animation size={100} />
              <LinkedInIcon animation size={100} />
              <CvIcon animation size={100} />
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

      {/* Ainda falta enviar para o componente da seção de tecnologia */}
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

      {/* Componente seção tecnologia */}
      <TechSection />

      {/* Componentizar e finalizar seção de projetos */}
      <ContainerProjects>
        <TitleText text={'Projetos'} />
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
        <GitButton href="https://github.com/giuseppebarbetta" target="_blank">
          Todos projetos
          <OpenInNewIcon />
        </GitButton>
      </ContainerProjects>

      {/* Componentizar e finalizar seção de sobre */}
      <AboutContainer>
        <TitleText text={'Sobre Mim'} />
        <About>
          <AboutSkillSection>
            <p>
              Me chamo Giuseppe e estou migrando da área Contábil para área de
              tecnologia como Desenvolvedor Full Stack, em constante
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
                  <StarIcon />
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

      {/* Componentizar seção de contatos */}
      <ContactSection>
        <TitleText text={'Contato'} />
        <ContainerContact>
          <span className="topBackground">
            <p>• • •</p>
            <p>X</p>
          </span>
          <h4>Dúvidas e mais informações:</h4>
          <InfoContainer>
            <BackgroundInfo>
              <span className="middleBackground">
                <p>• • •</p>
                <p>X</p>
              </span>
              <button onClick={copyToClipBoard}>
                giuseppebarbetta@outlook.com
                <TouchAppIcon />
              </button>
              <p>{copiedText}</p>
            </BackgroundInfo>
            <ContactIcons>
              <ContactButton
                href="https://www.linkedin.com/in/giuseppebarbetta/"
                target="_blank"
              >
                <LinkedInIcon />
                <p>LinkedIn</p>
              </ContactButton>

              <ContactButton
                href="https://github.com/giuseppebarbetta"
                target="_blank"
              >
                <GitHubIcon />
                <p>Github</p>
              </ContactButton>

              <ContactButton
                href="/src/assets/curriculum/CV.pdf"
                download={'CV Giuseppe frontend'}
              >
                <CvIcon />
                <p>Currículo</p>
              </ContactButton>
            </ContactIcons>
          </InfoContainer>
        </ContainerContact>
      </ContactSection>
    </>
  )
}
