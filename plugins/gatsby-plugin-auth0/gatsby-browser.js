import React from 'react'

import RootWrapper from './RootWrapper'

export const wrapRootElement = ({ element }, { plugins, ...options }) => {
  return <RootWrapper authOptions={{ ...options }}>{element}</RootWrapper>
}
