import React from 'react';
import GridComponent from './GridComponent';


const Catalogue = () => {
    return (
        <div>
            <div className='container-md'>
                <div className='row justify-content-center' id='catalogueHeader'>
                    <h1 style={{ fontStyle: 'Impact', color: '#800000', fontSize: '4rem', textAlign: 'center', fontWeight: 'bolder'}}>Rewards Catalogue</h1>
                </div>
            </div>
            <GridComponent />
        </div>
    );
}

export default Catalogue;