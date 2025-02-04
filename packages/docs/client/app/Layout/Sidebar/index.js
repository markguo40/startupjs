import React from 'react'
import { observer, useModel } from 'startupjs'
import { SmartSidebar } from '@startupjs/ui'
import Content from './Content'

export const SIDEBAR_PATH = '_session.Sidebar.mainSidebar'

function renderContent () {
  return pug`Content`
}

export default observer(function Sidebar ({ children }) {
  const $open = useModel(SIDEBAR_PATH)
  return pug`
    SmartSidebar($open=$open width=240 renderContent=renderContent)
      = children
  `
})
