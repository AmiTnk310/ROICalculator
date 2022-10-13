import React, { useState } from "react";

const HomeRoi = () => {

    function colorChange(e) {
        e.preventDefault();
        let totalBtns = document.getElementsByClassName("Btn1");
        for (let index = 0; index < totalBtns.length; index++) {
            totalBtns[index].style.color = "rgb(181, 178, 178)";
            totalBtns[index].style.backgroundColor = "rgba(211, 211, 211, 0.318)";
        }
        e.target.style.color = "black";
        e.target.style.backgroundColor = "rgb(251, 229, 88)";
    }

    function colorChange_2(e) {
        e.preventDefault();
        let totalbtn = document.getElementsByClassName("Btn2");
        for (let i = 0; i < totalbtn.length; i++) {
            totalbtn[i].style.color = "rgb(181, 178, 178)";
            totalbtn[i].style.backgroundColor = "rgba(211, 211, 211, 0.318)";
        }
        e.target.style.color = "black";
        e.target.style.backgroundColor = "rgb(251, 229, 88)";
    }

    function colorChange_3(e) {
        e.preventDefault();
        let btns = document.getElementsByClassName("btn3");
        for (let i = 0; i < btns.length; i++) {
            btns[i].style.color = "rgb(181, 178, 178)";
            btns[i].style.backgroundColor = "rgba(211, 211, 211, 0.318)";
        }
        e.target.style.color = "black";
        e.target.style.backgroundColor = "rgb(251, 229, 88)";
    }
    const [details, setDetails] = useState("Show Details");
    function ShowAndHide() {
        if (details == "Show Details") {
            setDetails("Hide Details");
        } else {
            setDetails("Show Details");
        }
    }

    return (
        <div className="MainContainer">
            <div className="Header">
                <div id="heading">ROI Calculator</div>
                <div id="icons">
                    <div id="cakeicon">
                        <div id="img">
                            <img src="https://thumbs.dreamstime.com/b/vector-illustration-strawberry-birthday-cake-icon-flat-design-blue-background-round-shape-cake-birthday-celebration-177746351.jpg"></img>
                        </div>
                        <div id="Text">
                            <b> Cake</b>
                        </div>
                    </div>
                    <div className="btn">
                        <input type="checkbox" id="switch" class="checkbox" />
                        <label for="switch" class="toggle"></label>
                        <b style={{ color: "grey" }}>USD</b>
                    </div>
                </div>
            </div>
            <div className="container2">
                <div className="form">
                    <form id="form">
                        <input type="text"></input>
                        <label className="static-value">CAKE</label>
                    </form>
                </div>
                <div className="balance">
                    <button
                        type="radio"
                        className="Btn1"
                        id="blc-btn"
                        onClick={colorChange}
                    >
                        Use Balance
                    </button>
                    <button type="radio" className="Btn1" onClick={colorChange}>
                        $1000
                    </button>
                    <button type="radio" className="Btn1" onClick={colorChange}>
                        $100
                    </button>
                </div>
                <div className="price">
                    <span>~ $20.18</span>
                </div>

                <div className="timeframe">
                    <h1>Timeframe</h1>
                    <div className="timeframebtn">
                        <button type="submit" className="Btn2" onClick={colorChange_2}>
                            1 Day
                        </button>
                        <button
                            type="submit"
                            className="Btn2"
                            onClick={colorChange_2}
                            id="timefrmbtn"
                        >
                            7 Days
                        </button>
                        <button type="submit" className="Btn2" onClick={colorChange_2}>
                            1 Month
                        </button>
                        <button type="submit" className="Btn2" onClick={colorChange_2}>
                            1 Year
                        </button>
                        <button type="submit" className="Btn2" onClick={colorChange_2}>
                            5 years
                        </button>
                    </div>
                </div>

                <div className="EnableApY">
                    <div id="Apy">
                        <b>Enable Accelerated APY</b>
                    </div>
                    <div id="togglebtn">
                        <div className="btn1">
                            <input type="checkbox" id="switch1" class="checkbox1" />
                            <label for="switch1" class="toggle1"></label>
                        </div>
                    </div>
                </div>

                <div className="tier">
                    <div className="tier-heading">Select Tier</div>
                    <div className="tier-inputs">
                        <button
                            type="submit"
                            className="btn3"
                            onClick={colorChange_3}
                            id="tier-btn"
                        >
                            Tier 1
                        </button>
                        <button type="submit" className="btn3" onClick={colorChange_3}>
                            Tier 2
                        </button>
                        <button type="submit" className="btn3" onClick={colorChange_3}>
                            Tier 3
                        </button>
                        <button type="submit" className="btn3" onClick={colorChange_3}>
                            Tier 4
                        </button>
                        <button type="submit" className="btn3" onClick={colorChange_3}>
                            Tier 5
                        </button>
                    </div>
                </div>

                <div className="current-rate">
                    <div className="rate-heading">
                        <span>
                            <b>ROI at Current Rates</b>
                        </span>
                    </div>
                    <div className="rate-form">
                        <input type="text" class="outline"></input>
                    </div>
                    <div className="cakecount">
                        <b>~ 3Cake + 10DON</b>
                    </div>
                </div>

                <div className="submit">
                    <button id="apply">Apply</button>
                    <button id="cancel">Cancel</button>
                </div>

                <div className="details">
                    <button onClick={ShowAndHide}>{details}</button>
                    {details == "Hide Details" ? (
                        <div id="more-details">
                            <div className="percentAPY">
                                <b>APY</b>
                                <span>63.32%</span>
                            </div>
                            <div className="points">
                                <ul>
                                    <li>Calculated based on current rates</li>
                                    <br></br>
                                    <li>
                                        All figures are estimates provided for your convenience
                                        only,and by no means represent guranted returns.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )
                     : (
                        <div></div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HomeRoi;
