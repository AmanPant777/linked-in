import React from "react";
import styled from "styled-components";
const Rightside = () => {
    return (
        <Container>
            <FollowCard>
                <Title>
                    <h2>Add To Yur Feed</h2>
                    <img src="/images/feed-icon.svg" alt="" />
                </Title>
                <FeedList>
                    <li>
                        <a>
                            <Avatar />
                        </a>
                        <div>
                            <span>#LinkedIn</span>
                            <button>Follow</button>
                        </div>
                    </li>
                    <li>
                        <a>
                            <Avatar />
                        </a>
                        <div>
                            <span>#Video</span>
                            <button>Follow</button>
                        </div>
                    </li>

                </FeedList>
                <Recommendation>
                    View all recommendation
                    <img src="/images/right-icon.svg" alt="" />
                </Recommendation>
                <BannerCard>
                    <img src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg" alt="" />
                </BannerCard>
            </FollowCard>
        </Container>
    );
};

export default Rightside;
const Container = styled.div`
  grid-area: rightside;
`;
const FollowCard = styled.div`
  text-align: center;
  padding: 12px;
  background-color: #fff;
  box-shadow: 0 0 0 1px rgb(0 0 0/15%), 0 0 0 rgb(0 0 0/20%);
  position: relative;
`;
const Title = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  color: rgba(0, 0, 0, 0.6);
  align-items: center;
`;
const FeedList = styled.ul`
  margin-top: 12px;
  li {
    display: flex;
    align-items: center;
    position: relative;
    margin: 12px 0;
    font-size: 14px;
    & > div {
      display: flex;
      flex-direction: column;
    }
    button {
      color: rgba(0, 0, 0, 0.6);
      box-shadow: 0 0 0 1px rgb(0 0 0/15%), 0 0 0 rgb(0 0 0/20%);
      align-items: center;
      box-sizing: border-box;
      display: inline-flex;
      justify-content: center;
      text-align: center;
      border-radius: 20px;
      margin: 0 10px;
      padding: 5px;
      background-color: transparent;
      font-size: 12px;
      font-weight: 600;
      max-height: 32px;
      max-width: 480px;
      outline: none;
    }
  }
`;
const Avatar = styled.div`
background-image: url('https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs');
background-size: contain;
background-position: center;
background-repeat: no-repeat;
height:40px;
width:40px;
margin-right: 10px;
margin-left: 1px;
left:0;
`;
const Recommendation = styled.div`
align-items: center;
color: #0a66c2;
display: flex;
padding: 10px;
margin: 10px;
`
const BannerCard = styled(FollowCard)`
img{
    width:100%;
    height:100%;
}
`
