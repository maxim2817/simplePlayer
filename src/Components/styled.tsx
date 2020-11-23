import styled from "styled-components";
import thumb from "../assets/thumb.jpg";
import { stylesConsts } from "../theme";

export default stylesConsts;

export const Gradient = styled.div`
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

export const Buttons = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 20vmin;
`;

let commonForAllButtons = `
    left: 50%;
    position: absolute;
    top: 50%;
    width: 6vmin;
    cursor: pointer;
    display: inline-block;
    background-color: rgba(1, 1, 1, 0);
    border: 0px;
    transition: width .3s;
    
    outline: none;
    &:focus {
      outline: none;
      border: 0px;
    }

    &:hover {
      width: 6.1vmin;
    }
`;

export const PlayerS = styled.div`
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

export const Back = styled.button`
  transform: translate(-210%, -20%);
  ${commonForAllButtons}
`;

export const Pause = styled.button`
  transform: translate(-50%, -20%);
  ${commonForAllButtons}
`;

export const Next = styled.button`
  transform: translate(110%, -20%);
  ${commonForAllButtons}
`;
