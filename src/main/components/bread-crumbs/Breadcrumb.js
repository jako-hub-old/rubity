import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const Breadcrumb = ({to, label, current}) => (
    <div className={ classNames({'breadcrumb-item' : true, 'current-item' : current}) }>
        {!current
        ? (<Link to = { to }>{label}</Link>)
        : (<p>{label}</p>)
        }
    </div>
);

Breadcrumb.propTypes = {
    current : PropTypes.bool,       // If this is the current route.
    label   : PropTypes.string,     // Given name for the breadcrumb
    to      : PropTypes.string,
};

export default Breadcrumb;