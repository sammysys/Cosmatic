import React from 'react';
import './home.css'; // Import the CSS file for styling
import hero from '../../assets/hero.png';
import {CgShoppingBag} from 'react-icons/cg'
import {BsArrowRight} from 'react-icons/bs'
const Home = () => {
  return (
    <div className="home-container">
          <div className="h_sides">
            <span className='text1'>Skin protection Cream</span>
            <div className='text2'>
            <span>Trendy Collection</span>
            <span>
              {" "}
              Seedily say has suitable disposal and boy. Exercise joy man deer poo
              </span>
          </div>
          </div>


          {/*  middle section */}
          <div className='wrapper'>
          <div className="blueCircle">
            <img src={hero} alt="Home" width={600} /></div>
            <div className='cart2'>
              <CgShoppingBag/>
              <div className="signup">
              <span>Best SignUp Offers</span>

              
                <BsArrowRight/>
                </div>
              </div>
              
            </div>
          
          

          <div className='h_sides'>
            <div className='traffic'>
              <span>1.5m</span>
              <span>monthly traffic</span>
            </div>
            <div className='customers'>
              <span>100k</span>
              <span>happy Customers</span>
            </div>
          </div>
      </div>
    
  );
};

export default Home;
