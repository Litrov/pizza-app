import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ButtonHeader = ({ onClick, className, outline, children }) => {
    return (
        <button
            onClick={onClick}
            className={classNames('button', className, {
                'button--outline': outline,
            })}>
            {children}
        </button>
    );
};

ButtonHeader.propTypes = {
    onClick: PropTypes.func,
};

export default ButtonHeader;