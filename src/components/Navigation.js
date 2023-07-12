
import '../App.css';
import jk from '../assets/jk.png'

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
  });
});

function Navigation() { 
return (
  <div className = "nav">
    <img src = {jk} height = "80px"/>
    <a href="#dapp">TOKEN EXCHANGE</a>
    <a href="#ecommerce">ACCLIMATE</a>
    <a href="#contact" >CONTACT</a>
  </div>
  );
}

export default Navigation;
