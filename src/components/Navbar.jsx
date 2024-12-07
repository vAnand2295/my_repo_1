import React, { useState, useRef } from "react";
import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CloseIcon from "@mui/icons-material/Close";
import MicIcon from "@mui/icons-material/Mic";
import { Suggestions } from "./Suggestions";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
  margin-top: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0px 10px;
  justify-content: flex-end;
  postion: relative;
`;

const Search = styled.div`
  position: absolute;
  right: 0px;
  left: 0px;
  margin-left: 250px;
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 50px 0 0 50px;
  height: 35px;

  &:focus-within {
    left: -50px;
    width: calc(45% + 50px);
  }
`;

const Iconwrapper = styled.div`
  display: none;

  ${Search}:focus-within & {
    display: block;
  }
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-content: flex-start;
  paddingright: 500px;
  width: 100%;

  transition: width 0.3s ease-in-out, transform 0.3s ease-in-out;
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  border-radius: 30px;
`;

const Iconclose = styled.div`
  cursor: pointer;
`;

const Sidesearch = styled.div`
  height: 46px;
  background-color: lightgrey;
  width: 50px;
  position: absolute;
  right: 361px;
  border-radius: 0 26px 26px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Mic = styled.div`
  background-color: lightgrey;
  width: 40px;
  height: 40px;
  position: absolute;
  right: 290px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  cursor: pointer;
`;

const Navbar = () => {
  const [visibleicon, setvisibleicon] = useState(false);
  const [searchvalue, setsearchvalue] = useState("");

  const inputRef = useRef(null);

  const handlechange = (e) => {
    const { value } = e.target;
    setsearchvalue(value);

    setvisibleicon(value.length > 0);
  };

  const handleicon = () => {
    setsearchvalue("");
    setvisibleicon(false);

    inputRef.current.focus();
  };

  return (
    <Container>
      <Wrapper>
        <Search myvalue={searchvalue}>
          <Iconwrapper>
            <SearchOutlinedIcon />
          </Iconwrapper>

          <Input
            placeholder="search"
            ref={inputRef}
            value={searchvalue}
            onChange={handlechange}
          />
          {visibleicon && (
            <Iconclose>
              <CloseIcon onClick={handleicon} />
            </Iconclose>
          )}
        </Search>
        <Sidesearch>
          <SearchOutlinedIcon />
        </Sidesearch>
        <Mic>
          <MicIcon />
        </Mic>

        <Button>
          <AccountCircleOutlinedIcon />
          SIGN IN
        </Button>
      </Wrapper>
      
      
      <Suggestions />
    </Container>
  );
};

export default Navbar;
