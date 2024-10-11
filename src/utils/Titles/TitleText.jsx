import PropTypes from 'prop-types'
import { TitleStyle } from './style'

export function TitleText({ text }) {
  return (
    <TitleStyle>
      <h1>&lt; {text} /&gt; </h1>
      <div></div>
    </TitleStyle>
  )
}

TitleText.propTypes = {
  text: PropTypes.string
}
