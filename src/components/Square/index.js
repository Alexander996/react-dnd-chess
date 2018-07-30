import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class Square extends React.Component {
    static propTypes = {
        black: PropTypes.bool
    };

    render() {
        const {black} = this.props;
        const fill = black ? 'black' : 'white';
        const stroke = black ? 'white': 'black';

        return (
            <div style={{
                backgroundColor: fill,
                color: stroke
            }}
            className='square'>
                {this.props.children}
            </div>
        )
    }
}
