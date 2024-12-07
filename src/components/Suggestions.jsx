import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 1200px;
  margin-top:10px;
`;

const Wrapper = styled.div`
  overflow-x: hidden;
  white-space: nowrap;
  background-color: white;
`;

const Tags = styled.button`
  width: max-content;
  height: 40px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 14px;
  font-weight: 500;
  margin-right: 10px;
  background-color: #f0f0f0;
`;

const ArrowButton = styled.button`
  height: 40px;
  width: 50px;
  cursor: pointer;
  color: black;
  border: none;
  border-radius: 50px;
  font-size:15px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: ${(props) => (props.right ? "0" : "auto")};
  left: ${(props) => (props.left ? "0" : "auto")};
  background: radial-gradient(circle at left, #ffffff 50%, transparent 90%); 

  &:hover{
  background-size: 300% 300%; 
  background-position: center; 
margin-bottom:5px;
`;

export const Suggestions = () => {
  const [arrowVisible, setArrowVisible] = useState({
    left: false,
    right: true,
  });
  const wrapperRef = useRef(null);

  useEffect(() => {
    const checkScrollPosition = () => {
      const wrapper = wrapperRef.current;
      if (wrapper) {
        const isAtStart = wrapper.scrollLeft === 0;
        const isAtEnd =
          wrapper.scrollLeft + wrapper.clientWidth >= wrapper.scrollWidth;

        setArrowVisible({
          left: !isAtStart,
          right: !isAtEnd,
        });
      }
    };

    checkScrollPosition();

    const handleScroll = () => {
      checkScrollPosition();
    };

    const wrapper = wrapperRef.current;
    if (wrapper) {
      wrapper.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (wrapper) {
        wrapper.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollLeft = () => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollBy({ left: -100, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollBy({ left: 100, behavior: "smooth" });
    }
  };

  return (
    <Container>
      {arrowVisible.left && (
        <ArrowButton left onClick={scrollLeft}>
          {"<"}
        </ArrowButton>
      )}
      <Wrapper ref={wrapperRef}>
        <Tags>Anand</Tags>
        <Tags>cinema</Tags>
        <Tags>web developement</Tags>
        <Tags>cooking</Tags>
        <Tags>life style</Tags>
        <Tags>Music</Tags>
        <Tags>Tamil cinema</Tags>
        <Tags>information and technology</Tags>
        <Tags>inteligence</Tags>
        <Tags>Vocabulary</Tags>
        <Tags>Motivation</Tags>
        <Tags>public speaking</Tags>
        <Tags>Recently uploaded</Tags>
        <Tags>Watched</Tags>
        <Tags>New</Tags>
        <Tags>safashi casifasig vbafasfga</Tags>
        <Tags>safashi casifasig vbafasfga</Tags>
      </Wrapper>
      {arrowVisible.right && (
        <ArrowButton right onClick={scrollRight}>
          {">"}
        </ArrowButton>
      )}
    </Container>
  );
};
