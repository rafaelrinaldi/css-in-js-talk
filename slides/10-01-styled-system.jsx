import React from 'react'
import { colors, fontSizes, fontWeights, space } from 'styled-system'
import styled from 'styled-components'

const Box = styled.div(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  colors,
  fontSizes,
  fontWeights,
  space // Margins, paddings, grid column gaps, etc
)

const MyComponent = () => (
  <Box
    fontSize={4}
    fontWeight='bold'
    p={3} {/* Same as `padding` */}
    mb={[ 4, 5 ]} {/* Same as `marginBottom` */ }
    color='white'
    bg='primary'> {/* Same as */}
    Sup Better
  </Box>
)
