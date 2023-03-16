import React, { useEffect } from 'react';
import loco from '../Asset/Image/loco.jpg';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, } from 'react';

function Header() {
  const navigate = useNavigate();
  const [logout, setLogout] = useState(false);
  const { state } = useLocation("");

  useEffect(() => {
    const na = JSON.parse(sessionStorage.getItem("out"));
    // console.log(na);
    if (na !== null) {
      setLogout(true)
    }
    else {
      setLogout(false);
    }
  }, [sessionStorage.getItem("out")])

  const goLogin = () => {
    navigate("/Loginpage");
  }

  const goLogout = () => {
    sessionStorage.removeItem("out");
    setLogout(false)
    navigate("/Loginpage");

  }

  const goRegis = () => {
    navigate("/Registerpage");
  }
  return (
    <>

      <nav className="nav">
        <div className="logo"><img src={loco} alt="loco" style={{ width: "100px", height: "100px", marginLeft: "0px" }} /></div>


        <ul className="nav-links">

          <input type="checkbox" id="checkbox_toggle" />
          <label for="checkbox_toggle" className="hamburger">&#9776;</label>

          <div className="menu">
            <li className="menuli"><Link to="/" style={{ color: "red", textDecoration: "none" }}>Home</Link></li>
            <li className="menuli"><Link to="/InteriorDesign" style={{ color: "red", textDecoration: "none" }}>Interior Design</Link></li>
            <div className='dropdown' style={{paddingTop: "6px"}}>
              <li className="menuli"><Link to="/MuiPrice" className='dropbtn' style={{ color: "red", textDecoration: "none" }}>Mui Price</Link></li>
              <div className='dropdown-content'>
                <li className="menuli"><Link to="/SFooter" style={{ color: "red", textDecoration: "none" }}>SFooter</Link></li>
                <li className="menuli"><Link to="/LFooter" style={{ color: "red", textDecoration: "none" }}>LFoot</Link></li>
                <li className="menuli"><Link to="/Cart" style={{ color: "red", textDecoration: "none" }}>Cart</Link></li>
                <li className="menuli"><Link to="/Wishlist" style={{ color: "red", textDecoration: "none" }}>Wishlist</Link></li>
              </div>
            </div>
            <li className="menuli"><Link to="/Contact" style={{ color: "red", textDecoration: "none" }}>Contact</Link></li>
            {logout ?
              <div className='dropdown'>
                <button className='dropbtn'>{state}</button>
                <div className='dropdown-content'>
                  <li><button onClick={goLogout} className="btn1" style={{ marginTop: "9px", padding: "1px 15px",fontSize:"16px",color:"red",borderRadius:"5px" }}>Logout</button></li>

                </div>
              </div> :

              <li><button onClick={goLogin} className="btn1" style={{  marginTop: "9px", padding: "1px 15px",fontSize:"16px",color:"red",borderRadius:"5px" }}>Login</button></li>
            }

          </div>
        </ul>
      </nav>
    </>
  )
}

export default Header;




