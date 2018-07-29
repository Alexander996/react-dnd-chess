import React from 'react';
import PropTypes from 'prop-types';
import Square from "../Square";
import Knight from "../Knight";

export default class Board extends React.Component{
    static propTypes = {
        knightPosition: PropTypes.arrayOf(
            PropTypes.number.isRequired
        ).isRequired
    };

    render() {
        return (
            <div>
                <Square black>
                    <Knight/>
                </Square>
            </div>
        )
    }
}
