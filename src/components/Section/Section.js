import React from "react";
import PropTypes from 'prop-types';
import { Children } from "react";

export default function Section({title, children}) {
    return (
        <div>
            <h2>{title}</h2>
            {children}
        </div>
    )
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.element.isRequired
};