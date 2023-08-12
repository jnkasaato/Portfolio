
import '../App.css';
import ecommerce from '../assets/ecommerce.jpg'
import tokenexchange from '../assets/tokenexchange.jpg'
import adopt from '../assets/adopt.jpg'

function Projects() { 
return (
<div className = "project"> 
  <div className = "project1" id = "dapp">
    <div className = "projects__info">
      
      <h3><br/> Seedling</h3>
      <h4> SOLIDITY  -  ETHERS.JS  -  HARDHAT  -  REACT </h4>
      <h5>Seedling is a decentralized token exchange where you can transfer real world currency with
          a synthisized dApp token. You can deposit, withdraw, make and cancel orders, and access 
          the ordering book all in one simple site.</h5>
      <div className = "projects__buttons">
        <a href="https://seedling.jordananamutebi.com" target="_blank"><h1 >VISIT> </h1></a>
        <a href="https://github.com/jnkasaato/coin-exchange" target="_blank"><h1>CODE> </h1></a>
      </div>
    </div>
    <div className = "projects__img">
      <a href="https://seedling.jordananamutebi.com" target="_blank"><img src = {tokenexchange} height= "550px" width ="800px"/></a>
    </div>
  </div>
  <br/><br/><br/><br/><br/><br/>

    <div className = "project2" id = "adopt">
    <div className = "projects__img">
      <a href="https://happytail.jordananamutebi.com" target="_blank"><img src = {adopt} height= "550px" width ="800px"/></a>
    </div>
    <div className = "projects__info">
      <h3><br/> HappyTail </h3>
      <h4> JAVASCRIPT  -  REACT </h4>
      <h5>HappyTail Pet Haven is a compassionate platform that facilitates pet adoptions, fosters 
      loving connections between families and animals, and promotes responsible pet ownership, 
      creating a brighter future for our furry companions.</h5>
      <div className = "projects__buttons">
        <a href="https://happytail.jordananamutebi.com" target="_blank"><h1 >VISIT> </h1></a>
        <a href="https://github.com/jnkasaato/petAdoption" target="_blank"><h1>CODE> </h1></a>
      </div>
    </div>
    
  </div>
  <br/><br/><br/><br/><br/><br/>
  
  <div className = "project3" id= "ecommerce">
    <div className = "projects__info">
      <h3><br/>Acclimate</h3>
      <h4> SOLIDITY  -  ETHERS.JS  -  HARDHAT  -  REACT </h4>
      <h5>Acclimate is a decentrlalized ecomerce site where you can explore and buy anything 
          you want in the same way you would on a centralized platform. </h5>
      <div className = "projects__buttons">          
        <a href="https://acclimate.jordananamutebi.com" target="_blank"><h1 >VISIT></h1></a>
        <a href="https://github.com/jnkasaato/ecommerce" target="_blank"><h1>CODE> </h1></a>
      </div>
    </div>  
    <div className = "projects__img">
      <a href="https://acclimate.jordananamutebi.com" target="_blank"><img src = {ecommerce} height= "550px" width ="800px"/></a>
    </div>
  </div>
  <br/><br/><br/><br/><br/><br/>



  </div>




  



    
  );
}

export default Projects;
