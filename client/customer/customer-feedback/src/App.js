
import './App.css';
import MyButton from './components/SubmitButton'
import Parcelinfo from './components/Parcelinfo';
import { Navbar, NavbarBrand } from 'reactstrap';

function App() {  
  return (
    <>
      <Navbar dark color="secondary" expand="md">
              <NavbarBrand className="mr-auto" href="/"><img src="assets/images/Artboard@0.5x.png" alt="Logo" /></NavbarBrand>
      </Navbar>

      <container> 
        <container> <Parcelinfo /> </container>
        <container> <MyButton /> </container>
      </container>
    </>
  );
}

export default App;
