
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
      <Navbar dark color="secondary" expand="md">
              <NavbarBrand className="mr-auto" href="/"><img src="assets/images/Artboard@0.5x.png" alt="Logo" /></NavbarBrand>
      </Navbar>

      <container> <Parcelinfo /> </container>
      <container> <Rating /> </container>
      <container> <Tip /> </container>
      <container> <Feedback /> </container>
      <container> <SubmitButton /> </container>
      
      {/* <div className="ninja-pic"> <img className="ninja-pic-size" src="assets/images/Asset-23Ninja-Icon.png" /> </div>  */}
    </>
  );
}

export default App;
