import { useState } from 'react';
import Square from './Square';
import GameStatus from './GameStatus';

const Board = ({xIsNext, squareValues, onPlay}) => {

    if (!squareValues) {
        squareValues = Array(9).fill(null)
    }
    
    const handleSquareClick = (id) => {
        if (squareValues[id] || calculateWinner(squareValues)) {
            return;
        }
            const nextSquares = [...squareValues]
            if (xIsNext) {
                nextSquares[id] = 'X'
            } else {
                nextSquares[id] = 'O'
            }

            onPlay(nextSquares)
    }

    const calculateWinner = (squares) => {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }
        
      const determineGameStatus = () => {
        console.log(squareValues)
        if (calculateWinner(squareValues)) {
            return `${calculateWinner(squareValues)} has won!`
        }
        if (xIsNext) {
            return `X to go next`
        } else {
            return `O to go next`
        }
      }

      const gameStatus = determineGameStatus()
      
    

    const boardStyles = {
        margin: 'auto',
        display: 'grid',
        width: 'calc(15em + 4px)',
        gridTemplateColumns: '5em 5em 5em',
        gridTemplateRows: '5em 5em 5em',
        gap: '2px',
        border: '2px solid black',
        backgroundColor: 'black'
    }

    return (
        <>
        <div className='board' style={boardStyles}>
            {squareValues.map((squareValue, index) => <Square key={index} handleClick={handleSquareClick} squareValue={squareValue} id={index} />
            )}
        </div>
        <GameStatus status={gameStatus}/>
        </>
        
    );
};

export default Board;