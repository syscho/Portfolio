import React, { useState } from "react";
import styled from "styled-components";
import back from "../../assets/img/head-bg.jpg";
import "./mycontact.css";
import { AiFillPhone, AiTwotoneMail } from "react-icons/ai";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_ik06p4P5uCMG5UauGwp3w");
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
    max-height: auto;
    bottom: 0;
  }
`;
export const Wrapper = styled.div`
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.35);
  max-width: 80rem;
  margin-top: 140px;
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
  padding: 10px;
  height: 700px;
  @media (max-width: 600px) {
    max-height: 600px;
  }
`;
export default function Mycontact() {
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [send, setsend] = useState(false);
  const isInvalid = Firstname === "" || Lastname === "" || Email === "";

  const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

  function sendEmail(e) {
    e.preventDefault();
    const validEmail = emailRegex.test(Email);
    if (validEmail) {
      emailjs
        .sendForm(
          "service_8m9rmvt_gmail",
          "template_dwu0lzq",
          e.target,
          "user_ik06p4P5uCMG5UauGwp3w"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setFirstname("");
      setLastname("");
      setEmail("");
      setMessage("");
      setsend(true);
      setTimeout(() => setsend(false), 3000)
    } else {
      alert("Invalid email");
    }
  }
  return (
    <CenteredContainer>
      <CenteredWrapper>
        <div className="contacttitle">CONTACT</div>
        <div className="contactbg">
          <div className="contacttext">
            If you want to talk about your project or comment something, be free
            and do it.
            <div className="linkss">
              <AiFillPhone size={32} /> +591 - 71548221
            </div>
            <div className="linkss">
              <AiTwotoneMail size={32} />{" "}
              <a href="mailto:pedro@syscho.com" className="mailtext">
                pedro@syscho.com
              </a>
            </div>
          </div>
          <form onSubmit={sendEmail}>
            <div className="contactinput">
              <div class="wrappera">
                <div class="input-dataa">
                  <input
                    type="text"
                    required
                    value={Firstname}
                    onChange={({ target }) => setFirstname(target.value)}
                    name="FirstName"
                  />
                  <div class="underline"></div>
                  <label>Full Name</label>
                </div>
                <div class="input-dataa">
                  <input
                    type="text"
                    required
                    value={Lastname}
                    onChange={({ target }) => setLastname(target.value)}
                    name="Subject"
                  />
                  <div class="underline"></div>
                  <label>Subject</label>
                </div>
                <div class="input-dataa">
                  <input
                    type="text"
                    required
                    value={Email}
                    onChange={({ target }) => setEmail(target.value)}
                    name="Email"
                  />
                  <div class="underline"></div>
                  <label>Email</label>
                </div>
                <div class="input-dataa">
                  <textarea
                    type="text"
                    required
                    cols="37"
                    rows="5"
                    placeholder="Your message..."
                    className="textareamail"
                    maxlength="250"
                    value={Message}
                    onChange={({ target }) => setMessage(target.value)}
                    name="Message"
                  ></textarea>
                </div>
              </div>
              <div className="contactbtn">
                <button className="btnemail" disabled={isInvalid} type="submit">
                  <span>SEND</span>
                </button>
              </div>
              {send ? <p className="messagesended">Message sended!</p> : null}
            </div>
          </form>
        </div>
      </CenteredWrapper>
    </CenteredContainer>
  );
}
