import React from "react";
import styled from "styled-components";

const Card = ({ frog, handleCardClick }) => {
  return (
    <CardWrapper onClick={handleCardClick}>
      <Image src={frog.image} alt={frog.name} />
      <Name>{frog.name}</Name>
    </CardWrapper>
  );
};

const Image = styled.img`
  padding: 0.5rem;
  border-radius: 20px 20px 15px 15px;
`;

const Name = styled.p`
  padding: 0.5rem;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.frogGreen};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export default Card;
