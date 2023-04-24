import React from "react";
import styled from "styled-components";

const Scoreboard = ({ currentScore, highScore }) => {
  return (
    <ScoreboardWrapper>
      <CurrentScore>Current Score: {currentScore}</CurrentScore>
      <Highscore>Highscore: {highScore}</Highscore>
    </ScoreboardWrapper>
  );
};

const ScoreboardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 70rem;

  @media (max-width: 768px) {
    width: 120%;
    padding: 20px;
  }
`;

const Score = styled.div`
padding: 0.5rem
width: 35%
font-size: 2rem;
border-radius: 20px;
font-weight: 700;
text-align: center;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

@media (max-width: 750px) {
  width: 100%;
}
`;

const CurrentScore = styled(Score)`
  width: 30%;
  background-color: ${({ theme }) => theme.colors.red};
`;

const Highscore = styled(Score)`
  width: 30%;
  background-color: ${({ theme }) => theme.colors.green};
`;

export default Scoreboard;
