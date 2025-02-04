import React from 'react'
import { observer } from 'startupjs'
import PropTypes from 'prop-types'
import TextInput from '../TextInput'
import Wrapper from './Wrapper'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { getLabelFromValue } from './Wrapper/helpers'

// TODO: Refactor and move InputLayout into a separate component

function Select ({
  style,
  options,
  value,
  disabled,
  readonly,
  showEmptyValue,
  onChange,
  ...props
}) {
  function renderWrapper ({ style }, children) {
    return pug`
      Wrapper(
        style=style
        options=options
        disabled=disabled
        value=value
        onChange=onChange
        showEmptyValue=showEmptyValue
      )= children
    `
  }

  return pug`
    TextInput(
      style=style
      readonly=readonly
      value=getLabelFromValue(value, options)
      disabled=disabled,
      icon=faAngleDown
      iconPosition='right'
      renderWrapper=renderWrapper
      ...props
    )
  `
}

Select.defaultProps = {
  options: [],
  disabled: false,
  readonly: false,
  showEmptyValue: true
}

Select.propTypes = {
  options: PropTypes.array,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  showEmptyValue: PropTypes.bool,
  onChange: PropTypes.func
}

export default observer(Select)
