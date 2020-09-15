import React from 'react';
import classes from './index.module.css';

const Sections = ({ title, children, className }) => {
    return (
        <section className={[classes.sections, className].join(' ')}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}

export default Sections;