import ContactsCover from '../../assets/projects/contacts.png'
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
  )
}
