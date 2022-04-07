import React from 'react';
import "./PlayerStatistic.css";


const PlayerStatistic = () => {
    return (
        <div className='mainContainer'>
            <div>
                <h3 className='heading'>Player Career Statistics</h3>
            </div>
            <div>
                <h4 style={{backgroundColor: "#c3002f", padding: "5px"}}>UEFA</h4>
                <div className='tableStyle'>
                    <table style={{borderCollapse: "collapse"}}>
                        <thead>
                            <tr>
                                <th style={{padding: "15px 12px", backgroundColor: "#262626"}}>SEASON</th>
                                <th style={{padding: "15px 12px", backgroundColor: "#262626"}}>CLUB</th>
                                <th style={{padding: "15px 12px", backgroundColor: "#262626"}}>GOALS</th>
                                <th style={{padding: "15px 12px", backgroundColor: "#262626"}}>ASSISTS</th>
                                <th style={{padding: "15px 12px", backgroundColor: "#262626"}}>YELLOW CARD</th>
                                <th style={{padding: "15px 12px", backgroundColor: "#262626"}}>RED CARD</th>
                                <th style={{padding: "15px 12px", backgroundColor: "#262626"}}>APPEARANCE</th>
                                <th style={{padding: "15px 12px", backgroundColor: "#262626"}}>WIN RATIO</th>
                                <th style={{padding: "15px 12px", backgroundColor: "#262626"}}>DROW RATIO</th>
                                <th style={{padding: "15px 12px", backgroundColor: "#262626"}}>LOSS RATIO</th>
                                <th style={{padding: "15px 12px", backgroundColor: "#262626"}}>OWN GOALS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='odd'>
                                <td>2022</td>
                                <td>Abohani</td>
                                <td>0</td>
                                <td>0</td>
                                <td>1</td>
                                <td>0</td>
                                <td>0</td>
                                <td>8</td>
                                <td>5</td>
                                <td>6</td>
                                <td>0</td>
                            </tr>
                            <tr className='even'>
                                <td>2022</td>
                                <td>Abohani</td>
                                <td>0</td>
                                <td>0</td>
                                <td>1</td>
                                <td>0</td>
                                <td>0</td>
                                <td>8</td>
                                <td>5</td>
                                <td>6</td>
                                <td>0</td>
                            </tr>
                            <tr className='odd'>
                                <td>2022</td>
                                <td>Abohani</td>
                                <td>0</td>
                                <td>0</td>
                                <td>1</td>
                                <td>0</td>
                                <td>0</td>
                                <td>8</td>
                                <td>5</td>
                                <td>6</td>
                                <td>0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PlayerStatistic;