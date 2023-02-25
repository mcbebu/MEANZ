import { useState } from 'react';

  
export default function Parcelinfo() {
    const [parcelid, setParcelId] = useState('');

    return (
        <container className = "parcel-id-text">
            <label> ParcelID:  
                <input 
                    className = "parcel-id-box"
                    value={parcelid}
                    onChange = {e => setParcelId(e.target.value)}
                />
            </label>
            { parcelid !== '' &&
                <p>This proves the box is working... {parcelid}.</p>
            }
      </container>
    );
      
}