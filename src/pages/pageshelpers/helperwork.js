import React from "react";
import styled from "styled-components";
import back from "../../assets/img/bgwork.jpg";
import "./index.css";
import WorkContainer from "./mywork";

const Container = styled.div`
  margin: 0 auto;
  top: 0;
  height: 92vh;
  background-color: black;
  @media (max-width: 600px) {
    max-height: 100%;
  }
`;
export const CenteredContainer = styled(Container)`
  background-position: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -100;
  @media (max-width: 600px) {
    max-height: 100%;
  }
`;
export const CenteredWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.35);
  width: 100%;
  height: 40%;
  margin-top: 0px;
  transition: 2s;
  display: flex;
  background-color: black;
  flex-direction: column;
  background-image: url(${back});
  background-position: 50% 60%;
  background-size: cover;
`;
const CenteredContent = styled.div`
  width: 31%;
  margin-right: 100%;
  margin-left: 40vh;
  height: 100%;
  max-height: 100%;
  display: grid;
  align-content: end;
  @media (max-width: 600px) {
    font-size: 25px;
    margin-left: 10vh;
    width: 71%;
  }
`;

export const Title = styled.h1`
  color: #eef7fc;
  font-size: 7rem;
  font-weight: bold;
  margin-bottom: 28px;
  text-align: left;
  margin: 10px;
  text-shadow: 2px 2px 5px black;
  @media (max-width: 600px) {
    font-size: 25px;
  }
  @media (max-width: 1000px) {
    font-size: 45px;
  }
`;

export const Text = styled.p`
  color: #eef7fc;
  font-size: 30px;
  font-weight: 500;
  text-align: left;
  margin: 10px;
  text-shadow: 2px 2px 5px black;
  @media (max-width: 600px) {
    font-size: 10px;
  }
`;
export default function Centercontainer() {
  return (
    <>
      <CenteredContainer>
        <CenteredWrapper>
          <CenteredContent>
            <Title>MY WORK</Title>
            <Text>
              A brief summary of my personal projects and technologies that I
              use.
            </Text>
          </CenteredContent>
        </CenteredWrapper>
        <div className="gallery">
          <WorkContainer />
        </div>

        <div className="carouselwork">
          <div className="autophoto">
            <a href='/home' className='syscho'>
              SYSCHO
            </a>
          </div>
        </div>
      </CenteredContainer>
    </>
  );
}
