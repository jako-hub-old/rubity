import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Breadcrumb = ({onPress, label, current}) => (
    <div 
        className   = { classNames({'breadcrumb-item' : true, 'current-item' : current}) }
        onClick     = { !current? onPress : null }
    >
        <p>{label}</p>
    </div>
);

Breadcrumb.propTypes = {
    current : PropTypes.bool,       // If this is the current route.
    label   : PropTypes.string,     // Given name for the breadcrumb
    to      : PropTypes.string,
};

export default Breadcrumb;