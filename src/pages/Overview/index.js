import React from 'react';
import classes from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNotesMedical } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import Sections from '../../components/molecules/Sections';

const Overview = () => {

    const data = useSelector(state => state.overview);

    return (
        <div className={classes.overview}>
            <div className={classes.hostedBy}>
                <div className={classes.leftCol}>
                    <h2>Hosted By</h2>
                    <div>
                        <div>
                            <h4>{data.hosted.name}</h4>
                            <p>{data.hosted.members} Members</p>
                        </div>
                        <button>Follow</button>
                    </div>
                </div>
                <div className={classes.rightCol}>
                    <div>
                        <p>Game</p>
                        <h4>{data.hosted.game}</h4>
                    </div>
                    <div>
                        <p>Format</p>
                        <h4>{data.hosted.format}</h4>
                    </div>
                    <div>
                        <p>Type</p>
                        <h4>{data.hosted.type}</h4>
                    </div>
                </div>
            </div>
            <div className={classes.mainContent}>
                <div className={classes.leftCol}>
                    <Sections title='Introduction'>
                        <p>
                            {data.introduction}
                        </p>
                    </Sections>
                    <Sections title='Rules'>
                        <p>
                            {data.rules.description}
                        </p>
                        <p>Format</p>
                        <ul>
                            {data.rules.formats.map((value, index) => (
                                <li key={index}>{value}</li>
                            ))}
                        </ul>
                    </Sections>
                </div>
                <div className={classes.rightCol}>
                    <Sections title='Price' className={classes.price}>
                        <div>
                            <div>
                                <p className={classes.pool}>Prize Pool</p>
                                <h3>$350 <span>CAD</span></h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                </p>
                            </div>
                            <div className={classes.priceBoxes}>
                                <div>
                                    <p>$130</p>
                                    <div>2nd</div>
                                </div>
                                <div>
                                    <p>$200</p>
                                    <div>1st</div>
                                </div>
                                <div>
                                    <p>$30</p>
                                    <div>3rd</div>
                                </div>
                            </div>
                        </div>
                    </Sections>
                    <Sections title='Game Settings' className={classes.gameSettings}>
                        <div>
                            <figure>
                                <img src={require('../../assets/img/showcase.jpg')} alt="gaming" />
                            </figure>
                            <div>
                                <div>
                                    <p>Game</p>
                                    <h4>League of leg</h4>
                                </div>
                                <div>
                                    <p>Format</p>
                                    <h4>STG5</h4>
                                </div>
                                <div>
                                    <p>Type</p>
                                    <h4>Single Elia</h4>
                                </div>
                            </div>
                        </div>
                    </Sections>
                </div>
            </div>
            <div className={classes.footerContent}>
                <Sections title='Sponsor' className={classes.leftCol}>
                    <div>
                        <FontAwesomeIcon icon={faNotesMedical} />
                        <FontAwesomeIcon icon={faNotesMedical} />
                        <FontAwesomeIcon icon={faNotesMedical} />
                        <FontAwesomeIcon icon={faNotesMedical} />
                    </div>
                </Sections>
                <Sections title='Contact' className={classes.rightCol}>
                    <p>{data.contact}</p>
                </Sections>
            </div>
        </div>
    )
}

export default Overview;