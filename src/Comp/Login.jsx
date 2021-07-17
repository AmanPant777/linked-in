import React from 'react'
import styled from 'styled-components'
const Login = () => {
    return (
        <Container>
            <Nav>
                <a href="/">
                    <img src="/images/login-logo.svg" alt="" />
                </a>
            </Nav>
        </Container>
    )
}

export default Login


const Container=styled.div`padding:0px;`
const Nav=styled.div`
max-width: 1128px;
margin: auto;
padding: 12px 0 16px;
display: flex;
align-items: center;
justify-content: space-between;
position: relative;
flex-wrap: nowrap;
&>a{width:135px;height:34px;
@media (max-width:789px){
    padding: 0 5px;
}
}
`