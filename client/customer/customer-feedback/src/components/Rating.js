import { useState } from 'react';

function Rating() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    
    return (

      <container className="rating-display">
        <p> Leave a rating! </p>
            
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <>
                <button
                    type="button"
                    key={index}
                    className={index <= (hover || rating) ? "shuriken-on" : "shuriken-off"}
                    onClick={() => setRating(index)}
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(rating)}
                    >
                    <div>
                        <img 
                            className="shuriken-filled-img" 
                            src="assets/images/shuriken-filled.png"
                            width={100}
                        /> 
                    </div>
                </button>
            </>

          );
        })}
      </container>
    );
  }

export default Rating;