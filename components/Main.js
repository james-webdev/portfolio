import styled from "styled-components";
import TextLooper from "./TextLooper";
import ScrollAnimation from "./ScrollAnimation";
import "animate.css/animate.min.css";

const BlobWrapper = styled.div`
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
    background: #ffb1a4;
    display: flex;
    align-items: center;
    overflow-y: hidden !important;
    overflow-x: hidden !important;
}
  }

  h1 {
    color: black;
    line-height: 1;
    font-weight: bold;
    letter-spacing: 2px;
    font-family: inherit;
    animation: textcolour 5s ease-in-out infinite;
  }

  h2 {
    color: black;
    line-height: 1;
    letter-spacing: 2px;
    font-family: inherit;
    animation: textcolour 8s ease-in-out infinite;
  }

  .blob {
    position: absolute;
    top: 0;
    left: 0;
    fill: #01bbae;
    width: 18vmax;
    z-index: -1;
    transform-origin: 50% 50%;
    animation: move 6s ease-in-out infinite;
  }

  @keyframes move {
    0% {
      transform: scale(1) translate(200px, -30px);
    }
    38% {
      transform: scale(0.8, 1) translate(80vw, 30vh) rotate(160deg);
    }
    40% {
      transform: scale(0.8, 1) translate(80vw, 30vh) rotate(160deg);
    }
    78% {
      transform: scale(1.3) translate(0vw, 30vh) rotate(-20deg);
    }
    80% {
      transform: scale(1.3) translate(0vw, 30vh) rotate(-20deg);
    }
    100% {
      transform: scale(1) translate(200px, -30px);
    }
  }

  @keyframes textcolour {
    0% {
      color: black;
    }
    38% {
      color: #01bbae;
    }
    65% {
      color: white;
    }

    100% {
      color: black;
    }
  }
`;

const Main = () => {
  return (
    <div className="mainBlob">
      <BlobWrapper className="">
        <div className="blob">
          <svg version="1.1" viewBox="0 0 310 350">
            <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z" />
          </svg>
        </div>
        <div className="h-96 text-sm sm:text-2xl flex flex-col justify-center items-center text-center">
          <ScrollAnimation animateIn="animate__backInLeft">
            <h1 className="text-3xl sm:text-4xl">
              Hi, I&apos;m James.
            </h1>
            <h1 className="text-2xl mt-5 sm:mt-8 sm:text-4xl">
              I&apos;m a Frontend Developer.
            </h1>
          </ScrollAnimation>
          <br />
          <ScrollAnimation animateIn="hidden sm:block animate__backInLeft">
            <h2 className="text-md sm:text-2xl">
              I use React to build cool things on the web.
            </h2>
          </ScrollAnimation>
        </div>
      </BlobWrapper>
      <div className="mb-14 mt-10 smallprojectsloop">
        <TextLooper />
      </div>
    </div>
  );
};

export default Main;
