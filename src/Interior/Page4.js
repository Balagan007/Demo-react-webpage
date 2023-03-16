import com from '../Asset/Image/com.jpg';
import res from '../Asset/Image/res.jpg';
import land from '../Asset/Image/land.jpg';

function Page4(){
    return(
        <>
        <div className="image" style={{marginTop:"70px",marginBottom:"70px"}}>
        <img src={com} alt="com" style={{width:"25%",height:"320px",marginInline:"85px"}}/>
            <img src={res} alt="resi" style={{width:"25%",height:"320px"}}/>
           <img src={land} alt="bulue" style={{width:"25%",height:"320px",marginLeft:"85px"}}/>
          </div>
          </>
    )
}

export default Page4
