import '../index.css';
import Hero from '../img/landing-image.9019f9eb.png';
import Icon1 from '../img/billy-pointing-to-phone.ac795dc3.png';
import Icon2 from '../img/billy-pointing-to-report.a5a073be (1).png';
import Icon3 from '../img/billy-chating.305b7e2f.png';
import Icon4 from '../img/billy-taking-notes.f010d81a.png';
import Icon5 from '../img/billy-on-rocket.033e1719.png';
import Icon6 from '../img/right-down-arrow.41a2a961.svg';
import Header from './Header'
import bullet from '../img/list-item-icon.ddbd66ea.svg';

import Google from '../img/google.svg';
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth,signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";




const Home = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);
  return (
    <>
    
    <Header/>
    <div className='container-fluid'>
      {/* hero */}
      
      <div className="center">
        <div className="row">
          <div className="col-md-6 pt-5 mt-3">
          <h2 className='mb-2 pt-5 mt-5' style={{fontSize:'3rem',fontWeight:'bold'}}>A convenient way of fulfilling your wishlist </h2>
        <h5>Watch and see your wishes been granted by friends and families.</h5><br/>
        <button type="submit" onClick={signInWithGoogle}   className="btn btn-purple mt-4 px-4">Login with <img src={Google} alt="pic" /></button>
        

          </div>
          <div className="col-md-3">
            <img src={Hero} alt="hero" className='hero'/>
          </div>
        </div>
        
      </div>
      <div className="container">
          {/* services */}
      <div className="container text-center mt-5 mb-5">
        <h2 style={{fontSize:'30px',fontWeight:'bold'}}>How promise card works</h2>
          <div className="row">
            <div className="col-md-4">
              <img src={Icon1} alt="pic" />
              <h2 style={{fontSize:'30px',fontWeight:'bold'}}>Sign In</h2>
              Login or create a free account to get started
            </div>
            <div className="col-md-4">
            <img src={Icon2} alt="pic" />
                <h2 style={{fontSize:'30px',fontWeight:'bold'}}>Make Wishlist</h2>
                Create a promise card and include your wishlist
            </div>
            <div className="col-md-4">
            <img src={Icon3} alt="pic" />
              <h2 style={{fontSize:'30px',fontWeight:'bold'}}>Share & Earn</h2>
              share your wishlist with friend and get them fufilled           
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="row">
            <div className="col-md-6">
              <img src={Icon4} alt="pic"  />
            </div>

            <div className="col-md-6 mt-5">
              <h2 style={{fontSize:'30px',fontWeight:'bold'}}>Create your Wishcard</h2>
             <p>create a wishlist for the season, your birthday, annivesary or just any event you can think of.
              
             <br/> <img src={bullet} alt="pic"  /> Give your wish list a custom title.<br className='mt-1'/>
             <br/><img src={bullet} alt="pic"  /> Modify your wishlist the way you want it to be.<br className='mt-1'/> 
             <br/><img src={bullet} alt="pic"  /> You can create multiple wishlist<br className='mt-1'/>
             </p> 
            </div>
          </div>
        </div>
        <div className="row">
          <div className="span4"></div>
          <div className="span4"><img className="center-block" src={Icon6} alt='pic' /></div>
          <div className="span4"></div>
        </div>
          
              <div className="row">
            <div className="col-md-8">
            <h2 style={{fontSize:'30px',fontWeight:'bold'}}>Share & Earn</h2>
              <p > create a wishlist for the season, your birthday, annivesary or just any event you can think of.
             
              <br /> <img src={bullet} alt="pic"  /> Give your wish list a custom title.<br className='mt-1'/>
              <br/><img src={bullet} alt="pic"  /> Modify your wishlist the way you want it to be. <br className='mt-1'/>
              <br/> <img src={bullet} alt="pic"  /> You can create multiple wishlist.<br className='mt-1'/>
              </p>
            </div>

            <div className=" col-md-4">
              <img src={Icon5} alt="pic"   />
            </div>
          </div>
       
        
      </div>

      
          

      </div>
    </>

  )
}

export default Home