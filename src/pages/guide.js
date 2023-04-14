import React from 'react'
import styled from 'styled-components'
import Lottie from 'react-lottie'
import * as animationData from '../images/loading.json'

import '../base.css' //tent

const notionUrl =
  'https://5m-design.notion.site/24058136d29d4ed4a4a7033855bb49d7'
const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`
const IndexPage = () => (
  <Container>
    <Lottie
      options={{ loop: true, autoplay: true, animationData: animationData }}
      height={200}
      width={200}
      eventListeners={[
        {
          eventName: 'loopComplete',
          callback: () => {
            if (!location.search.includes('embed=1')) {
              setTimeout(() => {
                location.href = notionUrl
              }, 5)
            }
          },
        },
      ]}
    />
  </Container>
)

export default IndexPage
