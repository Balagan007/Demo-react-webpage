import fb from '../Asset/Image/fb.jpg'; 
import p from '../Asset/Image/p.jpg'; 
import twi from '../Asset/Image/twi.jpg'; 
import { Link } from 'react-router-dom';

function Footer(){
    return(
      <div className='down'>
        <footer >
              
              <div className="row" style={{display:"flex",marginLeft:" 250px"}}>
              <div className="colum">
                <button style={{backgroundColor:"orange"}}>NOVABUILDERS</button>

               </div>
               <div className="col">
                <p>© 2021 NOVABUILDERS, All Rights Reserved </p>
               </div>
               <div className="colu">
              <Link to={"https://www.facebook.com/smarchbuilderstirunelveli"}><img src={fb} alt="fb" style={{width: "40px",
                  height: "40px"}}/></Link>
                <Link to={"https://smarchbuilders.in/"}><img src={p} alt="p" style={{width:"40px",
                  height:"40px"}}/></Link>
                <Link to={"https://twitter.com/builders_smarch"}> <img src={twi} alt="twi" style={{width:"40px",
                  height: "40px"}}/></Link>
               </div>
            </div>
            </footer>
            </div>
    )
}

export default Footer


