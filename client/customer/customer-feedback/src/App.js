
import './App.css';
import { useState, useReducer } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';


const formReducer = (state, event) => {
  if (event.reset) {
    return {
      orderid: '',
      rating: '',
      tips: '',
      feedback: ''
    }
  }
  return {
    ...state,
    [event.name] : event.value
  }
  
}

function App() {  
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);


  // const handleSubmit = event => {
  //   event.preventDefault();
  //   setSubmitting(true);
  //   alert('Feedback received, thank you!')

  //   setTimeout(() => {
  //     setSubmitting(false);
  //     setFormData({
  //     reset: true
  //   })
  //  }, 3000);
  // }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  function clickRating(index) {
    setFormData({
      name: "rating",
      value: index,
    });
  }

  // function POST(path, data) {
  //   return fetch(`http://localhost:5000${path}`,
  //   {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(data)
  //     }
  //   )
  // }

  // const formOnClick = event => {
  //   event.preventDefault();
  //   POST('/post',formData).then(
  //     async (resp) => {
  //       const json= await resp.json()
  //     }
  //   )
  // }
  
  function getFormData(object1) {
    const formData1 = new FormData();
    Object.keys(object1).forEach(key => formData1.append(key, object1[key]));
    return formData1;
  }

  // function getFormData(object2) {
  //   const formData = new FormData();
  //   Object.keys(object2).forEach(key => {
  //     if (typeof object2[key] !== 'object') formData.append(key, object2[key])
  //     else formData.append(key, JSON.stringify(object2[key]))
  //   })
  //   return formData;
  // }

  let submitFeedbackForm = async (e) => {
    e.preventDefault();
    var request = new XMLHttpRequest();
    request.open('POST', 'http://159.138.121.61:5000/submitted_feedback');

    var form_data = getFormData(formData);

    //  for (let [key, val] of Object.entries(formData)) {
    //      form_data.append(key, JSON.stringify(val));
    // }

    request.send(form_data);
    setSubmitting(true);
    alert('Feedback received, thank you!')
    console.log(form_data);
    console.log(typeof(form_data));

    setTimeout(() => {
      setSubmitting(false);
      setFormData({
      reset: true
    })
   }, 3000);
  };

  return (
    <>
      <Navbar dark styler={'#e9ecef'} expand="md">
        <NavbarBrand className="mr-auto" href="/"><img src="assets/images/Artboard@0.5x.png" alt="Logo" /></NavbarBrand>
      </Navbar>
      <div className="container-fluid py-5 h-100 p-5 text-white bg-dark" id="jumbotron">
        <div className="row h-100 align-items-center">
          <div className="col-12 text-center">
            <h1 style={{ fontFamily: "Impact", fontSize: "4rem" }}>Feedback</h1>
          </div>
        </div>
      </div>
      
      <div class="container-md">
        {/* <div> remove this later:
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}><strong>{name}</strong>:{value.toString()}</li>
              ))}
          </ul>
        </div> */}

        <br/><br/>
        <div class="row">
            <div class="col-7">
              {submitting &&
              <div> Submitting Form...</div>
              }
              <form method='post' action='/post' onSubmit={submitFeedbackForm}>
                <fieldset>
                  <label>
                    <p>Order ID:</p>
                    <input name="orderid" onChange={handleChange} value={formData.orderid || ''}/>
                  </label>
                </fieldset>
                <br/>
                <fieldset>
                  <label>
                    <p>Leave a rating!</p>
                    {[...Array(5)].map((star, index) => {
                      index += 1;
                      return (
                        <>
                            <button
                                value={formData.rating || ''}
                                name="rating"
                                type="button"
                                key={index}
                                className={index <= (hover || rating) ? "shuriken-on" : "shuriken-off"}
                                onClick={() => {setRating(index); clickRating(index);}}
                                onMouseEnter={() => setHover(index)}
                                onMouseLeave={() => setHover(rating)}
                                // onChange={clickRating}
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
                  </label>
                </fieldset>

                <br/>

                <fieldset>
                  <label>
                    <p> Give a tip! </p>
                    <select className="select-button" name="tips" onChange={handleChange} value={formData.tips || ''}>
                      <option value="0">none</option>
                      <option value="2">$2</option>
                      <option value="5">$5</option>
                      <option value="10">$10</option>
                    </select>
                  </label>
                </fieldset>

                <br/>

                <fieldset>
                  <label>
                    <p> Any other feedback? </p>
                    <textarea class="form-control" name="feedback" rows="3" onChange={handleChange} value={formData.feedback || ''}></textarea>
                  </label>
                </fieldset>
                
                <button 
                  type="submit"
                  className="red-pill-outline" 
                  onClick = {submitFeedbackForm}
                  >
                  Submit</button>
              </form>
              {/* <container> <Parcelinfo /> </container>
              <container> <Rating /> </container>
              <container> <SelectTip /> </container>
              <container> <Feedback /> </container> */}
                        
            </div>
            <div class="col">
              <container>
                <img className="ninja-pic" src="assets/images/Asset-23Ninja-Icon.png" />  
              </container>
            </div>
            
          </div>
          
          
        </div>
      
      <br/><br/>
      {/* <container> <SubmitButton /> </container> */}
      

    </>
  );
}

export default App;