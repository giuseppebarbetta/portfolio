import { CvStyles, GithubStyles, LinkedinStyles } from './style'
import PropTypes from 'prop-types'

export function GitHubIcon({ size, animation }) {
  return (
    <a href="https://github.com/giuseppebarbetta" target="_blank">
      <GithubStyles animation={animation} size={size} />
    </a>
  )
}

export function LinkedInIcon({ size, animation }) {
  return (
    <a
      href="https://www.linkedin.com/in/giuseppebarbetta/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkedinStyles animation={animation} style={{ fontSize: size }} />
    </a>
  )
}

export function CvIcon({ size, animation }) {
  return (
    <a href="/src/assets/curriculum/CV.pdf" download={'CV Giuseppe frontend'}>
      <CvStyles animation={animation} style={{ fontSize: size }} />
    </a>
  )
}

GitHubIcon.propTypes = {
  size: PropTypes.number,
  animation: PropTypes.bool
}
LinkedInIcon.propTypes = {
  size: PropTypes.number,
  animation: PropTypes.bool
}
CvIcon.propTypes = {
  size: PropTypes.number,
  animation: PropTypes.bool
}

GitHubIcon.defaultProps = {
  size: 50
}
LinkedInIcon.defaultProps = {
  size: 50
}
CvIcon.defaultProps = {
  size: 50
}
