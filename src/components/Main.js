import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CardsGrid from "./CardsGrid/CardsGrid";
import Scoreboard from "./Scoreboard/Scoreboard";
import { shuffleArray, getImageNames, formatImageName } from "../utils";
import { v4 as uuidv4 } from "uuid";

const Main = () => {
  const [frogs, setFrogs] = useState([]);
  const [clickedFrogs, setClickedFrogs] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  const FROG_IMAGE_NAMES = getImageNames();
  useEffect(() => {
    const loadFrogs = () => {
      const frogImages = FROG_IMAGE_NAMES.map((imageName, index) => ({
        id: uuidv4(),
        name: formatImageName(imageName),
        image: require(`../assets/${imageName}`),
      }));
      setFrogs(shuffleArray(frogImages));
    };

    loadFrogs();
  }, []);

  const handleCardClick = (e) => {
    const frogName = e.target.parentNode.lastChild.textContent;
    playRound(frogName);
    setFrogs(shuffleArray(frogs));
  };

  const playRound = (frogName) => {
    if (clickedFrogs.includes(frogName)) {
      resetGame();
    } else {
      const newScore = currentScore + 1;
      if (newScore > highScore) {
        setHighScore(newScore);
      }
      setCurrentScore(newScore);
      setClickedFrogs((prevState) => [...prevState, frogName]);
      setFrogs(shuffleArray(frogs));

      if (clickedFrogs.length === frogs.length - 1) {
        setGameWon(true);
        setHighScore(frogs.length);
      }
    }
  };

  const resetGame = () => {
    setClickedFrogs([]);
    setCurrentScore(0);
    setGameWon(false);
  };

  return (
    <MainWrapper>
      <Scoreboard
        currentScore={currentScore}
        highScore={highScore}
      ></Scoreboard>
      {gameWon ? (
        <Congratulations onClick={resetGame}>
          Wow, gj, Myliu tave Rasyte &lt;333
        </Congratulations>
      ) : (
        <CardsGrid frogs={frogs} handleCardClick={handleCardClick}></CardsGrid>
      )}
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  padding: 4rem;
  margin-bottom: 3.5rem;
`;

const Congratulations = styled.button`
  padding: 10rem 20rem;
  font-size: 8rem;
  font-weight: bold;
  color: white;
  background-color: ${({ theme }) => theme.colors.frogGreen};
  border: none;
  border-radius: 40px;
  cursor: pointer;
`;

export default Main;
