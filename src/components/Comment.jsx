import React from "react";
import styled from "styled-components";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  margin: 30px 0px;
  font-size: 13px;
`;

const Avatar = styled.img`
  width: 43px;
  height: 43px;
  border-radius: 50%;
`;

const Details = styled.div`
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Name = styled.span`
  font-weight: 550;
  margin-bottom: -5px;
`;

const Date = styled.span`
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const Buttons = styled.div`
  color: ${({ theme }) => theme.textSoft};
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Button = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: none;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  padding: 5px 5px;
  margin: -10px -4px;
  border-radius: 50px;
  &:hover {
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.soft};
    border-radius: 50px;
  }
`;

const Comment = () => {
  return (
    <Container>
      <Avatar src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp" />
      <Details>
        <Name>
          @Netflix <Date> 4 years ago </Date>
        </Name>
        <Text>
          Love it. They showed just enough to get everyone talking, Millennium
          Falcon was glorious. For me, this was possibly the most exciting
          trailer, Even now, 4-years later, watching it makes the hairs on my
          arms stand up with emotion and excitement.
        </Text>
        <Buttons>
          <Button title="Like">
            <ThumbUpOffAltIcon />
          </Button>
          65k
          <Button title="Dislike">
            <ThumbDownOffAltIcon />
          </Button>
          <Button title="Reply"> Reply </Button>
        </Buttons>
      </Details>
    </Container>
  );
};

export default Comment;
