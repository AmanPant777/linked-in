import React from 'react'
import styled from 'styled-components'
const Main = () => {
    return (
        <Container>
            <ShareBox>
                <div><img src="/images/user.svg" alt="" />
                    <button>Share a post</button>
                </div>
                <div>
                    <button>
                        <i class="fas fa-images"></i>
                        <span>Photo</span>
                    </button>
                    <button>
                        <i class="fas fa-video-slash"></i>
                        <span>Video</span>
                    </button>
                    <button>
                        <i class="fad fa-calendar"></i>
                        <span>Events</span>
                    </button>
                    <button>
                        <i class="fas fa-newspaper"></i>
                        <span>Article</span>
                    </button>
                </div>
            </ShareBox>
            <div>
                <Article>
                    <SharedArticle>
                        <a>
                            <img src="/images/user.svg" alt="" />
                            <div>
                                <span>Title</span>
                                <span>Info</span>
                                <span>Date</span>
                            </div>
                        </a>
                        <button><img src="/images/" alt="" /></button>
                    </SharedArticle>
                </Article>
            </div>
        </Container>
    )
}

export default Main
const Container = styled.div`
grid-area: main;
`
const CommanCard = styled.div`
text-align:center;
border-radius:10px;
margin-bottom:8px;
overflow:hidden;
position:relative;
border:none;
box-shadow: 0 0 0 1px rgb(0 0 0/15%), 0 0 0 rgb(0 0 0/20%);
`
const ShareBox = styled(CommanCard)`
display:flex;
flex-direction:column;
margin:10px;
color:#958b7b;
background:white;
div{button{
    background:transparent;
    line-height:1.55;
    display:flex;
    align-items:center;
    color:rgba(0,0,0,0.9);
    border:none;
    font-weight:600;
}
&:first-child{
display:flex;
align-items:center;
padding:8px 16px 0 16px;
img{
    width:48px;
    border-radius:50%;
    margin-right:8px;
}
button{
    margin:8px 0;
    padding-left:16px;
    border-radius:40px;
    flex-grow:1;
    border:1px solid rgba(0,0,0,0.15);
    text-align:center;
    background-color:white;
    height:40px;
}
}
&:nth-child(2){
    
    display:flex;
    flex-wrap:wrap;
    padding:10px;
    margin:10px 0;
    button{
        cursor: pointer;
        display:flex;
        justify-content: space-around;
        i{margin:0 10px;
        color:#0a66c2;
        }
        span{color:#0a66c2;
    font-weight:600;}
    }
}
}
`