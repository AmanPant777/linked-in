import React from "react";
import styled from "styled-components";
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
      
    </Container>
  );
};

export default Login;

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
