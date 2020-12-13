import React from 'react';
import './Digits.css';

export default function Digits() {
    return (
        <div className="digits">
            <div className="row">
                <div className="col-4 digit-col">
                    <button className="digit-button one">1</button>
                </div>
                <div className="col-4 digit-col">
                    <button className="digit-button two">2</button>
                </div>
                <div className="col-4 digit-col">
                    <button className="digit-button three">3</button>
                </div>
            </div>
            <div className="row">
                <div className="col-4 digit-col">
                    <button className="digit-button four">4</button>
                </div>
                <div className="col-4 digit-col">
                    <button className="digit-button five">5</button>
                </div>
                <div className="col-4 digit-col">
                    <button className="digit-button six">6</button>
                </div>
            </div>
            <div className="row">
                <div className="col-4 digit-col">
                    <button className="digit-button seven">7</button>
                </div>
                <div className="col-4 digit-col">
                    <button className="digit-button eight">8</button>
                </div>
                <div className="col-4 digit-col">
                    <button className="digit-button nine">9</button>
                </div>
            </div>
            <div className="row">
                <div className="col-4 digit-col">
                    <button className="digit-button zero">0</button>
                </div>
                <div className="col-4 digit-col">
                    <button className="digit-button decimal">.</button>
                </div>
                <div className="col-4 digit-col">
                    <button className="digit-button clear">C</button>
                </div>
            </div>
        </div>
    ); 
}