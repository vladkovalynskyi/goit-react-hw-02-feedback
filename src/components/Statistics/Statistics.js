import React from "react";
import PropTypes from 'prop-types';


export default function Statistics ({ good, neutral, bad}) {
    return (
        <div>
            <p>{`Good: ${good}`}</p>
            <p>{`Neutral: ${neutral}`}</p>
            <p>{`Bad: ${bad}`}</p>
        </div>
    );
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired
}