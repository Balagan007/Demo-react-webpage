import { useState, useEffect, React, } from "react";
import { useNavigate } from 'react-router-dom';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container, Table, Row, Button } from "react-bootstrap";


const Wishlist = () => {
    const [mycart, setMycart] = useState([]);
    const [total, setTotal] = useState(0);
    const [add, setAdd] = useState([]);
    const [material, setMaterial] = useState(0);
    const [count, setCount] = useState(1);
    const navigate = useNavigate();


    let price = 0;
    let amount = 0;

    useEffect(() => {
        const select = JSON.parse(sessionStorage.getItem('addcart'));
        setMycart(select);

        select?.map((value) => {
            price += parseInt(value.price)

        })
        // setTotal(price);

    }, [])

    useEffect(() => {
        sessionStorage.setItem("addcart", JSON.stringify(mycart));
        mycart?.map((value) => {
            let addprice = parseInt(value.price) * (value.Qty)
            price += addprice

            amount = addprice;
            console.log(amount);

        })

        setTotal(price);
        setAdd(amount);
        // console.log(total);
    }, [mycart])

    const toRemove = (value) => {
        let cancel = mycart.filter((val) => {
            return val.title != value.title;
        })
        setMycart(cancel);
    }


    // const toRemove=(value)=>{
    //  var del=list.findIndex(({title})=>title===value.title);
    //  if(del!==-1){
    //     list.splice(del,1);
    //     sessionStorage.setItem("purchaseitems",JSON.stringify(list));

    //  }
    // }


    const toIncreament = (value) => {

        let plus = mycart.filter((val) => {
            if (val.title === value.title) {
                val.Qty = val.Qty + 1;
            }
            return val;
        })
        setMycart(plus);

    }

    const toDecreament = (value) => {
        if (value.Qty > 1) {
            let minus = mycart.filter((val) => {
                if (val.title === value.title) {
                    val.Qty = val.Qty - 1;
                }
                return val;
            })
            setMycart(minus);
        }
    }

    const toOrder = () => {
        navigate('/Thanks')
    }

    return (

        <div className="row">
            <div className="col-7" style={{ marginTop: "100px" }}>
                <div className="col-4">
                    <h1>Total:{total}</h1>
                    <h1>Item:{mycart.length}</h1>
                </div>

                {
                    mycart.length > 0 ? (mycart.map((value, index) =>
                        <>
                            <div className="row" style={{ paddingTop: "90px" }} key={index}>
                                <div className="col-4">
                                    <img alt="image" style={{ width: "80%" }} src={value.img} />
                                </div>
                                <div className="col-8">
                                    <p style={{ fontWeight: "bold", color: "red", fontSize: "22px" }}>{value.title}</p>
                                    <p style={{ fontWeight: "bold", color: "black", fontSize: "22px" }}>₹{value.price}</p>
                                    {/* <p>{value.rate}</p> */}
                                    <div className="col-md-12">
                                        <button className='btn' onClick={(e) => toRemove(value)} style={{ color: "white", backgroundColor: "crimson", marginLeft: "250px" }}>Remove</button>

                                    </div>

                                </div>
                            </div>
                        </>
                    ))
                        : (

                            <div>No item has been added in the cart!!</div>
                        )
                }
            </div>
            <div className="col-5" style={{ marginTop: "100px" }}>
                <table style={{ width: "100%", fontSize: "20px", fontWeight: "bolt" }}>

                    <tr>
                        {/* <th>Product Img</th> */}
                        <th>S.no</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Sub Total</th>
                        {/* <th>Action</th> */}
                    </tr>

                    {
                        mycart.map((value, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{value.title}</td>
                                <td>{value.price}</td>
                                <td>
                                    <div className="qty">
                                        <button className='btn' style={{ backgroundColor: "green", color: "white" }} onClick={(e) => toIncreament(value)}>+</button>
                                        <p>{value.Qty}</p>
                                        {
                                            value.Qty === 1 ?
                                                <button disabled className='btn' style={{ backgroundColor: "red", color: "white" }} onClick={(e) => toDecreament(value)}>-</button>
                                                :
                                                <button className='btn' style={{ backgroundColor: "red", color: "white" }} onClick={(e) => toDecreament(value)}>-</button>
                                        }
                                    </div>
                                </td>
                                <td>{value.price * value.Qty}</td>
                            </tr>
                        ))}

                </table>
                <div className="order" style={{ marginTop: "50px", margineLeft: "200px" }}>
                    <button className="btn" style={{ color: "white", backgroundColor: "green" }} onClick={(e) => toOrder()}> Buy Now</button>
                </div>
            </div>
        </div>



    );
}

export default Wishlist