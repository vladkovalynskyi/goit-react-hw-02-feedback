import React from "react";
import PropTypes from 'prop-types';
import css from './Section.module.css'

export default function Section({ title, options, onLeaveFeedback}) {
    return (
        <div>
            <h2>{title}</h2>
            <div className={css.list}>
                {options.map(key => {
                    return (
                        <button className={css.item} key={key} type="button" onClick={() => onLeaveFeedback(key)}>
                            {[key]}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

Section.propTypes = {
    title: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
};