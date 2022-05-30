import React from 'react'
import styled from 'styled-components'
import { Card } from '@pancakeswap-libs/uikit'

export const BodyWrapper = styled(Card)`
  position: relative;
  background: linear-gradient(232deg, rgba(148,10,156,1) 42%, rgba(130,29,246,1) 73%);
  borderRadius: 20px;
  border-color: red;
  max-width: 436px;
  width: 100%;
  z-index: 5;
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>
}
