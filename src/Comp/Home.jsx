import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import LeftSide from './leftside'
import Main from './main'
import RightSide from './rightside'
const Home = (props) => {
  return (
    <Container>
      {!props.user && <Redirect to="/" />}
      <Section>
        <h5><a >Hiring in a hurry</a></h5>
        <p>Find talented pros in record time with upwork and keep buisness moving</p>
      </Section>
      <Layout>
        <LeftSide />
        <Main />
        <RightSide />
      </Layout>
    </Container>
  )
}
const mapStateToProps = state => {
  return {
    user: state.userState.user
  }
}
export default connect(mapStateToProps)(Home)
const Container = styled.div`
padding: 52px;
max-width: 100%;
`
const Section = styled.div`

padding: 16px 0;
min-height: 50px;
box-sizing: content-box;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
h5{
  color: #0a66c2;
  font-size: 20px;
  a{
    font-weight: 700;
  }
}
p{
  font-size: 14px;
  color: #43464a;
  font-weight: 600;
  margin-left: 10px;
  @media (max-width:768px){
 margin: 0;
}
}
@media (max-width:768px){
  flex-direction: column;
  padding: 0 5px;
}
`
const Layout = styled.div`
display: grid;
grid-template-areas: "leftside main rightside";
grid-template-columns: minmax(0,5fr) minmax(0,10fr) minmax(300px,7fr) ;
column-gap: 25px;
row-gap: 25px;
margin: 25px 0;
@media (max-width:768px){
  display: flex;
  flex-direction: column;
  padding: 0 5px ;
}
`