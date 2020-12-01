import React, { useState, useEffect } from "react";
import NavBar from "../components/navbar";
import back from "../assets/img/head-bg.jpg";
import styled from "styled-components";
import "./about.css";
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
  margin-top: 150px;
  border-radius: 10px;
  transition: 2s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 140rem;
  height: 700px;
  padding: 30px;

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
    height: 600px;
  }
  :hover {
    background-color: rgba(2, 2, 1, 0.45);
    box-shadow: 0 0 0 0px #e1eefb, 0 0 0 3px #e1eefb;
  }
`;

export default function About() {
  const [sidebar, setSidebar] = useState(false);
  const [dd, setdd] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setSidebar(dd);
    }, 150);
    // eslint-disable-next-line
  }, [setdd]);

  const [sidebardos, setSidebardos] = useState(false);
  const [ddos, setddos] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setSidebardos(ddos);
    }, 200);
    // eslint-disable-next-line
  }, [setddos]);
  return (
    <>
      <NavBar />
      <CenteredContainer>
        <div className="backbox">
          <div className={sidebar ? "box active" : "box"}>
            <div className="colorbox2"></div>
            <div className="colorbox1"></div>
            <div className="colorbox"></div>

            <div className="infobox">
              <div className="boxtitle">
                BEST IDEA WINS.
                <p className="boxtext">
                  Like it or not, we're all competing in the ideas industry and
                  those with the best ideas are the ones winning. Make your
                  brand more competitive by thinking more creatively.
                </p>
              </div>
            </div>
          </div>
          <div className={sidebardos ? "boxdos active" : "boxdos"}>
            <div className="boxabout">
              <h1 className="title">ABOUT ME</h1>
              <h2 className="title2">DESIGNER & DEVELOPER</h2>
              <p className="par">
                Coming from La Paz, Bolivia, I started my journey as a developer
                in 2016. I have special interest in front-end development, where
                I have worked most of my projects and potentialized my skills
                trying to be a FullStack Developer. A fan of learning and
                interacting with new technologies.
              </p>
              <h1 className="title">CONTACT DETAILS</h1>
              <div>
                <p className="infotext">Pedro Choque</p>
                <p className="infotext">123 Fake Street La Paz BO</p>
                <p className="infotext"> +591 71548221</p>
                <p className="infotext">pedro@syscho.com</p>
              </div>
            </div>
          </div>{" "}
        </div>
      </CenteredContainer>
    </>
  );
}
