import styled from "styled-components";
import React from "react";
import logo from "../assets/git.svg";

let Logo = styled.div`
  width: 30px;
  height: 30px;
  bottom: 20px;
  right: 20px;
  position: absolute;
  border-radius: 50%;

  a {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    position: absolute;
  }
  img {
    width: 100%;
    height: 100%;
  }
  transition: all 0.2s;

  &:hover {
    width: 32px;
    height: 32px;
  }
`;

const GitLogo = () => {
  return (
    <Logo>
      <a href="https://github.com/maxim2817/simplePlayer">
        <img src={logo} alt="github_logo" />
      </a>
    </Logo>
  );
};

export default GitLogo;
