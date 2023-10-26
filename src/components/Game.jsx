import { useState } from 'react';
import Board from './Board';

const Game = () => {
    const [xIsNext, setXIsNext] = useState(true)
    const [history, setHistory] = useState(Array(9).fill(null))
    const [currentMove, setCurrentMove] = useState(0)
    const currentSquares = history[currentMove]

    const handlePlay = (nextSquares) => {

        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
        setXIsNext(!xIsNext);
    }

    const jumpTo = (nextMove) => {
        setCurrentMove(nextMove)
        setXIsNext(nextMove % 2 === 0);

    }

    const moves = history.map((squares, move) => {
        let text = "";
        if (move < 1) {
            text = 'Game start';
        } else {
            text = `Go to move ${move}`
        }

        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{text}</button>
            </li>
        )
    })


    return (
        <>
            <Board xIsNext={xIsNext} squareValues={currentSquares} onPlay={handlePlay} />
            <ol>
                {moves}
            </ol>
        </>
    );
};

export default Game;