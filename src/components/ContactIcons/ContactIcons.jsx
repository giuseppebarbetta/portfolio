import { CvStyles, GithubStyles, LinkedinStyles } from './style'
import PropTypes from 'prop-types'

export function GitHubIcon({ size = 50, animation, responsive }) {
  return (
    <a href="https://github.com/giuseppebarbetta" target="_blank">
      <GithubStyles animation={animation} size={size} responsive={responsive} />
    </a>
  )
}

export function LinkedInIcon({ size = 50, animation, responsive }) {
  return (
    <a
      href="https://www.linkedin.com/in/giuseppebarbetta/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkedinStyles
        animation={animation}
        size={size}
        responsive={responsive}
      />
    </a>
  )
}

export function CvIcon({ size = 50, animation, responsive }) {
  return (
    <a href="/src/assets/curriculum/CV.pdf" download={'CV Giuseppe frontend'}>
      <CvStyles animation={animation} size={size} responsive={responsive} />
    </a>
  )
}

GitHubIcon.propTypes = {
  size: PropTypes.number,
  animation: PropTypes.bool,
  responsive: PropTypes.bool
}
LinkedInIcon.propTypes = {
  size: PropTypes.number,
  animation: PropTypes.bool,
  responsive: PropTypes.bool
}
CvIcon.propTypes = {
  size: PropTypes.number,
  animation: PropTypes.bool,
  responsive: PropTypes.bool
}
