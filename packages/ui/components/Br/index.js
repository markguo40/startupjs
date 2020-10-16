import React from 'react'
import { observer, u } from 'startupjs'
import { Text } from 'react-native'
import PropTypes from 'prop-types'
import './index.styl'
const LINE_HEIGHT = u(2)

function Br ({ style, half, lines }) {
  const height = half ? LINE_HEIGHT / 2 : LINE_HEIGHT * lines
  return pug`
    Text.root(style=[{ height }, style])
  `
}

Br.defaultProps = {
  half: false,
  lines: 1
}

Br.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  half: PropTypes.bool,
  lines: PropTypes.number

}

export default observer(Br)
