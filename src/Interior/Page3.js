import land from '../Asset/Image/land.jpg';
import celing from '../Asset/Image/celing.jpg';
import kitchen from '../Asset/Image/kitchen.jpg';


function Page3(){
    return(
        <>
        <div className="image" style={{marginTop:"70px"}}>
             <img src={land} alt="land" style={{width:"25%",height:"320px",marginInline:"85px"}}/>
            <img src={celing} alt="celing" style={{width:"25%",height:"320px"}}/>
            <img src={kitchen} alt="kitchen" style={{width:"25%",height:"320px",marginLeft:"85px"}}/>

            </div>
            </>
    )
}

export default Page3