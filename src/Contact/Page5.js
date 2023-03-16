import loc from '../Asset/Image/loc.jpg';
import pho from '../Asset/Image/pho.jpg';
import mail from '../Asset/Image/mail.jpg';

function Page5(){
    return(
        <>
        <div class="row5" style={{padding:"100px",marginLeft:"260px"}}>
        <h2 style={{marginLeft:"190px",marginTop:"-10px",color:"red",fontWeight:"bold"}}>Office Address</h2>
        <div className="line3">
    
    <div className="row6" style={{display:"flex",padding:"33.33px"}}>
    <div className="sline1">
      <img src={loc} alt="loc" style={{width:"25px",height:"40px",paddingTop:"16px"}}/><br/><br/><br/>
      <img src={pho} alt="pho" style={{width:"25px",height:"25px",paddingTop:"10px"}}/><br/><br/>
      <img src={mail} alt="mail" style={{width:"25px",height:"20px",paddingTop:"5px"}}/>
      </div>
      </div>
      </div>
      </div>
       </>
      )
    
}

export default Page5