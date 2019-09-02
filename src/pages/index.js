import React from 'react'
import styled from 'styled-components'
import Lottie from 'react-lottie'
import * as animationData from '../images/loading.json'

import '../base.css' //tent

const notionUrl =
  'https://www.notion.so/Takaya-Deguchi-65fa41c6c6804426bef7adb2a66c5117'
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
