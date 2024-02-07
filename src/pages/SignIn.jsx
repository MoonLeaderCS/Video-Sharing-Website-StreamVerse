import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
  // margin-top: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid orange;
  border-radius: 10px;
  gap: 10px;
  padding: 20px 50px;
  // margin-top: -50px;
`;

const Title = styled.h1`
  font-size: 22px;
  font-style: italic;
  // text-decoration: underline;
`;

// const SubTitle = styled.h4`
//   font-size: 20px;
//   font-weight: 300;
// `;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 5px;
  padding: 10px 25px;
  background-color: transparent;
  width: 100%;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  border-radius: 25px;
  border: none;
  padding: 8px 40px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  &:hover {
    color: orange;
    background-color: #303030;
  }
`;

const More = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const Links = styled.div`
  margin-left: 50px;
`;

const Link = styled.span`
  margin-left: 30px;
`;

const Hr = styled.hr`
  width: 100%;
  padding: 0px 20px;
  margin: 5px 0px;
  border: 1px solid ${({ theme }) => theme.soft};
`;

const SignIn = () => {
  return (
    <Container>
      <Wrapper>
        <Title> Sign in </Title>
        {/* <SubTitle> to continue with StreamVerse </SubTitle> */}
        <Input placeholder="username" />
        <Input type="password" placeholder="password" />
        <Button> Sign in </Button>
        {/* <Hr /> */}
        <Title> Sign up </Title>
        <Input placeholder="username" />
        <Input placeholder="email" />
        <Input type="password" placeholder="password" />
        <Button> Sign up </Button>
      </Wrapper>
      <More>
        English(USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
};

export default SignIn;
