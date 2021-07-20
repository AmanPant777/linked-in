import React from "react";
import styled from "styled-components";
import { connect } from 'react-redux'
const Login = () => {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="" />
        </a>
        <div>
          <Join>Join Now</Join>
          <SignIn>Sign In</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to yur professional community</h1>
          <img src="/images/login-hero.svg" alt="" />
        </Hero>
        <Form>
          <Google>
            <img src="/images/google.svg" alt="" />
            Sign In With Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
};
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const Container = styled.div`
  padding: 0px;
`;
const Nav = styled.div`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  flex-wrap: nowrap;
  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 789px) {
      padding: 0 5px;
    }
  }
`;
const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  margin-right: 12px;
  text-decoration: none;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
    color: rgba(0, 0, 0, 0.9);
  }
`;
const SignIn = styled.a`
  font: 16px;
  padding: 10px 24px;
  line-height: 40px;
  text-align: center;
  font-weight: 600;
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;

  transition-duration: 167ms;
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
  }
`;

const Section = styled.section`
min-height: 700px;
padding-bottom: 138px;
padding: 60px 0;
padding-top: 40px;
width: 100%;
max-width: 1128px;
align-items: center;
margin: auto;
display: flex;
align-content: flex-start;
position: relative;
flex-wrap: wrap;
@media (max-width:748px){
    margin: auto;
    min-height: 0px;
}
`
const Hero = styled.div`
width: 100%;
h1{padding-bottom:0;
width:55%;
font-size: 56px;
color: #2977c9;
font-weight: 200;
line-height: 70px;
@media (max-width:748px){
    text-align: center;
    font-size: 20px;
    width: 100%;
    line-height: 2px;
}
}
img{
    width: 700px;
    height: 670px;
    position: absolute;
    bottom: -2px;
    right:-150px;
    @media (max-width:748px){
        top:230px;
        width: initial;
        position: initial;
        height: initial;
    }
}
`
const Form = styled.div`
margin-top: 100px;
width: 408px;
@media (max-width:748px){
    margin-top: 20px;
}
`
const Google = styled.button`
width: 100%;
background-color: #fff;
align-items: center;
height: 50px;
border-radius: 28px;
box-shadow: inset 0 0 0 1px rgba(0 0 0/0.6),inset 0 0 0 2px rgba(0 0 0/0%);
display: flex;
justify-content: center;
vertical-align: middle;z-index:0;
transition-duration: 167ms;
font-size: 20px;
color: rgba(0,0,0,0.6);
&:hover{
    background-color: rgba(207,207,207,0.45);
    color: rgba(0,0,0,0.75);
}
`