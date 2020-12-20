import React from 'react';
import './Digits.css';

export default function Digits(props) {

    return (
        <div className="digits">
            <div className="row">
                <div className="col-4 digit-col">
                    <button className="digit-button one" value={1} onClick={props.onNumberChange.bind(this, 1)}>1</button>
                </div>
                <div className="col-4 digit-col">
                    <button className="digit-button two" value={2} onClick={props.onNumberChange.bind(this, 2)}>2</button>
                </div>
                <div className="col-4 digit-col">
                    <button className="digit-button three" value={3} onClick={props.onNumberChange.bind(this, 3)}>3</button>
                </div>
            </div>
            <div className="row">
                <div className="col-4 digit-col">
                    <button className="digit-button four" value={4} onClick={props.onNumberChange.bind(this, 4)}>4</button>
                </div>
                <div className="col-4 digit-col">
                    <button className="digit-button five" value={5} onClick={props.onNumberChange.bind(this, 5)}>5</button>
                </div>
                <div className="col-4 digit-col">
                    <button className="digit-button six" value={6} onClick={props.onNumberChange.bind(this, 6)}>6</button>
                </div>
            </div>
            <div className="row">
                <div className="col-4 digit-col">
                    <button className="digit-button seven" value={7} onClick={props.onNumberChange.bind(this, 7)}>7</button>
                </div>
                <div className="col-4 digit-col">
                    <button className="digit-button eight" value={8} onClick={props.onNumberChange.bind(this, 8)}>8</button>
                </div>
                <div className="col-4 digit-col">
                    <button className="digit-button nine" value={9} onClick={props.onNumberChange.bind(this, 9)}>9</button>
                </div>
            </div>
            <div className="row">
                <div className="col-4 digit-col">
                    <button className="digit-button zero" value={0} onClick={props.onNumberChange.bind(this, 0)}>0</button>
                </div>
                <div className="col-4 digit-col">
                    <button className="digit-button decimal" value="." onClick={props.onNumberChange.bind(this, ".")}>.</button>
                </div>
                <div className="col-4 digit-col">
                    <button className="digit-button clear">C</button>
                </div>
            </div>
        </div>
    ); 
}