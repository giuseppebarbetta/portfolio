import PropTypes from 'prop-types'
import { TechImg } from './style'

export function TechImage({ src, alt = 'tech icon', animation, size = 50 }) {
  return <TechImg src={src} alt={alt} animation={animation} size={size} />
}

TechImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  size: PropTypes.number,
  animation: PropTypes.bool
}
