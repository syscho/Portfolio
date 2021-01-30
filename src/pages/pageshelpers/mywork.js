import React, { useState } from "react";
import styled from "styled-components";
import WorkItems from "./workData";
import "./index.css";
const ContainerWork = styled.div`
  margin: 0 auto;
  top: 0;
  height: auto;
  background-color: black;
  display: flex;
  flex-direction: row-reverse;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const CardWork = styled.div`
  width: 25vh;
  height: 17vh;
  border: 1px solid #aac5f4;
`;
const CardImage = styled.img`
  border: 0;
  width: 100%;
  cursor: pointer;
  height: 100%;
  padding: 0;
  margin: 0;
`;
const CardMeta = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  padding: 10px;
  background-color: #0000008f;
`;
const SubTitle = styled.p`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  user-select: none;
  display: none;
`;

const Text = styled.p`
  margin-top: 5px;
  font-size: 10px;
  color: #fff;
  text-align:justify;
  margin-bottom: 0;
  user-select: none;
  display: none;
  line-height: normal;
`;
const Item = styled.div`
  margin: 5px;
  position: relative;
  cursor: pointer;
  background-color: black;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.3);
    z-index: 99;
  }
  @media (min-width: 1200px) {
    &:hover ${CardMeta}, &:hover ${Text}, &:hover ${SubTitle} {
      display: block;
      z-index: 1;
    }
  }
`;
const CardDetails = styled.div`
  text-align: left;
  width: 100%;
  height: auto;
  padding-top: 30px;
`;
function CardItem({ children }) {
  return (
    <>
      <Item>{children}</Item>
    </>
  );
}
const BackDetail = styled.div`
  display: flex;
  flex-direction: row;
  background: url(${({ src }) => src});
  background-size: contain;
  position: relative;
  height: 420px;
  background-repeat: no-repeat;
  background-color: black;
  background-position: 50% 50%;
  background-position-x: right;
  background-size: 700px 100%;
`;
export default function WorkContainer() {
  const [Feature, setFeature] = useState(false);
  const [WorkInfo, setWorkInfo] = useState({});
  console.log(WorkInfo);
  return (
    <>
      <ContainerWork>
        {WorkItems.map((item) => (
          <CardItem key={item.id}>
            <CardWork
              onClick={() => {
                setFeature(true);
                setWorkInfo(item);
              }}
            >
              <CardImage src={item.background_small} />
              <CardMeta>
                <SubTitle>{item.title}</SubTitle>
                <Text>{item.description}</Text>
              </CardMeta>
            </CardWork>
          </CardItem>
        ))}
      </ContainerWork>
      <BackDetail src={WorkInfo.background}>
        {Feature ? null : (
          <div className="photodefault">
            <span id="text"></span>
            <div className="console-underscore" id="console">
              &#95;
            </div>
          </div>
        )}
        <div className="photodetail">
          {Feature ? (
            <CardDetails>
              <p className="titlephoto">{WorkInfo.title}</p>
              <p className="descriptionphoto">{WorkInfo.description}</p>
              <p className="techtitlephoto">Technologies used</p>
              <p className="techphoto">{WorkInfo.knowledgeList}</p>
              <div className="text-box">
                <a href={WorkInfo.link} className="btn btn-white btn-animate">
                  Live Preview
                </a>
              </div>
            </CardDetails>
          ) : null}
        </div>
      </BackDetail>
    </>
  );
}
