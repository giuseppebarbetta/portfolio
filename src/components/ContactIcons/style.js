import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import ArticleIcon from '@mui/icons-material/Article'
import styled, { css } from 'styled-components'

export const CvStyles = styled(ArticleIcon)`
  font-size: ${(props) => props.size}px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    ${({ animation }) =>
      animation &&
      css`
        transform: translateY(10px);
      `};
  }
`

export const LinkedinStyles = styled(LinkedInIcon)`
  font-size: ${(props) => props.size}px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    ${({ animation }) =>
      animation &&
      css`
        transform: translateY(10px);
      `};
  }
`

export const GithubStyles = styled(GitHubIcon)`
  font-size: ${(props) => props.size}px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    ${({ animation }) =>
      animation &&
      css`
        transform: translateY(10px);
      `};
  }
`
