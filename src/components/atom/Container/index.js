import classes from './index.module.css';
import React from 'react';

const Container = ({children}) => {
    return(
        <div className={classes.container}>
            {children}
        </div>
    );
}

export default Container;