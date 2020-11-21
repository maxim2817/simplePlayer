import React from "react";
import styled from "styled-components";
import { svgs } from "../assets/svgs";
import thumb from "../assets/thumb.jpg";

let stylesConsts = {
  borderRaius: "1vmin",
  playerSize: "50vmin",
  playerY: "50%",
  dark: "#11101b",
  white: "#d9d8eb",
  small: "320px",
  large: "1024px",
};

let PlayerS = styled.div`
  width: ${stylesConsts.playerSize};
  height: ${stylesConsts.playerSize};
  border-radius: ${stylesConsts.borderRaius};
  background-image: url(${thumb});
  background-position: center;
  background-size: cover;

  position: absolute;
  top: 50%;
  left: ${stylesConsts.playerY};
  transform: translate(-50%, -50%);
  overflow: hidden;
  box-shadow: 0px 0px 3vmin 0vmin rgba(0, 0, 0, 0.5);

  @mixin respond-to($media) {
    @if $media == handhelds {
      @media only screen and (max-width: $small) {
        @content;
      }
    } @else if $media == medium-screens {
      @media only screen and (min-width: $small + 1) and (max-width: $large - 1) {
        @content;
      }
    } @else if $media == wide-screens {
      @media only screen and (min-width: $large) {
        @content;
      }
    }
  }
`;

let Gradient = styled.div`
  position: absolute;
  top: 50%;
  left: ${stylesConsts.playerY};
  transform: translate(-50%, -50%);
  width: ${stylesConsts.playerSize};
  height: ${stylesConsts.playerSize};
  border-radius: ${stylesConsts.borderRaius};
  overflow: hidden;

  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(17, 16, 27, 0.17) 15.1%,
    rgba(17, 16, 27, 0.8) 61.98%,
    ${stylesConsts.dark} 100%
  );
`;

let Buttons = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 10vmin;
`;

let Back = styled.button`
  left: 50%;
  transform: translate(-210%, -20%);
  position: absolute;
  top: 50%;
  width: 5vmin;
  cursor: pointer;
  display: inline-block;
  background-color: rgba(1, 1, 1, 0);
  border: 0px;
`;

let Pause = styled.button`
  left: 50%;
  transform: translate(-50%, -20%);
  position: absolute;
  top: 50%;
  width: 5vmin;
  cursor: pointer;
  display: inline-block;
  background-color: rgba(1, 1, 1, 0);
  border: 0px;
  outline: none;

  &:focus {
    outline: none;
    border: 0px;
  }
`;

let Next = styled.button`
  left: 50%;
  transform: translate(110%, -20%);
  position: absolute;
  top: 50%;
  width: 5vmin;
  cursor: pointer;
  display: inline-block;
  background-color: rgba(1, 1, 1, 0);
  border: 0px;
`;

let Player = () => {
  return (
    <PlayerS>
      <Gradient>
        <Buttons>
          <Back>
            <img src={svgs.back} alt="#" />
          </Back>
          <Pause>
            <img src={svgs.pause} alt="#" />
          </Pause>
          <Next>
            <img src={svgs.next} alt="#" />
          </Next>
        </Buttons>
      </Gradient>
    </PlayerS>
  );
};

export default Player;
