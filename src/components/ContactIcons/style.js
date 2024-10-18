import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import ArticleIcon from '@mui/icons-material/Article'
import styled, { css } from 'styled-components'

export const CvStyles = styled(ArticleIcon)`
  a {
    width: fit-content;
    height: fit-content;
  }

  width: ${(props) => props.size}px;
  height: fit-content;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  ${({ responsive, size }) =>
    responsive &&
    css`
      @media (max-width: 1025px) {
        width: calc(${size}px * 0.8);
      }

      @media (max-width: 825px) {
        width: calc(${size}px * 0.6);
      }

      @media (max-width: 435px) {
        width: calc(${size}px * 0.3);
      }
    `}

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
  height: fit-content;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  ${({ responsive, size }) =>
    responsive &&
    css`
      @media (max-width: 1025px) {
        font-size: calc(${size}px * 0.8);
      }

      @media (max-width: 825px) {
        font-size: calc(${size}px * 0.6);
      }

      @media (max-width: 435px) {
        font-size: calc(${size}px * 0.3);
      }
    `}

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
  height: fit-content;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  ${({ responsive, size }) =>
    responsive &&
    css`
      @media (max-width: 1025px) {
        font-size: calc(${size}px * 0.8);
      }

      @media (max-width: 825px) {
        font-size: calc(${size}px * 0.6);
      }

      @media (max-width: 435px) {
        font-size: calc(${size}px * 0.3);
      }
    `}

  &:hover {
    ${({ animation }) =>
      animation &&
      css`
        transform: translateY(10px);
      `};
  }
`
