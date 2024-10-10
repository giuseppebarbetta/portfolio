import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import ArticleIcon from '@mui/icons-material/Article'
import styled from 'styled-components'

export const CvStyles = styled(ArticleIcon)`
  font-size: ${(props) => props.size}px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: ${(props) => (props.animation ? 'translateY(10px)' : 'none')};
  }
`

export const LinkedinStyles = styled(LinkedInIcon)`
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: ${(props) => (props.animation ? 'translateY(10px)' : 'none')};
  }
`

export const GithubStyles = styled(GitHubIcon)`
  font-size: ${(props) => props.size}px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: ${(props) => (props.animation ? 'translateY(10px)' : 'none')};
  }
`
