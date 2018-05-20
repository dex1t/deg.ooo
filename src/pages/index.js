import React from 'react'
import styled from 'styled-components'
import meImg from '../images/me.png'
import '../base.css' //tent

const Card = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: rgba(255, 255, 255, 0.9);
  padding: 30px;
  border-radius: 5px;
`
const Icon = styled.img`
  width: 100px;
  height: 100px;
`
const AuthorName = styled.h1`
  font-size: 35px;
  margin-bottom: 5px;
  margin-left: -2px;
`
const AuthorTitle = styled.h2`
  font-size: 20px;
`
const AuthorDescription = styled.p`
  font-size: 13px;
  text-align: justify;
  margin-bottom: 15px;
`
const URLList = styled.ul`
  margin: 0;
  li {
    margin-bottom: 3px;
  }
`

const IndexPage = () => (
  <Card>
    <Icon src={meImg} />
    <div style={{ marginLeft: '25px' }}>
      <AuthorName>出口 貴也 / @dex1t</AuthorName>
      <AuthorTitle>UX Engineer / Product Manager</AuthorTitle>
      <AuthorDescription>
        プロダクトづくりが好き。サービス・体験のデザインを主軸に、チームや状況にあわせて、開発(Rails,
        React,
        ReactNative)からディレクションまで、職種を横断してプロダクトづくりに取り組む。個人では大学等で講義やワークショップを不定期で担当。HCD-Net認定人間中心設計専門家。
      </AuthorDescription>
      <URLList>
        <li>
          <a href="http://blog.deg.ooo/">http://blog.deg.ooo/</a>
        </li>
        <li>
          <a href="https://twitter.com/dex1t">https://twitter.com/dex1t</a>
        </li>
        <li>
          <a href="https://github.com/dex1t">https://github.com/dex1t</a>
        </li>
        <li>
          <a href="https://speakerdeck.com/dex1t">
            https://speakerdeck.com/dex1t
          </a>
        </li>
        <li>
          <a href="https://instagram.com/dex1t">https://instagram.com/dex1t</a>
        </li>
        <li>
          <a href="https://www.facebook.com/takayad">
            https://www.facebook.com/takayad
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/dex1t">
            https://www.linkedin.com/in/dex1t
          </a>
        </li>
      </URLList>
    </div>
  </Card>
)

export default IndexPage
