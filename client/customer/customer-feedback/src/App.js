
import './App.css';
import SubmitButton from './components/SubmitButton';
import Parcelinfo from './components/Parcelinfo';
import Tip from './components/Tip';
import Feedback from './components/Feedback';
import Rating from './components/Rating';
import { Navbar, NavbarBrand } from 'reactstrap';


function App() {  
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
      {/* <container>
        <container> <Parcelinfo /> </container>
        <container> <Rating /> </container>
        <container> <Tip /> </container>
        <container> <Feedback /> </container>
        <container> <SubmitButton /> </container>
      </container> */}

      
      <div class="container-md">
        <br/><br/>
        <div class="row">
            <div class="col-7">
              <container> <Parcelinfo /> </container>
              <container> <Rating /> </container>
              <container> <Tip /> </container>
              <container> <Feedback /> </container>
                        
            </div>
            <div class="col">
              <container>
                <img className="ninja-pic" src="assets/images/Asset-23Ninja-Icon.png" />  
              </container>
            </div>
          </div>
          
        </div>
      
      <br/><br/>
      <container> <SubmitButton /> </container>
      


      {/* <container>
          <img className="ninja-pic" src="assets/images/Asset-23Ninja-Icon.png" />  
      </container> */}
    </>
  );
}

export default App;
