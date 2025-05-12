import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Home from "./Components/sections/Home";
import Education from "./Components/sections/Education";
import Experiences from "./Components/sections/Experiences";
import Activities from "./Components/sections/Activities";
import Projects from "./Components/sections/Projects";
import References from "./Components/sections/References";
import Footer from "./Components/Footer";

const StyledDiv = styled.div`
  width: 80vw;
  margin: 0 auto;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  background-color: #f8fafc;

  @media screen and (max-width: 750px) {
    width: 100%;
    height: 100vh;
    flex-direction: column;
  }
`;

function Root() {
  return (
    <StyledDiv>
      <Header/>
      <Container>
        <Nav/>
        <Routes>
          <Route path = "/" element={<Home />}/>
          <Route path = "/Education" element={<Education />}/>
          <Route path = "/Experiences" element={<Experiences />}/>
          <Route path = "/Activities" element={<Activities />}/>
          <Route path = "/Projects" element={<Projects />}/>
          <Route path = "/References" element={<References />}/>
        </Routes>
      </Container>
      <Footer />
    </StyledDiv>
  );
}

const router = createBrowserRouter(
  [{path:"*", Component: Root}]
);

function App() {
  return <RouterProvider router={router}/>;
}

export default App