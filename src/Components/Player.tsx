import React from "react";
import { svgs } from "../assets/svgs";
import { Gradient, PlayerS, Buttons, Back, Pause, Next } from "./styled";

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
