import { TitleText } from '../../utils/Titles/TitleText'
import {
  About,
  AboutContainer,
  AboutSkillSection,
  AvatarSection,
  SkillCard,
  SkillSection,
  StarSection
} from './style'
import StarIcon from '@mui/icons-material/Star'
import Avatar from '../../assets/avatar.png'

export function AboutSection() {
  const skills = [
    { skill: 'Comuniação', strength: 'Objetividade e Clareza' },
    { skill: 'Trabalho em Equipe', strength: 'Proatividade e Empatia' },
    { skill: 'Resiliência', strength: 'Adaptação e Responsabilidade' },
    { skill: 'Aprendzado', strength: 'Rápido e Continuo' }
  ]
  return (
    <AboutContainer>
      <TitleText text={'Sobre Mim'} />
      <About>
        <AboutSkillSection>
          <p>
            Me chamo Giuseppe e estou migrando da área Contábil para área de
            tecnologia como Desenvolvedor Full Stack, em constante aprimoramento
            com a criação de projetos acadêmicos e freelancers. Tenho expertise
            no uso das principais tecnologias como HTML, CSS, versionamento no
            GIT, JavaScript, React, Node.js. Sou um profissional determinado,
            persistente e sempre em busca de novos aprendizados, para manter-me
            atualizado nas melhores práticas do mercado.
          </p>

          <SkillSection>
            {skills &&
              skills.map((item, index) => (
                <SkillCard key={index}>
                  <h4>{item.skill}</h4>
                  <h5>{item.strength}</h5>
                  <StarSection>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </StarSection>
                </SkillCard>
              ))}
          </SkillSection>
        </AboutSkillSection>
        <AvatarSection>
          <img src={Avatar} alt="foto de perfil" />
          <button>Contrate</button>
        </AvatarSection>
      </About>
    </AboutContainer>
  )
}
