import React from 'react'
import propTypes from 'prop-types'
import { Text, View, TouchableOpacity } from 'react-native'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { observer } from 'startupjs'
import Icon from '../../../Icon'
import Menu from '../../../Menu'
import './index.styl'

function DropdownItem ({
  label,
  value,
  icon,
  onPress,
  children,
  _activeValue,
  _variant,
  _onChange,
  _onDismissDropdown,
  _index,
  _childenLength
}) {
  const isPure = _variant === 'pure'

  const handlePress = () => {
    if (onPress) {
      onPress()
      _onDismissDropdown()
    } else {
      _onChange(value)
    }
  }

  if (_variant === 'popover' && !isPure) {
    return pug`
      Menu.Item(
        active=_activeValue === value
        onPress=handlePress
        iconPosition='left'
        icon=icon
      )= label
    `
  }

  return pug`
    TouchableOpacity(onPress=handlePress)
      View.item(styleName=[!isPure && _variant, {
        active: !isPure && (_activeValue === value),
        itemUp: !isPure && (_index === 0),
        itemDown: !isPure && (_index === _childenLength - 1)
      }])
        if isPure
          = children
        else
          Text.itemText(styleName=[_variant, { active: _activeValue && _activeValue === value }])
            = label
          if _activeValue === value
            Icon.iconActive(styleName=_variant icon=faCheck)
  `
}

DropdownItem.defaultProps = {}

DropdownItem.propTypes = {
  label: propTypes.string.isRequired,
  value: propTypes.string.isRequired
}

export default observer(DropdownItem)
