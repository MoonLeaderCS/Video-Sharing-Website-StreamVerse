import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsSharp";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`;

const Search = styled.div`
  width: 40%;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.textSsoft};
  border-radius: 25px;
  color: ${({ theme }) => theme.text};
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  width: 100%;
  margin-left: 10px;
  margin-right: 8px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const MicVideo = styled.div`
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  gap: 60px;
  cursor: pointer;
`;

const Mic = styled.div`
  background-color: ${({ theme }) => theme.soft};
  border-radius: 50%;
  padding: 5px 5px;
  display: flex;
  align-items: center;
  &:hover {
    color: ${({ theme }) => theme.textSoft};
  }
`;

const Video = styled.div`
  display: flex;
  &:hover {
    color: ${({ theme }) => theme.textSoft};
  }
`;

const Notify = styled.div`
  color: ${({ theme }) => theme.text};
  padding: 0px 22px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.textSoft};
  }
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid orange;
  color: orange;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
    // color: ${({ theme }) => theme.text};
    // border: 1px solid ${({ theme }) => theme.text};
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search" />
          <SearchOutlinedIcon cursor="pointer" />
        </Search>

        <MicVideo>
          <Mic>
            <MicOutlinedIcon />
          </Mic>
          <Video>
            <VideoCallOutlinedIcon />
          </Video>
        </MicVideo>
        <Notify>
          <NotificationsOutlinedIcon />
        </Notify>
        <Link to="signin" style={{ textDecoration: "none" }}>
          <Button>
            <AccountCircleOutlinedIcon />
            SIGN IN
          </Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
