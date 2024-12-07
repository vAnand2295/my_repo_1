import React from "react";
import styled from "styled-components";
import avatar from "../assest/avatar.png";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 12.3px;
`;

const Comment = () => {
  return (
    <Container>
      <Avatar src={avatar} />
      <Details>
        <Name>
          Anand <Date> 1day ago</Date>
        </Name>

        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Details>
    </Container>
  );
};

export default Comment;
