import React from "react";
import styled from "styled-components";
import Comment from "./Comment";

const Container = styled.div`
  margin-top: 10px;
`;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.textSoft};
  margin: 50px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  margin-left: -2px;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  outline: none;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.text};
  padding-bottom: 5px;
  margin-left: 5px;
  font-size: 14px;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Comments = () => {
  return (
    <Container>
      <NewComment>
        {/* 50,345 Comments */}
        <Avatar src="https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-8-avatar-2754583_120515.png" />
        <Input placeholder="Add a comment here..." />
      </NewComment>
      {/* <Hr /> */}
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  );
};

export default Comments;
