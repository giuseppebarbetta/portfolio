import TouchAppIcon from '@mui/icons-material/TouchApp'
import { useState } from 'react'
import { TitleText } from '../../utils/Titles/TitleText'
import {
  BackgroundInfo,
  ContactButton,
  ContactIcons,
  ContactSectionStyle,
  ContainerContact,
  InfoContainer
} from './style'
import { CvIcon, GitHubIcon, LinkedInIcon } from '../ContactIcons/ContactIcons'

export function ContactSection() {
  const email = 'giuseppebarbetta@outlook.com'
  const [copiedText, setCopiedText] = useState('')

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
    <ContactSectionStyle>
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
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/giuseppebarbetta/',
                  '_blank'
                )
              }
            >
              <LinkedInIcon />
              <p>LinkedIn</p>
            </ContactButton>

            <ContactButton
              onClick={() =>
                window.open('https:/www.github.com/giuseppebarbetta', '_blank')
              }
            >
              <GitHubIcon />
              <p>Github</p>
            </ContactButton>

            <ContactButton
              onClick={() => window.open('/src/assets/curriculum/CV.pdf')}
              download={'CV Giuseppe frontend'}
            >
              <CvIcon />
              <p>Currículo</p>
            </ContactButton>
          </ContactIcons>
        </InfoContainer>
      </ContainerContact>
    </ContactSectionStyle>
  )
}
