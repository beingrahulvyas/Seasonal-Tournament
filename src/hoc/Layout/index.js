import React from 'react';
import classes from './index.module.css';
import Container from '../../components/atom/Container';
import GlobalHeader from '../../components/organism/GlobalHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const Layout = ({ children }) => {
    return (
        <div className={classes.layout}>
            <Container>
                <GlobalHeader />
                <main>
                    {children}
                </main>
                <footer className={classes.mainFooter}>
                    <nav>
                        <ul>
                            <li className={classes.active}>
                                <FontAwesomeIcon icon={faBell} />
                                <p>Tournament</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faBell} />
                                <p>Tournament</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faBell} />
                                <p>Tournament</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faBell} />
                                <p>Tournament</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faBell} />
                                <p>Tournament</p>
                            </li>
                        </ul>
                    </nav>
                </footer>
            </Container>
        </div>
    );
}

export default Layout;