import React from "react";
import styled from "styled-components";
import back from "../../assets/img/head-bg.jpg";
import { AiFillGithub, AiFillMail, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./index.css";
const Container = styled.div`
  margin: 0 auto;
  min-height: ${(props) => (props.variantBackground ? "34rem" : "46rem")};
  padding: 2rem;
  padding-bottom: ${(props) => (props.variantBackground ? "6rem" : "0")};
  top: 0;
  height: 92vh;
  @media (max-width: 600px) {
    max-height: 200px;
  }
`;
export const CenteredContainer = styled(Container)`
  border-bottom: 2px solid #aac5f4;
  background-image: url(${back});
  background-position: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -100;
  background-size: cover;
  @media (max-width: 600px) {
    max-height: 200px;
  }
`;
export const Wrapper = styled.div`
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.35);
  max-width: 80rem;
  margin-top: 350px;
  border-radius: 50px;
  transition: 2s;
  /* border: 2px solid red; */
  animation: colorchange 8s linear 2s infinite;
  -webkit-animation: colorchange 8s linear 2s infinite alternate;

  @keyframes colorchange {
    0% {
      background: rgb(52, 12, 42, 0.45);
      color: rgb(14, 68, 92, 0.35);
    }
    33% {
      background: transparent;
      color: rgb(14, 68, 92, 0.35);
    }
    66% {
      background: rgb(52, 12, 42, 0.45);
      color: rgba(0, 0, 0, 0.35);
    }
    100% {
      background: rgba(0, 0, 0, 0.35);
      color: rgb(14, 68, 92, 0.35);
    }
  }

  @media (max-width: 600px) {
    margin-top: 50px;
  }
  :hover {
    background-color: rgba(2, 2, 1, 0.45);
    box-shadow: 0 0 0 0px #e1eefb, 0 0 0 3px #e1eefb;
  }
`;
export const CenteredWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 60rem;
  padding: 30px;
`;

export const Title = styled.h1`
  color: #eef7fc;
  font-size: 62px;
  font-weight: bold;
  margin-bottom: 28px;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 32px;
  }
`;

export const Text = styled.p`
  color: #eef7fc;
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 13px;
  }
`;
export const Icon = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  text-decoration: none;
  height: 50px;
  padding: 10px;
  background-color: transparent;
  :hover {
    border-radius: 50px;
    background-image: linear-gradient(
      to right,
      transparent,
      transparent,
      rgba(0, 0, 0, 0.15),
      rgba(0, 0, 0, 0.15),
      transparent,
      transparent
    );
    background-color: rgba(0, 0, 0, 0.35);
    transition: 7s;
  }
`;
// setTimeout(bye, 2000);
// function bye() {
//   alert("bye");
// }
export default function Centercontainer() {
  return (
    <>
      <CenteredContainer>
        <CenteredWrapper>
          <Title>Hi, I&apos;m Pedro. Nice to meet you.</Title>

          <Text>
            I'm a ReactJS Developer based in Bolivia looking step by step to
            become a Full Stack React Developer. #ReactJSrules
          </Text>

          <Icon>
            <Link to={"/about"} className="links">
              <AiFillGithub size={32} />
            </Link>
            <p style={{ color: "transparent" }}>___</p>
            <a href="mailto:someone@example.com" className="links">
              <AiFillMail size={32} />
            </a>{" "}
            <p style={{ color: "transparent" }}>___</p>
            <Link to={"/"} className="links">
              <AiFillLinkedin size={32} />
            </Link>
          </Icon>
        </CenteredWrapper>
      </CenteredContainer>
    </>
  );
}
