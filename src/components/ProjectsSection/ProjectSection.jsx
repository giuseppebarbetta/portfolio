import ContactsCover from '../../assets/projects/contacts.png'
import ToDoListCover from '../../assets/projects/toDoList.png'
import DevMoviesCover from '../../assets/projects/devMovies.png'
import AlbumInstaCover from '../../assets/projects/albumInsta.png'
import MenuOnlineCover from '../../assets/projects/menuOnline.png'
import ClimaTempoCover from '../../assets/projects/climaTempo.png'

import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import {
  ButtonProject,
  ButtonSection,
  ContainerProjects,
  DetailsSection,
  GitButton,
  ImageSection,
  ProjectCard,
  TextSection
} from './style'
import { TitleText } from '../../utils/Titles/TitleText'

export function ProjectSection() {
  const projects = [
    {
      title: 'Agenda da contatos',
      cover: ContactsCover,
      description:
        'Este projeto é um CRUD básico que simula uma agenda telefônica, onde é possível cadastrar um novo contato, editar, deletar e visualizar todos os contatos.',
      deploy: 'https://contacts-front.netlify.app/',
      repository: 'https://github.com/giuseppebarbetta/contacts-front'
    },
    {
      title: 'Dev Movies',
      cover: DevMoviesCover,
      description:
        'Filmes on demand, baseado em streamings consumindo uma API criada em Mongo db para uma maior solidez e praticidade.',
      deploy: 'https://devflix-movies-app.netlify.app/',
      repository: 'https://github.com/giuseppebarbetta/dev-movies'
    },
    {
      title: 'Cardápio Online',
      cover: MenuOnlineCover,
      description:
        'Cardápio online para hamburgueria interativo e com diversas funções.',
      deploy: 'https://delivery-menu-lyart.vercel.app/',
      repository: 'https://github.com/giuseppebarbetta/delivery-menu'
    },
    {
      title: 'Instagram Album',
      cover: AlbumInstaCover,
      description:
        'Cópia simples do Instagram com consumo de imagens via API e modo "dark/light".',
      deploy: 'https://insta-album-api.netlify.app/',
      repository: 'https://github.com/giuseppebarbetta/insta-album-api'
    },
    {
      title: 'Lista de Tarefas',
      cover: ToDoListCover,
      description:
        'O Fomoso to do list (lista de tarfas), onde você pode incluir, editar e excluir suas tarefas do dia.',
      deploy: 'https://todolist-interface.netlify.app/',
      repository: 'https://github.com/giuseppebarbetta/to-do-list'
    },
    {
      title: 'Clima Tempo',
      cover: ClimaTempoCover,
      description:
        'Projeto interativo para previsão do tempo, consumindo API em tempo real com estilizações condicionais.',
      deploy: 'https://weather-assistent.netlify.app/',
      repository: 'https://github.com/giuseppebarbetta/weather-assistent'
    }
  ]

  return (
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
                <ButtonProject href={item.deploy} target="_blank">
                  Deploy
                </ButtonProject>
                <ButtonProject href={item.repository} target="_blank">
                  Repositório
                </ButtonProject>
              </ButtonSection>
            </DetailsSection>
          </ProjectCard>
        ))}
      <GitButton href="https://github.com/giuseppebarbetta" target="_blank">
        Todos projetos
        <OpenInNewIcon />
      </GitButton>
    </ContainerProjects>
  )
}
