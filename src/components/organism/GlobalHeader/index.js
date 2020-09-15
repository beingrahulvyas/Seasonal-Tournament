import React from 'react';
import classes from './index.module.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import Container from '../../atom/Container';
import { useSelector } from 'react-redux';

const GlobalHeader = () => {

    const data = useSelector(state => state.global);

    return (
        <header className={classes.mainHeader}>
            <div className={classes.topHeader}>
                <Container>
                    <h3>GA</h3>
                    <div className={classes.searchBox}>
                        <FontAwesomeIcon icon={faSearch} />
                        <input type='string' placeholder='Search' />
                    </div>
                    <button>$ 159.23</button>
                    <FontAwesomeIcon icon={faBell} />
                    <FontAwesomeIcon icon={faBars} />
                </Container>
            </div>
            <aside>
                <nav>
                    <ul>
                        <li className={classes.active}><FontAwesomeIcon icon={faBell} /></li>
                        <li><FontAwesomeIcon icon={faBell} /></li>
                        <li><FontAwesomeIcon icon={faBell} /></li>
                        <li><FontAwesomeIcon icon={faBell} /></li>
                    </ul>
                </nav>
            </aside>
            <div className={classes.heading}>
                <div className={classes.leftCol}>
                    <h1>{data.title}</h1>
                    <span>Open</span>
                </div>
                <div className={classes.rightCol}>
                    <div className={classes.dateTime}>
                        <p className={classes.date}>{data.date.month} <br /> <span>{data.date.day}</span></p>
                        <p className={classes.time}>{data.time} <span>PDT</span><br /><span>{data.location}</span></p>
                    </div>
                    <button>Join</button>
                </div>
            </div>
            <div className={classes.showcase}>
                <img src={require("../../../assets/img/showcase.jpg")} alt="Gaming" />
            </div>
            <div className={classes.mobileLeftColTitle}>
                <h1>{data.title}</h1>
            </div>
            <nav className={classes.mainNav}>
                <ul>
                    <li>
                        <NavLink exact className={classes.navLink} activeClassName={classes.activeNavLink} to='/'>Overview</NavLink>
                        <NavLink exact className={classes.navLink} activeClassName={classes.activeNavLink} to='/livestream'>Livestream</NavLink>
                        <NavLink exact className={classes.navLink} activeClassName={classes.activeNavLink} to='/leaderboard'>Leaderboard</NavLink>
                        <NavLink exact className={classes.navLink} activeClassName={classes.activeNavLink} to='/brackets'>Brackets</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default GlobalHeader;