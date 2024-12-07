import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Video from "./pages/Video";
import { Suggestions } from "./components/Suggestions";


const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div`
// margin-top:150px;
`;



function Anand() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
      <BrowserRouter>

          <Menu DarkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar />

            <Wrapper>
            <Routes>
              <Route path ="/">
                <Route index element={<Home/>}/>
                <Route path="signin" element={<SignIn/>}/>

                <Route path="video">
                  <Route path=":id" element={<Video/>}/>
                </Route>

              </Route>
            </Routes>
            </Wrapper>
          </Main>
          </BrowserRouter>

      </Container>
    </ThemeProvider>
  );
}

export default Anand;