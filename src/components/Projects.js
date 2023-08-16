import React, { useState, useEffect } from 'react';
import '../App.css';
import ecommerce from '../assets/ecommerce.jpg'
import tokenexchange from '../assets/tokenexchange.jpg'
import adopt from '../assets/adopt.jpg'
import financialPlanner from '../assets/financial-planner.jpg'

function Projects() { 
    const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Delay the animation to allow time for images to load
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  const projectsClassName = isLoaded ? 'project-slide-in active' : 'project-slide-in';

return (
<div className = "projects"> 
  
  <div className = "project2" id = "finincial-planner">
    <div className = "projects__img-planner projects__img">
      <a href="https://financialplanner.jordananamutebi.com" target="_blank"><img src = {financialPlanner} height= "550px" width ="800px"/></a>
    </div>
    <div className = "projects__info">
      <h3><br/> Financial Planner </h3>
      <h4> JAVASCRIPT  -  REACT </h4>
      <h5>This application is a personal finance tracker  designed to help users manage their expenses
       and savings. It offers features such as visualizing spending patterns, setting 
       spending limits, and categorizing transactions to promote better financial planning."</h5>
      <div className = "projects__buttons">
        <a href="https://financialplanner.jordananamutebi.com" target="_blank"><h1 >VISIT> </h1></a>
        <a href="https://github.com/jnkasaato/financial-planner" target="_blank"><h1>CODE> </h1></a>
      </div>
    </div>
  </div>
  <br/><br/><br/><br/><br/><br/>
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
