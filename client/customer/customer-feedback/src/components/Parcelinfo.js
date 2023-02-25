import { useState } from 'react';

  
export default function Parcelinfo() {
    const [parcelid, setParcelId] = useState('');

    return (
        <container className = "parcel-id-text">
            
            <p> ParcelID: </p>  
                <input 
                    className = "parcel-id-box"
                    value={parcelid}
                    onChange = {e => setParcelId(e.target.value)}
                />
         
      </container>
    );
      
}