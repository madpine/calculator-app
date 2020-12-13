import React from 'react';
import './App.css';

export default function Calculator() {
    return (
        <div className="card calculator-card">
            <div className="card-body calculator-body">
                <div className="card window-card">
                    <div className="card-body window">
                        {`Window`}
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-8">
                        <div className="card digit-card">
                            <div className="card-body digit-body">
                                {`Digits`}
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card function-card">
                            <div className="card-body function-body">
                                {`Functions`}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}