import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "110px" : "202px")};
  background-color: ${({ theme }) => theme.textSoft};
  border-radius: 10px;
  flex: 1;
  overflow: hidden;
  transition: border-radius 0.5s ease, transform 0.5s ease;
  &:hover {
    border-radius: 0px;
    transform: scale(1.01);
  }
`;

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  margin-top: ${(props) => props.type === "sm" && "16px"};
  gap: 8px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 55px;
  height: 35px;
  border-radius: 50%;
  margin-top: -10px;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div`
  color: ${({ theme }) => theme.text};
  margin-top: -20px;
  font-weight: 500;
`;
const Title = styled.h1`
  font-size: 13px;
  // font-weight: 500;
  // font-style: bold;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.textSoft};
  margin-top: -4px;
`;
const Info = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
  margin: -8px 0px;
`;

const Card = ({ type }) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image
          type={type}
          src="https://i3.ytimg.com/vi/erLk59H86ww/maxresdefault.jpg"
        />
        <Details type={type}>
          <ChannelImage
            type={type}
            src="https://w7.pngwing.com/pngs/11/77/png-transparent-avengers-logo-thumbnail.png"
          />
          <Texts>
            <Title>
              Star Wars | The Force Awakens | Marvel | Official Teaser Released 
            </Title>
            <ChannelName> Marvel Studios </ChannelName>
            <Info> 25.5M views • 8 years ago </Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
