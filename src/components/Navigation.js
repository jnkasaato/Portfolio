
import '../App.css';
import jk from '../assets/jk.png'


function Navigation() { 
return (
  <div className = "nav">
    <img src = {jk} height = "80px"/>
    <a href="#dapp">SEEDLING</a>
    <a href="#ecommerce">ACCLIMATE</a>
    <a href="#contact" >CONTACT</a>
  </div>
  );
}

export default Navigation;
