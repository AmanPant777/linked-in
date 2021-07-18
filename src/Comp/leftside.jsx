import React from 'react'
import styled from 'styled-components'
const Leftside = () => {
    return (
        <Container>
            <ArtCard>
                <UserInfo>
                    <CardBackGround />
                    <a >
                        <Photo />
                        <Link>Welcome ,there</Link>
                    </a>
                    <a >
                        <AddPhotoText>Add a photo</AddPhotoText>
                    </a>
                </UserInfo>
                <Widget>
                    <a >
                        <div>
                            <span>Connections</span>
                            <span>Grow Your Network</span>
                        </div>
                        <img src="/images/widget-icon.svg" alt="" />
                    </a>
                </Widget>
                <Item>
                    <span>
                        <img src="/images/item-icon.svg" alt="" />
                        My Items
                    </span>
                </Item>
            </ArtCard>
            <Community>
                <a ><span>Groups</span></a>
                <a ><span>Events<img src="/images/plus-icon.svg" alt="" /></span></a>
                <a ><span>Follow Hashtag</span></a>
                <a ><span>Discover More</span></a>
            </Community>
        </Container>
    )
}
export default Leftside
const Container = styled.div`
grid-area: leftside;
`
const ArtCard = styled.div`

text-align: center;
overflow: hidden;
margin-bottom: 8px;
background-color: #fff;
border-radius: 5px;
transition: box-shadow 83ms;
position: relative;
box-shadow: 0 0 0 1px rgb(0 0 0/15%),0 0 0 rgb(0 0 0/20%);
`
const UserInfo = styled.div`
border-bottom: 1px solid rgba(0,0,0,0.8);
padding: 12px 12px 16px ;
word-wrap: break-word;
word-break: break-all;
`
const CardBackGround = styled.div`
background-image:url('https://static-exp1.licdn.com/sc/h/9e0ckeb27mzi70ne80f4hv7il');
background-position: center;
background-size: 462px;
height: 54px;
margin: -12px -12px ;
`
const Photo = styled.div`
box-shadow: none;
background-image: url('https://media-exp3.licdn.com/dms/image/C5603AQF55L01PLk3cw/profile-displayphoto-shrink_100_100/0/1611205794563?e=1632355200&v=beta&t=0GHoXvFDFGEvzzDvcjC0igiTkfB07pc6wNfDi6lP-IE');
width: 72px;
height: 72px;
box-sizing:border-box;
background-clip: content-box;
background-color: white;
background-position: center;
background-size: 60%;
background-repeat: no-repeat;
border: 2px solid white;
margin: -38px auto 12px;
border-radius: 50%;
`
const Link = styled.div`
font-size: 16px;
line-height: 1.5;
color: rgba(0,0,0,0.9);
font-weight: 600;
`
const AddPhotoText = styled.div`
color: #0a66c2;
margin-top: 4px;
font-size: 12px;
line-height: 1.33;
font-weight: 400;
`
const Widget = styled.div`
border-bottom: 1px solid rgba(0,0,0,0.25);
padding-top: 12px;
padding-bottom: 12px;
&>a{
 text-decoration: none;
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 4px 12px;
 &:hover{
     background-color: rgba(0,0,0,0.1);
 }
 div{
     display: flex;
     flex-direction: column;
     text-align: left;
     span{
         font-size: 12px;
         line-height: 1.33;
         &::first-child{
             color: rgba(0,0,0,0.6);
         }
         &::nth-child(2){
             color: rgba(0,0,0,1);
         }
     }
 }
}
`
const Item = styled.a`
background-color: rgba(0,0,0,0.08);
text-align: left;
padding: 12px;
font-size:12px;
display: block;
margin: 5px;
span{
    display: flex;
    align-items: center;
    color: rgba(0,0,0,1);
}
&:hover{
    background-color: rgba(0,0,0,0.08);
}
`
const Community = styled(ArtCard)`
padding: 10px;
text-align:left;
display:flex;
flex-direction:column;
a{
    padding:10px;
    font-size:12px;
    &:hover{color:#0a66c2}
    span{
        display:flex;
        justify-content:space-between;
    }
    &:last-child{
    color:rgba(0,0,0,0.6);
    border-top:1px solid grey;
}
}
`