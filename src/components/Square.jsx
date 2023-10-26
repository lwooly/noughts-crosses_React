import { useState } from "react";

const Square = ({id, squareValue, handleClick}) => {
    // const [squareValue, setSquareValue] = useState(null)
    const btnStyles = {
        border: '0px solid black',
        borderRadius: 'none',
        backgroundColor: 'lightgreen',
        fontSize: '2em'
    }

    // const handleClick = () => {
    //     setSquareValue('X')
    // }

    return (
        <button id={id} onClick={() => handleClick(id)} style={btnStyles}>{squareValue}</button>
    );
};

export default Square;