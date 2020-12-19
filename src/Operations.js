import React from 'react';
import './Operations.css';

export default function Operations() {
    return (
        <div className="operations">
            <div className="row">
                <div className="col-6 operations-col">
                    <button className="operations-button add">{`+`}</button>
                </div>
                <div className="col-6 operations-col">
                    <button className="operations-button subtract">{`-`}</button>
                </div>
            </div>
            <div className="row">
                <div className="col-6 operations-col">
                    <button className="operations-button multiply">{`x`}</button>
                </div>
                <div className="col-6 operations-col">
                    <button className="operations-button divide">{`÷`}</button>
                </div>
            </div>
            <div className="row">
                <div className="col-12 operations-col">
                    <button className="operations-button equal">{`=`}</button>
                </div>
            </div>
        </div>
    );
}