import React from "react";
import styled from "styled-components";
import Card from "./Card";

const CardsGrid = ({ frogs, handleCardClick }) => {
  console.log(frogs);
  const frogCards = frogs.map((frog) => (
    <Card key={frog.id} frog={frog} handleCardClick={handleCardClick} />
  ));

  return <CardsGridWrapper>{frogCards}</CardsGridWrapper>;
};

const CardsGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 3rem;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 550) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export default CardsGrid;
