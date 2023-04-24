import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <Title>Froggy memory</Title>
    </HeaderWrapper>
  );
};

const Title = styled.h1`
  font-family: "Nerko One", cursive;
  font-weight: 700;
  font-size: 7rem;
  text-align: center;
`;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.frogGreen};
  box-shadow: 0 -6px 10px 5px rgba(0, 0, 0, 0.5);
`;

export default Header;
