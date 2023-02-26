import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useStoreActions, useStoreState } from 'easy-peasy';
import CountUp from 'react-countup';

const PointsDisplay = () => {
    const params = useParams();
    const driverId = params.driverId;
    const getPoints = useStoreActions(actions => actions.points.getPoints);
    const points = useStoreState(state => state.points.points);

    useEffect(() => {
        getPoints(driverId);
    }, [getPoints, driverId]);

    return (
        <div>
            <div class="container-md">
                <div class="row justify-content-center align-items-center">
                    <div class="p-5 col-md-6 ">
                        <p><img src="assets/images/Asset34NinjaIcon.png" class="img-fluid" alt="banner" /></p>
                    </div>
                    <div class="p-5 col-md-6 ">
                        <div style={{ textAlign: "center" }}>
                            <div class="col-12">
                                <h1 style={{ fontSize: '4rem', fontFamily: 'Impact'}}>Your current points:</h1>
                            </div>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <div class="col-12">
                                <CountUp end={points} duration={1} style={{ fontSize: '10rem', fontFamily: 'Impact'}} />
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <button className="red-pill-outline">Claim My Rewards   →</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PointsDisplay;