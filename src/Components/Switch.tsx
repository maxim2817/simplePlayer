import React from "react";
import Icon from "../assets/Moon";
import styled from "styled-components";

let IconS = styled(Icon)`
  background-color: ${(props) => props.theme.text};
  /* e2e1f0 */
  border-radius: 50%;

  width: 30px;
  height: 30px;

  bottom: 20px;
  right: 70px;

  position: absolute;

  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    width: 32px;
    height: 32px;
  }
`;

const Switch = (props: any) => {
  console.log(props);
  return (
    <IconS backColor={props.theme.body} onClick={() => props.themeSwitcher()} />
  );
};
// 7269af purple
export default Switch;
