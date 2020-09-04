import React from 'react';
import PropTypes from 'prop-types'

function Button(props) {
    const { handleClick, text } = props
    return <button onClick={handleClick}> {text} </button>;
}

// Button.defaultProps = {
//     text: "Click me"
// };

// PropTypes viene soprattutto utilizzato per i controlli sui tipi di variabile
Button.propTypes = {
    text: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
}

export default Button;