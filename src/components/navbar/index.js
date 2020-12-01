import React, { useEffect } from "react";
import "./style.css";
import logo from "../../assets/img/react-native-firebase-1.svg";
import { useHistory } from "react-router-dom";

export default function NavBar() {
  let history = useHistory();
  function home() {
    history.push("/");
  }
  function about() {
    history.push("/about");
  }
  function works() {
    history.push("/work");
  }
  function tools() {
    history.push("/tools");
  }
  function contact() {
    history.push("/contact");
  }
  // const [sidebar, setSidebar] = useState(false);
  // const [dd, setdd] = useState(true);
  useEffect(() => {
    function Restorewindow() {
      if (window.localStorage) {
        if (!localStorage.getItem("firstLoad")) {
          localStorage["firstLoad"] = true;
          window.location.reload();
        } else localStorage.removeItem("firstLoad");
      }
    }
    Restorewindow();
  }, []);
  return (
    <>
      <body>
        <header class="cd-header container flex justify-between items-center">
          <img
            src={logo}
            alt="Logo"
            style={{ marginTop: "40px", width: "70px", height: "70px" }}
          />
          <a
            href="#cd-3d-nav"
            class="cd-header__nav-trigger"
            aria-label="Toggle menu"
          >
            <span></span>
          </a>
        </header>
        <nav class="cd-3d-nav js-cd-3d-nav" id="cd-3d-nav">
          <ul class="cd-3d-nav__list">
            <li class="cd-3d-nav__item">
              <a href='/home'
                onClick={() => {
                  home();
                }}
              >
                <svg aria-hidden="true" class="icon icon--md">
                  <g stroke="currentColor" stroke-width="2" fill="none" />
                  <polyline points=" 11,7 11,2 21,2 21,7 "></polyline>{" "}
                  <polyline points="12,23 1,23 1,7 31,7 31,23 20,23 "></polyline>{" "}
                  <polyline points="30,26 30,30 2,30 2,26 "></polyline>
                  <rect x="12" y="20" width="8" height="6"></rect>
                </svg>
                <span>HOME</span>
              </a>
            </li>

            <li class="cd-3d-nav__item">
              <a href='/home'
                onClick={() => {
                  about();
                }}
              >
                <svg aria-hidden="true" class="icon icon--md">
                  <g stroke="currentColor" stroke-width="2" fill="none" />
                  <polyline points=" 11,7 11,2 21,2 21,7 "></polyline>{" "}
                  <polyline points="12,23 1,23 1,7 31,7 31,23 20,23 "></polyline>{" "}
                  <polyline points="30,26 30,30 2,30 2,26 "></polyline>
                  <rect x="12" y="20" width="8" height="6"></rect>
                </svg>
                <span>ABOUT</span>
              </a>
            </li>

            <li class="cd-3d-nav__item">
            <a href='/home'
                onClick={() => {
                  works();
                }}
              >
                <svg aria-hidden="true" class="icon icon--md">
                  <g stroke="currentColor" stroke-width="2" fill="none" />
                  <polyline points="14.858,21.142 22,14 31,22"></polyline>
                  <polyline points="1,25 10,17 18.501,24.249 "></polyline>{" "}
                  <rect x="1" y="3" width="30" height="26"></rect>
                  <circle cx="14.5" cy="10.5" r="2.5"></circle>
                </svg>
                <span>MY WORK</span>
              </a>
            </li>

            <li class="cd-3d-nav__item">
              <a href='/home'
                onClick={() => {
                  tools();
                }}
              >
                <svg aria-hidden="true" class="icon icon--md">
                  <g stroke="currentColor" stroke-width="2" fill="none" />
                  <rect x="2" y="2" width="28" height="28"></rect>
                  <line x1="9" y1="18" x2="9" y2="6"></line>
                  <line x1="9" y1="26" x2="9" y2="22"></line>
                  <line x1="12" y1="22" x2="6" y2="22"></line>
                  <line x1="23" y1="18" x2="23" y2="6"></line>
                  <line x1="23" y1="26" x2="23" y2="22"></line>
                  <line x1="26" y1="22" x2="20" y2="22"></line>
                  <line x1="16" y1="26" x2="16" y2="14"></line>
                  <line x1="16" y1="10" x2="16" y2="6"></line>
                  <line x1="13" y1="10" x2="19" y2="10"></line>
                </svg>
                <span>SKILLS</span>
              </a>
            </li>

            <li class="cd-3d-nav__item">
              <a href='/home'
                onClick={() => {
                  contact();
                }}
              >
                <svg aria-hidden="true" class="icon icon--md">
                  <g stroke="currentColor" stroke-width="2" fill="none" />
                  <polyline points="13 6 2 6 2 30 26 30 26 19"></polyline>{" "}
                  <polygon points="16 20 10 22 12 16 26 2 30 6 16 20"></polygon>
                  <line x1="22" y1="6" x2="26" y2="10"></line>
                </svg>
                <span>CONTACT</span>
              </a>
            </li>
          </ul>

          <span
            class="cd-3d-nav__marker cd-3d-nav__marker--col-1"
            aria-hidden="true"
          ></span>
        </nav>
      </body>
    </>
  );
}
