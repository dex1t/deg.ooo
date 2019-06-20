import React from 'react'
import styled from 'styled-components'
import Lottie from 'react-lottie'
import * as animationData from '../images/loading.json'

import '../base.css' //tent

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
    />
  </Container>
)

export default IndexPage
