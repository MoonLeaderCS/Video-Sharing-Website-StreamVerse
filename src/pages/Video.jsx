import React from "react";
import styled from "styled-components";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
// import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
// import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import { useTheme } from "../context/ThemeContext";
import Card from "../components/Card";
import Comments from "../components/Comments";

const Container = styled.div`
  color: ${({ theme }) => theme.text};
  display: flex;
  gap: 20px;
`;

const Content = styled.div`
  flex: 4;
  width: 100%;
`;
const VideoWrapper = styled.div`
  width: 100%;
  height: 400px;
  margin-bottom: -5px;
  iframe {
    border-radius: 10px;
  }
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 500;
  margin: 25px 0px 10px 0px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 6px;
`;

const ChannelImage = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  cursor: pointer;
`;

const ChannelText = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChannelName = styled.h1`
  font-size: 15px;
  font-weight: 550;
  color: ${({ theme }) => theme.text};
  margin-top: 1px;
  cursor: pointer;
`;

const SubsCounter = styled.div`
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
  margin-top: -5px;
`;

const Subscribe = styled.button`
  width: 100px;
  height: max-content;
  display: flex;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  background-color: red;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 10px 14px;
  &:hover {
    background-color: #cc0000;
  }
`;

const Buttons = styled.div`
  color: ${({ theme }) => theme.text};
  display: flex;
  gap: 6px;
  font-size: 11px;
  font-weight: 500;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  border-radius: 25px;
  padding: 4px 12px;
  &:hover {
    color: orange;
    background-color: #303030;
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Recommendation = styled.div`
  flex: 2;
`;

const Description = styled.div`
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
  padding: 15px 20px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Views = styled.div`
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  font-weight: 540;
  font-style: italic;
  font-family: "Roboto", sans-serif;
  margin-bottom: 10px;
`;

const DescriptionText = styled.div`
  margin-top: 10px;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  font-weight: 500;
`;

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          {/* <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/erLk59H86ww?si=Di__gPqWGoTtnQNc"
            title="YouTube Video Player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            allowfullscreen
          ></iframe> */}
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/erLk59H86ww?si=66PhrWyvFabOeZF0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title>
          {" "}
          Star Wars : The Force Awakens | Marvel | Official Teaser Released 2014 {" "}
        </Title>
        <Details>
          <ChannelInfo>
            <ChannelImage src="https://w7.pngwing.com/pngs/11/77/png-transparent-avengers-logo-thumbnail.png" />
            <ChannelText>
              <ChannelName title="Marvel Studios"> Marvel Studios </ChannelName>
              <SubsCounter> 40.5M Subscribers </SubsCounter>
            </ChannelText>
            <Subscribe> Subscribe </Subscribe>
          </ChannelInfo>
          <Buttons>
            <Button title="I like this">
              <ThumbUpOffAltIcon /> 1.2M
            </Button>
            <Button title="I dislike this">
              <ThumbDownOffAltIcon /> Dislike
            </Button>
            <Button title="Share">
              <ReplyOutlinedIcon /> Share
            </Button>
            <Button title="Download">
              <FileDownloadOutlinedIcon /> Download
            </Button>
          </Buttons>
        </Details>
        <Description>
          <Views> 25.5M views • 9 years ago </Views>
          <DescriptionText>
            Official Site:{" "}
            <a
              href="http://www.starwars.com/theforceawakens"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              {" "}
              http://www.starwars.com/theforceawakens
            </a>
            <br />
            Episode VII in the Star Wars Saga, Star Wars: The Force Awakens,
            opens in theaters December 18, 2015.
            <br /> <br />
            Star Wars: The Force Awakens, directed by J.J. Abrams from a
            screenplay by Lawrence Kasdan & Abrams, features a cast including
            actors John Boyega, Daisy Ridley, Adam Driver, Oscar Isaac, Andy
            Serkis, Academy Award winner Lupita Nyong'o, Gwendoline Christie,
            Crystal Clarke, Pip Andersen, Domhnall Gleeson, and Max von Sydow.
            They will join the original stars of the saga, Harrison Ford, Carrie
            Fisher, Mark Hamill, Anthony Daniels, Peter Mayhew, and Kenny Baker.
          </DescriptionText>
        </Description>
        <Comments />
        {/* <Hr /> */}
      </Content>
      {/* <Link to="../" style={{textDecoration:"none"}}> */}
      <Recommendation>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recommendation>
      {/* </Link> */}
    </Container>
  );
};

export default Video;
