import { useState } from 'react';

  
export default function Parcelinfo() {
    const [parcelid, setParcelId] = useState('');

    
    return (
        <>
        <label> ParcelID:  
            <input 
                value={parcelid}
                onChange = {e => setParcelId(e.target.value)}
            />
        </label>
        { parcelid !== '' &&
            <p>This proves the box is working... {parcelid}.</p>
        }
      </>
    );
      
}